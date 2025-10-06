"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IconAI, IconSearch, IconTrendingUp, IconFilters, IconSort } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import ProductAnalyticsCard from "@/components/dashboard/product-analytics-card";
import { ProductCardSkeleton } from "@/components/dashboard/product-card-skeleton";
import { supabase } from "@/lib/supabase/client";
import { Tables } from "@/lib/types/database.types";

type Product = Tables<"products">;
type ProductAnalytics = Tables<"product_analytics">;

interface ProductWithAnalytics extends Product {
  chartData: Array<{
    day: string;
    orders: number;
  }>;
}

export default function AIDiscoveryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductWithAnalytics[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch products
        const { data: productsData, error: productsError } = await supabase
          .from("products")
          .select("*")
          .eq("is_active", true)
          .order("orders_this_month", { ascending: false });

        if (productsError) {
          console.error("Error fetching products:", productsError);
          setError("Failed to load products");
          setIsLoading(false);
          return;
        }

        // Fetch analytics data for all products
        const { data: analyticsData, error: analyticsError } = await supabase
          .from("product_analytics")
          .select("*")
          .order("date", { ascending: true });

        if (analyticsError) {
          console.error("Error fetching analytics:", analyticsError);
        }

        // Map analytics to products
        const productsWithAnalytics: ProductWithAnalytics[] = (productsData || []).map((product) => {
          const productAnalytics = (analyticsData || []).filter(
            (analytics) => analytics.product_id === product.id
          );
          
          return {
            ...product,
            chartData: productAnalytics.map((analytics) => ({
              day: analytics.day_name,
              orders: analytics.orders,
            })),
          };
        });

        setProducts(productsWithAnalytics);
        
        // Simulate loading time for better UX
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="space-y-4">
      {/* Compact Header with Metrics in Same Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <IconAI className="h-7 w-7 text-[#1E40AF]" />
          <h1 className="text-2xl font-bold text-gray-900">AI Product Discovery</h1>
          <span className="rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] px-2.5 py-1 text-xs font-semibold text-white">
            New
          </span>
        </div>

        {/* Quick Stats - Compact */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#1E40AF]/5 to-[#3B82F6]/5">
            <IconTrendingUp className="h-4 w-4 text-[#1E40AF]" />
            <span className="font-semibold text-gray-900">{products.length}</span>
            <span className="text-gray-600">Products</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#1E40AF]/5 to-[#3B82F6]/5">
            <IconAI className="h-4 w-4 text-[#3B82F6]" />
            <span className="font-semibold text-gray-900">
              {products.filter(p => (p.ali_score || 0) > 130).length}
            </span>
            <span className="text-gray-600">High Score</span>
          </div>
        </div>
      </div>

      {/* Search and Filters - Compact */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search products..."
            className="pl-10 h-10 border-gray-300 focus-visible:ring-[#1E40AF]"
          />
        </div>
        <Button
          variant="outline"
          className="h-10 px-3 border-gray-300 hover:border-[#1E40AF] hover:text-[#1E40AF]"
        >
          <IconFilters className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Button
          variant="outline"
          className="h-10 px-3 border-gray-300 hover:border-[#1E40AF] hover:text-[#1E40AF]"
        >
          <IconSort className="h-4 w-4 mr-2" />
          Sort
        </Button>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600 font-medium">{error}</p>
          <p className="text-sm text-red-500 mt-1">Please check your database connection</p>
        </div>
      )}
      
      {/* Products Grid - 4 cards visible in viewport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))
        ) : products.length === 0 && !error ? (
          <div className="col-span-full bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <IconAI className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No products found</p>
            <p className="text-sm text-gray-500 mt-1">Add products to get started</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductAnalyticsCard
              key={product.id}
              id={product.id}
              imageUrl={product.image_url}
              productTitle={product.title}
              ordersThisMonth={product.orders_this_month || 0}
              totalOrders={product.total_orders || 0}
              buyPrice={Number(product.buy_price)}
              sellPrice={Number(product.sell_price)}
              profitMargin={Number(product.profit_margin) || 0}
              marginPercentage={Number(product.margin_percentage) || 0}
              aliScore={Number(product.ali_score) || 0}
              competitionScore={Number(product.competition_score) || 0}
              chartData={product.chartData}
              topCountry={{
                flag: product.top_country_flag || "🌎",
                name: product.top_country_code || "WW",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
