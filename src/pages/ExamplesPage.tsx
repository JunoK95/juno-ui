import { useState } from "react";
import {
  Button,
  Input,
  Select,
  Checkbox,
  Switch,
  Textbox,
  Card,
  CardHeader,
  CardBody,
  Separator,
  Avatar,
  Badge,
  Tag,
  Alert,
  Accordion,
  Stepper,
  Progress,
  Slider,
  Dropdown,
  Toast,
  Tabs,
  Modal,
  Spinner,
  Tooltip,
  Calendar,
  DatePicker,
  Pagination,
  Drawer,
  Breadcrumb,
  Collapsible,
} from "../index";
import { PageHeader } from "../layout/PageHeader";
import s from "../App.module.scss";

// ─── Icons ────────────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <polyline points="1,3 8,9.5 15,3" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="7" width="10" height="8" rx="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.3 1.7 6.8 1 8c1.4 2.5 4 5 7 5 1.3 0 2.5-.4 3.5-1M7 3.1C7.3 3 7.7 3 8 3c3 0 5.6 2.5 7 5-.4.8-1 1.6-1.7 2.2" />
  </svg>
);

const CardIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <line x1="1" y1="7" x2="15" y2="7" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="5" r="3" />
    <path d="M1.5 14c0-3.038 2.91-5.5 6.5-5.5s6.5 2.462 6.5 5.5" />
  </svg>
);

const DotsIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="3" r="1.2" />
    <circle cx="8" cy="8" r="1.2" />
    <circle cx="8" cy="13" r="1.2" />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="1" width="9" height="11" rx="1.5" />
    <path d="M2 5H1.5A1.5 1.5 0 0 0 0 6.5v8A1.5 1.5 0 0 0 1.5 16h8A1.5 1.5 0 0 0 11 14.5V14" />
  </svg>
);

// ─── Shared helpers ───────────────────────────────────────────────────────────

const row2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};
const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

function ExampleCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <Card variant="outline">
      <CardHeader>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--color-text)",
          }}
        >
          {title}
        </p>
        <p
          style={{ margin: 0, fontSize: 12, color: "var(--color-text-muted)" }}
        >
          {desc}
        </p>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

// ─── Examples ─────────────────────────────────────────────────────────────────

function SignInExample() {
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <ExampleCard
      title="Sign in"
      desc="User authentication with email and password."
    >
      <div style={form}>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          iconLeft={<MailIcon />}
        />
        <Input
          label="Password"
          type={showPw ? "text" : "password"}
          placeholder="••••••••"
          iconLeft={<LockIcon />}
          iconRight={showPw ? <EyeOffIcon /> : <EyeIcon />}
          onClickIconRight={() => setShowPw((v) => !v)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <a
            href="#"
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            Forgot password?
          </a>
        </div>
        <Button intent="primary" style={{ width: "100%" }}>
          Sign in
        </Button>
        <Separator label="or" />
        <Button variant="outline" style={{ width: "100%" }}>
          Continue with Google
        </Button>
      </div>
    </ExampleCard>
  );
}

function CheckoutExample() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "gb", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ];

  return (
    <ExampleCard
      title="Payment"
      desc="Checkout form for collecting card details."
    >
      <div style={form}>
        <Input
          label="Cardholder name"
          placeholder="Jane Smith"
          iconLeft={<UserIcon />}
        />
        <Input
          label="Card number"
          placeholder="1234 5678 9012 3456"
          iconLeft={<CardIcon />}
        />
        <div style={row2}>
          <Input label="Expiry" placeholder="MM / YY" />
          <Input label="CVV" placeholder="···" />
        </div>
        <Select
          label="Country"
          options={countries}
          placeholder="Select country"
        />
        <Button intent="primary" style={{ width: "100%" }}>
          Pay now
        </Button>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: "var(--color-text-muted)",
            textAlign: "center",
          }}
        >
          Your payment is encrypted and secure.
        </p>
      </div>
    </ExampleCard>
  );
}

