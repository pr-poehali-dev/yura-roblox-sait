
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CyberCatHero from "@/components/CyberCatHero";
import CourseList from "@/components/CourseList";
import FeaturedTeachers from "@/components/FeaturedTeachers";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            КиберКотШкола
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#courses" className="hover:text-purple-400 transition-colors">Курсы</a>
          <a href="#teachers" className="hover:text-purple-400 transition-colors">Учителя</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">О школе</a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">Вход</Button>
      </header>

      <CyberCatHero />

      <div id="courses" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Популярные курсы</h2>
        <CourseList />
      </div>

      <div id="teachers" className="container mx-auto py-12 px-4 bg-purple-900/30 rounded-lg my-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Наши преподаватели</h2>
        <FeaturedTeachers />
      </div>

      <div id="about" className="container mx-auto py-12 px-4">
        <Card className="p-8 bg-gray-800/70 border-purple-500/50">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">О Кибер школе котов</h2>
          <p className="mb-4 text-gray-300">
            Наша школа – это уникальное образовательное пространство, где коты всех возрастов могут освоить самые востребованные технологии будущего.
          </p>
          <p className="mb-4 text-gray-300">
            От программирования на Scratch до создания нейросетей – наши опытные кото-преподаватели помогут вашему питомцу раскрыть свой потенциал и стать настоящим киберкотом!
          </p>
          <div className="flex justify-center mt-6">
            <Button className="bg-purple-600 hover:bg-purple-700">Узнать больше</Button>
          </div>
        </Card>
      </div>

      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>© 2025 КиберКотШкола. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
