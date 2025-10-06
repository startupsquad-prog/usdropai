import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your application settings and preferences
        </p>
      </div>

      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Configure your application preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 mb-4">
              <Settings className="h-8 w-8 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Settings Panel
            </h3>
            <p className="text-gray-500">
              Settings configuration will be available here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