function ContactExample() {
  const [message, setMessage] = useState("");

  const subjects = [
    { value: "general", label: "General enquiry" },
    { value: "support", label: "Technical support" },
    { value: "billing", label: "Billing" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  return (
    <ExampleCard
      title="Contact"
      desc="Support or feedback form with validation intents."
    >
      <div style={form}>
        <div style={row2}>
          <Input label="Name" placeholder="Jane Smith" />
          <Input label="Email" type="email" placeholder="you@example.com" />
        </div>
        <Select
          label="Subject"
          options={subjects}
          placeholder="Choose a topic"
        />
        <Textbox
          label="Message"
          placeholder="How can we help?"
          rows={4}
          maxLength={500}
          showCount
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button intent="primary" style={{ width: "100%" }}>
          Send message
        </Button>
      </div>
    </ExampleCard>
  );
}

function ProfileExample() {
  const [bio, setBio] = useState("");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [marketingNotifs, setMarketingNotifs] = useState(false);

  return (
    <ExampleCard
      title="Profile settings"
      desc="Account details with preferences and notifications."
    >
      <div style={form}>
        <div style={row2}>
          <Input label="First name" placeholder="Jane" />
          <Input label="Last name" placeholder="Smith" />
        </div>
        <Input
          label="Username"
          placeholder="janesmith"
          iconLeft={
            <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              @
            </span>
          }
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          iconLeft={<MailIcon />}
        />
        <Textbox
          label="Bio"
          hint="A short bio shown on your public profile."
          placeholder="Tell us about yourself…"
          rows={3}
          maxLength={200}
          showCount
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Separator />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-text)",
            }}
          >
            Notifications
          </p>
          <Switch
            label="Email notifications"
            intent="primary"
            checked={emailNotifs}
            onChange={(e) => setEmailNotifs(e.target.checked)}
          />
          <Switch
            label="Marketing emails"
            checked={marketingNotifs}
            onChange={(e) => setMarketingNotifs(e.target.checked)}
          />
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button variant="outline">Cancel</Button>
          <Button intent="primary">Save changes</Button>
        </div>
      </div>
    </ExampleCard>
  );
}

// ─── Team members ─────────────────────────────────────────────────────────────

type MemberRole = "Admin" | "Member" | "Viewer";

const initialMembers: {
  name: string;
  email: string;
  role: MemberRole;
  dept: string;
  status: "online" | "offline" | "away";
}[] = [
  {
    name: "Alice Chen",
    email: "alice@example.com",
    role: "Admin",
    dept: "Engineering",
    status: "online",
  },
  {
    name: "Marcus Webb",
    email: "marcus@example.com",
    role: "Member",
    dept: "Design",
    status: "away",
  },
  {
    name: "Sofia Park",
    email: "sofia@example.com",
    role: "Member",
    dept: "Marketing",
    status: "online",
  },
  {
    name: "Liam Torres",
    email: "liam@example.com",
    role: "Viewer",
    dept: "Sales",
    status: "offline",
  },
];

const roleBadgeIntent: Record<MemberRole, "primary" | "default" | "warning"> = {
  Admin: "primary",
  Member: "default",
  Viewer: "warning",
};

function TeamExample() {
  const [members, setMembers] = useState(initialMembers);

  return (
    <ExampleCard
      title="Team members"
      desc="Manage access with roles, departments, and member actions."
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {members.map((m, i) => (
          <div
            key={m.email}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 0",
              borderBottom:
                i < members.length - 1
                  ? "1px solid var(--color-border)"
                  : undefined,
            }}
          >
            <Avatar name={m.name} size="sm" status={m.status} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--color-text)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {m.name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  color: "var(--color-text-muted)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {m.email}
              </p>
            </div>
            <Badge intent={roleBadgeIntent[m.role]} variant="subtle">
              {m.role}
            </Badge>
            <Tag variant="outline">{m.dept}</Tag>
            <Dropdown
              align="end"
              trigger={
                <Button
                  variant="ghost"
                  size="sm"
                  style={{ padding: "4px 7px" }}
                >
                  <DotsIcon />
                </Button>
              }
              items={[
                { label: "Edit member" },
                { label: "Change role" },
                { type: "divider" },
                {
                  label: "Remove",
                  onClick: () =>
                    setMembers((prev) =>
                      prev.filter((x) => x.email !== m.email),
                    ),
                },
              ]}
            />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        style={{ marginTop: 12, width: "100%" }}
      >
        + Invite member
      </Button>
    </ExampleCard>
  );
}

// ─── Setup wizard ─────────────────────────────────────────────────────────────

const wizardSteps = [
  { label: "Workspace", description: "Basic info" },
  { label: "Preferences", description: "Configure" },
  { label: "Complete", description: "Launch" },
];

const industries = [
  { value: "tech", label: "Technology" },
  { value: "design", label: "Design" },
  { value: "finance", label: "Finance" },
  { value: "health", label: "Healthcare" },
  { value: "other", label: "Other" },
];

function WizardExample() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [teamSize, setTeamSize] = useState(12);
  const [storage, setStorage] = useState(50);

  return (
    <ExampleCard
      title="Setup wizard"
      desc="Multi-step onboarding flow using Stepper, Slider, and form fields."
    >
      <Stepper steps={wizardSteps} activeStep={step} />
      <div style={{ marginTop: 20, ...form }}>
        {step === 0 && (
          <>
            <Input
              label="Workspace name"
              placeholder="Acme Corp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              label="Industry"
              options={industries}
              placeholder="Select your industry"
            />
          </>
        )}
        {step === 1 && (
          <>
            <Slider
              label="Team size"
              min={1}
              max={100}
              value={teamSize}
              onChange={setTeamSize}
              showValue
              intent="primary"
            />
            <Slider
              label="Storage quota (GB)"
              min={10}
              max={500}
              step={10}
              value={storage}
              onChange={setStorage}
              showValue
              intent="primary"
            />
          </>
        )}
        {step === 2 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "12px 0",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--color-success-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                stroke="var(--color-success)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="2,8 6,12 14,4" />
              </svg>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--color-text)",
              }}
            >
              You're all set!
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "var(--color-text-muted)",
              }}
            >
              <strong>{name || "My Workspace"}</strong> is ready for {teamSize}{" "}
              members with {storage} GB storage.
            </p>
          </div>
        )}
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          {step > 0 && (
            <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
          )}
          {step < 2 ? (
            <Button intent="primary" onClick={() => setStep((s) => s + 1)}>
              Continue
            </Button>
          ) : (
            <Button intent="primary">Launch workspace</Button>
          )}
        </div>
      </div>
    </ExampleCard>
  );
}

