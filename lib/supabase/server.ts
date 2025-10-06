import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function createServerClient() {
  const cookieStore = await cookies();

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        flowType: "pkce",
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true,
        storage: {
          getItem: async (key: string) => {
            const cookie = cookieStore.get(key);
            return cookie?.value ?? null;
          },
          setItem: async (key: string, value: string) => {
            cookieStore.set(key, value, {
              maxAge: 60 * 60 * 24 * 7, // 7 days
              path: "/",
              sameSite: "lax",
              secure: process.env.NODE_ENV === "production",
            });
          },
          removeItem: async (key: string) => {
            cookieStore.delete(key);
          },
        },
      },
    }
  );
}

