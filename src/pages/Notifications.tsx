
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Video, Users, User, Bell, LogOut, Check, Info, Gift, RefreshCw } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'achievement' | 'update' | 'gift';
}

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Novo curso disponível",
      message: "O curso 'Nômade Milionário Legacy' já está disponível em sua conta!",
      date: "Hoje, 14:30",
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: "Conquista desbloqueada",
      message: "Parabéns! Você completou 5 cursos e desbloqueou a conquista 'Estudante Dedicado'.",
      date: "Ontem, 09:15",
      read: true,
      type: 'achievement'
    },
    {
      id: 3,
      title: "Atualização de curso",
      message: "O curso 'Mindset Outlier' foi atualizado com novos conteúdos.",
      date: "23/05/2023",
      read: false,
      type: 'update'
    },
    {
      id: 4,
      title: "Presente disponível",
      message: "Você recebeu um acesso gratuito ao workshop 'Estratégias de Crescimento'.",
      date: "20/05/2023",
      read: true,
      type: 'gift'
    },
  ]);

  const user = {
    name: "Vinícius Alves Portillo",
    level: "Nível 32",
    avatar: "lovable-uploads/31d121bb-69bd-4faa-b7b0-fb83bf2e008a.png"
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="h-5 w-5 text-blue-400" />;
      case 'achievement':
        return <Check className="h-5 w-5 text-green-400" />;
      case 'update':
        return <RefreshCw className="h-5 w-5 text-yellow-400" />;
      case 'gift':
        return <Gift className="h-5 w-5 text-purple-400" />;
      default:
        return <Info className="h-5 w-5 text-blue-400" />;
    }
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const getFilteredNotifications = () => {
    if (activeTab === "unread") {
      return notifications.filter(notification => !notification.read);
    }
    return notifications;
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar - updated to match the design in the image */}
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
              <Link to="/notificacoes" className="flex items-center gap-3 p-2 text-white bg-[#252525] rounded-md transition-colors">
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
      <main className="flex-1 overflow-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notificações</h1>
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              className="border-[#333] hover:border-[#9b87f5] hover:bg-transparent"
              onClick={handleMarkAllAsRead}
            >
              Marcar todas como lidas
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-[#1A1A1A] mb-6">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger 
              value="unread" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Não lidas ({unreadCount})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0 space-y-4">
            {getFilteredNotifications().map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-[#1A1A1A] p-4 rounded-lg border-l-4 ${
                  notification.read ? 'border-[#333]' : 'border-[#9b87f5]'
                }`}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#252525] rounded-md flex items-center justify-center shrink-0">
                    {getIconForType(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-400">{notification.date}</span>
                    </div>
                    <p className="text-sm text-gray-300">{notification.message}</p>
                    {!notification.read && (
                      <Button 
                        variant="ghost" 
                        className="mt-2 h-8 px-3 text-xs text-[#9b87f5] hover:text-[#8a76e4] hover:bg-[#252525]"
                        onClick={() => handleMarkAsRead(notification.id)}
                      >
                        Marcar como lida
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {getFilteredNotifications().length === 0 && (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Não há notificações para exibir.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="unread" className="mt-0 space-y-4">
            {getFilteredNotifications().map((notification) => (
              <div 
                key={notification.id} 
                className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-[#9b87f5]"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#252525] rounded-md flex items-center justify-center shrink-0">
                    {getIconForType(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-400">{notification.date}</span>
                    </div>
                    <p className="text-sm text-gray-300">{notification.message}</p>
                    <Button 
                      variant="ghost" 
                      className="mt-2 h-8 px-3 text-xs text-[#9b87f5] hover:text-[#8a76e4] hover:bg-[#252525]"
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      Marcar como lida
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {getFilteredNotifications().length === 0 && (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Não há notificações não lidas.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Notifications;
