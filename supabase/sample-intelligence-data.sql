-- Sample Intelligence Data for Products
-- Run this to populate new intelligence fields with realistic data

UPDATE products
SET
  -- AI Summary (dynamic based on performance)
  ai_summary = CASE 
    WHEN RANDOM() > 0.5 THEN 'DropAI predicts strong ROI potential with verified supplier network and consistent market demand across US regions.'
    ELSE 'High-demand product showing stable growth trends. Excellent profit margins with low competition in key markets.'
  END,
  
  -- Audience Segment (category-based)
  audience_segment = CASE 
    WHEN category LIKE '%Home%' THEN '25-44 US Homeowners & DIY Enthusiasts'
    WHEN category LIKE '%Elect%' THEN '18-34 US Tech Enthusiasts'
    WHEN category LIKE '%Fashion%' THEN '25-40 Fashion-Forward Professionals'
    ELSE '25-34 US Online Shoppers'
  END,
  
  -- Market Focus
  country_focus = 'US',
  
  -- Trend Status (based on order volume)
  trend_status = CASE 
    WHEN orders_this_month > 800 THEN 'hot'
    WHEN orders_this_month > 500 THEN 'rising'
    ELSE 'stable'
  END,
  
  -- DropAI Score (6.5-9.5 range)
  drop_score = 6.5 + (RANDOM() * 3),
  
  -- Active Ad Campaigns (20-80 range)
  ad_campaigns_active = FLOOR(20 + RANDOM() * 60)::INTEGER,
  
  -- Suggested Margin (5-15% range)
  suggested_margin = FLOOR(5 + RANDOM() * 10)::NUMERIC,
  
  -- Supplier Information
  supplier_source = 'aliexpress',
  supplier_url = 'https://www.aliexpress.com/item/' || FLOOR(RANDOM() * 1000000000)::TEXT || '.html',
  
  -- Platform URLs
  amazon_url = 'https://www.amazon.com/dp/B0' || SUBSTRING(MD5(RANDOM()::TEXT), 1, 8),
  facebook_ads_url = 'https://www.facebook.com/ads/library/?id=' || FLOOR(RANDOM() * 1000000000)::TEXT,
  
  -- Ad Performance Metrics
  ctr_rate = 2.0 + (RANDOM() * 2), -- 2-4% CTR
  cpm_rate = 0.30 + (RANDOM() * 0.50), -- $0.30-$0.80 CPM
  
  -- Supplier Reliability (4-5 stars)
  supplier_reliability = 4.0 + (RANDOM() * 1),
  
  -- AI Prediction JSON
  usdrop_prediction = jsonb_build_object(
    'roi', FLOOR(60 + RANDOM() * 40), -- 60-100% ROI
    'confidence', ROUND((0.70 + RANDOM() * 0.25)::NUMERIC, 2), -- 70-95% confidence
    'trend', 'positive',
    'risk_level', 'low'
  )
WHERE is_active = true;

-- Verify the update
SELECT 
  id, 
  title, 
  drop_score, 
  trend_status, 
  ad_campaigns_active,
  supplier_reliability,
  ctr_rate,
  cpm_rate
FROM products 
WHERE is_active = true 
ORDER BY drop_score DESC
LIMIT 5;

