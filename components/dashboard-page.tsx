"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardPage() {
  const expenseData = [
    { day: 13, amount: 890 },
    { day: 14, amount: 187 },
    { day: 15, amount: 812 },
    { day: 16, amount: 129 },
    { day: 17, amount: 455 },
    { day: 18, amount: 86 },
    { day: 19, amount: 99 },
  ]

  const maxAmount = Math.max(...expenseData.map((d) => d.amount)) * 1.1

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-8 space-y-6">
          {/* Expenses Chart */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Expenses</h2>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-8">
                  Monthly <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>

              {/* Month tabs */}
              <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
                {["March", "April", "May", "June", "July", "Aug"].map((month, index) => (
                  <button
                    key={month}
                    className={`text-sm whitespace-nowrap px-3 py-1 rounded-md transition-colors duration-200 ${
                      index === 0
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        : "text-muted-foreground hover:bg-muted dark:hover:bg-accent"
                    }`}
                  >
                    {month}
                  </button>
                ))}
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 self-center" />
              </div>

              {/* Chart */}
              <div className="relative h-48 flex items-end overflow-x-auto pb-4 pt-4">
                <div className="flex items-end justify-between space-x-6 min-w-max h-full w-full">
                  {expenseData.map((data) => {
                    const mainBarHeight = (data.amount / maxAmount) * 140
                    const capHeight = 6

                    return (
                      <div
                        key={data.day}
                        className="flex flex-col items-center justify-end h-full flex-shrink-0 w-8 group"
                      >
                        <div className="flex flex-col items-center justify-end h-40 w-full">
                          {/* Main bar */}
                          <div
                            className={`w-6 rounded-t-sm transition-all duration-300 ease-out 
                            ${data.day === 17 ? "bg-purple-600 dark:bg-purple-400" : "bg-purple-400 group-hover:bg-purple-500 dark:bg-purple-600 dark:group-hover:bg-purple-500"}`}
                            style={{ height: `${mainBarHeight}px` }}
                          ></div>
                          {/* Cap bar - a lighter shade on top */}
                          <div
                            className={`w-6 rounded-b-sm ${data.day === 17 ? "bg-purple-300 dark:bg-purple-200" : "bg-purple-200 dark:bg-purple-100"}`}
                            style={{ height: `${capHeight}px` }}
                          ></div>
                        </div>
                        {/* Day label */}
                        <span
                          className={`text-xs mt-2 ${data.day === 17 ? "font-semibold text-purple-700 dark:text-purple-300" : "text-muted-foreground"}`}
                        >
                          {data.day}
                        </span>
                        {/* Amount label */}
                        <span
                          className={`text-xs mt-1 ${data.day === 17 ? "font-semibold text-purple-600 dark:text-purple-400" : "text-muted-foreground"}`}
                        >
                          ${data.amount}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income Chart */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Income</h2>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-8">
                  Weekly <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>

              {/* Income Chart */}
              <div className="relative h-24 mb-4">
                <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 50 Q 50 30 100 40 T 200 35 T 300 45 T 400 40"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 0 60 Q 50 40 100 50 T 200 45 T 300 55 T 400 50"
                    stroke="hsl(var(--border))"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    fill="none"
                  />
                  <circle cx="180" cy="35" r="3" fill="#8B5CF6" />
                  <rect x="168" y="20" width="24" height="12" rx="6" fill="#8B5CF6" />
                  <text x="180" y="28" textAnchor="middle" fill="white" fontSize="8">
                    $455
                  </text>
                </svg>
              </div>

              {/* Days */}
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="xl:col-span-4 space-y-4">
          {/* Your Cards */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Your Cards</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-6 text-xs">
                  Show all <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-pink-300 via-purple-400 to-purple-600 rounded-2xl p-4 lg:p-6 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/30 rounded-full"></div>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full -ml-4 lg:-ml-6"></div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-8">
                  <p className="text-sm opacity-90 mb-1">Balance</p>
                  <p className="text-2xl lg:text-3xl font-bold">$4,544</p>
                </div>

                <div className="mb-4 lg:mb-6">
                  <p className="text-sm opacity-90 tracking-widest">•••• •••• •••• 3456</p>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="opacity-80 text-xs">VALID THRU</p>
                    <p className="font-medium">09/22</p>
                  </div>
                  <div>
                    <p className="opacity-80 text-xs">CARD HOLDER</p>
                    <p className="font-medium truncate">Yoon Darim</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Summary */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Wallet Summary</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-6 text-xs">
                  Weekly <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="hsl(var(--border))" strokeWidth="4" fill="none" />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#ef4444"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${(460 / 1440) * 125.6} 125.6`}
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">Outcome</p>
                    <p className="text-lg font-semibold">$460.00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="hsl(var(--border))" strokeWidth="4" fill="none" />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${(980 / 1440) * 125.6} 125.6`}
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">Income</p>
                    <p className="text-lg font-semibold">$980.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-card border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Recent Transactions</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-6 text-xs">
                  Show all
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 min-w-0">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-red-100 text-red-600 text-xs">AB</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">Ahn Balarine</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-green-600 flex-shrink-0">+$12,599.00</p>
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 min-w-0">
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">JJ</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">James Johnny</p>
                        <p className="text-xs text-muted-foreground truncate">Receipt of funds</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold">-$635.00</p>
                      <p className="text-xs text-muted-foreground">10 June 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
