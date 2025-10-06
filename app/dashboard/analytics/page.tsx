import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">
            Track your store's performance and insights
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            View detailed analytics about your store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 mb-4">
              <BarChart3 className="h-8 w-8 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Analytics Coming Soon
            </h3>
            <p className="text-gray-500">
              Detailed analytics and insights will be available here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

