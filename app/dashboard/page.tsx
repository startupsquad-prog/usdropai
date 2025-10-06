import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Active Products",
      value: "89",
      change: "+4.2%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.4%",
      trend: "down",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-semibold hover:border-[#1E40AF] hover:text-[#1E40AF] transition-all">
            <Sparkles className="h-4 w-4" />
            AI Insights
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border-2 border-gray-100 hover:border-[#1E40AF]/30 hover:shadow-lg transition-all"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-[#1E40AF]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div
                  className={`flex items-center text-sm font-semibold ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">vs last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <Card className="border-2 border-gray-100">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Your latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-semibold">
                      #{i}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        Order #{1000 + i}
                      </p>
                      <p className="text-xs text-gray-500">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-gray-900">
                      ${(45 + i * 10).toFixed(2)}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-2 border-gray-100">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Your best selling items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Premium Wireless Headphones", sales: 145 },
                { name: "Smart Watch Pro", sales: 132 },
                { name: "USB-C Cable Set", sales: 98 },
                { name: "Phone Case Ultra", sales: 87 },
              ].map((product, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1E40AF]/20 to-[#3B82F6]/20 flex items-center justify-center">
                      <Package className="h-5 w-5 text-[#1E40AF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.sales} sales
                      </p>
                    </div>
                  </div>
                  <div className="h-2 w-20 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]"
                      style={{ width: `${(product.sales / 145) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Get started with these common tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { label: "Add Product", icon: Package, color: "blue" },
              { label: "Import Products", icon: Sparkles, color: "purple" },
              { label: "View Orders", icon: ShoppingCart, color: "green" },
              { label: "Analytics", icon: TrendingUp, color: "orange" },
            ].map((action, i) => (
              <button
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-200 bg-white hover:border-[#1E40AF] hover:shadow-lg transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 flex items-center justify-center mb-3 group-hover:from-[#1E40AF] group-hover:to-[#3B82F6] transition-all">
                  <action.icon className="h-6 w-6 text-[#1E40AF] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1E40AF]">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

