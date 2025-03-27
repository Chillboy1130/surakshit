import React, { useState, useEffect } from 'react';
import { Bell, Phone, Download, Moon, Sun, Shield, AlertTriangle, Volume2, MapPin, MessageSquare, PhoneCall, HardDrive, Search, ArrowUp, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'danger'>('light');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userStatus, setUserStatus] = useState<'safe' | 'danger'>('safe');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmergency = () => {
    setUserStatus('danger');
    setTheme('danger');
    setTimeout(() => {
      alert('Emergency contacts notified!');
    }, 10000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'voice':
        return <VoiceRecognitionPage />;
      case 'location':
        return <LocationTrackingPage />;
      case 'alerts':
        return <AlertsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' ? 'dark bg-gray-900 text-gray-100' :
      theme === 'danger' ? 'bg-gradient-to-br from-red-500 to-red-800 text-white' :
      'bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2 animate-float">
            <Shield className={`h-8 w-8 ${theme === 'danger' ? 'text-red-200' : 'text-police-gold'}`} />
            <h1 className={`text-2xl font-bold ${
              theme === 'danger' ? 'text-white' : 'gradient-text'
            }`}>Surakshit</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActivePage('home')}
              className={`transition-colors duration-300 ${activePage === 'home' ? 'text-blue-500' : 'hover:text-blue-400'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('voice')}
              className={`transition-colors duration-300 ${activePage === 'voice' ? 'text-blue-500' : 'hover:text-blue-400'}`}
            >
              Voice Recognition
            </button>
            <button
              onClick={() => setActivePage('location')}
              className={`transition-colors duration-300 ${activePage === 'location' ? 'text-blue-500' : 'hover:text-blue-400'}`}
            >
              Location Tracking
            </button>
            <button
              onClick={() => setActivePage('alerts')}
              className={`transition-colors duration-300 ${activePage === 'alerts' ? 'text-blue-500' : 'hover:text-blue-400'}`}
            >
              Alerts
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {theme === 'light' ? <Moon className="text-police-blue" /> : <Sun className="text-white" />}
            </button>
            {!isLoggedIn ? (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 animate-pulse-slow"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleEmergency}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <AlertTriangle className="h-5 w-5" />
                SOS
              </button>
            )}
          </div>
        </nav>
      </header>

      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">About Surakshit</h3>
              <p className="text-gray-600 dark:text-gray-400">
                India's most advanced safety application, empowering citizens with cutting-edge technology for personal security.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Emergency Numbers</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">Police: 100</li>
                <li className="text-gray-600 dark:text-gray-400">Fire: 101</li>
                <li className="text-gray-600 dark:text-gray-400">Ambulance: 102</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Surakshit. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Login to Surakshit</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Aadhar Number</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Emergency Contact</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Required Permissions:</p>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="location" className="rounded text-blue-600" />
                  <label htmlFor="location" className="text-sm text-gray-700 dark:text-gray-300">Location Access</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="microphone" className="rounded text-blue-600" />
                  <label htmlFor="microphone" className="text-sm text-gray-700 dark:text-gray-300">Microphone Access</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="storage" className="rounded text-blue-600" />
                  <label htmlFor="storage" className="text-sm text-gray-700 dark:text-gray-300">Storage Access</label>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setShowLogin(false);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Service Pages
function VoiceRecognitionPage() {
  return (
    <div className="pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Voice Recognition Service</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our advanced voice recognition system continuously monitors for distress signals and emergency keywords.
              When detected, it automatically triggers the emergency response protocol.
            </p>
          </div>
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Real-time voice monitoring</li>
              <li>• Multiple language support</li>
              <li>• Customizable trigger words</li>
              <li>• Background processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationTrackingPage() {
  return (
    <div className="pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Location Tracking Service</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">Real-time Tracking</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our location tracking service provides real-time updates to emergency contacts and authorities
              during crisis situations.
            </p>
          </div>
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">Safety Features</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Precise GPS tracking</li>
              <li>• Geofencing alerts</li>
              <li>• Safe route suggestions</li>
              <li>• Offline location caching</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertsPage() {
  return (
    <div className="pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Alert System</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">Instant Notifications</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our alert system ensures that emergency contacts and authorities are notified immediately
              when help is needed.
            </p>
          </div>
          <div className="service-card">
            <h2 className="text-2xl font-bold mb-4">Alert Types</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• SOS alerts</li>
              <li>• Voice-triggered alerts</li>
              <li>• Location-based warnings</li>
              <li>• Safety check-ins</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center space-y-6 p-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-float">
              Your Personal Safety Guardian
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Empowering citizens with India's most advanced safety application
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
                <Download className="h-5 w-5" />
                Download for iOS
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Download className="h-5 w-5" />
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 py-12">
          <FeatureCard
            icon={<Volume2 className="h-8 w-8 text-blue-600" />}
            title="Voice Recognition"
            description="Advanced voice detection system for immediate emergency response"
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8 text-blue-600" />}
            title="Location Tracking"
            description="Real-time location monitoring for enhanced safety"
          />
          <FeatureCard
            icon={<Bell className="h-8 w-8 text-blue-600" />}
            title="Instant Alerts"
            description="Quick notifications to emergency contacts and authorities"
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
            title="Emergency Messages"
            description="Automated SOS messages with location details"
          />
          <FeatureCard
            icon={<PhoneCall className="h-8 w-8 text-blue-600" />}
            title="Emergency Contacts"
            description="Quick access to all emergency services in India"
          />
          <FeatureCard
            icon={<HardDrive className="h-8 w-8 text-blue-600" />}
            title="Incident Recording"
            description="Automatic audio and location recording during emergencies"
          />
        </section>

        {/* Emergency Numbers Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Emergency Numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EmergencyCard number="112" description="National Emergency Number" />
            <EmergencyCard number="100" description="Police" />
            <EmergencyCard number="101" description="Fire" />
            <EmergencyCard number="102" description="Ambulance" />
            <EmergencyCard number="1098" description="Child Helpline" />
            <EmergencyCard number="181" description="Women Helpline" />
          </div>
        </section>

        {/* Crime Trends */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Crime Trends in Your Area</h2>
          <div className="glass-effect p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Enter your area to see crime statistics"
                className="w-full p-2 border rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Enter your area above to view recent crime statistics and safety alerts
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function EmergencyCard({ number, description }: { number: string; description: string }) {
  return (
    <div className="glass-effect p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
      <Phone className="h-6 w-6 text-red-600" />
      <div>
        <h3 className="font-bold gradient-text">{number}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default App;