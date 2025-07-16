"use client"

import { Plus, MoreHorizontal, Eye, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MyCardsPage() {
  const cards = [
    {
      id: 1,
      name: "Primary Card",
      number: "•••• •••• •••• 3456",
      balance: "$4,544",
      type: "Visa",
      expiry: "09/22",
      holder: "Yoon Darim",
      gradient: "from-pink-300 via-purple-400 to-purple-600",
      isActive: true,
    },
    {
      id: 2,
      name: "Business Card",
      number: "•••• •••• •••• 7890",
      balance: "$12,890",
      type: "Mastercard",
      expiry: "12/24",
      holder: "Yoon Darim",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      isActive: true,
    },
    {
      id: 3,
      name: "Savings Card",
      number: "•••• •••• •••• 1234",
      balance: "$8,234",
      type: "Visa",
      expiry: "06/25",
      holder: "Yoon Darim",
      gradient: "from-green-400 via-green-500 to-green-600",
      isActive: false,
    },
  ]

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Cards</h1> {/* Updated */}
          <p className="text-muted-foreground">Manage your payment cards</p> {/* Updated */}
        </div>
        <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add New Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} className="bg-card border-0 shadow-sm">
            {" "}
            {/* Updated */}
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold truncate">{card.name}</h3>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <Badge variant={card.isActive ? "default" : "secondary"} className="text-xs">
                    {card.isActive ? "Active" : "Inactive"}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white relative overflow-hidden mb-4`}
              >
                <div className="absolute top-4 right-4">
                  <div className="flex">
                    <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full -ml-4"></div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm opacity-90 mb-1">Balance</p>
                  <p className="text-2xl font-bold">{card.balance}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm opacity-90 tracking-widest">{card.number}</p>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="opacity-80 text-xs">VALID THRU</p>
                    <p className="font-medium">09/22</p>
                  </div>
                  <div className="min-w-0">
                    <p className="opacity-80 text-xs">CARD HOLDER</p>
                    <p className="font-medium truncate">{card.holder}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">View Details</span>
                  <span className="sm:hidden">View</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Manage</span>
                  <span className="sm:hidden">Edit</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-0 shadow-sm">
        {" "}
        {/* Updated */}
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Card Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">3</p>
              <p className="text-sm text-muted-foreground">Total Cards</p> {/* Updated */}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">2</p>
              <p className="text-sm text-muted-foreground">Active Cards</p> {/* Updated */}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">$25,668</p>
              <p className="text-sm text-muted-foreground">Total Balance</p> {/* Updated */}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">$2,340</p>
              <p className="text-sm text-muted-foreground">Monthly Spending</p> {/* Updated */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
