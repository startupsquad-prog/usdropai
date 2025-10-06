"use client";

import React from "react";
import { Tables } from "@/lib/types/database.types";
import { ProductGallery } from "./ProductGallery";
import { ProductMetrics } from "./ProductMetrics";
import { ProductActions } from "./ProductActions";
import { TypingText } from "@/components/ui/typing-text";
import { Badge } from "@/components/ui/badge";

type Product = Tables<"products">;

interface ProductHeroProps {
  product: Product;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  // Prepare images array (single image or multiple)
  const images = [product.image_url];

  // Calculate profit per sale
  const profitPerSale = product.profit_margin || product.sell_price - product.buy_price;

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 p-4 space-y-4">

      {/* Two-Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Panel - Product Gallery */}
        <div>
          <ProductGallery
            images={images}
            videoUrl={product.video_url}
            productTitle={product.title}
            badges={{
              trending: product.trend_status === "hot" || product.trend_status === "rising",
              verified: product.country_focus === "US",
              highProfit: (product.margin_percentage || 0) > 40,
            }}
            adStats={
              product.ctr_rate && product.cpm_rate
                ? {
                    region: `${product.country_focus || "US"}`,
                    ctr: product.ctr_rate,
                    cpm: product.cpm_rate,
                  }
                : undefined
            }
          />
        </div>

        {/* Right Panel - Product Intelligence */}
        <div className="space-y-4">
          {/* Product Title & Category */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">
              {product.title}
            </h1>
            {product.category && (
              <Badge variant="outline" className="text-[10px] font-medium">
                {product.category}
              </Badge>
            )}
          </div>

          {/* AI Summary with Typing Animation */}
          {product.ai_summary && (
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#1E40AF]">
                  DropAI Insight:
                </span>{" "}
                <TypingText text={product.ai_summary} speed={20} />
              </p>
            </div>
          )}

          {/* Pricing Metrics */}
          <ProductMetrics
            buyPrice={product.buy_price}
            sellPrice={product.sell_price}
            profitPerSale={profitPerSale}
            dropScore={product.drop_score || 7.5}
          />

          {/* Action Buttons */}
          <ProductActions
            supplierUrl={product.supplier_url}
            amazonUrl={product.amazon_url}
            facebookAdsUrl={product.facebook_ads_url}
            supplierSource={product.supplier_source || "aliexpress"}
          />
        </div>
      </div>
    </section>
  );
};

