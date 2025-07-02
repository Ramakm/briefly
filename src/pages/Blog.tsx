
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Hidden Cost of Email Overload",
      excerpt: "Research shows that email interruptions can cost you up to 23 minutes of focused work time. Here's how to break the cycle.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      image: "/api/placeholder/400/200"
    },
    {
      title: "How AI Can Actually Help Your Productivity",
      excerpt: "Not all AI tools are created equal. Learn how to identify and use AI that actually makes you more productive, not more busy.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/200"
    },
    {
      title: "The Science of Attention Management",
      excerpt: "Time management is dead. Attention management is the future. Here's what neuroscience tells us about staying focused.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Science",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Building Better Email Habits",
      excerpt: "Small changes in how you approach email can have massive impacts on your daily productivity and mental clarity.",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Productivity",
      image: "/api/placeholder/400/200"
    },
    {
      title: "The Future of Work Communication",
      excerpt: "As remote work becomes the norm, how we communicate is evolving. Here's what the future of professional communication looks like.",
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Future of Work",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Why Less Information is More Power",
      excerpt: "In an age of information overload, the real competitive advantage comes from consuming less, not more.",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Strategy",
      image: "/api/placeholder/400/200"
    }
  ];

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
                <Card key={index} className="glass-card card-hover group cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm text-muted-foreground">Article Image</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
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
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
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