// ─── Usage & limits ───────────────────────────────────────────────────────────

function ResourcesExample() {
  const metrics = [
    { label: "Storage", used: 68, total: "100 GB", intent: "primary" as const },
    {
      label: "Bandwidth",
      used: 42,
      total: "500 GB",
      intent: "default" as const,
    },
    {
      label: "API calls",
      used: 91,
      total: "1M req",
      intent: "danger" as const,
    },
    {
      label: "Members",
      used: 55,
      total: "10 seats",
      intent: "success" as const,
    },
  ];

  return (
    <ExampleCard
      title="Usage & limits"
      desc="Current plan consumption with intent-coded progress bars."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--color-text)",
                }}
              >
                {m.label}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{ fontSize: 11, color: "var(--color-text-muted)" }}
                >
                  {m.used}% of {m.total}
                </span>
                {m.used > 80 && (
                  <Badge intent="danger" variant="subtle">
                    Critical
                  </Badge>
                )}
              </div>
            </div>
            <Progress value={m.used} intent={m.intent} size="sm" />
          </div>
        ))}
        <Separator />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            Resets Apr 1, 2026
          </span>
          <Button variant="outline" size="sm">
            Upgrade plan
          </Button>
        </div>
      </div>
    </ExampleCard>
  );
}

// ─── System alerts ────────────────────────────────────────────────────────────

function AlertsExample() {
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());

  const alerts = [
    {
      id: 0,
      intent: "success" as const,
      title: "Deployment complete",
      body: "v2.4.1 deployed to production successfully.",
    },
    {
      id: 1,
      intent: "warning" as const,
      title: "High memory usage",
      body: "API server at 91% memory. Consider scaling up.",
    },
    {
      id: 2,
      intent: "danger" as const,
      title: "Payment webhook failed",
      body: "Stripe webhook returned 500 three times in a row.",
    },
    {
      id: 3,
      intent: "default" as const,
      title: "New region available",
      body: "You can now deploy workloads to eu-west-2.",
    },
  ];

  const visible = alerts.filter((a) => !dismissed.has(a.id));

  return (
    <ExampleCard
      title="System alerts"
      desc="Dismissable alerts for events across different priority levels."
    >
      {visible.length === 0 ? (
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "var(--color-text-muted)",
            textAlign: "center",
            padding: "16px 0",
          }}
        >
          All clear — no active alerts.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {visible.map((a) => (
            <Alert
              key={a.id}
              intent={a.intent}
              title={a.title}
              onDismiss={() => setDismissed((prev) => new Set([...prev, a.id]))}
            >
              {a.body}
            </Alert>
          ))}
        </div>
      )}
      {dismissed.size > 0 && (
        <Button
          variant="ghost"
          size="sm"
          style={{
            marginTop: 8,
            width: "100%",
            color: "var(--color-text-muted)",
          }}
          onClick={() => setDismissed(new Set())}
        >
          Restore {dismissed.size} dismissed
        </Button>
      )}
    </ExampleCard>
  );
}

// ─── Notifications ────────────────────────────────────────────────────────────

function NotificationsExample() {
  const [dismissed, setDismissed] = useState<Set<number>>(new Set());

  const items = [
    {
      id: 0,
      intent: "success" as const,
      title: "File uploaded",
      description: "report-q4.pdf uploaded successfully.",
    },
    {
      id: 1,
      intent: "warning" as const,
      title: "Storage almost full",
      description: "You have used 92% of your storage quota.",
    },
    {
      id: 2,
      intent: "danger" as const,
      title: "Build failed",
      description: "main — 3 errors in pipeline step 2.",
    },
    {
      id: 3,
      intent: "default" as const,
      title: "Sofia left a comment",
      description: '"Looking good, just one quick question…"',
    },
  ];

  const visible = items.filter((n) => !dismissed.has(n.id));

  return (
    <ExampleCard
      title="Notifications"
      desc="Toast notifications for different event types with dismiss support."
    >
      {visible.length === 0 ? (
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "var(--color-text-muted)",
            textAlign: "center",
            padding: "16px 0",
          }}
        >
          No new notifications.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {visible.map((n) => (
            <Toast
              key={n.id}
              intent={n.intent}
              title={n.title}
              description={n.description}
              onDismiss={() => setDismissed((prev) => new Set([...prev, n.id]))}
            />
          ))}
        </div>
      )}
      {dismissed.size > 0 && (
        <Button
          variant="ghost"
          size="sm"
          style={{
            marginTop: 8,
            width: "100%",
            color: "var(--color-text-muted)",
          }}
          onClick={() => setDismissed(new Set())}
        >
          Restore {dismissed.size} dismissed
        </Button>
      )}
    </ExampleCard>
  );
}

