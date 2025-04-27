
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const trainers = [
  {
    id: 1,
    name: "Профессор Гавкинс",
    role: "Управление дронами",
    image: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?q=80&w=1935&auto=format&fit=crop",
    bio: "Доктор робототехники, 8 лет опыта обучения собак управлению дронами"
  },
  {
    id: 2,
    name: "Доцент Хвостоверт",
    role: "Кибербезопасность",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1974&auto=format&fit=crop",
    bio: "Бывший военный кинолог, специалист по охране и защите электронных систем"
  },
  {
    id: 3,
    name: "Академик Лапочкин",
    role: "Умные устройства",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1887&auto=format&fit=crop",
    bio: "Разработчик революционных умных ошейников с функциями мониторинга здоровья"
  }
];

const FeaturedDogTrainers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {trainers.map((trainer) => (
        <Card key={trainer.id} className="p-6 bg-gray-800/70 border-blue-500/30 hover-scale">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 border-4 border-blue-500/50 mb-4">
              <AvatarImage src={trainer.image} alt={trainer.name} />
              <AvatarFallback className="bg-blue-800 text-white">
                {trainer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-blue-300 mb-1">{trainer.name}</h3>
            <p className="text-sm text-blue-400 mb-3">{trainer.role}</p>
            <p className="text-gray-300">{trainer.bio}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedDogTrainers;
