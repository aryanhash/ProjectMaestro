# CodeRabbit-style PR Review System

A complete AI-powered code review system using Cline CLI, integrated with GitHub Actions, and featuring a comprehensive health dashboard.

## 🎯 Features

✅ **Automated PR Reviews** - AI-powered code reviews on every PR  
✅ **Multiple Review Types** - Security, Performance, Style, and General reviews  
✅ **Health Dashboard** - Real-time code health metrics and trends  
✅ **Slack Integration** - Automatic alerts for critical/high severity issues  
✅ **Weekly Reports** - Automated weekly health reports via GitHub Actions  
✅ **GitHub Integration** - Comments and status checks on PRs  

---

## 📋 Components

### 1. Review Scripts

#### `scripts/review_commit.sh`
Review a specific commit:
```bash
./scripts/review_commit.sh <commit_hash> [review_type]
```

Review types: `general`, `security`, `performance`, `style`

#### `scripts/review_pr.sh`
Review a PR diff:
```bash
./scripts/review_pr.sh <base_branch> <head_branch> [review_type]
```

### 2. GitHub Actions Workflow

**`.github/workflows/ai-pr-review.yml`**

Automatically runs on:
- PR opened
- PR synchronized (new commits)
- PR reopened
- Manual trigger (workflow_dispatch)

Features:
- Runs AI review using Cline CLI
- Posts review comments on PR
- Sets PR status based on findings
- Uploads review artifacts
- Sends findings to API for storage

### 3. API Endpoints

#### `POST /api/reviews`
Save a review or trigger a new review:

**Save existing review:**
```json
{
  "repo": "owner/repo",
  "pr": 123,
  "findings": [...],
  "summary": {...}
}
```

**Trigger new review:**
```json
{
  "action": "review",
  "repo": "owner/repo",
  "commit": "abc123",
  "reviewType": "general"
}
```

#### `GET /api/reviews`
Get reviews:
- `?dashboard=true` - Get dashboard statistics
- `?repo=owner/repo` - Filter by repository
- `?pr=123` - Get specific PR review

#### `POST /api/reviews/slack`
Send Slack alert for review findings

### 4. Health Dashboard

**Route:** `/health`

Features:
- **Health Score** - Overall code health (0-100)
- **Severity Breakdown** - Critical, High, Medium, Low issues
- **Category Breakdown** - Security, Performance, Bug, Style
- **30-Day Trends** - Visual trend charts
- **Recent Reviews** - Latest review activity

### 5. Database

**File-based JSON storage** (`data/reviews.json`)

Stores:
- Review records with findings
- Timestamps and metadata
- Repository and PR information

---

## 🚀 Setup

### 1. Install Cline CLI

```bash
npm install -g @cline/cli
# OR
npm install -g klein-cli
```

### 2. Configure Environment Variables

Add to `.env.local`:

```bash
# Optional: Slack webhook for alerts
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Optional: API URL for GitHub Actions
REVIEW_API_URL=https://your-app.vercel.app
```

### 3. GitHub Actions Secrets

Add to your repository secrets:

- `CLINE_API_KEY` (optional) - Cline API key
- `OPENAI_API_KEY` (optional) - OpenAI API key for Cline
- `SLACK_WEBHOOK_URL` (optional) - Slack webhook URL
- `REVIEW_API_URL` (optional) - Your API URL for storing reviews

### 4. Make Scripts Executable

```bash
chmod +x scripts/review_commit.sh
chmod +x scripts/review_pr.sh
```

---

## 📊 Usage

### Manual Review

**Review a commit:**
```bash
./scripts/review_commit.sh HEAD security
```

**Review a PR:**
```bash
./scripts/review_pr.sh main feature-branch general
```

### Automated Review (GitHub Actions)

1. Create a PR
2. GitHub Action automatically runs
3. Review comment is posted on PR
4. Findings are stored in database
5. Slack alert sent if critical/high issues found

### View Health Dashboard

