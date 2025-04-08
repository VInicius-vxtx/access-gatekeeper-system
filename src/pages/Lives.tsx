
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Video, Users, User, Bell, LogOut, Search, Calendar, PlayCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Live {
  id: number;
  title: string;
  instructor: string;
  date: string;
  duration: string;
  image: string;
  watched?: boolean;
}

const Lives = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample lives data
  const lives: Live[] = [
    { 
      id: 1, 
      title: "Empreendedorismo Digital em 2025", 
      instructor: "Paulo Silva",
      date: "12 Mar 2025", 
      duration: "1h 45min", 
      image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png",
      watched: true 
    },
    { 
      id: 2, 
      title: "Marketing de Performance", 
      instructor: "Ana Costa",
      date: "05 Mar 2025", 
      duration: "2h 10min", 
      image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png" 
    },
    { 
      id: 3, 
      title: "Estratégias de Vendas B2B", 
      instructor: "Carlos Mendes",
      date: "28 Fev 2025", 
      duration: "1h 30min", 
      image: "lovable-uploads/fototeste2.png" 
    },
    { 
      id: 4, 
      title: "Gestão Financeira para Startups", 
      instructor: "Mariana Rocha",
      date: "20 Fev 2025", 
      duration: "1h 15min", 
      image: "lovable-uploads/MockupCelularNew.png",
      watched: true 
    },
    { 
      id: 5, 
      title: "Inovação e Criatividade", 
      instructor: "Rafael Torres",
      date: "15 Fev 2025", 
      duration: "1h 50min", 
      image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png" 
    },
  ];

  // Filter lives based on search query
  const filteredLives = lives.filter(live => 
    live.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    live.instructor.toLowerCase().includes(searchQuery.toLowerCase())
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
              <Link to="/meus-cursos" className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-[#252525] rounded-md transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Meus cursos</span>
              </Link>
            </li>
            <li>
              <Link to="/lives" className="flex items-center gap-3 p-2 text-white bg-[#252525] rounded-md transition-colors">
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

        {/* Main content with search and lives */}
        <div className="mt-16 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Lives</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-gray-400"
                placeholder="Buscar lives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 bg-[#1A1A1A] border-b border-[#333] w-full justify-start rounded-none p-0">
              <TabsTrigger value="all" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none px-6 py-3">
                Todas
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none px-6 py-3">
                Próximas
              </TabsTrigger>
              <TabsTrigger value="watched" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none px-6 py-3">
                Assistidas
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLives.map((live) => (
                  <div key={live.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:ring-1 hover:ring-[#9b87f5]/50 transition-all cursor-pointer group">
                    <div className="relative h-48">
                      <img 
                        src={live.image} 
                        alt={live.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-3 right-3 bg-[#9b87f5] rounded-md px-2 py-1 text-xs font-medium flex items-center">
                        <PlayCircle className="h-3 w-3 mr-1" />
                        {live.duration}
                      </div>
                      {live.watched && (
                        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                          Assistido
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-[#9b87f5] rounded-full p-4">
                          <PlayCircle className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{live.title}</h3>
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-400">{live.instructor}</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {live.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredLives.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">Nenhuma live encontrada para sua busca.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-400">Não há lives agendadas para os próximos dias.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="watched" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLives.filter(live => live.watched).map((live) => (
                  <div key={live.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:ring-1 hover:ring-[#9b87f5]/50 transition-all cursor-pointer group">
                    <div className="relative h-48">
                      <img 
                        src={live.image} 
                        alt={live.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-3 right-3 bg-[#9b87f5] rounded-md px-2 py-1 text-xs font-medium flex items-center">
                        <PlayCircle className="h-3 w-3 mr-1" />
                        {live.duration}
                      </div>
                      <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                        Assistido
                      </div>
                      <div className="absolute inset-0 bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <div className="bg-[#9b87f5] rounded-full p-4">
                          <PlayCircle className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{live.title}</h3>
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-400">{live.instructor}</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {live.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredLives.filter(live => live.watched).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">Você ainda não assistiu nenhuma live.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Lives;
