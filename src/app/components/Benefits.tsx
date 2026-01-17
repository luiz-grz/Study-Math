import { Card } from "@/app/components/ui/card";
import { Clock, Shield, Star, Video, Home, BarChart, Gift, Zap } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Manhã, tarde ou noite! Escolha o melhor horário para seu filho",
      color: "from-blue-400 to-blue-500",
      emoji: "⏰"
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Espaço protegido, higienizado e preparado para crianças",
      color: "from-green-400 to-green-500",
      emoji: "🛡️"
    },
    {
      icon: Video,
      title: "Aulas Online e Presenciais",
      description: "Escolha entre aulas em nossa sede ou no conforto de casa",
      color: "from-purple-400 to-purple-500",
      emoji: "💻"
    },
    {
      icon: Star,
      title: "Primeiro Dia Grátis",
      description: "Seu filho pode experimentar uma aula sem compromisso!",
      color: "from-yellow-400 to-yellow-500",
      emoji: "🎁"
    },
    {
      icon: Home,
      title: "Turmas Reduzidas",
      description: "No máximo 6 crianças por turma para melhor aprendizado",
      color: "from-pink-400 to-pink-500",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      icon: BarChart,
      title: "Relatórios de Progresso",
      description: "Acompanhe a evolução do seu filho com relatórios mensais",
      color: "from-orange-400 to-orange-500",
      emoji: "📊"
    },
    {
      icon: Gift,
      title: "Material Incluso",
      description: "Todos os materiais didáticos e lúdicos estão inclusos!",
      color: "from-cyan-400 to-cyan-500",
      emoji: "📦"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Melhora visível no desempenho escolar em poucas semanas!",
      color: "from-indigo-400 to-indigo-500",
      emoji: "⚡"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-400 to-blue-400 text-white px-8 py-3 rounded-full font-black text-lg mb-6 shadow-lg">
            POR QUE ESCOLHER A GENTE?
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
            Nossos Diferenciais 🌟
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Tudo que seu filho precisa para se desenvolver com alegria!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="bg-white border-0 p-6 md:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-3 cursor-pointer rounded-3xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl md:text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Promoção Especial de Inauguração!
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold">
                <span className="text-orange-500">50% OFF</span> na primeira mensalidade + Material escolar de brinde! 🎁
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-blue-100 rounded-2xl px-6 py-3">
                  <div className="text-sm font-bold text-blue-600">VAGAS LIMITADAS</div>
                  <div className="text-2xl font-black text-blue-700">Apenas 20!</div>
                </div>
                <div className="bg-orange-100 rounded-2xl px-6 py-3">
                  <div className="text-sm font-bold text-orange-600">TEMPO RESTANTE</div>
                  <div className="text-2xl font-black text-orange-700">15 dias!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
