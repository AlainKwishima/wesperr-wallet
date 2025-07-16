"use client"

import { ArrowUpRight, ArrowDownLeft, Filter, Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      type: "income",
      description: "Salary Payment",
      amount: "+$3,500.00",
      date: "2024-01-15",
      time: "10:30 AM",
      category: "Salary",
      status: "completed",
    },
    {
      id: 2,
      type: "expense",
      description: "Grocery Shopping",
      amount: "-$125.50",
      date: "2024-01-14",
      time: "2:15 PM",
      category: "Food",
      status: "completed",
    },
    {
      id: 3,
      type: "income",
      description: "Freelance Project",
      amount: "+$850.00",
      date: "2024-01-13",
      time: "4:45 PM",
      category: "Freelance",
      status: "completed",
    },
    {
      id: 4,
      type: "expense",
      description: "Netflix Subscription",
      amount: "-$15.99",
      date: "2024-01-12",
      time: "12:00 PM",
      category: "Entertainment",
      status: "completed",
    },
    {
      id: 5,
      type: "expense",
      description: "Gas Station",
      amount: "-$45.00",
      date: "2024-01-11",
      time: "8:20 AM",
      category: "Transportation",
      status: "pending",
    },
  ]

  const categories = [
    { name: "All", count: 156, active: true },
    { name: "Income", count: 45, active: false },
    { name: "Expenses", count: 111, active: false },
    { name: "Pending", count: 8, active: false },
  ]

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Transactions</h1> {/* Updated */}
          <p className="text-muted-foreground">Track all your financial activities</p> {/* Updated */}
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Total Income</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-green-600">$4,350</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowDownLeft className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Total Expenses</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-red-600">$1,186</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Net Balance</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-purple-600">$3,164</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Transactions</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-blue-600">156</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Filter className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={category.active ? "bg-purple-500 hover:bg-purple-600" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-accent rounded-lg">
                {" "}
                {/* Updated */}
                <div className="flex items-center space-x-4 min-w-0">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      transaction.type === "income" ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900" // Updated
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowDownLeft className={`w-5 h-5 lg:w-6 lg:h-6 text-green-600 dark:text-green-300`} /> // Updated
                    ) : (
                      <ArrowUpRight className={`w-5 h-5 lg:w-6 lg:h-6 text-red-600 dark:text-red-300`} /> // Updated
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {" "}
                      {/* Updated */}
                      {transaction.date} • {transaction.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
                  <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                    {transaction.category}
                  </Badge>
                  <Badge
                    variant={transaction.status === "completed" ? "default" : "secondary"}
                    className={`text-xs hidden lg:inline-flex ${transaction.status === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : ""}`} // Updated
                  >
                    {transaction.status}
                  </Badge>
                  <p className={`font-semibold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
