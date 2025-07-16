"use client"

import { useState, useEffect } from "react"
import { Search, Bell, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

// Import all page components
import { DashboardPage } from "@/components/dashboard-page"
import { MyCardsPage } from "@/components/my-cards-page"
import { PaymentsPage } from "@/components/payments-page"
import { TransactionsPage } from "@/components/transactions-page"
import { StatisticsPage } from "@/components/statistics-page"
import NotificationsPage from "@/components/notifications-page"
import { ProfilePage } from "@/components/profile-page"
import { SettingsPage } from "@/components/settings-page"

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", color: "purple" },
  { id: "my-cards", label: "My Cards", icon: "cards", color: "green" },
  { id: "payments", label: "Payments", icon: "payments", color: "teal" },
  { id: "transactions", label: "Transactions", icon: "transactions", color: "blue" },
  { id: "statistics", label: "Statistics", icon: "statistics", color: "red" },
]

const otherItems = [
  { id: "notifications", label: "Notifications", icon: "notifications", color: "purple" },
  { id: "profile", label: "Profile", icon: "profile", color: "orange" },
  { id: "settings", label: "Settings", icon: "settings", color: "gray" },
]

function NavigationItem({ item, isActive, onClick }: { item: any; isActive: boolean; onClick: () => void }) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    teal: "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    red: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
    gray: "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300",
  }

  return (
    <div
      className={`p-3 flex items-center space-x-3 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive ? "bg-purple-100 dark:bg-purple-900" : "hover:bg-gray-50 dark:hover:bg-gray-800"
      }`}
      onClick={onClick}
    >
      <div className={`w-6 h-6 ${colorClasses[item.color]} rounded-md flex items-center justify-center flex-shrink-0`}>
        <div className="w-3 h-3 bg-current rounded-sm"></div>
      </div>
      <span
        className={`text-sm font-medium truncate ${isActive ? "text-purple-700 dark:text-purple-300" : "text-gray-600 dark:text-gray-300"}`}
      >
        {item.label}
      </span>
    </div>
  )
}

function Sidebar({ currentPage, setCurrentPage }: any) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (mounted) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
  }

  return (
    <div className="h-full flex flex-col bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">Wesperr</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={currentPage === item.id}
            onClick={() => setCurrentPage(item.id)}
          />
        ))}

        <div className="pt-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-3">Others</p>
          <div className="space-y-2">
            {otherItems.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isActive={currentPage === item.id}
                onClick={() => setCurrentPage(item.id)}
              />
            ))}
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">Dark mode</span>
          <Switch checked={mounted ? resolvedTheme === "dark" : false} onCheckedChange={handleThemeToggle} />
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (mounted) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />
      case "my-cards":
        return <MyCardsPage />
      case "payments":
        return <PaymentsPage />
      case "transactions":
        return <TransactionsPage />
      case "statistics":
        return <StatisticsPage />
      case "notifications":
        return <NotificationsPage />
      case "profile":
        return <ProfilePage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex h-screen">
          <div className="hidden lg:block w-64 flex-shrink-0 bg-gray-50 border-r"></div>
          <div className="flex-1 flex flex-col">
            <header className="bg-white border-b p-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Wesperr</h1>
              </div>
            </header>
            <main className="flex-1 bg-gray-50"></main>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0 bg-card">
            <Sidebar
              currentPage={currentPage}
              setCurrentPage={(page: string) => {
                setCurrentPage(page)
                setSidebarOpen(false)
              }}
            />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <header className="flex-shrink-0 bg-card border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="w-5 h-5" />
                </Button>
                <h1 className="text-xl font-bold text-foreground hidden sm:block">Wesperr</h1>
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search here everything..."
                    className="pl-10 h-10 bg-muted border-0 rounded-xl text-sm w-full"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleThemeToggle} className="hidden sm:flex">
                  {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-500 text-white text-xs">YD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto bg-background">
            <div className="h-full">{renderPage()}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
