export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      onboarding_progress: {
        Row: {
          completed_at: string
          id: string
          step_completed: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          step_completed: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          step_completed?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      product_analytics: {
        Row: {
          created_at: string | null
          date: string
          day_name: string
          id: string
          orders: number
          product_id: string
        }
        Insert: {
          created_at?: string | null
          date: string
          day_name: string
          id?: string
          orders?: number
          product_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          day_name?: string
          id?: string
          orders?: number
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_analytics_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          ad_campaigns_active: number | null
          ai_summary: string | null
          ali_score: number | null
          amazon_url: string | null
          audience_segment: string | null
          buy_price: number
          category: string | null
          competition_score: number | null
          country_focus: string | null
          cpm_rate: number | null
          created_at: string | null
          ctr_rate: number | null
          description: string | null
          drop_score: number | null
          facebook_ads_url: string | null
          id: string
          image_url: string
          is_active: boolean | null
          margin_percentage: number | null
          orders_this_month: number | null
          profit_margin: number | null
          sell_price: number
          suggested_margin: number | null
          supplier: string | null
          supplier_reliability: number | null
          supplier_source: string | null
          supplier_url: string | null
          title: string
          top_country_code: string | null
          top_country_flag: string | null
          total_orders: number | null
          trend_status: string | null
          updated_at: string | null
          usdrop_prediction: Json | null
          video_url: string | null
        }
        Insert: {
          ad_campaigns_active?: number | null
          ai_summary?: string | null
          ali_score?: number | null
          amazon_url?: string | null
          audience_segment?: string | null
          buy_price: number
          category?: string | null
          competition_score?: number | null
          country_focus?: string | null
          cpm_rate?: number | null
          created_at?: string | null
          ctr_rate?: number | null
          description?: string | null
          drop_score?: number | null
          facebook_ads_url?: string | null
          id?: string
          image_url: string
          is_active?: boolean | null
          margin_percentage?: number | null
          orders_this_month?: number | null
          profit_margin?: number | null
          sell_price: number
          suggested_margin?: number | null
          supplier?: string | null
          supplier_reliability?: number | null
          supplier_source?: string | null
          supplier_url?: string | null
          title: string
          top_country_code?: string | null
          top_country_flag?: string | null
          total_orders?: number | null
          trend_status?: string | null
          updated_at?: string | null
          usdrop_prediction?: Json | null
          video_url?: string | null
        }
        Update: {
          ad_campaigns_active?: number | null
          ai_summary?: string | null
          ali_score?: number | null
          amazon_url?: string | null
          audience_segment?: string | null
          buy_price?: number
          category?: string | null
          competition_score?: number | null
          country_focus?: string | null
          cpm_rate?: number | null
          created_at?: string | null
          ctr_rate?: number | null
          description?: string | null
          drop_score?: number | null
          facebook_ads_url?: string | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          margin_percentage?: number | null
          orders_this_month?: number | null
          profit_margin?: number | null
          sell_price?: number
          suggested_margin?: number | null
          supplier?: string | null
          supplier_reliability?: number | null
          supplier_source?: string | null
          supplier_url?: string | null
          title?: string
          top_country_code?: string | null
          top_country_flag?: string | null
          total_orders?: number | null
          trend_status?: string | null
          updated_at?: string | null
          usdrop_prediction?: Json | null
          video_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          products_imported: number | null
          stores_connected: number | null
          subscription_status: string | null
          subscription_tier: string | null
          trial_ends_at: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          products_imported?: number | null
          stores_connected?: number | null
          subscription_status?: string | null
          subscription_tier?: string | null
          trial_ends_at?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          products_imported?: number | null
          stores_connected?: number | null
          subscription_status?: string | null
          subscription_tier?: string | null
          trial_ends_at?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      waitlist_submissions: {
        Row: {
          id: string
          email: string
          phone_number: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          email: string
          phone_number?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          phone_number?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
