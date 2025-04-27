
import { Button } from "@/components/ui/button";

const CyberDogHero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1876&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Кибер школа для собак будущего
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Обучаем собак программированию, управлению дронами и умным гаджетам с 2023 года
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-2 hover-scale">
                Начать обучение
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900/30 text-lg px-6 py-2">
                Показать курсы
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1887&auto=format&fit=crop" 
              alt="Кибер собака" 
              className="rounded-lg shadow-2xl border-2 border-blue-500/30 hover-scale"
              style={{
                maxWidth: "100%",
                filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberDogHero;
