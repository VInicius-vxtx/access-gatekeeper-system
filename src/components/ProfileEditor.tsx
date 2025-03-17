
import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Camera, Save, UserCog } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProfileFormValues {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

const ProfileEditor: React.FC<ProfileEditorProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [avatar, setAvatar] = useState("https://randomuser.me/api/portraits/women/44.jpg");
  const [showAvatarDialog, setShowAvatarDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Mock profile data
  const profileData = {
    name: "Dra. Isadora Cameron",
    email: "isadora.cameron@example.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    bio: "Médica e especialista em nutrição, apaixonada por ajudar pessoas a encontrarem uma vida mais saudável através de hábitos alimentares equilibrados.",
    level: "Nível 10",
    joinDate: "Membro desde Maio 2022",
    preferences: {
      notifications: true,
      emailUpdates: false,
      darkMode: true,
    }
  };

  // Initialize form with profile data
  const form = useForm<ProfileFormValues>({
    defaultValues: {
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      bio: profileData.bio,
    },
  });

  const onSubmit = (values: ProfileFormValues) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      console.log("Profile updated:", values);
      // Here you would usually update the profile in the database
    }, 1000);
  };

  // Avatar options
  const avatarOptions = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/43.jpg",
    "https://randomuser.me/api/portraits/women/42.jpg",
    "https://randomuser.me/api/portraits/women/41.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg",
    "https://randomuser.me/api/portraits/men/42.jpg",
  ];

  return (
    <>
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent side="right" className="w-full sm:w-[400px] bg-[#1A1F2C] text-white border-l border-[#333] overflow-y-auto p-0">
          <SheetHeader className="p-6 pb-2">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold text-white">Meu Perfil</SheetTitle>
              <SheetClose className="rounded-full hover:bg-[#333] p-2" onClick={onClose}>
                <X className="h-5 w-5" />
              </SheetClose>
            </div>
          </SheetHeader>
          
          <div className="px-6 pb-4">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group">
                <Avatar className="h-24 w-24 mb-2 border-2 border-[#9b87f5]">
                  <AvatarImage src={avatar} alt={profileData.name} />
                  <AvatarFallback className="bg-[#9b87f5]">
                    {profileData.name.split(' ').map(name => name[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <button 
                  onClick={() => setShowAvatarDialog(true)}
                  className="absolute bottom-0 right-0 bg-[#9b87f5] p-2 rounded-full shadow-md hover:bg-[#8a76e4] transition-colors"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h3 className="text-lg font-medium mt-2">{profileData.name}</h3>
              <p className="text-sm text-gray-400">{profileData.level} • {profileData.joinDate}</p>
            </div>
          </div>
          
          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <div className="px-6">
              <TabsList className="w-full bg-[#2A2F3C] mb-4">
                <TabsTrigger 
                  value="personal" 
                  className="flex-1 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                >
                  Dados Pessoais
                </TabsTrigger>
                <TabsTrigger 
                  value="preferences" 
                  className="flex-1 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                >
                  Preferências
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="personal" className="px-6 mt-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nome completo</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input placeholder="Seu nome" className="pl-10 bg-[#2A2F3C] border-none" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input placeholder="seu.email@exemplo.com" className="pl-10 bg-[#2A2F3C] border-none" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Telefone</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input placeholder="(00) 00000-0000" className="pl-10 bg-[#2A2F3C] border-none" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Localização</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input placeholder="Cidade, Estado" className="pl-10 bg-[#2A2F3C] border-none" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Biografia</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte um pouco sobre você..." 
                            className="bg-[#2A2F3C] border-none min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Esta informação aparecerá no seu perfil público
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>Salvando...</>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Salvar alterações
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="preferences" className="px-6 mt-0">
              <Card className="bg-[#2A2F3C] border-none">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Notificações</h4>
                      <p className="text-sm text-gray-400">Receber notificações dentro da plataforma</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={profileData.preferences.notifications} className="sr-only peer" />
                      <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9b87f5]"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Atualizações por email</h4>
                      <p className="text-sm text-gray-400">Receber emails sobre novos cursos e eventos</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={profileData.preferences.emailUpdates} className="sr-only peer" />
                      <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9b87f5]"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Modo escuro</h4>
                      <p className="text-sm text-gray-400">Alterar entre modo claro e escuro</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={profileData.preferences.darkMode} className="sr-only peer" />
                      <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9b87f5]"></div>
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-400">
                      Excluir minha conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none" />
        </SheetContent>
      </Sheet>
      
      {/* Avatar selection dialog */}
      <Dialog open={showAvatarDialog} onOpenChange={setShowAvatarDialog}>
        <DialogContent className="bg-[#1A1F2C] text-white border border-[#333]">
          <DialogTitle>Escolha seu avatar</DialogTitle>
          <DialogDescription className="text-gray-400">
            Selecione uma das opções abaixo ou faça upload de uma imagem.
          </DialogDescription>
          
          <div className="grid grid-cols-3 gap-4 py-4">
            {avatarOptions.map((src, index) => (
              <div 
                key={index} 
                className={`cursor-pointer rounded-full p-1 transition-all ${avatar === src ? 'ring-2 ring-[#9b87f5] bg-[#9b87f5]/20' : 'hover:bg-[#333]'}`}
                onClick={() => {
                  setAvatar(src);
                  setShowAvatarDialog(false);
                }}
              >
                <Avatar className="h-16 w-16">
                  <AvatarImage src={src} />
                </Avatar>
              </div>
            ))}
          </div>
          
          <div className="mt-2">
            <Button variant="outline" className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              Upload de foto
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileEditor;
