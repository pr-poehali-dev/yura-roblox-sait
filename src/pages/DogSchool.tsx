
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CyberDogHero from "@/components/CyberDogHero";
import DogCourseList from "@/components/DogCourseList";
import FeaturedDogTrainers from "@/components/FeaturedDogTrainers";

const DogSchool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
            КиберШкола Собак
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#courses" className="hover:text-blue-400 transition-colors">Курсы</a>
          <a href="#trainers" className="hover:text-blue-400 transition-colors">Тренеры</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">О школе</a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">Вход</Button>
      </header>

      <CyberDogHero />

      <div id="courses" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Популярные курсы</h2>
        <DogCourseList />
      </div>

      <div id="trainers" className="container mx-auto py-12 px-4 bg-blue-900/30 rounded-lg my-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Наши тренеры</h2>
        <FeaturedDogTrainers />
      </div>

      <div id="about" className="container mx-auto py-12 px-4">
        <Card className="p-8 bg-gray-800/70 border-blue-500/50">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">О Кибер школе собак</h2>
          <p className="mb-4 text-gray-300">
            Наша школа – это уникальное образовательное пространство, где собаки всех пород могут освоить самые востребованные технологии будущего.
          </p>
          <p className="mb-4 text-gray-300">
            От программирования дронов до разработки умных устройств – наши опытные кинологи-технологи помогут вашему питомцу раскрыть свой потенциал и стать настоящим кибер-псом!
          </p>
          <div className="flex justify-center mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">Узнать больше</Button>
          </div>
        </Card>
      </div>

      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>© 2025 КиберШкола Собак. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default DogSchool;
