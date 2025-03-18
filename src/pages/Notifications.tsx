
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, BellOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Notifications = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Novo curso disponível",
      description: "Nômade Milionário LEGACY já está disponível para compra!",
      date: "Hoje, 10:30",
      read: false,
      type: "course"
    },
    {
      id: 2,
      title: "Live começa em 30 minutos",
      description: "A live sobre Estratégias de Vendas começa em breve. Não perca!",
      date: "Hoje, 09:15",
      read: false,
      type: "live"
    },
    {
      id: 3,
      title: "Seu progresso no curso",
      description: "Você completou 65% do curso de Marketing. Continue aprendendo!",
      date: "Ontem, 18:45",
      read: true,
      type: "progress"
    },
    {
      id: 4, 
      title: "Promoção exclusiva",
      description: "Oferta especial: 30% de desconto em todos os cursos até domingo!",
      date: "Ontem, 14:20",
      read: true,
      type: "promotion"
    }
  ];

  const unreadNotifications = notifications.filter(notification => !notification.read);
  
  const displayNotifications = activeTab === "all" ? notifications : unreadNotifications;

  const markAsRead = (id: number) => {
    toast({
      title: "Notificação marcada como lida",
      description: "A notificação foi marcada como lida com sucesso.",
    });
  };

  const markAllAsRead = () => {
    toast({
      title: "Todas notificações marcadas como lidas",
      description: "Todas as notificações foram marcadas como lidas com sucesso.",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'course':
        return <div className="bg-purple-500 p-2 rounded-full"><Bell className="h-5 w-5 text-white" /></div>;
      case 'live':
        return <div className="bg-red-500 p-2 rounded-full"><Bell className="h-5 w-5 text-white" /></div>;
      case 'progress':
        return <div className="bg-green-500 p-2 rounded-full"><Bell className="h-5 w-5 text-white" /></div>;
      case 'promotion':
        return <div className="bg-yellow-500 p-2 rounded-full"><Bell className="h-5 w-5 text-white" /></div>;
      default:
        return <div className="bg-gray-500 p-2 rounded-full"><Bell className="h-5 w-5 text-white" /></div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Notificações</h1>
          <button 
            onClick={markAllAsRead}
            className="text-sm bg-[#2A2A2A] hover:bg-[#333] px-4 py-2 rounded-md transition-colors"
          >
            Marcar todas como lidas
          </button>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveTab(value as "all" | "unread")}>
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-[#2A2A2A]">
            <TabsTrigger value="all" className="text-white data-[state=active]:bg-[#9b87f5]">
              Todas ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-white data-[state=active]:bg-[#9b87f5]">
              Não lidas ({unreadNotifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {displayNotifications.length > 0 ? (
              displayNotifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`flex gap-4 p-4 rounded-lg ${notification.read ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A] border-l-4 border-[#9b87f5]'}`}
                >
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-400">{notification.date}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{notification.description}</p>
                    {!notification.read && (
                      <button 
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-[#9b87f5] mt-2 hover:underline"
                      >
                        Marcar como lida
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-[#1A1A1A] rounded-lg">
                <BellOff className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                <h3 className="text-xl font-medium mb-1">Nenhuma notificação</h3>
                <p className="text-gray-400">Você não tem notificações para visualizar.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {unreadNotifications.length > 0 ? (
              unreadNotifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="flex gap-4 p-4 rounded-lg bg-[#1A1A1A] border-l-4 border-[#9b87f5]"
                >
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-gray-400">{notification.date}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{notification.description}</p>
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-[#9b87f5] mt-2 hover:underline"
                    >
                      Marcar como lida
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-[#1A1A1A] rounded-lg">
                <BellOff className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                <h3 className="text-xl font-medium mb-1">Nenhuma notificação não lida</h3>
                <p className="text-gray-400">Você não tem notificações não lidas.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
