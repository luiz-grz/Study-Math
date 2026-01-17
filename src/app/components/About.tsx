import { Heart, Smile, Trophy, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
            Quem Somos? 🎯
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Um lugar mágico onde aprender é divertido e cada criança é especial!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwcGxheWluZ3xlbnwxfHx8fDE3Njg2NzMzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crianças aprendendo brincando"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-4 shadow-xl">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full p-4 shadow-xl">
              <Smile className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl mb-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Na <span className="text-blue-500 font-bold">AprendeKids</span>, acreditamos que cada criança tem um jeito único de aprender. Por isso, criamos um ambiente colorido, acolhedor e super divertido! 🌈
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2">Metodologia Lúdica</h3>
                <p className="text-blue-50 font-medium">Aprendizado através de jogos e brincadeiras!</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-2">Turmas Pequenas</h3>
                <p className="text-orange-50 font-medium">Atenção individual para cada criança!</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform sm:col-span-2">
                <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 fill-white" />
                </div>
                <h3 className="text-2xl font-black mb-2">Professores Apaixonados</h3>
                <p className="text-purple-50 font-medium">Educadores especializados em ensino infantil que amam o que fazem!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
