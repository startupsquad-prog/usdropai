# Icon Quick Reference

## 🚀 Quick Start

```typescript
import { IconName } from "@/components/ui/icons";

<IconName className="w-5 h-5 text-blue-600" />
```

## 📖 Common Icons

| Icon | Name | Use Case |
|------|------|----------|
| 🏠 | `IconHome` | Dashboard home |
| 📦 | `IconOrders` | Orders, packages |
| 🛒 | `IconCart` | Shopping cart |
| 📊 | `IconAnalytics` | Analytics, reports |
| ⚙️ | `IconSettings` | Settings, config |
| 🏪 | `IconStore` | Stores, shops |
| ✨ | `IconAI` | AI features |
| ⚡ | `IconLightning` | Fast, premium |
| 📈 | `IconTrendingUp` | Growth, success |
| 🔍 | `IconSearch` | Search functionality |
| 🎯 | `IconCompetition` | Competition analysis |
| 💵 | `IconMoney` | Money, currency |
| 🔔 | `IconNotifications` | Notifications |
| 👤 | `IconUser` | User profile |

## 🎨 Size Classes

```typescript
w-3 h-3  // Extra small (12px)
w-4 h-4  // Small (16px)
w-5 h-5  // Medium (20px)
w-6 h-6  // Large (24px)
w-7 h-7  // Extra large (28px)
```

## 🎨 Color Classes

```typescript
text-[#1E40AF]    // Primary blue
text-[#3B82F6]    // Light blue
text-green-600    // Success
text-red-600      // Error
text-gray-500     // Muted
```

## 📚 Full Icon List

See `components/ui/icons.tsx` for complete list of 80+ icons.

## ❌ Don't Do

```typescript
// ❌ Direct lucide-react import
import { ShoppingCart } from "lucide-react";

// ❌ Emojis
<span>💰</span>

// ✅ Use centralized icons
import { IconCart } from "@/components/ui/icons";
```

