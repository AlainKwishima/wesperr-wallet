"use client"

import { Bell, Shield, Palette, Globe, Download, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsPage() {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1> {/* Updated */}
          <p className="text-muted-foreground">Customize your app preferences</p> {/* Updated */}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-muted-foreground">Manage your notification preferences</p> {/* Updated */}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Get updates via email</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Transaction Alerts</p>
                  <p className="text-sm text-muted-foreground">Instant alerts for transactions</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Promotional content and offers</p> {/* Updated */}
                </div>
                <Switch className="flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Security</h3>
                <p className="text-sm text-muted-foreground">Keep your account secure</p> {/* Updated */}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Extra security for your account</p> {/* Updated */}
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Biometric Login</p>
                  <p className="text-sm text-muted-foreground">Use fingerprint or face ID</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Auto logout after inactivity</p> {/* Updated */}
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-full sm:w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Login Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified of new logins</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Appearance</h3>
                <p className="text-sm text-muted-foreground">Customize the look and feel</p> {/* Updated */}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Switch to dark theme</p> {/* Updated */}
                </div>
                <Switch className="flex-shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Theme Color</p>
                  <p className="text-sm text-muted-foreground">Choose your accent color</p> {/* Updated */}
                </div>
                <Select defaultValue="purple">
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Compact Mode</p>
                  <p className="text-sm text-muted-foreground">Reduce spacing and padding</p> {/* Updated */}
                </div>
                <Switch className="flex-shrink-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Language & Region</h3>
                <p className="text-sm text-muted-foreground">Set your preferences</p> {/* Updated */}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-muted-foreground">Choose your language</p> {/* Updated */}
                </div>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Currency</p>
                  <p className="text-sm text-muted-foreground">Default currency display</p> {/* Updated */}
                </div>
                <Select defaultValue="usd">
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Time Zone</p>
                  <p className="text-sm text-muted-foreground">Your local time zone</p> {/* Updated */}
                </div>
                <Select defaultValue="est">
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">EST</SelectItem>
                    <SelectItem value="pst">PST</SelectItem>
                    <SelectItem value="cst">CST</SelectItem>
                    <SelectItem value="mst">MST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data & Privacy */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Data & Privacy</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Data Export</p>
                  <p className="text-sm text-muted-foreground">Download your account data</p> {/* Updated */}
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium">Analytics</p>
                  <p className="text-sm text-muted-foreground">Help improve our services</p> {/* Updated */}
                </div>
                <Switch defaultChecked className="flex-shrink-0" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account</p> {/* Updated */}
                </div>
                <Button variant="destructive" size="sm" className="w-full sm:w-auto">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">Data Retention</p>
                  <p className="text-sm text-muted-foreground">How long we keep your data</p> {/* Updated */}
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                  View Policy
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
