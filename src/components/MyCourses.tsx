
import React from 'react';
import { X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';

interface Course {
  id: number;
  title: string;
  icon?: React.ReactNode;
}

interface MyCoursesProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyCourses: React.FC<MyCoursesProps> = ({ isOpen, onClose }) => {
  // Mock data for courses
  const courses = [
    { id: 1, title: "Nômade Milionário Legacy" },
    { id: 2, title: "Clickmax" },
    { id: 3, title: "Mindset Outlier" },
    { id: 4, title: "Princípios da persuasão e vendas" },
    { id: 5, title: "Criação sem limites com AI" },
    { id: 6, title: "Mindset Outlier Standard" },
    { id: 7, title: "Técnicas avançadas" },
    { id: 8, title: "Bacharel em nutrição" },
    { id: 9, title: "O Manual da Transformação" },
    { id: 10, title: "Social Media Pro" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:w-[400px] bg-[#1A1F2C] text-white border-l border-[#333] overflow-y-auto">
        <SheetHeader className="pb-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-white">Meus cursos</SheetTitle>
            <SheetClose className="rounded-full hover:bg-[#333] p-2" onClick={onClose}>
              <X className="h-5 w-5" />
            </SheetClose>
          </div>
        </SheetHeader>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-300">Cursos em andamento</h3>
          
          <div className="space-y-2">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="p-4 rounded-lg bg-[#2A2F3C] hover:bg-[#343A4C] transition-colors flex items-center gap-3 cursor-pointer"
              >
                <div className="w-8 h-8 bg-[#9b87f5] rounded-md flex items-center justify-center text-white">
                  {course.icon || <span className="text-xs">📚</span>}
                </div>
                <span className="text-sm font-medium">{course.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none" />
      </SheetContent>
    </Sheet>
  );
};

export default MyCourses;
