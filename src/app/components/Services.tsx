import { Card } from "@/app/components/ui/card";
import { BookOpen, Calculator, Palette, Globe, Sparkles, Brain, Music, Users } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Português",
      description: "Leitura, escrita e ortografia de forma divertida com histórias e jogos!",
      emoji: "📚",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Calculator,
      title: "Matemática",
      description: "Números, contas e problemas matemáticos brincando e se divertindo!",
      emoji: "🔢",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      title: "Ciências",
      description: "Descobrir o mundo através de experimentos e atividades práticas!",
      emoji: "🔬",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Palette,
      title: "Artes & Criatividade",
      description: "Pintura, desenho e projetos criativos para desenvolver a imaginação!",
      emoji: "🎨",
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Brain,
      title: "Raciocínio Lógico",
      description: "Jogos de lógica, quebra-cabeças e desafios para exercitar o cérebro!",
      emoji: "🧩",
      color: "from-pink-400 to-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Music,
      title: "Inglês Divertido",
      description: "Aprender inglês com músicas, histórias e brincadeiras interativas!",
      emoji: "🎵",
      color: "from-cyan-400 to-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Sparkles,
      title: "Lição de Casa",
      description: "Ajuda com tarefas escolares de forma organizada e tranquila!",
      emoji: "✏️",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Aulas em Grupo",
      description: "Aprender junto com amigos em um ambiente colaborativo e alegre!",
      emoji: "👫",
      color: "from-indigo-400 to-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-bounce">🌟</div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-20 animate-pulse">✨</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-orange-400 text-white px-8 py-3 rounded-full font-black text-lg mb-6 shadow-lg">
            O QUE OFERECEMOS
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
            Nossos Serviços 🚀
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Atividades super legais para o seu filho aprender se divertindo!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`${service.bgColor} border-0 p-6 md:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group rounded-3xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl md:text-5xl mb-4">{service.emoji}</div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Não achou o que procurava? 🤔
            </h3>
            <p className="text-xl text-orange-50 mb-6 font-medium">
              Entre em contato e vamos criar um plano personalizado para seu filho!
            </p>
            <a 
              href="#contato"
              className="inline-block bg-white text-orange-500 px-8 md:px-10 py-4 rounded-full font-black text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Fale Conosco! 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
