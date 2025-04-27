
import { Button } from "@/components/ui/button";

const CyberCatHero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-gray-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Кибер школа для котов будущего
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Обучаем котов программированию, кибербезопасности и робототехнике с 2023 года
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-2 hover-scale">
                Начать обучение
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/30 text-lg px-6 py-2">
                Показать курсы
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop" 
              alt="Кибер кот" 
              className="rounded-lg shadow-2xl border-2 border-purple-500/30 hover-scale"
              style={{
                maxWidth: "100%",
                filter: "drop-shadow(0 0 15px rgba(155, 135, 245, 0.5))"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCatHero;
