
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Course {
  id: number;
  title: string;
  description?: string;
  category?: string;
  progress?: number;
  instructor?: string;
  completed?: boolean;
  image?: string;
}

const AllCourses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ongoing");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for courses - using the same data from MyCourses component
  const ongoingCourses: Course[] = [
    { 
      id: 1, 
      title: "Nômade Milionário Legacy", 
      progress: 65, 
      instructor: "Carlos Silva", 
      category: "Negócios",
      image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png"
    },
    { 
      id: 2, 
      title: "Clickmax", 
      progress: 30, 
      instructor: "Ana Costa", 
      category: "Marketing",
      image: "lovable-uploads/fototeste2.png"
    },
    { 
      id: 3, 
      title: "Mindset Outlier", 
      progress: 45, 
      instructor: "Ricardo Oliveira", 
      category: "Desenvolvimento Pessoal",
      image: "lovable-uploads/MockupCelularNew.png"
    },
    { 
      id: 4, 
      title: "Princípios da persuasão e vendas", 
      progress: 20, 
      instructor: "Mariana Santos", 
      category: "Vendas",
      image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png"
    },
    { 
      id: 5, 
      title: "Criação sem limites com AI", 
      progress: 75, 
      instructor: "Thiago Mendes", 
      category: "Tecnologia",
      image: "lovable-uploads/fototeste2.png"
    },
  ];

  const completedCourses: Course[] = [
    { 
      id: 6, 
      title: "Mindset Outlier Standard", 
      completed: true, 
      instructor: "Ricardo Oliveira", 
      category: "Desenvolvimento Pessoal",
      image: "lovable-uploads/MockupCelularNew.png"
    },
    { 
      id: 7, 
      title: "Técnicas avançadas", 
      completed: true, 
      instructor: "Paulo Freitas", 
      category: "Negócios",
      image: "lovable-uploads/3ea44bce-308f-4181-af3a-3075682757eb.png"
    },
    { 
      id: 8, 
      title: "Bacharel em nutrição", 
      completed: true, 
      instructor: "Camila Rocha", 
      category: "Saúde",
      image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png"
    },
  ];

  const availableCourses: Course[] = [
    { 
      id: 9, 
      title: "O Manual da Transformação", 
      instructor: "Fernanda Lima", 
      category: "Desenvolvimento Pessoal",
      image: "lovable-uploads/fototeste2.png"
    },
    { 
      id: 10, 
      title: "Social Media Pro", 
      instructor: "Gabriel Souza", 
      category: "Marketing",
      image: "lovable-uploads/MockupCelularNew.png"
    },
  ];

  // Helper function to filter courses based on search query
  const filterCourses = (courses: Course[]) => {
    if (!searchQuery) return courses;
    
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get the appropriate courses based on active tab
  const getCoursesForTab = () => {
    switch (activeTab) {
      case "ongoing":
        return filterCourses(ongoingCourses);
      case "completed":
        return filterCourses(completedCourses);
      case "available":
        return filterCourses(availableCourses);
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => navigate('/dashboard')}
            className="h-10 w-10 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Meus Cursos</h1>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-gray-400"
              placeholder="Buscar cursos por título, instrutor ou categoria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="ongoing" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-[#1A1A1A] mb-6">
            <TabsTrigger 
              value="ongoing" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Em andamento ({ongoingCourses.length})
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Concluídos ({completedCourses.length})
            </TabsTrigger>
            <TabsTrigger 
              value="available" 
              className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Disponíveis ({availableCourses.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCoursesForTab().map((course) => (
                <Card key={course.id} className="bg-[#1A1A1A] border-none hover:ring-1 hover:ring-[#9b87f5]/50 transition-all">
                  <CardContent className="p-0">
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
                      <p className="text-xs text-gray-400 mt-1">{course.instructor} • {course.category}</p>
                      <div className="mt-3 bg-[#333] h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#9b87f5] h-full rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-400">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Button className="w-full mt-3 bg-[#9b87f5] hover:bg-[#8a76e4]">
                        Continuar curso
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {getCoursesForTab().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Nenhum curso encontrado para sua busca.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCoursesForTab().map((course) => (
                <Card key={course.id} className="bg-[#1A1A1A] border-none hover:ring-1 hover:ring-[#9b87f5]/50 transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-40">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Concluído
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{course.instructor} • {course.category}</p>
                      <div className="flex items-center gap-1 mt-3 text-green-500 text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Curso finalizado</span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" className="flex-1 border-[#333] hover:border-[#9b87f5] hover:bg-transparent">
                          Ver certificado
                        </Button>
                        <Button variant="outline" className="flex-1 border-[#333] hover:border-[#9b87f5] hover:bg-transparent">
                          Revisar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {getCoursesForTab().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Nenhum curso encontrado para sua busca.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="available" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCoursesForTab().map((course) => (
                <Card key={course.id} className="bg-[#1A1A1A] border-none hover:ring-1 hover:ring-[#9b87f5]/50 transition-all">
                  <CardContent className="p-0">
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
                      <p className="text-xs text-gray-400 mt-1">{course.instructor} • {course.category}</p>
                      <Button className="w-full mt-4 bg-[#9b87f5] hover:bg-[#8a76e4]">
                        Começar curso
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {getCoursesForTab().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Nenhum curso encontrado para sua busca.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AllCourses;
