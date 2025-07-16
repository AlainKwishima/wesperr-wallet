"use client"

import { Bell, CheckCircle, Trash2, DollarSign, Gift, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "transaction",
      title: "Payment Received",
      description: "You received a payment of $1,250.00 from John Smith.",
      time: "2 min ago",
      read: false,
      icon: DollarSign,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      type: "system",
      title: "System Update Available",
      description: "A new version of the app is available. Update now for new features.",
      time: "1 hour ago",
      read: false,
      icon: Bell,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      type: "promotion",
      title: "Special Offer: 10% Off",
      description: "Enjoy 10% off on your next 3 transactions this week!",
      time: "3 hours ago",
      read: true,
      icon: Gift,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      type: "security",
      title: "Unusual Login Activity",
      description: "We detected a login from an unrecognized device. Please review.",
      time: "Yesterday",
      read: false,
      icon: ShieldAlert,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: 5,
      type: "transaction",
      title: "Subscription Renewal",
      description: "Your Netflix subscription of $15.99 has been renewed.",
      time: "Yesterday",
      read: true,
      icon: DollarSign,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: 6,
      type: "system",
      title: "Maintenance Scheduled",
      description: "Scheduled maintenance on Jan 20, 2024, from 2 AM to 4 AM UTC.",
      time: "2 days ago",
      read: true,
      icon: Bell,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ])

  const [filter, setFilter] = useState("all") // 'all', 'unread', 'system', 'transaction', 'promotion', 'security'

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true
    if (filter === "unread") return !notification.read
    return notification.type === filter
  })

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with your account activities</p>
        </div>
        <Button onClick={markAllAsRead} className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
          <CheckCircle className="w-4 h-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-card border-0 shadow-sm mb-6">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              All ({notifications.length})
            </Button>
            <Button
              variant={filter === "unread" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("unread")}
              className={filter === "unread" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              Unread ({notifications.filter((n) => !n.read).length})
            </Button>
            <Button
              variant={filter === "system" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("system")}
              className={filter === "system" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              System
            </Button>
            <Button
              variant={filter === "transaction" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("transaction")}
              className={filter === "transaction" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              Transactions
            </Button>
            <Button
              variant={filter === "promotion" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("promotion")}
              className={filter === "promotion" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              Promotions
            </Button>
            <Button
              variant={filter === "security" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("security")}
              className={filter === "security" ? "bg-purple-500 hover:bg-purple-600" : ""}
            >
              Security
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <Card className="bg-card border-0 shadow-sm">
        <CardContent className="p-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">No notifications found.</div>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    notification.read ? "bg-muted/50" : "bg-accent hover:bg-accent/80"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.bgColor}`}
                  >
                    <notification.icon className={`w-5 h-5 ${notification.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{notification.title}</p>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs bg-transparent"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <CheckCircle className="w-3 h-3 mr-1" /> Mark as Read
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs bg-transparent"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="w-3 h-3 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
