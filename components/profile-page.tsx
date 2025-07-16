"use client"

import { Edit, Camera, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProfilePage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1> {/* Updated */}
          <p className="text-muted-foreground">Manage your account information</p> {/* Updated */}
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-purple-100 text-purple-600 text-2xl">YD</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="text-xl font-bold mb-1">Yoon Darim</h3>
            <p className="text-muted-foreground mb-4">Premium Member</p> {/* Updated */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" /> {/* Updated */}
                <span className="truncate">yoon.darim@email.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" /> {/* Updated */}
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" /> {/* Updated */}
                <span>New York, USA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" /> {/* Updated */}
                <span>Member since Jan 2023</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <div className="xl:col-span-2 space-y-6">
          <Card className="bg-card border-0 shadow-sm">
            {" "}
            {/* Updated */}
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Yoon" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Darim" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="yoon.darim@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main Street, New York, NY 10001" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-sm">
            {" "}
            {/* Updated */}
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p> {/* Updated */}
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Enable
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p> {/* Updated */}
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Configure
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">Privacy Settings</p>
                    <p className="text-sm text-muted-foreground">Control your data visibility</p> {/* Updated */}
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-sm">
            {" "}
            {/* Updated */}
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Account Statistics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">156</p>
                  <p className="text-sm text-muted-foreground">Transactions</p> {/* Updated */}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">$25,668</p>
                  <p className="text-sm text-muted-foreground">Total Balance</p> {/* Updated */}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">3</p>
                  <p className="text-sm text-muted-foreground">Active Cards</p> {/* Updated */}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">98%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p> {/* Updated */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
