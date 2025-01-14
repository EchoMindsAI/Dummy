import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how artificial intelligence is revolutionizing the digital marketing landscape and what it means for businesses.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "AI Technology"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Maximizing ROI with AI-Driven Marketing Strategies",
      excerpt: "Learn how businesses are achieving better returns on their marketing investments using AI-powered solutions.",
      author: "David Chen",
      date: "March 12, 2024",
      category: "Marketing Strategy"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "The Role of Machine Learning in Customer Segmentation",
      excerpt: "Discover how machine learning algorithms are helping businesses better understand and target their customers.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Machine Learning"
    },
    {
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Content Creation in the Age of AI",
      excerpt: "How artificial intelligence is transforming the way we create and distribute marketing content.",
      author: "Michael Chang",
      date: "March 8, 2024",
      category: "Content Marketing"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Predictive Analytics: The Future of Marketing",
      excerpt: "Understanding how predictive analytics can help businesses stay ahead of market trends.",
      author: "Lisa Anderson",
      date: "March 5, 2024",
      category: "Analytics"
    },
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Building Customer Trust with AI Technology",
      excerpt: "Strategies for maintaining authentic customer relationships while leveraging AI capabilities.",
      author: "James Wilson",
      date: "March 3, 2024",
      category: "Customer Relations"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Latest Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI marketing technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-black/20 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-violet-400 text-sm font-medium mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center text-violet-400 hover:text-violet-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-black/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6">
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}