const roles = [
	// RFC 2142 / standard
	"postmaster", "abuse", "webmaster", "www", "hostmaster", "noc", "security", "usenet", "news", "ftp", "uucp",
	"list-request",
	// Business/marketing
	"info", "sales", "marketing", "support", "help", "customerservice", "customer-care", "contact", "feedback",
	"inquiry", "enquiry", "careers", "jobs", "recruitment", "hr", "press", "media", "pr", "partners", "affiliates",
	"billing", "payments", "invoices", "accounts", "subscriptions", "unsubscribe", "newsletter", "events", "webinars",
	"legal", "compliance", "privacy", "finance", "admin", "administrator", "office", "team", "service", "supportteam",
	"helpdesk", "operations",
	// IT/operations
	"it", "tech", "techsupport", "devops", "system", "sysadmin", "maildaemon", "mailer-daemon", "dnsadmin", "backup",
	"monitor", "alerts", "patches", "updates", "development", "dev", "test", "qa", "logs", "analytics", "metrics",
	"deploy", "deployment", "build", "ci", "continuousintegration", "releases", "secops", "compliance", "audit",
	"backoffice", "operator", "adminhelp", "network", "server",
	// Security/abuse
	"spam", "spamreport", "phish", "phishing", "vulnerability", "vuln", "malware", "malicious", "incident", "incidents",
	"report", "reports", "threat", "threats", "cert", "csirt", "forensics", "bug", "bugreport", "errors", "issues",
	"helpsec", "abuse", "security", "postmaster",
	// Mailing-list management
	"list", "list-request", "subscribe", "unsubscribe", "moderator", "mod", "bounce", "owner", "owners", "archive",
	"digest", "help", "request", "reply", "post", "no-reply", "noreply", "donotreply",
	// Automated notifications
	"no-reply", "noreply", "donotreply", "autoreply", "automated", "notifications", "notify", "alerts", "system",
	"system-alert", "system-msg", "update", "updates", "newsletter", "reminder", "reminders", "reports", "batch",
	"daemon", "bot", "chatbot", "ci", "build", "deploy", "log", "logs", "metrics", "alert", "alarms", "monitor",
	"backup", "cron", "scheduler", "ingest", "pipeline", "sync", "tracker", "feed", "indexer",
	// Misc/generic
	"default", "guest", "user", "users", "test", "tester", "demo", "trial", "temp", "anonymous", "unknown", "root",
	"git", "svn", "cvs", "docs", "supportteam", "customercare", "customersupport", "usergroup", "adminteam",
	"moderator", "mods", "guardian", "secretary", "management", "board", "executive", "director", "supervisor",
	"manager", "operations", "logistics", "supplychain", "procurement", "resource", "faculty", "staff", "student",
	"parent", "volunteer", "membership", "chapter", "registrar", "adminoffice", "secretariat", "summaries", "digest",
	"alternative", "secondary", "tertiary", "standby", "failover", "redundancy",
	// Lazy names
	"foo", "qwe", "asdf"
]

export default function checkGenericRole(email) {
	const role = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "")
	const genericRole = roles.includes(role)
	return genericRole ? ["email_role_generic"] : []
}