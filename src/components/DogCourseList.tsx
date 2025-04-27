
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Основы управления дронами",
    description: "Начальный курс для щенков: научитесь управлять маленькими дронами с помощью лая и движений.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
    level: "Начинающий",
    duration: "6 недель",
    price: "2800₽",
  },
  {
    id: 2,
    title: "Кибербезопасность: защита конуры",
    description: "Как обезопасить свою территорию и электронные устройства от вторжений.",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1935&auto=format&fit=crop",
    level: "Средний",
    duration: "8 недель",
    price: "4200₽",
  },
  {
    id: 3,
    title: "Умный ошейник: программирование и настройка",
    description: "Продвинутый курс по настройке и программированию умных устройств для собак.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop",
    level: "Продвинутый",
    duration: "10 недель",
    price: "5800₽",
  }
];

const DogCourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden hover-scale bg-gray-800/70 border-blue-500/30">
          <div className="h-48 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-blue-300">{course.title}</h3>
              <Badge variant="outline" className="bg-blue-800/50 text-blue-200">{course.level}</Badge>
            </div>
            <p className="text-gray-300 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-400">Длительность: {course.duration}</div>
                <div className="text-lg font-bold text-blue-300">{course.price}</div>
              </div>
              <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900/30">
                Подробнее
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DogCourseList;
