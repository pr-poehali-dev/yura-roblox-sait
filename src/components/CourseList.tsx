
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Основы программирования для котят",
    description: "Начальный курс для самых маленьких: изучение Scratch, основы алгоритмов и логики.",
    image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=2011&auto=format&fit=crop",
    level: "Начинающий",
    duration: "6 недель",
    price: "2500₽",
  },
  {
    id: 2,
    title: "Кибербезопасность: защита лотка",
    description: "Как обезопасить свои данные и личную информацию в интернете.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    level: "Средний",
    duration: "8 недель",
    price: "3800₽",
  },
  {
    id: 3,
    title: "Нейросети для ловли виртуальных мышей",
    description: "Продвинутый курс по машинному обучению и нейронным сетям.",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop",
    level: "Продвинутый",
    duration: "12 недель",
    price: "5500₽",
  }
];

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden hover-scale bg-gray-800/70 border-purple-500/30">
          <div className="h-48 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-purple-300">{course.title}</h3>
              <Badge variant="outline" className="bg-purple-800/50 text-purple-200">{course.level}</Badge>
            </div>
            <p className="text-gray-300 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-400">Длительность: {course.duration}</div>
                <div className="text-lg font-bold text-purple-300">{course.price}</div>
              </div>
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/30">
                Подробнее
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
