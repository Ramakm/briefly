
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Clock } from 'lucide-react';

const IntegrationsPanel = () => {
  const integrations = [
    {
      name: 'Gmail',
      status: 'connected',
      lastSync: '2 minutes ago',
      icon: '📧',
      description: 'Sync your email for daily summaries'
    },
    {
      name: 'Slack',
      status: 'connected',
      lastSync: '5 minutes ago',
      icon: '💬',
      description: 'Monitor important channel messages'
    },
    {
      name: 'Notion',
      status: 'disconnected',
      lastSync: 'Never',
      icon: '📝',
      description: 'Track page updates and mentions'
    },
    {
      name: 'Zoom',
      status: 'disconnected',
      lastSync: 'Never',
      icon: '🎥',
      description: 'Get meeting summaries and recordings'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Integrations</h2>
        <p className="text-muted-foreground">Connect your favorite tools to get personalized summaries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  integration.status === 'connected'
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}>
                  {integration.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Last sync: {integration.lastSync}</span>
                </div>
                <Button 
                  size="sm" 
                  variant={integration.status === 'connected' ? 'outline' : 'default'}
                >
                  {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sync Status Banner */}
      <Card className="glass-card border-orange-200/50 bg-orange-50/30">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-orange-800">Gmail sync in progress</p>
                <p className="text-sm text-orange-600">Syncing your latest emails...</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegrationsPanel;
