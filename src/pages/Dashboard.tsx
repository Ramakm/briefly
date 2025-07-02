
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import TodaysDigest from '@/components/dashboard/TodaysDigest';
import IntegrationsPanel from '@/components/dashboard/IntegrationsPanel';
import UserPreferences from '@/components/dashboard/UserPreferences';
import DigestArchive from '@/components/dashboard/DigestArchive';
import BillingInfo from '@/components/dashboard/BillingInfo';
import { useState } from 'react';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('digest');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 glass-navbar">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="w-full h-0.5 bg-foreground"></span>
            <span className="w-full h-0.5 bg-foreground"></span>
            <span className="w-full h-0.5 bg-foreground"></span>
          </div>
        </button>
        <h1 className="font-bold text-xl gradient-text">Briefly</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {user.email?.split('@')[0]}!
              </h1>
              <p className="text-muted-foreground">
                Here's your personalized digest and account overview.
              </p>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'digest' && <TodaysDigest />}
            {activeTab === 'integrations' && <IntegrationsPanel />}
            {activeTab === 'preferences' && <UserPreferences />}
            {activeTab === 'archive' && <DigestArchive />}
            {activeTab === 'billing' && <BillingInfo />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
