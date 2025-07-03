import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar } from "lucide-react"

const TodaysDigest = () => {
  const digestData = {
    email: {
      summary:
        "15 new emails today. Key highlights: 3 urgent client requests, 2 meeting invites for next week, and 5 newsletter updates.",
      items: [
        { subject: "Urgent: Project deadline moved", sender: "john@company.com", priority: "high" },
        { subject: "Weekly team sync - Tomorrow 2PM", sender: "sarah@company.com", priority: "medium" },
        { subject: "Q4 Financial Report", sender: "finance@company.com", priority: "medium" },
      ],
    },
    slack: {
      summary: "32 messages across 8 channels. Most active: #general (12), #dev-team (8), #marketing (6).",
      items: [
        { channel: "#general", message: "New company policy updates", author: "HR Team" },
        { channel: "#dev-team", message: "Code review needed for PR #234", author: "Mike Dev" },
        { channel: "#marketing", message: "Campaign results are in!", author: "Lisa Marketing" },
      ],
    },
  }

  return (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Today's Digest</span>
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: 8:30 AM</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="slack">Slack</TabsTrigger>
              <TabsTrigger value="notion">Notion</TabsTrigger>
              <TabsTrigger value="zoom">Zoom</TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="mt-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-200/50">
                  <p className="text-sm text-muted-foreground mb-3">AI Summary</p>
                  <p className="text-foreground">{digestData.email.summary}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Messages</h4>
                  {digestData.email.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-white/20"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.subject}</p>
                        <p className="text-xs text-muted-foreground">{item.sender}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button size="sm">Read Full</Button>
                  <Button size="sm" variant="outline">
                    Play Audio
                  </Button>
                  <Button size="sm" variant="outline">
                    Download PDF
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="slack" className="mt-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50/50 rounded-lg border border-green-200/50">
                  <p className="text-sm text-muted-foreground mb-3">AI Summary</p>
                  <p className="text-foreground">{digestData.slack.summary}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Important Messages</h4>
                  {digestData.slack.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-white/20"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.channel} • {item.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button size="sm">Read Full</Button>
                  <Button size="sm" variant="outline">
                    Play Audio
                  </Button>
                  <Button size="sm" variant="outline">
                    Download PDF
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notion" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Notion integration coming soon!</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Connect Notion
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="zoom" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Zoom integration coming soon!</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Connect Zoom
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default TodaysDigest
