# Vercel Environment Variables Setup

## Environment Variables to Add

Go to: https://vercel.com/startup-squad/usdropwaitinglist/settings/environment-variables

Add these two environment variables for **Production** environment:

### 1. NEXT_PUBLIC_SUPABASE_URL
```
https://lagifarpfauunmvouoyw.supabase.co
```

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZ2lmYXJwZmF1dW5tdm91b3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5OTI3MzUsImV4cCI6MjA3NzU2ODczNX0.A7nosY2yhlGd8DF00oBRhScU29mVWIgOodv2dHovkuU
```

## Steps:
1. Go to your Vercel project: https://vercel.com/startup-squad/usdropwaitinglist/settings/environment-variables
2. Click "Add New" for each variable above
3. Select "Production" environment (and "Preview" if you want them for preview deployments too)
4. After adding variables, go to: https://vercel.com/startup-squad/usdropwaitinglist/deployments
5. Click the "..." menu on the latest deployment and select "Redeploy"

Or simply push a new commit to trigger automatic redeployment with the new variables.

