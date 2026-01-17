import { Button } from "@/app/components/ui/button";
import { Rocket, Star, Sparkles, Menu } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-orange-400 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
      </div>
      <div className="absolute top-32 right-20 animate-pulse">
        <Sparkles className="w-16 h-16 text-orange-300" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
        <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
      </div>

      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Rocket className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-black tracking-tight">Aprende</span>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-orange-300">Kids</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#sobre" className="hover:text-orange-200 transition-colors hover:scale-110 transform">Sobre</a>
          <a href="#servicos" className="hover:text-orange-200 transition-colors hover:scale-110 transform">Serviços</a>
          <a href="#galeria" className="hover:text-orange-200 transition-colors hover:scale-110 transform">Galeria</a>
          <a href="#contato" className="hover:text-orange-200 transition-colors hover:scale-110 transform">Contato</a>
        </div>
        <button className="md:hidden">
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-bold mb-6 animate-pulse shadow-lg">
              🎉 Primeira aula GRÁTIS!
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Aprender é uma
              <span className="block text-orange-300">Aventura!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 font-medium">
              Reforço escolar divertido e eficiente para crianças de 6 a 12 anos. Aprenda brincando! 🚀✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-10 py-7 rounded-full shadow-2xl hover:scale-105 transform transition-all font-bold"
                onClick={scrollToContact}
              >
                Quero uma Aula Grátis! 🎨
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-4 border-white text-white hover:bg-white hover:text-blue-500 text-xl px-10 py-7 rounded-full font-bold"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Serviços
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-10 mt-10 md:mt-14">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-6 py-4 transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black">200+</div>
                <div className="text-blue-100 font-semibold">Crianças Felizes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-6 py-4 transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black">100%</div>
                <div className="text-blue-100 font-semibold">Diversão</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-6 py-4 transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black">10+</div>
                <div className="text-blue-100 font-semibold">Anos Ensino</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xhc3Nyb29tJTIwZnVufGVufDF8fHx8MTc2ODY3MzM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crianças aprendendo felizes"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-full p-6 shadow-2xl animate-bounce">
                <div className="text-4xl">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
