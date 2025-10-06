"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { Tables } from "@/lib/types/database.types";
import { ProductHero } from "@/components/product/ProductHero";

type Product = Tables<"products">;

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [allProductIds, setAllProductIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Fetch current product
        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("id", productId)
          .eq("is_active", true)
          .single();

        if (productError) {
          console.error("Error fetching product:", productError);
          return;
        }

        setProduct(productData);

        // Fetch all product IDs for next/prev navigation
        const { data: allProducts, error: allError } = await supabase
          .from("products")
          .select("id")
          .eq("is_active", true)
          .order("orders_this_month", { ascending: false });

        if (!allError && allProducts) {
          setAllProductIds(allProducts.map(p => p.id));
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Unexpected error:", err);
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handlers
  const currentIndex = allProductIds.indexOf(productId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allProductIds.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      router.push(`/dashboard/ai-discovery/${allProductIds[currentIndex - 1]}`);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      router.push(`/dashboard/ai-discovery/${allProductIds[currentIndex + 1]}`);
    }
  };

  const handleBack = () => {
    router.push("/dashboard/ai-discovery");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#1E40AF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 font-medium">Product not found</p>
          <Button onClick={handleBack} className="mt-4">
            Back to Discovery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div
        className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Breadcrumb & Back Button */}
            <div className="flex items-center gap-4 flex-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="h-10 w-10 text-gray-600 hover:bg-gray-100 hover:text-[#1E40AF] transition-colors"
              >
                <IconArrowLeft className="h-5 w-5" />
              </Button>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={handleBack}
                  className="text-gray-600 hover:text-[#1E40AF] transition-colors font-medium"
                >
                  AI Product Discovery
                </button>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 font-semibold truncate max-w-md">
                  {product.title}
                </span>
              </div>

              {/* Compact Product Info (visible when scrolled) */}
              {isScrolled && (
                <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1E40AF] flex-shrink-0">
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900 truncate max-w-xs">
                      {product.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${Number(product.sell_price).toFixed(2)} • {product.orders_this_month} orders/month
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Next/Prev Navigation */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className={`h-10 w-10 border-gray-300 ${
                  hasPrevious
                    ? "hover:border-[#1E40AF] hover:text-[#1E40AF] text-gray-700"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <IconChevronLeft className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-600 font-medium px-2 hidden sm:inline">
                {currentIndex + 1} / {allProductIds.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={!hasNext}
                className={`h-10 w-10 border-gray-300 ${
                  hasNext
                    ? "hover:border-[#1E40AF] hover:text-[#1E40AF] text-gray-700"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <IconChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Product Hero Section */}
        <ProductHero product={product} />

        {/* Sections will go here */}
        <div className="space-y-6">
          {/* Section placeholders */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Product Analytics</h2>
            <p className="text-gray-600">Analytics section coming soon...</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Market Insights</h2>
            <p className="text-gray-600">Market insights section coming soon...</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Supplier Information</h2>
            <p className="text-gray-600">Supplier details section coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

