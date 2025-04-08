
import { useState } from 'react';
import { BookOpen, Bookmark, Edit3, Heart, Save, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const SavedClasses = () => {
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [tempNote, setTempNote] = useState("");

  const savedClasses = [
    { 
      id: 1, 
      title: "Alimentação saudável", 
      description: "Principais dicas para uma dieta balanceada",
      instructor: "Dra. Ana Silva",
      date: "12/03/2025",
      duration: "45min",
      image: "lovable-uploads/MockupCelularNew.png",
      favorite: true
    },
    { 
      id: 2, 
      title: "Exercícios para iniciantes", 
      description: "Rotina de exercícios para quem está começando",
      instructor: "Carlos Oliveira",
      date: "05/03/2025",
      duration: "30min",
      image: "lovable-uploads/4458c882-222a-4b8a-a149-96e9e329b08a.png",
      favorite: false
    },
    { 
      id: 3, 
      title: "Mentalidade e emagrecimento", 
      description: "Como sua mente influencia seus resultados",
      instructor: "Dra. Patrícia Costa",
      date: "28/02/2025",
      duration: "50min",
      image: "lovable-uploads/fototeste2.png",
      favorite: true
    },
  ];

  const startEditingNote = (id: number) => {
    setEditingNoteId(id);
    setTempNote(notes[id] || "");
  };

  const saveNote = (id: number) => {
    setNotes({ ...notes, [id]: tempNote });
    setEditingNoteId(null);
  };

  const cancelEditingNote = () => {
    setEditingNoteId(null);
  };

  const deleteNote = (id: number) => {
    const newNotes = { ...notes };
    delete newNotes[id];
    setNotes(newNotes);
  };

  const toggleFavorite = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Toggled favorite for class ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-6 w-6 text-[#9b87f5]" />
          <h1 className="text-2xl font-bold">Aulas Salvas</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedClasses.map((savedClass) => (
            <div key={savedClass.id} className="flex flex-col md:flex-row gap-4 h-full">
              <Card className="bg-[#1A1A1A] border-[#333] text-white w-full">
                <CardHeader className="relative pb-0">
                  <div className="absolute top-4 right-4 z-10">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full bg-black/40 hover:bg-black/60"
                      onClick={() => toggleFavorite(savedClass.id)}
                    >
                      <Heart 
                        className={savedClass.favorite ? "fill-red-500 text-red-500" : "text-white"} 
                        size={18} 
                      />
                    </Button>
                  </div>
                  <div className="relative h-36 w-full">
                    <img 
                      src={savedClass.image} 
                      alt={savedClass.title} 
                      className="w-full h-full object-cover rounded-t-lg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="pt-3">
                  <CardTitle className="text-lg">{savedClass.title}</CardTitle>
                  <CardDescription className="text-gray-400">{savedClass.description}</CardDescription>
                  
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <span>{savedClass.instructor}</span>
                    <span>{savedClass.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 border-t border-[#333] mt-2 pt-4">
                  {editingNoteId === savedClass.id ? (
                    <div className="w-full">
                      <Textarea 
                        value={tempNote} 
                        onChange={(e) => setTempNote(e.target.value)}
                        placeholder="Escreva suas anotações aqui..."
                        className="bg-[#252525] border-[#444] text-white mb-2"
                      />
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={cancelEditingNote}
                          className="border-[#444] text-white hover:bg-[#333]"
                        >
                          Cancelar
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => saveNote(savedClass.id)}
                          className="bg-[#9b87f5] hover:bg-[#8a76e4]"
                        >
                          <Save size={14} className="mr-1" />
                          Salvar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {notes[savedClass.id] ? (
                        <div className="w-full">
                          <div className="flex justify-between items-center w-full mb-1">
                            <span className="text-xs font-medium text-gray-400">Suas anotações:</span>
                            <div className="flex gap-1">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-6 w-6 p-0"
                                onClick={() => startEditingNote(savedClass.id)}
                              >
                                <Edit3 size={14} />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-6 w-6 p-0 hover:text-red-500"
                                onClick={() => deleteNote(savedClass.id)}
                              >
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-white/90 bg-[#252525] p-2 rounded-md">
                            {notes[savedClass.id]}
                          </p>
                        </div>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="border-[#444] text-white hover:bg-[#333] w-full"
                          onClick={() => startEditingNote(savedClass.id)}
                        >
                          <Edit3 size={16} className="mr-2" />
                          Adicionar anotações
                        </Button>
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedClasses;
