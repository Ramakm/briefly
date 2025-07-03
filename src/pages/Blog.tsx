
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: "The Hidden Cost of Email Overload",
      excerpt: "Research shows that email interruptions can cost you up to 23 minutes of focused work time. Here's how to break the cycle.",
      content: `
        <h2>The Real Impact of Email Interruptions</h2>
        <p>Every time you check your email, you're not just reading messages—you're fragmenting your attention in ways that compound throughout the day. Research from the University of California, Irvine, found that it takes an average of 23 minutes and 15 seconds to fully refocus after an interruption.</p>
        
        <h3>The Attention Residue Problem</h3>
        <p>When you switch from email back to your primary work task, part of your attention remains stuck on the previous activity. This phenomenon, called "attention residue," means you're never operating at full cognitive capacity.</p>
        
        <h3>Breaking the Cycle</h3>
        <p>The solution isn't to ignore email entirely—it's to batch process communications at specific times. Here are three strategies that work:</p>
        <ul>
          <li>Check email only at designated times (e.g., 9 AM, 1 PM, 5 PM)</li>
          <li>Use AI-powered filtering to surface only the most important messages</li>
          <li>Implement the "two-minute rule"—if it takes less than two minutes, do it immediately</li>
        </ul>
        
        <p>By treating email as a scheduled activity rather than a constant interruption, you can reclaim those lost hours and maintain deeper focus on what truly matters.</p>
      `,
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      title: "How AI Can Actually Help Your Productivity",
      excerpt: "Not all AI tools are created equal. Learn how to identify and use AI that actually makes you more productive, not more busy.",
      content: `
        <h2>The AI Productivity Paradox</h2>
        <p>We're living through an AI revolution, yet many professionals feel more overwhelmed than ever. The key isn't using more AI tools—it's using the right ones in the right way.</p>
        
        <h3>Quality Over Quantity</h3>
        <p>The most effective AI tools share three characteristics:</p>
        <ul>
          <li><strong>They eliminate decisions, not create them:</strong> Good AI reduces cognitive load by making smart choices for you</li>
          <li><strong>They work in the background:</strong> The best AI is invisible, seamlessly integrating into your existing workflow</li>
          <li><strong>They learn from your behavior:</strong> Truly helpful AI adapts to your preferences and patterns over time</li>
        </ul>
        
        <h3>Real-World Applications</h3>
        <p>Consider email management. Instead of an AI that suggests responses to every message (creating more decisions), look for AI that identifies which emails actually need your attention and when.</p>
        
        <p>The future of productivity isn't about working with AI—it's about AI working for you, quietly and efficiently, so you can focus on the work that only humans can do.</p>
      `,
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    },
    {
      title: "The Science of Attention Management",
      excerpt: "Time management is dead. Attention management is the future. Here's what neuroscience tells us about staying focused.",
      content: `
        <h2>Beyond Time Management</h2>
        <p>We've been thinking about productivity wrong. Time is finite and fixed—you can't manage it, only allocate it. But attention? That's where the real opportunity lies.</p>
        
        <h3>The Neuroscience of Focus</h3>
        <p>Your brain has two attention networks: focused attention (for deep work) and open monitoring (for creative insights). Modern work demands both, but most environments are optimized for neither.</p>
        
        <h3>The Four Pillars of Attention Management</h3>
        <ol>
          <li><strong>Environmental Design:</strong> Create spaces that support the type of thinking you need</li>
          <li><strong>Cognitive Load Reduction:</strong> Minimize the number of decisions your brain has to make</li>
          <li><strong>Attention Restoration:</strong> Build in breaks that actually restore mental energy</li>
          <li><strong>Intentional Distraction:</strong> Use strategic interruptions to prevent mental fatigue</li>
        </ol>
        
        <p>The companies and individuals who master attention management will have a significant competitive advantage in the knowledge economy. The question isn't whether you have time—it's whether you have the mental clarity to use it well.</p>
      `,
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Science",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      title: "Building Better Email Habits",
      excerpt: "Small changes in how you approach email can have massive impacts on your daily productivity and mental clarity.",
      content: `
        <h2>The Habit Stack Approach</h2>
        <p>Rather than overhauling your entire email system overnight, focus on building small, sustainable habits that compound over time.</p>
        
        <h3>The Email Triage System</h3>
        <p>Every email falls into one of four categories:</p>
        <ul>
          <li><strong>Do:</strong> Requires action and takes less than 2 minutes</li>
          <li><strong>Defer:</strong> Requires action but takes longer than 2 minutes</li>
          <li><strong>Delegate:</strong> Someone else should handle this</li>
          <li><strong>Delete:</strong> No action needed</li>
        </ul>
        
        <h3>Implementation Strategy</h3>
        <p>Start with just one habit: the "inbox zero" moment at the end of each day. Before you close your laptop, process every email in your inbox using the four D's above. This single habit will transform your relationship with email within a week.</p>
        
        <p>Remember: the goal isn't to be perfect—it's to be consistent. Small improvements, practiced daily, create dramatic results over time.</p>
      `,
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      title: "The Future of Work Communication",
      excerpt: "As remote work becomes the norm, how we communicate is evolving. Here's what the future of professional communication looks like.",
      content: `
        <h2>Communication in the Hybrid Era</h2>
        <p>The shift to remote and hybrid work has fundamentally changed how we communicate. We're not just using different tools—we're developing entirely new communication patterns and expectations.</p>
        
        <h3>The Rise of Asynchronous Communication</h3>
        <p>Real-time communication (meetings, instant messages) works well for brainstorming and relationship building. But for most work discussions, asynchronous communication is more effective:</p>
        <ul>
          <li>It allows for more thoughtful responses</li>
          <li>It creates a searchable record of decisions</li>
          <li>It respects different time zones and work schedules</li>
          <li>It reduces the pressure for immediate responses</li>
        </ul>
        
        <h3>The Communication Stack of the Future</h3>
        <p>Forward-thinking organizations are developing sophisticated communication hierarchies:</p>
        <ol>
          <li><strong>Documentation:</strong> For decisions and processes that need to be referenced later</li>
          <li><strong>Structured Updates:</strong> For status reports and regular check-ins</li>
          <li><strong>Discussion Threads:</strong> For collaborative problem-solving</li>
          <li><strong>Real-time Conversations:</strong> For urgent issues and relationship building</li>
        </ol>
        
        <p>The future belongs to organizations that can master this new communication landscape—creating clarity without chaos, connection without constant interruption.</p>
      `,
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Future of Work",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
    },
    {
      title: "Why Less Information is More Power",
      excerpt: "In an age of information overload, the real competitive advantage comes from consuming less, not more.",
      content: `
        <h2>The Information Paradox</h2>
        <p>We have access to more information than any generation in human history, yet we often feel less informed and more uncertain than ever. The problem isn't lack of information—it's information overload.</p>
        
        <h3>Signal vs. Noise</h3>
        <p>Every day, you're bombarded with thousands of pieces of information. Your success depends not on consuming more, but on becoming better at filtering for what actually matters. This requires developing what we call "information taste"—the ability to quickly identify high-value signals amid the noise.</p>
        
        <h3>The Curation Advantage</h3>
        <p>The most successful professionals don't try to stay on top of everything. Instead, they:</p>
        <ul>
          <li>Choose a few high-quality sources over many mediocre ones</li>
          <li>Set specific times for information consumption</li>
          <li>Focus on actionable insights rather than interesting facts</li>
          <li>Build systems that deliver relevant information automatically</li>
        </ul>
        
        <h3>Practical Steps</h3>
        <p>Start by conducting an information audit. For one week, track every source of information you consume. Then ask: "Did this help me make a better decision or take more effective action?" If not, eliminate it.</p>
        
        <p>In a world drowning in data, clarity becomes your competitive advantage. The goal isn't to know everything—it's to know what matters.</p>
      `,
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    }
  ];

  if (selectedPost !== null) {
    const post = posts[selectedPost];
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <article className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </button>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              />
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <span className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:gradient-text prose-headings:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="section-padding">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The <span className="gradient-text">Briefly</span> Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights on productivity, AI, and the future of work. Written by experts who understand the challenges of modern professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index} 
                  className="glass-card card-hover group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPost(index)}
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text font-medium text-sm group-hover:from-orange-600 group-hover:to-yellow-600 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Want to stay updated with our latest insights?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
