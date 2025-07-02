
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Crown, CreditCard, Calendar } from 'lucide-react';

const BillingInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Billing & Plan</h2>
        <p className="text-muted-foreground">Manage your subscription and view usage statistics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <Card className="glass-card border-blue-200/50 bg-blue-50/30 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-900">Pro Plan</CardTitle>
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Active</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-blue-900">$29<span className="text-sm font-normal">/month</span></p>
                <p className="text-sm text-blue-700">Billed monthly • Next billing: Feb 15, 2024</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-900">Plan includes:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>✓ Unlimited daily digests</li>
                  <li>✓ All integrations (Gmail, Slack, Notion, Zoom)</li>
                  <li>✓ Voice summaries & PDF downloads</li>
                  <li>✓ Advanced filtering & preferences</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button size="sm" variant="outline">Change Plan</Button>
                <Button size="sm" variant="outline">Cancel Subscription</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>This Month's Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Digests Generated</span>
                <span>23/∞</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>API Calls</span>
                <span>1,247/10,000</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage Used</span>
                <span>2.4GB/10GB</span>
              </div>
              <Progress value={24} className="h-2" />
            </div>

            <div className="pt-2 text-xs text-muted-foreground">
              <p>Resets on Feb 1, 2024</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing History */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Billing History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: '2024-01-15', amount: '$29.00', status: 'Paid', invoice: 'INV-001' },
              { date: '2023-12-15', amount: '$29.00', status: 'Paid', invoice: 'INV-002' },
              { date: '2023-11-15', amount: '$29.00', status: 'Paid', invoice: 'INV-003' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-white/20 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{item.date}</p>
                    <p className="text-xs text-muted-foreground">{item.invoice}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">{item.amount}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {item.status}
                  </span>
                  <Button size="sm" variant="ghost">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Options */}
      <Card className="glass-card border-purple-200/50 bg-purple-50/30">
        <CardHeader>
          <CardTitle className="text-purple-900">Upgrade to Enterprise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-purple-700 mb-2">
                Need more integrations, custom workflows, or team features?
              </p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>✓ Custom integrations & webhooks</li>
                <li>✓ Team collaboration features</li>
                <li>✓ Advanced analytics & reporting</li>
                <li>✓ Dedicated account manager</li>
              </ul>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 shrink-0">
              Contact Sales
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingInfo;
