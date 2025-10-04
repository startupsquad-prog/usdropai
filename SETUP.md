# USDrop Setup Instructions

## ✅ Setup Complete!

Your Next.js 15 project is fully configured and ready to use.

## 🚀 Quick Start

### 1. Run the Development Server

```bash
pnpm dev
```

The app will be available at **http://localhost:3000**

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
# Windows PowerShell
Copy-Item .env.example .env.local

# Unix/Mac/Linux
cp .env.example .env.local
```

Then edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Get Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to **Project Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📁 Project Structure

```
USDrop/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # Shadcn UI components (auto-generated)
│   │   └── button.tsx           # Example: Button component
│   └── shared/                  # Your custom components
│       └── example-card.tsx     # Example: Custom card component
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Client-side Supabase client
│   │   └── server.ts           # Server-side Supabase client
│   ├── providers/
│   │   └── query-provider.tsx  # TanStack Query provider
│   └── utils.ts                # Utility functions (cn helper)
├── styles/                      # Additional styles (empty by default)
└── public/                      # Static assets
```

## 🎨 TweakCN + US Drop Theme

The project uses **TweakCN** — a global CSS approach that styles all Shadcn components at once!

### What is TweakCN?

- **Global theming**: Define colors once in `app/globals.css`
- **Auto-application**: All Shadcn components inherit the theme automatically
- **Easy customization**: Change one variable, update all components
- **Dark mode ready**: Pre-configured dark theme

👉 **[5-Minute Quick Start](TWEAKCN_QUICK_START.md)** | **[Full Guide](TWEAKCN_GUIDE.md)**

The project is configured with US Drop brand colors:

### Brand Colors

- **Red**: `#E7000A` → Use: `bg-usdrop-red`, `text-usdrop-red`, `border-usdrop-red`
- **Black**: `#000000` → Use: `bg-usdrop-black`, `text-usdrop-black`, `border-usdrop-black`
- **White**: `#FFFFFF` → Use: `bg-usdrop-white`, `text-usdrop-white`, `border-usdrop-white`

### Example Usage

```tsx
<div className="bg-usdrop-red text-usdrop-white p-4 rounded-lg">
  US Drop Styled Element
</div>

<h1 className="bg-gradient-to-r from-usdrop-red to-usdrop-black bg-clip-text text-transparent">
  Gradient Text
</h1>
```

## 🧩 Adding Shadcn Components

Add components to `components/ui/` using the CLI:

```bash
# Add a single component
pnpm dlx shadcn@latest add card

# Add multiple components
pnpm dlx shadcn@latest add dialog input label
```

**Available components**: button, card, dialog, dropdown-menu, input, label, select, table, toast, and more.

## 📦 Stack Reference

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling
- **TailwindCSS** - Utility-first CSS
- **Shadcn UI** - Component library
- **Geist Font** - Typography (automatically configured)

### Backend & Data
- **Supabase** - Backend as a service (Auth, DB, Storage, Edge Functions)
- **TanStack Query** - Data fetching, caching, and synchronization

### Developer Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📝 Common Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build           # Build for production
pnpm start           # Start production server

# Code Quality
pnpm lint            # Run ESLint
pnpm format          # Format with Prettier

# Shadcn Components
pnpm dlx shadcn@latest add [component-name]

# Dependencies
pnpm add [package]            # Add dependency
pnpm add -D [package]         # Add dev dependency
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | TailwindCSS configuration (includes US Drop colors) |
| `next.config.ts` | Next.js configuration |
| `components.json` | Shadcn UI configuration |
| `.eslintrc.json` | ESLint rules |
| `.prettierrc` | Prettier formatting rules |

## 🎯 Next Steps

### 1. Set Up Supabase Database

```sql
-- Example: Create a users table
create table profiles (
  id uuid references auth.users not null primary key,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 2. Create Your First API Route

```tsx
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from USDrop!' });
}
```

### 3. Add Authentication

```tsx
// Example: Sign up function
import { supabase } from '@/lib/supabase/client';

async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}
```

### 4. Use TanStack Query

```tsx
'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase/client';

export function DataComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myData'],
    queryFn: async () => {
      const { data } = await supabase.from('my_table').select('*');
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest)

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

### TypeScript errors
```bash
# Regenerate TypeScript definitions
pnpm build
```

### Supabase connection issues
- Check `.env.local` has correct credentials
- Verify Supabase project is running
- Check Project Settings → API in Supabase dashboard

## ✨ Features Ready to Use

✅ Next.js 15 with App Router
✅ TypeScript configured
✅ TailwindCSS with US Drop theme
✅ Shadcn UI components
✅ Supabase client (client + server)
✅ TanStack Query provider
✅ ESLint + Prettier
✅ Geist font
✅ Proper folder structure
✅ Example components

## 🎉 You're All Set!

Run `pnpm dev` and visit [http://localhost:3000](http://localhost:3000) to see your app in action!

