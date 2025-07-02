
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Mail, Clock } from 'lucide-react';

const DigestArchive = () => {
  const archives = [
    {
      date: '2024-01-15',
      sources: ['Email', 'Slack'],
      summary: 'Project kickoff meetings, 12 urgent emails, team updates',
      size: '2.4 MB'
    },
    {
      date: '2024-01-14',
      sources: ['Email', 'Slack', 'Notion'],
      summary: 'Client feedback sessions, design reviews, 8 priority emails',
      size: '1.8 MB'
    },
    {
      date: '2024-01-13',
      sources: ['Email'],
      summary: 'Weekend digest: 5 important updates, newsletter summaries',
      size: '1.2 MB'
    },
    {
      date: '2024-01-12',
      sources: ['Email', 'Slack'],
      summary: 'Sprint planning, team sync, 15 emails processed',
      size: '3.1 MB'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Digest Archive</h2>
        <p className="text-muted-foreground">Browse and download your previous daily summaries.</p>
      </div>

      {/* Search and Filter */}
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search digests..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="email">Email Only</SelectItem>
                <SelectItem value="slack">Slack Only</SelectItem>
                <SelectItem value="notion">Notion Only</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Archive List */}
      <div className="space-y-4">
        {archives.map((archive, index) => (
          <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {new Date(archive.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{archive.summary}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <span>Sources:</span>
                      {archive.sources.map((source, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {source}
                        </span>
                      ))}
                    </div>
                    <span>Size: {archive.size}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">Load More Archives</Button>
      </div>
    </div>
  );
};

export default DigestArchive;
