
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Video, Users, User, Bell, LogOut, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Course {
  id: number;
  title: string;
  image?: string;
}

const AllCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Cursos em andamento
  const ongoingCourses: Course[] = [
    { id: 1, title: "Nômade Milionário Legacy", image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png" },
    { id: 2, title: "Técnicas de Espionagem", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
    { id: 3, title: "Clickmax", image: "lovable-uploads/fototeste2.png" },
    { id: 4, title: "Backstage", image: "lovable-uploads/MockupCelularNew.png" },
    { id: 5, title: "Mindset Outlier", image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png" },
    { id: 6, title: "Marcas Extraordinárias", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
    { id: 7, title: "Princípios da persuasão e vendas", image: "lovable-uploads/fototeste2.png" },
    { id: 8, title: "O Manual Do Tráfego", image: "lovable-uploads/MockupCelularNew.png" },
    { id: 9, title: "Criação sem limites com AI", image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png" },
    { id: 10, title: "Social Media Outliers", image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" },
    { id: 11, title: "Mindset Outlier Standard", image: "lovable-uploads/fototeste2.png" },
  ];

  // Filter courses based on search query
  const filteredCourses = ongoingCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // User information
  const user = {
    name: "Vinícius Alves Portillo",
    level: "Nível 32",
    memberSince: "Membro desde Maio de 2023",
    avatar: "lovable-uploads/31d121bb-69bd-4faa-b7b0-fb83bf2e008a.png"
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar */}
      <aside className="w-[220px] h-screen bg-[#191919] border-r border-[#333] flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="text-purple-500 text-2xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L12 19L19 5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">zion</span>
        </div>

        <div className="p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium">OLÁ</p>
            <p className="text-xs text-gray-400">Vinícius Alves Portillo</p>
          </div>
        </div>

        <div className="mt-6 px-4 text-xs text-gray-400">
          MENU
        </div>

        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
              <Link to="/dashboard" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/meus-cursos" className="flex items-center gap-3 p-2 text-white bg-[#252525] rounded-md transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Meus cursos</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <Video className="h-5 w-5" />
                <span>Lives</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Aulas salvas</span>
              </Link>
            </li>
          </ul>

          <div className="mt-6 px-2 text-xs text-gray-400">
            GERAL
          </div>
          
          <ul className="space-y-1 mt-2">
            <li>
              <Link to="/profile" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <User className="h-5 w-5" />
                <span>Meu perfil</span>
              </Link>
            </li>
            <li>
              <Link to="/notificacoes" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <Bell className="h-5 w-5" />
                <span>Notificações</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <Link to="/login" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* User Profile Banner */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400"></div>
          <div className="absolute bottom-0 translate-y-1/2 left-12 flex items-end">
            <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-[#121212] bg-[#121212]">
              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <div className="ml-4 mb-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-xs text-gray-400">{user.level} • {user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Main content with search and courses */}
        <div className="mt-16 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Cursos em andamento</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-gray-400"
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-[#1A1A1A] rounded-md overflow-hidden hover:bg-[#252525] transition-colors cursor-pointer">
                <div className="flex items-center p-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{course.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhum curso encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllCourses;