// ─── Dashboard tabs ────────────────────────────────────────────────────────────

function DashboardTabsExample() {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "transactions", label: "Transactions" },
    { value: "settings", label: "Settings" },
  ];

  const transactions = [
    {
      id: 1,
      desc: "Stripe payment",
      amount: "+$240.00",
      intent: "success" as const,
      label: "Paid",
    },
    {
      id: 2,
      desc: "AWS monthly bill",
      amount: "-$89.12",
      intent: "default" as const,
      label: "Charged",
    },
    {
      id: 3,
      desc: "Refund — order #8",
      amount: "+$19.99",
      intent: "warning" as const,
      label: "Refunded",
    },
    {
      id: 4,
      desc: "Subscription fee",
      amount: "-$49.00",
      intent: "default" as const,
      label: "Charged",
    },
  ];

  const [pushNotifs, setPushNotifs] = useState(true);
  const [digest, setDigest] = useState(false);
  const [autoRenew, setAutoRenew] = useState(true);

  return (
    <ExampleCard
      title="Dashboard"
      desc="Tabbed layout for overview, transactions, and account settings."
    >
      <Tabs items={tabs} value={tab} onChange={setTab} />
      <div style={{ marginTop: 16 }}>
        {tab === "overview" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
            }}
          >
            {[
              {
                label: "Revenue",
                value: "$12,480",
                intent: "success" as const,
                delta: "+8%",
              },
              {
                label: "Users",
                value: "1,204",
                intent: "primary" as const,
                delta: "+14%",
              },
              {
                label: "Conversion",
                value: "3.6%",
                intent: "warning" as const,
                delta: "-2%",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--color-subtle)",
                  borderRadius: 8,
                  padding: "12px 14px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: 11,
                    color: "var(--color-text-muted)",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  {stat.value}
                </p>
                <Badge intent={stat.intent} variant="subtle">
                  {stat.delta}
                </Badge>
              </div>
            ))}
          </div>
        )}
        {tab === "transactions" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {transactions.map((t, i) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 0",
                  borderBottom:
                    i < transactions.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <span style={{ fontSize: 13, color: "var(--color-text)" }}>
                  {t.desc}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Badge intent={t.intent} variant="subtle">
                    {t.label}
                  </Badge>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--color-text)",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    {t.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "settings" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Switch
              label="Push notifications"
              intent="primary"
              checked={pushNotifs}
              onChange={(e) => setPushNotifs(e.target.checked)}
            />
            <Switch
              label="Weekly digest email"
              checked={digest}
              onChange={(e) => setDigest(e.target.checked)}
            />
            <Switch
              label="Auto-renew subscription"
              checked={autoRenew}
              onChange={(e) => setAutoRenew(e.target.checked)}
            />
            <Button
              intent="primary"
              size="sm"
              style={{ alignSelf: "flex-start", marginTop: 4 }}
            >
              Save settings
            </Button>
          </div>
        )}
      </div>
    </ExampleCard>
  );
}

// ─── Confirm modal ─────────────────────────────────────────────────────────────

function ConfirmModalExample() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function handleConfirm() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setOpen(false);
    }, 1500);
  }

  return (
    <ExampleCard
      title="Confirm dialog"
      desc="Modal with inline alert, async loading state, and tooltip on trigger."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {done && (
          <Alert
            intent="success"
            title="Workspace deleted"
            onDismiss={() => setDone(false)}
          >
            The workspace has been permanently removed.
          </Alert>
        )}
        <Tooltip
          content="Permanently delete this workspace and all its data"
          side="top"
        >
          <Button
            intent="danger"
            onClick={() => {
              setDone(false);
              setOpen(true);
            }}
            style={{ width: "100%" }}
          >
            Delete workspace
          </Button>
        </Tooltip>
        <Button variant="outline" style={{ width: "100%" }}>
          Archive workspace
        </Button>
      </div>
      <Modal
        open={open}
        onClose={() => {
          if (!loading) setOpen(false);
        }}
        title="Delete workspace"
        size="sm"
        footer={
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button intent="danger" onClick={handleConfirm} disabled={loading}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Spinner size="sm" /> Deleting…
                </span>
              ) : (
                "Delete workspace"
              )}
            </Button>
          </div>
        }
      >
        <Alert intent="danger" title="This action cannot be undone">
          All projects, files, and members will be permanently deleted.
        </Alert>
      </Modal>
    </ExampleCard>
  );
}

