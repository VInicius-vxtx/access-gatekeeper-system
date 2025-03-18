
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, Video, Users, User, Bell, LogOut } from 'lucide-react';
import MyCourses from '../components/MyCourses';
import ProfileEditor from '../components/ProfileEditor';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateToMyCourses = () => {
    navigate('/meus-cursos');
  };

  const openCourses = () => {
    setIsCoursesOpen(true);
  };

  const closeCourses = () => {
    setIsCoursesOpen(false);
  };

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const featuredItems = [
    { 
      id: 1, 
      title: "Nômade Milionário", 
      subtitle: "LEGACY", 
      image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png", 
      featured: true,
      buttons: [
        { text: "Comprar com 1-Clique", primary: true },
        { text: "Comprar curso", primary: false }
      ]
    },
    { id: 2, title: "Estratégia de vendas", image: "lovable-uploads/fototeste2.png" },
    { id: 3, title: "Marketing Digital", image: "lovable-uploads/MockupCelularNew.png" },
    { id: 4, title: "Investimentos", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
  ];

  const user = {
    name: "Dra. Isadora Cameron",
    level: "Nível 10",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  };

  const myCourses = [
    { id: 1, title: "Curso de Marketing", progress: 65, image: "lovable-uploads/fototeste2.png" },
    { id: 2, title: "Finanças Pessoais", progress: 30, image: "lovable-uploads/MockupCelularNew.png" },
    { id: 3, title: "Gestão de Tempo", progress: 85, image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      <aside className="w-20 md:w-64 h-screen bg-[#1A1A1A] border-r border-[#2A2A2A] flex flex-col">
        <div className="p-6 border-b border-[#2A2A2A]">
          <h1 className="text-xl font-bold hidden md:block">
            <span className="text-[#7FFF00]">Naturalmente </span>
            <span className="text-[#FF69B4]">Magra</span>
          </h1>
          <div className="flex items-center justify-center md:hidden">
            <span className="text-2xl font-bold text-[#FF69B4]">NM</span>
          </div>
        </div>

        <div className="p-4 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">{user.level}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-6">
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToDashboard();
                }} 
                className="flex items-center gap-3 p-2 text-white"
              >
                <Home className="h-5 w-5" />
                <span className="hidden md:inline">Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToMyCourses();
                }} 
                className="flex items-center gap-3 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <BookOpen className="h-5 w-5" />
                <span className="hidden md:inline">Meus cursos</span>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white transition-colors">
                  <Video className="h-5 w-5" />
                  <span className="hidden md:inline">Lives</span>
                </a>
                <span className="text-xs bg-red-500 px-1.5 py-0.5 rounded-sm">AO VIVO</span>
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white transition-colors">
                <Users className="h-5 w-5" />
                <span className="hidden md:inline">Comunidade</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToProfile();
                }} 
                className="flex items-center gap-3 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Meu perfil</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
                <span className="hidden md:inline">Notificações</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-[#2A2A2A]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="relative h-[50vh] min-h-[400px]">
          <img 
            src={featuredItems[0].image} 
            alt={featuredItems[0].title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-12">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-1">
                <span className="font-serif italic">{featuredItems[0].title}</span>
              </h1>
              <p className="text-sm tracking-widest mb-8">{featuredItems[0].subtitle}</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                {featuredItems[0].buttons.map((button, index) => (
                  <button 
                    key={index}
                    className={`
                      ${button.primary 
                        ? "bg-[#9b87f5] hover:bg-[#8a76e4] text-white" 
                        : "bg-transparent border border-white/20 hover:bg-white/10 text-white"}
                      font-medium py-3 px-6 rounded transition-colors flex items-center gap-2
                    `}
                  >
                    {button.primary && (
                      <span className="flex items-center justify-center h-5 w-5 bg-white/20 rounded-full">
                        <i className="fas fa-shopping-cart text-xs"></i>
                      </span>
                    )}
                    {button.text}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 text-gray-400 text-sm">
                <span className="text-yellow-400">Disponível</span>, não perca!
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <span className="h-2 w-2 bg-[#9b87f5] rounded-full"></span>
            <span className="h-2 w-2 bg-white/30 rounded-full"></span>
            <span className="h-2 w-2 bg-white/30 rounded-full"></span>
            <span className="h-2 w-2 bg-white/30 rounded-full"></span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <i className="fas fa-graduation-cap text-xl"></i>
              <h2 className="text-xl font-semibold">Meus cursos</h2>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">ver todos</a>
              <div className="flex gap-1">
                <button className="h-8 w-8 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-white">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="h-8 w-8 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-white">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myCourses.map((course) => (
              <div key={course.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:ring-1 hover:ring-[#9b87f5]/50 transition-all">
                <div className="relative h-40">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{course.title}</h3>
                  <div className="mt-2 bg-[#333] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#9b87f5] h-full rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-400">
                    <span>Progresso</span>
                    <span>{course.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <MyCourses isOpen={isCoursesOpen} onClose={closeCourses} />
      
      <ProfileEditor isOpen={isProfileOpen} onClose={closeProfile} />
    </div>
  );
};

export default Dashboard;
