# USDrop - Next.js 15 Full Stack Starter

A modern, production-ready Next.js 15 starter with TypeScript, Supabase, TailwindCSS, and Shadcn UI.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **TailwindCSS** - Utility-first CSS
- **Shadcn UI + TweakCN** - Global CSS theme for all components
- **Supabase** - Auth, Database, Edge Functions
- **TanStack Query** - Data fetching and caching
- **Geist Font** - Modern, clean typography
- **ESLint + Prettier** - Code quality and formatting

## 🎨 TweakCN Integration

This project uses **TweakCN** — a global CSS approach that styles **all Shadcn components at once**. No need to style each component individually! Change your theme in `app/globals.css` and all components automatically update.

[Read the TweakCN Guide →](TWEAKCN_GUIDE.md)

## US Drop Theme Colors

- **Red**: `#E7000A`
- **Black**: `#000000`
- **White**: `#FFFFFF`

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── ui/                # Shadcn UI components only
│   └── shared/            # Custom shared components
├── lib/
│   ├── supabase/          # Supabase client configurations
│   │   ├── client.ts      # Client-side Supabase client
│   │   └── server.ts      # Server-side Supabase client
│   ├── providers/         # React providers
│   │   └── query-provider.tsx  # TanStack Query provider
│   └── utils.ts           # Utility functions (cn helper)
└── styles/                # Additional style files
```

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Supabase

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

To get your Supabase credentials:

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy your Project URL and anon/public key

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Adding Shadcn Components

All Shadcn components should be added to `components/ui/`:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
```

## Usage Examples

### Using Supabase Client

```tsx
import { supabase } from "@/lib/supabase/client";

// Client-side usage
const { data, error } = await supabase.from("table_name").select("*");
```

### Using TanStack Query

```tsx
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";

export function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["myData"],
    queryFn: async () => {
      const { data } = await supabase.from("table_name").select("*");
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{/* Render data */}</div>;
}
```

### Using Shadcn Components

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MyButton() {
  return (
    <Button className={cn("bg-usdrop-red text-usdrop-white")}>
      Click Me
    </Button>
  );
}
```

## Folder Guidelines

- **`/components/ui`**: Only Shadcn UI components generated via CLI
- **`/components/shared`**: Your custom reusable components
- **`/lib`**: Utilities, helpers, and configuration
- **`/app`**: All routes and pages (App Router)

## Theme Customization

The US Drop brand colors are available as Tailwind utilities:

```tsx
<div className="bg-usdrop-red text-usdrop-white">Red Background</div>
<div className="bg-usdrop-black text-usdrop-white">Black Background</div>
<div className="bg-usdrop-white text-usdrop-black">White Background</div>
```

CSS variables are defined in `app/globals.css` and can be customized in `tailwind.config.ts`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)
- [TailwindCSS](https://tailwindcss.com/docs)

## License

MIT

