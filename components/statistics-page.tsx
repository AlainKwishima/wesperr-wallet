"use client"

import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function StatisticsPage() {
  const monthlyData = [
    { month: "Jan", income: 4200, expenses: 2800 },
    { month: "Feb", income: 3800, expenses: 3200 },
    { month: "Mar", income: 4500, expenses: 2900 },
    { month: "Apr", income: 4100, expenses: 3100 },
    { month: "May", income: 4800, expenses: 3400 },
    { month: "Jun", income: 5200, expenses: 3600 },
  ]

  const categoryData = [
    { name: "Food & Dining", amount: 1250, percentage: 35, color: "bg-red-500" },
    { name: "Transportation", amount: 680, percentage: 19, color: "bg-blue-500" },
    { name: "Entertainment", amount: 520, percentage: 15, color: "bg-green-500" },
    { name: "Shopping", amount: 450, percentage: 13, color: "bg-yellow-500" },
    { name: "Bills & Utilities", amount: 380, percentage: 11, color: "bg-purple-500" },
    { name: "Others", amount: 270, percentage: 7, color: "bg-gray-500" },
  ]

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Statistics</h1> {/* Updated */}
          <p className="text-muted-foreground">Analyze your financial patterns</p> {/* Updated */}
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            This Month
          </Button>
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            Last 6 Months
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">This Year</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Average Income</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-green-600">$4,450</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
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
                <p className="text-sm text-muted-foreground">Average Expenses</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-red-600">$3,183</p>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8.3%
                </p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
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
                <p className="text-sm text-muted-foreground">Savings Rate</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-purple-600">28.5%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +3.2%
                </p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <PieChart className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
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
                <p className="text-sm text-muted-foreground">Monthly Growth</p> {/* Updated */}
                <p className="text-xl lg:text-2xl font-bold text-blue-600">+15.2%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +2.1%
                </p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Monthly Comparison Chart */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Income vs Expenses</h3>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium flex-shrink-0">{data.month}</div>
                  <div className="flex-1 flex items-center space-x-2 min-w-0">
                    <div className="flex-1 bg-muted rounded-full h-6 relative min-w-0">
                      {" "}
                      {/* Updated */}
                      <div
                        className="bg-green-500 h-6 rounded-full"
                        style={{ width: `${(data.income / 6000) * 100}%` }}
                      ></div>
                      <div
                        className="bg-red-500 h-6 rounded-full absolute top-0"
                        style={{ width: `${(data.expenses / 6000) * 100}%`, opacity: 0.7 }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground w-16 flex-shrink-0 text-right">
                      {" "}
                      {/* Updated */}${data.income - data.expenses}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-border">
              {" "}
              {/* Updated */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">Expenses</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <Card className="bg-card border-0 shadow-sm">
          {" "}
          {/* Updated */}
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
            <div className="space-y-4">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`w-4 h-4 ${category.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-sm font-medium truncate">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <div className="w-20 lg:w-24 bg-muted rounded-full h-2">
                      {" "}
                      {/* Updated */}
                      <div
                        className={`${category.color} h-2 rounded-full`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">{category.percentage}%</span>{" "}
                    {/* Updated */}
                    <span className="text-sm font-medium w-16 text-right">${category.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Goals */}
      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Financial Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="35%" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />{" "}
                  {/* Updated */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="35%"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(75 / 100) * 251.2} 251.2`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">75%</span>
                </div>
              </div>
              <p className="font-medium">Emergency Fund</p>
              <p className="text-sm text-muted-foreground">$7,500 / $10,000</p> {/* Updated */}
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="35%" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />{" "}
                  {/* Updated */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="35%"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(45 / 100) * 251.2} 251.2`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">45%</span>
                </div>
              </div>
              <p className="font-medium">Vacation Fund</p>
              <p className="text-sm text-muted-foreground">$2,250 / $5,000</p> {/* Updated */}
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="35%" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />{" "}
                  {/* Updated */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="35%"
                    stroke="#8b5cf6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(30 / 100) * 251.2} 251.2`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">30%</span>
                </div>
              </div>
              <p className="font-medium">Investment</p>
              <p className="text-sm text-muted-foreground">$6,000 / $20,000</p> {/* Updated */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