// ─── Scheduling ────────────────────────────────────────────────────────────────

function SchedulingExample() {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  });
  const [startTime, setStartTime] = useState<Date | null>(null);

  const nights =
    range.from && range.to
      ? Math.round(
          Math.abs(range.to.getTime() - range.from.getTime()) / 86_400_000,
        )
      : null;

  return (
    <ExampleCard
      title="Date range"
      desc="Inline calendar range picker combined with a datetime picker."
    >
      <div style={form}>
        <Calendar mode="range" rangeValue={range} onRangeChange={setRange} />
        <DatePicker
          label="Check-in time"
          mode="datetime"
          value={startTime}
          onChange={setStartTime}
          placeholder="Pick date & time"
        />
        {nights !== null && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Badge intent="primary" variant="subtle">
              {nights} night{nights !== 1 ? "s" : ""}
            </Badge>
            <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
              selected
            </span>
          </div>
        )}
        <Button
          intent="primary"
          style={{ width: "100%" }}
          disabled={!range.from || !range.to}
        >
          Reserve
        </Button>
      </div>
    </ExampleCard>
  );
}

// ─── Inbox ────────────────────────────────────────────────────────────────────

const allMessages = [
  {
    id: 1,
    name: "Alice Chen",
    subject: "Q4 planning meeting",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "Marcus Webb",
    subject: "Design review feedback",
    time: "14m ago",
    unread: true,
  },
  {
    id: 3,
    name: "Sofia Park",
    subject: "Re: Marketing campaign",
    time: "1h ago",
    unread: false,
  },
  {
    id: 4,
    name: "Liam Torres",
    subject: "Sales report — October",
    time: "2h ago",
    unread: false,
  },
  {
    id: 5,
    name: "Alice Chen",
    subject: "Follow-up on proposal",
    time: "3h ago",
    unread: false,
  },
  {
    id: 6,
    name: "Dev Team",
    subject: "Build failed on staging",
    time: "5h ago",
    unread: true,
  },
  {
    id: 7,
    name: "Marcus Webb",
    subject: "Component library update",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 8,
    name: "Sofia Park",
    subject: "New feature request #812",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 9,
    name: "Support",
    subject: "Ticket #4821 resolved",
    time: "2d ago",
    unread: false,
  },
  {
    id: 10,
    name: "Liam Torres",
    subject: "Contract renewal — Nov",
    time: "2d ago",
    unread: false,
  },
  {
    id: 11,
    name: "Alice Chen",
    subject: "Catch up next week?",
    time: "3d ago",
    unread: false,
  },
  {
    id: 12,
    name: "Dev Team",
    subject: "Deployment to prod — done",
    time: "3d ago",
    unread: false,
  },
];

const MESSAGES_PER_PAGE = 4;

function InboxExample() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allMessages.length / MESSAGES_PER_PAGE);
  const pageItems = allMessages.slice(
    (page - 1) * MESSAGES_PER_PAGE,
    page * MESSAGES_PER_PAGE,
  );

  return (
    <ExampleCard
      title="Inbox"
      desc="Paginated message list with unread state and avatar initials."
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {pageItems.map((msg, i) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 0",
              borderBottom:
                i < pageItems.length - 1
                  ? "1px solid var(--color-border)"
                  : undefined,
            }}
          >
            <Avatar name={msg.name} size="sm" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  fontWeight: msg.unread ? 600 : 400,
                  color: "var(--color-text)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {msg.name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  color: "var(--color-text-muted)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {msg.subject}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 3,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 10, color: "var(--color-text-muted)" }}>
                {msg.time}
              </span>
              {msg.unread && (
                <Badge
                  intent="primary"
                  variant="solid"
                  style={{ fontSize: 9, padding: "1px 5px" }}
                >
                  New
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </ExampleCard>
  );
}

// ─── Cart drawer ───────────────────────────────────────────────────────────────

const cartItems = [
  { name: "Pro plan — monthly", price: "$49.00" },
  { name: "Extra storage (50 GB)", price: "$9.00" },
  { name: "Add-on seats (×3)", price: "$21.00" },
];

