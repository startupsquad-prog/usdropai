import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Store } from "lucide-react";

export default function StoresPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stores</h1>
          <p className="text-gray-500 mt-1">
            Connect and manage your online stores
          </p>
        </div>
        <Button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]">
          <Plus className="h-4 w-4 mr-2" />
          Connect Store
        </Button>
      </div>

      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Connected Stores</CardTitle>
          <CardDescription>
            Manage your connected e-commerce stores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 mb-4">
              <Store className="h-8 w-8 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No stores connected
            </h3>
            <p className="text-gray-500 mb-6">
              Connect your Shopify, WooCommerce, or other stores
            </p>
            <Button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]">
              <Plus className="h-4 w-4 mr-2" />
              Connect Your First Store
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

