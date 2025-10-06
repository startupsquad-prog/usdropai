import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Building, Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Picture */}
      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>Update your profile photo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src="/avatars/user.png" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-white font-bold text-2xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
              <p className="text-sm text-gray-500">
                JPG, PNG or GIF. Max size 2MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="border-2 border-gray-100">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="fullName"
                    defaultValue="John Doe"
                    className="pl-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="pl-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="company">Company Name</FieldLabel>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="pl-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </div>
              </Field>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB]"
              >
                Save Changes
              </Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