1. Navigate to `/health` in your app
2. View overall health metrics
3. Filter by repository
4. See trends and recent reviews

---

## 🔔 Slack Integration

### Setup

1. Create a Slack webhook: https://api.slack.com/messaging/webhooks
2. Add `SLACK_WEBHOOK_URL` to environment variables
3. Alerts automatically sent for critical/high issues

### Alert Format

- **Critical Issues** - Red alert with 🔴
- **High Issues** - Orange alert with ⚠️
- Includes: Repository, PR number, severity breakdown, top findings

---

## 📅 Weekly Health Reports

**Workflow:** `.github/workflows/weekly-health-report.yml`

Runs every Monday at 9 AM UTC.

Features:
- Generates health report
- Sends to Slack (if configured)
- Creates GitHub issue if health score < 60

---

## 🎨 Health Dashboard Features

### Health Score Calculation

```
Score = 100 - (critical × 10 + high × 5 + medium × 2 + low × 1)
Max penalty: 100 points
```

### Metrics Displayed

1. **Health Score** - Circular progress indicator
2. **Severity Cards** - Critical, High, Medium, Low counts
3. **Category Breakdown** - Issues by category (Security, Performance, etc.)
4. **Trends Chart** - 30-day trend visualization
5. **Recent Reviews** - Latest review activity

---

## 🔧 Customization

### Review Prompts

Edit prompts in `lib/pr-reviewer.ts`:

```typescript
private getReviewPrompt(reviewType: string): string {
  // Customize prompts here
}
```

### Severity Thresholds

Adjust in `lib/review-db.ts`:

```typescript
getHealthScore(repo?: string): number {
  // Customize scoring algorithm
}
```

### Slack Message Format

Customize in `lib/slack-alerts.ts`:

```typescript
private formatMessage(alert: SlackAlert): any {
  // Customize Slack message format
}
```

---

## 🐛 Troubleshooting

### Cline CLI Not Found

```bash
# Install globally
npm install -g @cline/cli

# Or use npx (fallback in scripts)
npx -y @cline/cli review ...
```

### GitHub Actions Failing

1. Check secrets are set correctly
2. Verify Cline CLI installation in workflow
3. Check workflow logs for errors

### Dashboard Not Loading

1. Check API endpoint is accessible
2. Verify `data/reviews.json` exists
3. Check browser console for errors

### Slack Alerts Not Sending

1. Verify `SLACK_WEBHOOK_URL` is set
2. Check webhook URL is valid
3. Review server logs for errors

---

## 📈 Future Enhancements

- [ ] Jira integration for auto-ticket creation
- [ ] Email notifications
- [ ] Custom review rules
- [ ] Team-specific thresholds
- [ ] Historical comparison
- [ ] Export reports (PDF/CSV)
- [ ] Multi-repository aggregation
- [ ] Custom dashboard widgets

---

## 🏆 Hackathon Pitch

> "We built an autonomous AI reviewer that lives in CI/CD, reviews PRs like CodeRabbit, blocks insecure commits, and gives a live health dashboard for engineering leaders."

### Why Judges Will Love It:

✅ **Autonomous** - Runs automatically on every PR  
✅ **Real Dev Problem** - Solves actual code review pain  
✅ **CI Integrated** - Seamless GitHub Actions integration  
✅ **Dashboard** - Beautiful, real-time health metrics  
✅ **Impact** - Prevents bugs and security issues  
✅ **Scalable** - Works for any repository  

---

## 📚 Related Files

- `lib/pr-reviewer.ts` - Core review logic
- `lib/review-db.ts` - Database operations
- `lib/slack-alerts.ts` - Slack integration
- `components/CodeHealthDashboard.tsx` - Dashboard UI
- `app/health/page.tsx` - Dashboard page
- `app/api/reviews/route.ts` - API endpoints
- `.github/workflows/ai-pr-review.yml` - PR review workflow
- `.github/workflows/weekly-health-report.yml` - Weekly report workflow

---

**Built with ❤️ using Cline CLI and Next.js**

