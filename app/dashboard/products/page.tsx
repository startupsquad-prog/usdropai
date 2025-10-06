import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">
            Manage your product catalog
          </p>
        </div>
        <Button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="border-2 border-gray-100">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Products</CardTitle>
              <CardDescription>A list of all your products</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64 border-gray-300 focus-visible:ring-[#1E40AF]"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 mb-4">
              <Plus className="h-8 w-8 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No products yet
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by adding your first product
            </p>
            <Button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Product
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

