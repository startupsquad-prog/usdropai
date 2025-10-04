// This file will contain Supabase database types
// Generate types with: pnpm supabase gen types typescript --local > lib/types/database.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      // Your tables will be defined here
      // Example:
      // users: {
      //   Row: {
      //     id: string
      //     email: string
      //     created_at: string
      //   }
      //   Insert: {
      //     id?: string
      //     email: string
      //     created_at?: string
      //   }
      //   Update: {
      //     id?: string
      //     email?: string
      //     created_at?: string
      //   }
      // }
    };
    Views: {
      // Your views will be defined here
    };
    Functions: {
      // Your functions will be defined here
    };
    Enums: {
      // Your enums will be defined here
    };
  };
}

