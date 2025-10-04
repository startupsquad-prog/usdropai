# USDrop - Project Overview

## 🎉 Project Successfully Created!

Your Next.js 15 full-stack application is ready for development.

## ✅ What's Been Set Up

### Core Framework
- ✅ **Next.js 15.5.4** with App Router
- ✅ **React 19.2.0** 
- ✅ **TypeScript 5.9.3** with strict mode
- ✅ **Node.js** with pnpm package manager

### Styling & UI
- ✅ **TailwindCSS 3.4.18** configured with custom theme
- ✅ **Shadcn UI** component system (button component included)
- ✅ **TweakCN Integration** - Global CSS theme for all components
- ✅ **Geist Font** from Vercel
- ✅ **US Drop Theme Colors**: Red (#E7000A), Black (#000000), White (#FFFFFF)
- ✅ **TailwindCSS Animate** for animations
- ✅ **Dark Mode Support** pre-configured

### Backend & Data Management
- ✅ **Supabase JS Client 2.58.0** (client & server implementations)
- ✅ **TanStack Query 5.90.2** with provider setup
- ✅ Database types template

### Developer Tools
- ✅ **ESLint 8.57.1** with Next.js rules
- ✅ **Prettier 3.6.2** for code formatting
- ✅ **TypeScript** strict type checking

## 📂 Complete File Structure

```
USDrop/
│
├── 📁 app/                           # Next.js App Router
│   ├── layout.tsx                   # Root layout with QueryProvider
│   ├── page.tsx                     # Home page with demo
│   └── globals.css                  # Global styles + CSS variables
│
├── 📁 components/
│   ├── 📁 ui/                       # Shadcn UI components
│   │   └── button.tsx              # Button component (Shadcn)
│   └── 📁 shared/                   # Custom components
│       └── example-card.tsx        # Example custom component
│
├── 📁 lib/
│   ├── 📁 supabase/
│   │   ├── client.ts               # Browser Supabase client
│   │   └── server.ts               # Server Supabase client (with cookies)
│   ├── 📁 providers/
│   │   └── query-provider.tsx      # TanStack Query provider wrapper
│   ├── 📁 types/
│   │   └── database.types.ts       # Supabase type definitions template
│   └── utils.ts                    # cn() utility for className merging
│
├── 📁 styles/                       # Additional styles (empty, ready to use)
├── 📁 public/                       # Static assets
│
├── 📄 Configuration Files
│   ├── package.json                # Dependencies & scripts
│   ├── tsconfig.json               # TypeScript config
│   ├── tailwind.config.ts          # TailwindCSS + US Drop colors
│   ├── next.config.ts              # Next.js config
│   ├── postcss.config.mjs          # PostCSS config
│   ├── components.json             # Shadcn UI config
│   ├── .eslintrc.json             # ESLint rules
│   ├── .prettierrc                # Prettier config
│   └── .gitignore                 # Git ignore rules
│
└── 📄 Documentation
    ├── README.md                   # Main documentation
    ├── SETUP.md                    # Setup instructions
    ├── PROJECT_OVERVIEW.md         # This file
    └── .env.example                # Environment variables template
```

## 🎨 Theme Configuration

### US Drop Brand Colors (Tailwind Utilities)

```tsx
// Red - Primary Brand Color
bg-usdrop-red      // Background: #E7000A
text-usdrop-red    // Text: #E7000A
border-usdrop-red  // Border: #E7000A

// Black
bg-usdrop-black    // Background: #000000
text-usdrop-black  // Text: #000000

// White
bg-usdrop-white    // Background: #FFFFFF
text-usdrop-white  // Text: #FFFFFF
```

### CSS Variables (in globals.css)

- Primary color configured to US Drop Red
- Dark mode support included
- Shadcn UI color system integrated

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at http://localhost:3000 |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |

## 📦 Installed Packages

### Dependencies (Production)
- next (^15.0.0)
- react (^19.0.0)
- react-dom (^19.0.0)
- @supabase/supabase-js (^2.39.0)
- @tanstack/react-query (^5.17.0)
- geist (^1.2.0)
- clsx (^2.1.0)
- tailwind-merge (^2.2.0)
- class-variance-authority (^0.7.0)
- tailwindcss-animate (^1.0.7)
- lucide-react (^0.309.0)

### Dev Dependencies
- typescript (^5)
- @types/node (^20)
- @types/react (^19)
- @types/react-dom (^19)
- eslint (^8)
- eslint-config-next (^15.0.0)
- eslint-config-prettier (^9.1.0)
- prettier (^3.2.0)
- tailwindcss (^3.4.1)
- postcss (^8)
- autoprefixer (^10.0.1)
- supabase (^1.142.0)

## 🚀 Getting Started

### 1. Development Server is Already Running!

✅ **Server Status**: RUNNING on http://localhost:3000

Visit http://localhost:3000 to see your app!

### 2. Set Up Supabase (Required for Auth & Database)

1. Copy environment variables:
   ```bash
   Copy-Item .env.example .env.local
   ```

2. Get credentials from [supabase.com](https://supabase.com):
   - Create a new project
   - Go to Settings → API
   - Copy URL and anon key to `.env.local`

### 3. Add More Shadcn Components

```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add dialog
```

## 📝 Code Examples

### Using Shadcn Button with US Drop Theme

```tsx
import { Button } from "@/components/ui/button";

export function MyButton() {
  return (
    <Button className="bg-usdrop-red hover:bg-usdrop-red/90">
      Click Me
    </Button>
  );
}
```

### Using Supabase Client

```tsx
import { supabase } from "@/lib/supabase/client";

async function fetchData() {
  const { data, error } = await supabase
    .from('your_table')
    .select('*');
  
  return data;
}
```

### Using TanStack Query

```tsx
'use client';
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";

export function DataComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const { data } = await supabase.from('items').select('*');
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{/* Render data */}</div>;
}
```

### Using cn() Utility

```tsx
import { cn } from "@/lib/utils";

export function Component({ className }: { className?: string }) {
  return (
    <div className={cn(
      "base-classes",
      "more-classes",
      className // User can override
    )}>
      Content
    </div>
  );
}
```

## 🎯 Folder Guidelines

### 📁 `/components/ui`
- **ONLY** Shadcn UI components
- Generated via `pnpm dlx shadcn@latest add [component]`
- Do not manually create files here

### 📁 `/components/shared`
- Your custom reusable components
- Business logic components
- Layout components

### 📁 `/lib`
- Utility functions
- API clients (Supabase, etc.)
- Shared configurations
- Type definitions

### 📁 `/app`
- All routes and pages
- Layout files
- Loading/error boundaries
- Server components by default

## 🔐 Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📚 Key Features

### ✨ Type Safety
- Full TypeScript support
- Supabase type generation ready
- React 19 + TypeScript 5

### 🎨 Modern UI
- Shadcn UI components
- TailwindCSS with custom theme
- Responsive design utilities
- US Drop brand colors

### 🔥 Developer Experience
- Hot reload
- ESLint + Prettier
- TypeScript strict mode
- Clear folder structure

### 🚀 Production Ready
- Server & client components
- SEO optimized
- Image optimization
- Edge runtime support

### 💾 Data Management
- TanStack Query for caching
- Supabase integration
- Client & server data fetching

## 🎓 Next Steps

1. ✅ Visit http://localhost:3000 (already running!)
2. 📝 Set up Supabase credentials in `.env.local`
3. 🎨 Add more Shadcn components as needed
4. 🗄️ Create your database schema in Supabase
5. 🔐 Implement authentication
6. 🚀 Build your application!

## 📖 Documentation

- **SETUP.md** - Detailed setup guide
- **README.md** - General documentation
- **PROJECT_OVERVIEW.md** - This file (architecture overview)

## ✨ Everything is Ready!

Your development environment is fully configured and the server is running. Happy coding! 🎉

---

**Need Help?**
- Check SETUP.md for detailed instructions
- Visit the documentation links in README.md
- Review example components in the `/components` folder

