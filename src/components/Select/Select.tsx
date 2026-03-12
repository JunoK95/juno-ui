import type { CSSProperties, SelectHTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";

export type SelectSize = "sm" | "md" | "lg";
export type SelectIntent = "default" | "danger" | "success" | "warning";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "multiple"
> {
  size?: SelectSize;
  intent?: SelectIntent;
  label?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
  style?: CSSProperties;
  // Multi-select
  multiple?: boolean;
  multiValue?: string[];
  onMultiChange?: (values: string[]) => void;
}

const intentClass: Record<SelectIntent, string> = {
  default: styles.intentDefault,
  danger: styles.intentDanger,
  success: styles.intentSuccess,
  warning: styles.intentWarning,
};

// ─── Single select ────────────────────────────────────────────────────────────

function SingleSelect({
  size = "md",
  id,
  options,
  placeholder,
  disabled,
  ...props
}: Omit<
  SelectProps,
  | "intent"
  | "label"
  | "hint"
  | "multiple"
  | "multiValue"
  | "onMultiChange"
  | "style"
  | "className"
>) {
  return (
    <div className={styles.selectWrap}>
      <select
        id={id}
        className={[styles.select, styles[size]].join(" ")}
        disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <svg
        className={styles.arrow}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ─── Multi select ─────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1.5,5 4,7.5 8.5,2.5" />
  </svg>
);

function MultiSelect({
  size = "md",
  id,
  options,
  placeholder = "Select options…",
  multiValue = [],
  onMultiChange,
  disabled,
}: Pick<
  SelectProps,
  | "size"
  | "id"
  | "options"
  | "placeholder"
  | "multiValue"
  | "onMultiChange"
  | "disabled"
>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onMousedown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", onMousedown);
    return () => document.removeEventListener("mousedown", onMousedown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open]);

  function toggle(value: string) {
    if (!onMultiChange) return;
    onMultiChange(
      multiValue.includes(value)
        ? multiValue.filter((v) => v !== value)
        : [...multiValue, value],
    );
  }

  function toggleAll() {
    if (!onMultiChange) return;
    onMultiChange(
      multiValue.length === options.length ? [] : options.map((o) => o.value),
    );
  }

  const allSelected = multiValue.length === options.length;
  const someSelected =
    multiValue.length > 0 && multiValue.length < options.length;

  // Trigger content: chips or summary
  const MAX_CHIPS = 3;
  const shownChips = multiValue.slice(0, MAX_CHIPS);
  const extraCount = multiValue.length - MAX_CHIPS;

  return (
    <div ref={ref} className={styles.multiWrap} id={id}>
      <button
        type="button"
        className={[
          styles.multiTrigger,
          styles[size],
          open && styles.multiTriggerOpen,
          disabled && styles.multiDisabled,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.multiTriggerContent}>
          {multiValue.length === 0 ? (
            <span className={styles.multiPlaceholder}>{placeholder}</span>
          ) : (
            <>
              {shownChips.map((v) => {
                const opt = options.find((o) => o.value === v);
                return opt ? (
                  <span key={v} className={styles.chip}>
                    {opt.label}
                  </span>
                ) : null;
              })}
              {extraCount > 0 && (
                <span className={styles.chipCount}>+{extraCount} more</span>
              )}
            </>
          )}
        </span>
        <svg
          className={[styles.multiArrow, open && styles.multiArrowOpen]
            .filter(Boolean)
            .join(" ")}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className={styles.multiMenu}
          role="listbox"
          aria-multiselectable="true"
        >
          {/* Select all row */}
          <button
            type="button"
            className={styles.multiOption}
            onClick={toggleAll}
          >
            <span
              className={[
                styles.checkBox,
                (allSelected || someSelected) && styles.checkBoxChecked,
                someSelected && styles.checkBoxIndeterminate,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {someSelected ? (
                <span className={styles.indeterminateDash} />
              ) : allSelected ? (
                <CheckIcon />
              ) : null}
            </span>
            <span className={styles.multiOptionLabel}>Select all</span>
          </button>
          <div className={styles.multiDivider} />

          {options.map((opt) => {
            const checked = multiValue.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                className={styles.multiOption}
                onClick={() => toggle(opt.value)}
                role="option"
                aria-selected={checked}
              >
                <span
                  className={[
                    styles.checkBox,
                    checked && styles.checkBoxChecked,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {checked && <CheckIcon />}
                </span>
                <span className={styles.multiOptionLabel}>{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

export function Select({
  size = "md",
  intent = "default",
  label,
  hint,
  multiple,
  multiValue,
  onMultiChange,
  id,
  options,
  placeholder,
  className,
  style,
  disabled,
  ...props
}: SelectProps) {
  const selectId =
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div
      className={[styles.wrapper, intentClass[intent], className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {label && (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      )}

      {multiple ? (
        <MultiSelect
          size={size}
          id={selectId}
          options={options}
          placeholder={placeholder}
          multiValue={multiValue}
          onMultiChange={onMultiChange}
          disabled={disabled}
        />
      ) : (
        <SingleSelect
          size={size}
          id={selectId}
          options={options}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      )}

      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
