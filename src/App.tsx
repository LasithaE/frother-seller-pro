import React, { useState, useEffect } from 'react';
import { Coffee, Users, Eye, ArrowRight, CheckCircle } from 'lucide-react';

function App() {
  const [viewingCount, setViewingCount] = useState(127);
  const [preorderCount, setPreorderCount] = useState(2847);

  // Simulate live viewing count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newCount = prev + change;
        return Math.max(85, Math.min(180, newCount)); // Keep between 85-180
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Nanofoamer</span>
          </div>
          <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Preorder Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Café-Quality Foam
                <span className="block text-gray-300">Without the Café Price</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
                Stop choosing between great coffee and your grocery budget. 
                Transform any milk into silky, barista-level microfoam in seconds.
              </p>
            </div>

            {/* Price Highlight */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold text-white">Smart Money Move</span>
              </div>
              <p className="text-gray-300">
                Skip the $6 lattes. Make 200+ café-quality drinks for the price of 10 coffee shop visits.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Start Saving Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-600">
                <div className="w-32 h-48 bg-black rounded-2xl mx-auto mb-4 border-2 border-gray-600 flex items-center justify-center">
                  <Coffee className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sleek. Powerful. Affordable.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Premium black design that looks as good as the foam it creates. 
                  Perfect for any kitchen, any budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preorder Section */}
      <section className="bg-gray-900/40 backdrop-blur-sm py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Live Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Eye className="w-5 h-5 text-blue-400" />
              <span className="text-sm">
                <span className="font-semibold text-white">{viewingCount}</span> people viewing right now
              </span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Preorder Question */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Would you like to preorder?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Join thousands who've already secured their Nanofoamer
          </p>

          {/* Preorder Button */}
          <div className="space-y-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 border border-blue-400/30">
              Preorder Now - $39
            </button>
            
            {/* Preorder Count */}
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-lg">
                <span className="font-bold text-white">{preorderCount.toLocaleString()}</span> people have already preordered
              </span>
            </div>

            {/* Trust Signals */}
            <div className="flex justify-center space-x-6 text-sm text-gray-400 mt-6">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Ships February 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold text-white">Nanofoamer</span>
          </div>
          <p className="text-gray-500">
            Making café-quality coffee accessible to everyone, one foam at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;