function CartDrawerExample() {
  const [open, setOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  const subtotal = "$79.00";
  const discount = applied ? "-$7.90" : null;
  const total = applied ? "$71.10" : "$79.00";

  return (
    <ExampleCard
      title="Cart drawer"
      desc="Right-side slide-in panel for a shopping cart summary."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            3 items in your cart
          </span>
          <Badge intent="primary" variant="subtle">
            Pro
          </Badge>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "var(--color-text-muted)",
            }}
          >
            <span>{item.name}</span>
            <span style={{ fontFamily: "ui-monospace, monospace" }}>
              {item.price}
            </span>
          </div>
        ))}
        <Separator />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--color-text)",
          }}
        >
          <span>Total</span>
          <span style={{ fontFamily: "ui-monospace, monospace" }}>
            {subtotal}
          </span>
        </div>
        <Button
          intent="primary"
          style={{ width: "100%", marginTop: 4 }}
          onClick={() => setOpen(true)}
        >
          Review & checkout
        </Button>
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Order summary"
        position="right"
        size="sm"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {cartItems.map((item, i) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom:
                  i < cartItems.length - 1
                    ? "1px solid var(--color-border)"
                    : undefined,
              }}
            >
              <span style={{ fontSize: 13, color: "var(--color-text)" }}>
                {item.name}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: "ui-monospace, monospace",
                  color: "var(--color-text)",
                }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <Input
            placeholder="Coupon code"
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value);
              setApplied(false);
            }}
          />
          <Button
            variant="outline"
            onClick={() => {
              if (coupon) setApplied(true);
            }}
          >
            Apply
          </Button>
        </div>
        <div style={{ margin: "16px 0" }}>
          <Separator />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "var(--color-text-muted)",
            }}
          >
            <span>Subtotal</span>
            <span style={{ fontFamily: "ui-monospace, monospace" }}>
              {subtotal}
            </span>
          </div>
          {discount && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "var(--color-success)",
              }}
            >
              <span>Discount (10%)</span>
              <span style={{ fontFamily: "ui-monospace, monospace" }}>
                {discount}
              </span>
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--color-text)",
            }}
          >
            <span>Total</span>
            <span style={{ fontFamily: "ui-monospace, monospace" }}>
              {total}
            </span>
          </div>
        </div>
        <Button intent="primary" style={{ width: "100%", marginTop: 20 }}>
          Pay {total}
        </Button>
      </Drawer>
    </ExampleCard>
  );
}

// ─── Security settings ────────────────────────────────────────────────────────

function SecuritySettingsExample() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessions, setSessions] = useState(true);
  const [copied, setCopied] = useState(false);

  const apiKey = "sk-••••••••••••••••••••4a2f";

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <ExampleCard
      title="Security settings"
      desc="Collapsible sections with Breadcrumb for navigation context."
    >
      <Breadcrumb
        items={[
          { label: "Settings" },
          { label: "Account" },
          { label: "Security" },
        ]}
      />
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
        <Collapsible
          defaultOpen
          trigger={
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-text)",
              }}
            >
              Password
            </span>
          }
        >
          <div style={{ ...form, padding: "12px 0 4px" }}>
            <Input
              label="Current password"
              type="password"
              placeholder="••••••••"
            />
            <div style={row2}>
              <Input
                label="New password"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Confirm password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <Button
              intent="primary"
              size="sm"
              style={{ alignSelf: "flex-start" }}
            >
              Update password
            </Button>
          </div>
        </Collapsible>
        <Separator />
        <Collapsible
          trigger={
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-text)",
              }}
            >
              Two-factor authentication
            </span>
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "12px 0 4px",
            }}
          >
            <Switch
              label="Enable 2FA"
              intent="primary"
              checked={twoFactor}
              onChange={(e) => setTwoFactor(e.target.checked)}
            />
            <Switch
              label="Require on new sessions"
              checked={sessions}
              onChange={(e) => setSessions(e.target.checked)}
            />
          </div>
        </Collapsible>
        <Separator />
        <Collapsible
          trigger={
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-text)",
              }}
            >
              API access
            </span>
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "12px 0 4px",
            }}
          >
            <Input
              label="API key"
              value={apiKey}
              readOnly
              iconRight={
                <Tooltip content={copied ? "Copied!" : "Copy key"} side="top">
                  <CopyIcon />
                </Tooltip>
              }
              onClickIconRight={handleCopy}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
              <Button variant="ghost" size="sm" intent="danger">
                Revoke
              </Button>
            </div>
          </div>
        </Collapsible>
      </div>
    </ExampleCard>
  );
}

// ─── Text editor ─────────────────────────────────────────────────────────────

const blockOptions = [
  { value: "paragraph", label: "Paragraph" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "quote", label: "Blockquote" },
  { value: "code", label: "Code block" },
];

function ToolbarBtn({
  active,
  title,
  onClick,
  children,
}: {
  active?: boolean;
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant={active ? "outline" : "ghost"}
      size="sm"
      title={title}
      onClick={onClick}
      style={{ padding: "4px 7px", minWidth: 28 }}
    >
      {children}
    </Button>
  );
}

const LIST_PREFIX = { ul: "• ", ol: (n: number) => `${n}. ` };

