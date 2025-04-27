
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const teachers = [
  {
    id: 1,
    name: "Профессор Мурчалкин",
    role: "Основы программирования",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop",
    bio: "Доктор компьютерных наук, 10 лет опыта обучения котят программированию"
  },
  {
    id: 2,
    name: "Доцент Пушистикова",
    role: "Кибербезопасность",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?q=80&w=1887&auto=format&fit=crop",
    bio: "Бывший хакер, теперь учит котят защищаться от киберугроз"
  },
  {
    id: 3,
    name: "Академик Хвостиков",
    role: "Нейросети и ИИ",
    image: "https://images.unsplash.com/photo-1580784355694-0d5295dcc007?q=80&w=1887&auto=format&fit=crop",
    bio: "Разработал революционный алгоритм распознавания мышей на основе нейросетей"
  }
];

const FeaturedTeachers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teachers.map((teacher) => (
        <Card key={teacher.id} className="p-6 bg-gray-800/70 border-purple-500/30 hover-scale">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 border-4 border-purple-500/50 mb-4">
              <AvatarImage src={teacher.image} alt={teacher.name} />
              <AvatarFallback className="bg-purple-800 text-white">
                {teacher.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-purple-300 mb-1">{teacher.name}</h3>
            <p className="text-sm text-purple-400 mb-3">{teacher.role}</p>
            <p className="text-gray-300">{teacher.bio}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedTeachers;
