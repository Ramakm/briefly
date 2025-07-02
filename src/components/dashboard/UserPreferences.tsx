
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const UserPreferences = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Preferences</h2>
        <p className="text-muted-foreground">Customize your digest and notification settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Digest Settings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Daily Digest</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Delivery Time</label>
              <Select defaultValue="8am">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6am">6:00 AM</SelectItem>
                  <SelectItem value="7am">7:00 AM</SelectItem>
                  <SelectItem value="8am">8:00 AM</SelectItem>
                  <SelectItem value="9am">9:00 AM</SelectItem>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Summary Length</label>
              <Select defaultValue="balanced">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brief">Brief (1-2 sentences)</SelectItem>
                  <SelectItem value="balanced">Balanced (3-4 sentences)</SelectItem>
                  <SelectItem value="detailed">Detailed (5+ sentences)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Voice Summary</p>
                <p className="text-xs text-muted-foreground">Enable text-to-speech for summaries</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Weekend Digest</p>
                <p className="text-xs text-muted-foreground">Receive summaries on weekends</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Email Priorities */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Email Priorities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Select which emails to prioritize in your digest</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="starred" defaultChecked />
                <label htmlFor="starred" className="text-sm font-medium">Starred emails</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="important" defaultChecked />
                <label htmlFor="important" className="text-sm font-medium">Important markers</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="unread" defaultChecked />
                <label htmlFor="unread" className="text-sm font-medium">Unread emails</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mentions" />
                <label htmlFor="mentions" className="text-sm font-medium">Direct mentions</label>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <label className="text-sm font-medium text-foreground block mb-2">Skip folders</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="promotions" defaultChecked />
                  <label htmlFor="promotions" className="text-sm">Promotions</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="social" />
                  <label htmlFor="social" className="text-sm">Social</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="spam" defaultChecked />
                  <label htmlFor="spam" className="text-sm">Spam</label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Slack Settings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Slack Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Configure Slack monitoring settings</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="dm" defaultChecked />
                <label htmlFor="dm" className="text-sm font-medium">Direct messages</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mentions-slack" defaultChecked />
                <label htmlFor="mentions-slack" className="text-sm font-medium">@mentions</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="keywords" />
                <label htmlFor="keywords" className="text-sm font-medium">Keyword alerts</label>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <label className="text-sm font-medium text-foreground block mb-2">Monitor channels</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="general" defaultChecked />
                  <label htmlFor="general" className="text-sm">#general</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dev-team" defaultChecked />
                  <label htmlFor="dev-team" className="text-sm">#dev-team</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <label htmlFor="marketing" className="text-sm">#marketing</label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email notifications</p>
                <p className="text-xs text-muted-foreground">Get digest via email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Push notifications</p>
                <p className="text-xs text-muted-foreground">Browser notifications</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Urgent alerts</p>
                <p className="text-xs text-muted-foreground">Immediate notifications for urgent items</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="pt-4">
              <Button className="w-full">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserPreferences;
