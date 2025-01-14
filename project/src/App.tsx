import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Brain className="h-8 w-8 text-violet-400" />
                  <span className="text-white font-bold text-xl">ECHOMINDS</span>
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                  <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                  <Link to="/contact" className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700">Contact</Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                <Link to="/contact" className="bg-violet-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-violet-700">Contact</Link>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-black/20 backdrop-blur-lg mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-violet-400" />
                  <span className="text-white font-bold">ECHOMINDS</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Empowering businesses through AI-driven marketing solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
                  <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
                  <Link to="/services" className="block text-gray-400 hover:text-white">Services</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-white">AI Strategy</Link>
                  <Link to="/services" className="block text-gray-400 hover:text-white">Content Generation</Link>
                  <Link to="/services" className="block text-gray-400 hover:text-white">Market Analysis</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>contact@echominds.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ECHOMINDS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;