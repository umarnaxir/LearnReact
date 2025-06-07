import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Clock, TrendingUp, Settings, History, Brain, Zap, AlertCircle } from 'lucide-react';

const Agent = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiStatus, setAiStatus] = useState('learning');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPredictedOrder, setNextPredictedOrder] = useState(null);
  const [learningProgress, setLearningProgress] = useState(78);
  
  const [aiPreferences, setAiPreferences] = useState({
    preferredCuisines: ['North Indian', 'South Indian', 'Chinese', 'Continental'],
    budgetRange: { min: 200, max: 500 },
    healthScore: 7.5,
    spiceLevel: 'Medium',
    dietaryRestrictions: [],
    workloadBasedOrdering: true,
    weatherBasedMenu: true,
    moodAnalysis: true
  });

  const [orderPatterns, setOrderPatterns] = useState([
    {
      day: 'Monday',
      preferredTime: '13:00',
      cuisine: 'North Indian',
      confidence: 0.89,
      lastOrdered: 'Butter Chicken & Naan'
    },
    {
      day: 'Tuesday',
      preferredTime: '12:45',
      cuisine: 'South Indian',
      confidence: 0.76,
      lastOrdered: 'Masala Dosa & Sambar'
    },
    {
      day: 'Wednesday',
      preferredTime: '13:15',
      cuisine: 'Chinese',
      confidence: 0.82,
      lastOrdered: 'Hakka Noodles & Manchurian'
    }
  ]);

  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: '2025-06-06',
      time: '12:30 PM',
      restaurant: 'Punjabi Dhaba',
      dish: 'Butter Chicken with Naan',
      platform: 'Zomato',
      amount: 380,
      rating: 4.5,
      mood: 'productive',
      weather: 'rainy',
      aiConfidence: 0.89,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2025-06-05',
      time: '1:00 PM',
      restaurant: 'South Spice',
      dish: 'Masala Dosa & Filter Coffee',
      platform: 'Swiggy',
      amount: 250,
      rating: 4.2,
      mood: 'stressed',
      weather: 'sunny',
      aiConfidence: 0.76,
      status: 'Delivered'
    },
    {
      id: 3,
      date: '2025-06-04',
      time: '12:45 PM',
      restaurant: 'Dragon Palace',
      dish: 'Hakka Noodles & Chilli Chicken',
      platform: 'Zomato',
      amount: 420,
      rating: 4.7,
      mood: 'energetic',
      weather: 'cloudy',
      aiConfidence: 0.82,
      status: 'Delivered'
    }
  ]);

  const [insights, setInsights] = useState({
    totalSpent: 1250,
    avgOrderValue: 350,
    favoriteRestaurant: 'Punjabi Dhaba',
    preferredTimeSlot: '12:30 - 1:30 PM',
    healthTrend: 'improving',
    satisfactionScore: 4.5
  });

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // AI Learning Simulation
  useEffect(() => {
    const learningInterval = setInterval(() => {
      setLearningProgress(prev => {
        const newProgress = prev + Math.random() * 2;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 3000);

    return () => clearInterval(learningInterval);
  }, []);

  // Predict next order based on patterns
  const predictNextOrder = useCallback(() => {
    const today = new Date().getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = dayNames[today];
    
    const pattern = orderPatterns.find(p => p.day === currentDay);
    
    if (pattern) {
      setNextPredictedOrder({
        time: pattern.preferredTime,
        cuisine: pattern.cuisine,
        confidence: pattern.confidence,
        estimatedAmount: Math.floor(Math.random() * (aiPreferences.budgetRange.max - aiPreferences.budgetRange.min) + aiPreferences.budgetRange.min),
        reason: `Based on your ${currentDay} patterns and current mood analysis`
      });
    }
  }, [orderPatterns, aiPreferences.budgetRange]);

  useEffect(() => {
    predictNextOrder();
  }, [predictNextOrder]);

  // Simulate AI ordering
  const triggerAIOrder = () => {
    setAiStatus('ordering');
    setTimeout(() => {
      setAiStatus('completed');
      const newOrder = {
        id: orderHistory.length + 1,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        restaurant: 'AI Selected Restaurant',
        dish: nextPredictedOrder ? `${nextPredictedOrder.cuisine} Special` : 'Recommended Dish',
        platform: 'Smart Order',
        amount: nextPredictedOrder?.estimatedAmount || 350,
        rating: 0,
        mood: 'AI-detected',
        weather: 'current',
        aiConfidence: nextPredictedOrder?.confidence || 0.85,
        status: 'Ordering'
      };
      setOrderHistory(prev => [newOrder, ...prev]);
      
      setTimeout(() => setAiStatus('learning'), 2000);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'learning': return '#4CAF50';
      case 'ordering': return '#FF9800';
      case 'completed': return '#2196F3';
      default: return '#9E9E9E';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-indigo-500/20 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Brain className="text-indigo-400" size={28} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              SmartOrder AI
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-full border border-indigo-500/30">
            <div 
              className="w-2 h-2 rounded-full animate-pulse" 
              style={{ backgroundColor: getStatusColor(aiStatus) }}
            ></div>
            <span className="text-sm">
              {aiStatus === 'learning' && 'Learning Patterns'}
              {aiStatus === 'ordering' && 'Placing Order'}
              {aiStatus === 'completed' && 'Order Completed'}
            </span>
          </div>
          <div className="font-mono text-sm text-purple-300 bg-purple-900/20 px-3 py-2 rounded-lg border border-purple-500/30">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-900/60 backdrop-blur-lg p-4 border-b border-indigo-500/10">
        <div className="max-w-7xl mx-auto flex gap-2">
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-indigo-500/20'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <TrendingUp size={20} />
            Dashboard
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'insights' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-indigo-500/20'
            }`}
            onClick={() => setActiveTab('insights')}
          >
            <Brain size={20} />
            AI Insights
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'history' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-indigo-500/20'
            }`}
            onClick={() => setActiveTab('history')}
          >
            <History size={20} />
            Order History
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'settings' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-indigo-500/20'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            AI Settings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI Status Card */}
              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Zap size={20} className="text-yellow-400" />
                  AI Status
                </h3>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${learningProgress}%` }}
                  ></div>
                </div>
                <p className="text-slate-300 mb-4">Learning Progress: {Math.round(learningProgress)}%</p>
                <button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={triggerAIOrder}
                  disabled={aiStatus === 'ordering'}
                >
                  {aiStatus === 'ordering' ? 'Ordering...' : 'Trigger AI Order'}
                </button>
              </div>

              {/* Next Predicted Order */}
              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Clock size={20} className="text-blue-400" />
                  Next Predicted Order
                </h3>
                {nextPredictedOrder ? (
                  <div className="space-y-2">
                    <p className="text-slate-300"><span className="font-medium">Time:</span> {nextPredictedOrder.time}</p>
                    <p className="text-slate-300"><span className="font-medium">Cuisine:</span> {nextPredictedOrder.cuisine}</p>
                    <p className="text-slate-300"><span className="font-medium">Estimated Amount:</span> ₹{nextPredictedOrder.estimatedAmount}</p>
                    <p className="text-slate-300"><span className="font-medium">Confidence:</span> {Math.round(nextPredictedOrder.confidence * 100)}%</p>
                    <p className="text-slate-400 text-sm italic">{nextPredictedOrder.reason}</p>
                  </div>
                ) : (
                  <p className="text-slate-400">Analyzing patterns...</p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <TrendingUp size={20} className="text-green-400" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-indigo-400">₹{insights.totalSpent}</div>
                    <div className="text-sm text-slate-400">Total Spent</div>
                  </div>
                  <div className="text-center bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-indigo-400">₹{insights.avgOrderValue}</div>
                    <div className="text-sm text-slate-400">Avg Order</div>
                  </div>
                  <div className="text-center bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-indigo-400">{insights.satisfactionScore}</div>
                    <div className="text-sm text-slate-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">AI Insights & Learning</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Weekly Patterns</h3>
                <div className="space-y-3">
                  {orderPatterns.map((pattern, index) => (
                    <div key={index} className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-200">{pattern.day}</span>
                        <span className="text-indigo-400 font-semibold">{Math.round(pattern.confidence * 100)}%</span>
                      </div>
                      <div className="text-slate-300">
                        <p className="text-sm">{pattern.preferredTime} - {pattern.cuisine}</p>
                        <p className="text-xs text-slate-400 mt-1">Last: {pattern.lastOrdered}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">AI Learned Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg">
                    <span className="text-slate-300">Health Score:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all" 
                          style={{ width: `${(aiPreferences.healthScore / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-200">{aiPreferences.healthScore}/10</span>
                    </div>
                  </div>
                  <div className="flex justify-between bg-slate-700/50 p-3 rounded-lg">
                    <span className="text-slate-300">Budget Range:</span>
                    <span className="text-slate-200">₹{aiPreferences.budgetRange.min} - ₹{aiPreferences.budgetRange.max}</span>
                  </div>
                  <div className="flex justify-between bg-slate-700/50 p-3 rounded-lg">
                    <span className="text-slate-300">Spice Level:</span>
                    <span className="text-slate-200">{aiPreferences.spiceLevel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Order History</h2>
            <div className="space-y-4">
              {orderHistory.map((order) => (
                <div key={order.id} className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span>{order.date} at {order.time}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-1">{order.dish}</h4>
                    <p className="text-slate-300 mb-3">from {order.restaurant} via {order.platform}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-indigo-400 font-semibold text-lg">₹{order.amount}</span>
                      {order.rating > 0 && (
                        <span className="text-yellow-400">★ {order.rating}</span>
                      )}
                      <span className="text-purple-400">
                        AI: {Math.round(order.aiConfidence * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">AI Configuration</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Learning Parameters</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={aiPreferences.workloadBasedOrdering}
                      onChange={(e) => setAiPreferences(prev => ({
                        ...prev, 
                        workloadBasedOrdering: e.target.checked
                      }))}
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="text-slate-300">Workload-based Ordering</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={aiPreferences.weatherBasedMenu}
                      onChange={(e) => setAiPreferences(prev => ({
                        ...prev, 
                        weatherBasedMenu: e.target.checked
                      }))}
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="text-slate-300">Weather-based Menu Selection</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={aiPreferences.moodAnalysis}
                      onChange={(e) => setAiPreferences(prev => ({
                        ...prev, 
                        moodAnalysis: e.target.checked
                      }))}
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="text-slate-300">Mood Analysis Integration</span>
                  </label>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Budget Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Minimum Budget: ₹{aiPreferences.budgetRange.min}</label>
                    <input 
                      type="range" 
                      min="100" 
                      max="1000" 
                      value={aiPreferences.budgetRange.min}
                      onChange={(e) => setAiPreferences(prev => ({
                        ...prev, 
                        budgetRange: { ...prev.budgetRange, min: parseInt(e.target.value) }
                      }))}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Maximum Budget: ₹{aiPreferences.budgetRange.max}</label>
                    <input 
                      type="range" 
                      min="200" 
                      max="2000" 
                      value={aiPreferences.budgetRange.max}
                      onChange={(e) => setAiPreferences(prev => ({
                        ...prev, 
                        budgetRange: { ...prev.budgetRange, max: parseInt(e.target.value) }
                      }))}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <AlertCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-300 mb-1">AI Learning Notice</h4>
                <p className="text-slate-300 text-sm">
                  The AI continuously learns from your ordering patterns, feedback, and preferences to improve future recommendations. All data is processed locally and securely.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Agent;