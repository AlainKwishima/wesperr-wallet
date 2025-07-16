"use client"

import { Send, Download, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function PaymentsPage() {
  const payments = [
    {
      id: 1,
      recipient: "John Smith",
      amount: "$1,250.00",
      date: "2024-01-15",
      status: "completed",
      type: "transfer",
      avatar: "JS",
    },
    {
      id: 2,
      recipient: "Netflix Subscription",
      amount: "$15.99",
      date: "2024-01-14",
      status: "completed",
      type: "subscription",
      avatar: "NF",
    },
    {
      id: 3,
      recipient: "Amazon Purchase",
      amount: "$89.99",
      date: "2024-01-13",
      status: "pending",
      type: "purchase",
      avatar: "AM",
    },
    {
      id: 4,
      recipient: "Sarah Johnson",
      amount: "$500.00",
      date: "2024-01-12",
      status: "completed",
      type: "transfer",
      avatar: "SJ",
    },
  ]

  const quickActions = [
    { name: "Send Money", icon: Send, color: "bg-purple-500" },
    { name: "Request Payment", icon: Download, color: "bg-blue-500" },
    { name: "Pay Bills", icon: Filter, color: "bg-green-500" },
    { name: "Top Up", icon: Search, color: "bg-orange-500" },
  ]

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments</h1> {/* Updated */}
          <p className="text-muted-foreground">Send, receive, and manage payments</p> {/* Updated */}
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
          <Send className="w-4 h-4 mr-2" />
          New Payment
        </Button>
      </div>

      {/* Quick Actions */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.name}
                variant="outline"
                className="h-20 flex-col space-y-2 hover:bg-accent bg-transparent" // Updated
              >
                <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center`}>
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-foreground text-center">{action.name}</span> {/* Updated */}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold">Recent Payments</h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />{" "}
                {/* Updated */}
                <Input placeholder="Search payments..." className="pl-10 w-full sm:w-64" />
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 hover:bg-accent rounded-lg">
                {" "}
                {/* Updated */}
                <div className="flex items-center space-x-4 min-w-0">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-100 text-purple-600">{payment.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{payment.recipient}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p> {/* Updated */}
                  </div>
                </div>
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <Badge
                    variant={payment.status === "completed" ? "default" : "secondary"}
                    className={`${payment.status === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : ""} hidden sm:inline-flex`} // Updated
                  >
                    {payment.status}
                  </Badge>
                  <p className="font-semibold">{payment.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">$3,456</p>
            <p className="text-sm text-muted-foreground">Total Sent</p> {/* Updated */}
          </CardContent>
        </Card>
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">$1,890</p>
            <p className="text-sm text-muted-foreground">Total Received</p> {/* Updated */}
          </CardContent>
        </Card>
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-blue-600">24</p>
            <p className="text-sm text-muted-foreground">Total Transactions</p> {/* Updated */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
