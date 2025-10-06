import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
        <p className="text-gray-500 mt-1">
          Manage your subscription and billing information
        </p>
      </div>

      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Subscription & Billing</CardTitle>
          <CardDescription>
            View and manage your subscription plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 mb-4">
              <CreditCard className="h-8 w-8 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Billing Information
            </h3>
            <p className="text-gray-500">
              Your billing details will be displayed here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

