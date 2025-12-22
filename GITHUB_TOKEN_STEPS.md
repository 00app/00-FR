# Create GitHub Personal Access Token

GitHub requires a Personal Access Token (not password) for git operations.

## Quick Steps:

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Generate new token (classic)"
3. **Name it:** "00-FR Push"
4. **Select expiration:** 90 days (or No expiration)
5. **Select scope:** ✅ **repo** (check the "repo" checkbox - this gives all repo permissions)
6. **Click:** "Generate token" at the bottom
7. **Copy the token** immediately (starts with `ghp_` or similar)

## Then push with token:

```bash
git push -u origin main
```

When prompted:
- **Username:** `00app`
- **Password:** [paste your token here, NOT your password]

---

**Your token will look like:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

