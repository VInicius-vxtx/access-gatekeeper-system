
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Search, Bell, User, LogOut } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  // Mock data for game/media cards
  const featuredItems = [
    { id: 1, title: "Diablo Immortal", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png", featured: true },
    { id: 2, title: "Fantasy RPG", image: "lovable-uploads/fototeste2.png" },
    { id: 3, title: "Action Game", image: "lovable-uploads/MockupCelularNew.png" },
    { id: 4, title: "Adventure", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
    { id: 5, title: "Strategy Game", image: "lovable-uploads/fototeste2.png" },
    { id: 6, title: "Puzzle Game", image: "lovable-uploads/MockupCelularNew.png" },
  ];

  return (
    <div className="min-h-screen bg-sistema-bg-primary text-sistema-text-primary flex">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 h-screen bg-sistema-bg-secondary border-r border-sistema-border flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-sistema-border">
          <h1 className="text-xl font-bold bg-gradient-to-r from-sistema-accent to-sistema-accent-hover bg-clip-text text-transparent hidden md:block">GAME HUB</h1>
          <div className="flex items-center justify-center md:hidden">
            <span className="text-2xl font-bold bg-gradient-to-r from-sistema-accent to-sistema-accent-hover bg-clip-text text-transparent">G</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-lg bg-sistema-accent/10 border border-sistema-accent/20 text-sistema-accent">
                <LayoutDashboard className="h-5 w-5" />
                <span className="hidden md:inline">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-lg text-sistema-text-secondary hover:bg-sistema-bg-primary hover:text-sistema-text-primary transition-colors">
                <Search className="h-5 w-5" />
                <span className="hidden md:inline">Discover</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-lg text-sistema-text-secondary hover:bg-sistema-bg-primary hover:text-sistema-text-primary transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Profile</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-sistema-border">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full p-2 rounded-lg text-sistema-text-secondary hover:bg-sistema-bg-primary hover:text-sistema-text-primary transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-sistema-bg-secondary border-b border-sistema-border p-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-semibold">Featured Games</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-sistema-bg-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-sistema-bg-primary transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-sistema-accent flex items-center justify-center">
              <span className="text-sistema-bg-primary font-medium">U</span>
            </div>
          </div>
        </header>

        {/* Featured content */}
        <div className="p-6">
          {/* Featured item */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <img 
              src={featuredItems[0].image} 
              alt="Featured Game" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold">{featuredItems[0].title}</h3>
              <p className="text-sistema-text-secondary mb-4">Popular Action RPG</p>
              <button className="bg-sistema-accent hover:bg-sistema-accent-hover text-black font-medium py-2 px-6 rounded-lg w-max transition-colors">
                Play Now
              </button>
            </div>
          </div>

          {/* Game grid */}
          <h3 className="text-xl font-semibold mb-4">All Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredItems.slice(1).map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden bg-sistema-bg-secondary border border-sistema-border hover:border-sistema-accent transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium truncate">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