function stripListPrefix(line: string) {
  return line.replace(/^•\s/, "").replace(/^\d+\.\s/, "");
}

function TextEditorExample() {
  const [block, setBlock] = useState("paragraph");
  const [content, setContent] = useState("");
  const [formats, setFormats] = useState<Set<string>>(new Set());
  const [align, setAlign] = useState("left");

  function toggleFormat(f: string) {
    setFormats((prev) => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      return next;
    });
  }

  function toggleList(type: "ul" | "ol") {
    const other = type === "ul" ? "ol" : "ul";
    const isActive = formats.has(type);

    setFormats((prev) => {
      const next = new Set(prev);
      next.delete(other);
      if (isActive) next.delete(type);
      else next.add(type);
      return next;
    });

    setContent((prev) => {
      const lines = prev ? prev.split("\n") : [""];
      const stripped = lines.map(stripListPrefix);
      if (isActive) return stripped.join("\n");
      if (type === "ul")
        return stripped.map((l) => `${LIST_PREFIX.ul}${l}`).join("\n");
      return stripped.map((l, i) => `${LIST_PREFIX.ol(i + 1)}${l}`).join("\n");
    });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key !== "Enter") return;
    const active = formats.has("ul") ? "ul" : formats.has("ol") ? "ol" : null;
    if (!active) return;
    e.preventDefault();
    const el = e.currentTarget;
    const { selectionStart, selectionEnd, value } = el;
    const linesBefore = value.substring(0, selectionStart).split("\n");
    const prefix =
      active === "ul" ? LIST_PREFIX.ul : LIST_PREFIX.ol(linesBefore.length + 1);
    const insert = "\n" + prefix;
    const next =
      value.substring(0, selectionStart) +
      insert +
      value.substring(selectionEnd);
    setContent(next);
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = selectionStart + insert.length;
    });
  }

  const words = content.trim() ? content.trim().split(/\s+/).length : 0;

  return (
    <ExampleCard
      title="Text editor"
      desc="Document editing toolbar using Button, Select, Separator, and Textbox."
    >
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          marginBottom: 8,
        }}
      >
        <Select
          options={blockOptions}
          size="sm"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
          style={{ width: 128 }}
        />

        <div
          style={{
            width: 1,
            height: 24,
            background: "var(--color-border)",
            margin: "0 2px",
            flexShrink: 0,
          }}
        />

        <ToolbarBtn
          active={formats.has("bold")}
          title="Bold"
          onClick={() => toggleFormat("bold")}
        >
          <strong style={{ fontSize: 13 }}>B</strong>
        </ToolbarBtn>
        <ToolbarBtn
          active={formats.has("italic")}
          title="Italic"
          onClick={() => toggleFormat("italic")}
        >
          <em style={{ fontSize: 13 }}>I</em>
        </ToolbarBtn>
        <ToolbarBtn
          active={formats.has("underline")}
          title="Underline"
          onClick={() => toggleFormat("underline")}
        >
          <span style={{ fontSize: 13, textDecoration: "underline" }}>U</span>
        </ToolbarBtn>
        <ToolbarBtn
          active={formats.has("strike")}
          title="Strikethrough"
          onClick={() => toggleFormat("strike")}
        >
          <span style={{ fontSize: 13, textDecoration: "line-through" }}>
            S
          </span>
        </ToolbarBtn>

        <div
          style={{
            width: 1,
            height: 24,
            background: "var(--color-border)",
            margin: "0 2px",
            flexShrink: 0,
          }}
        />

        <ToolbarBtn
          active={align === "left"}
          title="Align left"
          onClick={() => setAlign("left")}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="2" width="14" height="2" rx="1" />
            <rect x="1" y="7" width="9" height="2" rx="1" />
            <rect x="1" y="12" width="12" height="2" rx="1" />
          </svg>
        </ToolbarBtn>
        <ToolbarBtn
          active={align === "center"}
          title="Align center"
          onClick={() => setAlign("center")}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="2" width="14" height="2" rx="1" />
            <rect x="3.5" y="7" width="9" height="2" rx="1" />
            <rect x="2" y="12" width="12" height="2" rx="1" />
          </svg>
        </ToolbarBtn>
        <ToolbarBtn
          active={align === "right"}
          title="Align right"
          onClick={() => setAlign("right")}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="2" width="14" height="2" rx="1" />
            <rect x="6" y="7" width="9" height="2" rx="1" />
            <rect x="3" y="12" width="12" height="2" rx="1" />
          </svg>
        </ToolbarBtn>

        <div
          style={{
            width: 1,
            height: 24,
            background: "var(--color-border)",
            margin: "0 2px",
            flexShrink: 0,
          }}
        />

        <ToolbarBtn
          active={formats.has("ul")}
          title="Bullet list"
          onClick={() => toggleList("ul")}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="2" cy="4" r="1.5" />
            <rect x="5" y="3" width="10" height="2" rx="1" />
            <circle cx="2" cy="8" r="1.5" />
            <rect x="5" y="7" width="10" height="2" rx="1" />
            <circle cx="2" cy="12" r="1.5" />
            <rect x="5" y="11" width="10" height="2" rx="1" />
          </svg>
        </ToolbarBtn>
        <ToolbarBtn
          active={formats.has("ol")}
          title="Numbered list"
          onClick={() => toggleList("ol")}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <text x="0" y="5" fontSize="5" fontFamily="ui-monospace,monospace">
              1.
            </text>
            <rect x="5" y="3" width="10" height="2" rx="1" />
            <text x="0" y="10" fontSize="5" fontFamily="ui-monospace,monospace">
              2.
            </text>
            <rect x="5" y="8" width="10" height="2" rx="1" />
            <text x="0" y="15" fontSize="5" fontFamily="ui-monospace,monospace">
              3.
            </text>
            <rect x="5" y="13" width="10" height="2" rx="1" />
          </svg>
        </ToolbarBtn>

        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setContent("");
              setFormats(new Set());
              setAlign("left");
              setBlock("paragraph");
            }}
          >
            Clear
          </Button>
          <Button intent="primary" size="sm">
            Publish
          </Button>
        </div>
      </div>

      <Separator />

      {/* Content area */}
      <Textbox
        placeholder="Start writing…"
        rows={8}
        resize="none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", marginTop: 8 }}
        textareaStyle={{
          fontStyle: formats.has("italic") ? "italic" : undefined,
          fontWeight: formats.has("bold") ? 700 : undefined,
          textDecoration:
            formats.has("underline") && formats.has("strike")
              ? "underline line-through"
              : formats.has("underline")
                ? "underline"
                : formats.has("strike")
                  ? "line-through"
                  : undefined,
          textAlign: align as React.CSSProperties["textAlign"],
          fontFamily: block === "code" ? "ui-monospace, monospace" : undefined,
          fontSize:
            block === "h1"
              ? 22
              : block === "h2"
                ? 18
                : block === "h3"
                  ? 15
                  : undefined,
        }}
      />

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "var(--color-text-muted)",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {words} word{words !== 1 ? "s" : ""} · {content.length} chars
        </span>
        <span
          style={{
            fontSize: 11,
            color:
              content.length > 0
                ? "var(--color-warning)"
                : "var(--color-text-muted)",
          }}
        >
          {content.length > 0 ? "Unsaved changes" : "No changes"}
        </span>
      </div>
    </ExampleCard>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    title: "How do I install juno-ui in my project?",
    content:
      'Run npm install juno-ui-library, then import the stylesheet: import "juno-ui-library/dist/juno-ui-library.css". Components are tree-shakeable — import only what you need.',
  },
  {
    title: "Does juno-ui support dark mode?",
    content:
      'Yes. Set the data-theme="dark" attribute on your <html> element. The library ships with a full set of CSS tokens for both light and dark themes, including multiple color palettes.',
  },
  {
    title: "Can I use juno-ui with TypeScript?",
    content:
      "All components ship with full TypeScript definitions. Every prop interface is exported from the package root so you can reference types directly in your own code.",
  },
  {
    title: "How do I customize component styles?",
    content:
      "Components accept className and style props. For deeper theming, override CSS custom properties on a parent element — all design tokens are documented in the Palette section.",
  },
  {
    title: "Are components accessible?",
    content:
      "We aim for WCAG 2.1 AA compliance. Interactive components use semantic HTML, proper ARIA roles, and keyboard navigation. Please open an issue if you spot an accessibility gap.",
  },
  {
    title: "Is juno-ui compatible with Next.js and Vite?",
    content:
      "Yes. The package ships as an ES module with a UMD fallback and is compatible with any modern bundler including Vite, Next.js, Webpack 5, and Rollup.",
  },
];

function FAQExample() {
  return (
    <ExampleCard
      title="FAQ"
      desc="Common questions answered using the Accordion component."
    >
      <Accordion items={faqItems} multiple />
    </ExampleCard>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ExamplesPage() {
  return (
    <>
      <PageHeader
        title="Examples"
        desc="Real-world UI patterns built with juno-ui components."
      />
      <div className={s.examplesGrid}>
        <SignInExample />
        <CheckoutExample />
        <ContactExample />
        <TeamExample />
        <WizardExample />
        <ResourcesExample />
        <AlertsExample />
        <NotificationsExample />
        <InboxExample />
        <ProfileExample />
        <SchedulingExample />
        <SecuritySettingsExample />
        <ConfirmModalExample />
        <DashboardTabsExample />
        <CartDrawerExample />
        <div style={{ gridColumn: "1 / -1" }}>
          <TextEditorExample />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <FAQExample />
        </div>
      </div>
    </>
  );
}
