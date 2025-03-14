
import React, { useState } from 'react';
import { X, BookOpen, CheckCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface Course {
  id: number;
  title: string;
  description?: string;
  category?: string;
  progress?: number;
  instructor?: string;
  completed?: boolean;
}

interface MyCoursesProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyCourses: React.FC<MyCoursesProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("ongoing");

  // Mock data for courses
  const ongoingCourses: Course[] = [
    { id: 1, title: "Nômade Milionário Legacy", progress: 65, instructor: "Carlos Silva", category: "Negócios" },
    { id: 2, title: "Clickmax", progress: 30, instructor: "Ana Costa", category: "Marketing" },
    { id: 3, title: "Mindset Outlier", progress: 45, instructor: "Ricardo Oliveira", category: "Desenvolvimento Pessoal" },
    { id: 4, title: "Princípios da persuasão e vendas", progress: 20, instructor: "Mariana Santos", category: "Vendas" },
    { id: 5, title: "Criação sem limites com AI", progress: 75, instructor: "Thiago Mendes", category: "Tecnologia" },
  ];

  const completedCourses: Course[] = [
    { id: 6, title: "Mindset Outlier Standard", completed: true, instructor: "Ricardo Oliveira", category: "Desenvolvimento Pessoal" },
    { id: 7, title: "Técnicas avançadas", completed: true, instructor: "Paulo Freitas", category: "Negócios" },
    { id: 8, title: "Bacharel em nutrição", completed: true, instructor: "Camila Rocha", category: "Saúde" },
  ];

  const availableCourses: Course[] = [
    { id: 9, title: "O Manual da Transformação", instructor: "Fernanda Lima", category: "Desenvolvimento Pessoal" },
    { id: 10, title: "Social Media Pro", instructor: "Gabriel Souza", category: "Marketing" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:w-[400px] bg-[#1A1F2C] text-white border-l border-[#333] overflow-y-auto p-0">
        <SheetHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-white">Meus cursos</SheetTitle>
            <SheetClose className="rounded-full hover:bg-[#333] p-2" onClick={onClose}>
              <X className="h-5 w-5" />
            </SheetClose>
          </div>
        </SheetHeader>
        
        <Tabs defaultValue="ongoing" className="w-full" onValueChange={setActiveTab}>
          <div className="px-6">
            <TabsList className="w-full bg-[#2A2F3C] mb-4">
              <TabsTrigger 
                value="ongoing" 
                className="flex-1 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Em andamento
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="flex-1 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Concluídos
              </TabsTrigger>
              <TabsTrigger 
                value="available" 
                className="flex-1 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Disponíveis
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ongoing" className="px-6 mt-0 space-y-4">
            {ongoingCourses.map((course) => (
              <Card key={course.id} className="bg-[#2A2F3C] border-none hover:bg-[#343A4C] transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#9b87f5] rounded-md flex items-center justify-center text-white shrink-0">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{course.title}</h3>
                      <p className="text-xs text-gray-400">{course.instructor} • {course.category}</p>
                      <div className="mt-2 bg-[#1A1F2C] h-1.5 rounded-full overflow-hidden">
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
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="px-6 mt-0 space-y-4">
            {completedCourses.map((course) => (
              <Card key={course.id} className="bg-[#2A2F3C] border-none hover:bg-[#343A4C] transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{course.title}</h3>
                      <p className="text-xs text-gray-400">{course.instructor} • {course.category}</p>
                      <p className="text-xs mt-1 text-green-500">Concluído</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="available" className="px-6 mt-0 space-y-4">
            {availableCourses.map((course) => (
              <Card key={course.id} className="bg-[#2A2F3C] border-none hover:bg-[#343A4C] transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#333] rounded-md flex items-center justify-center text-white shrink-0">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{course.title}</h3>
                      <p className="text-xs text-gray-400">{course.instructor} • {course.category}</p>
                      <button className="mt-2 text-xs bg-[#9b87f5] px-3 py-1 rounded hover:bg-[#8a76e4] transition-colors">
                        Começar curso
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none" />
      </SheetContent>
    </Sheet>
  );
};

export default MyCourses;
