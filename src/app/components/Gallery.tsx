import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Camera, Heart } from "lucide-react";

export function Gallery() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1574758324765-a29c77fb9c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY4NjczMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Aprendendo com alegria",
      color: "from-blue-400 to-blue-500"
    },
    {
      url: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcmVhZGluZyUyMGJvb2tzfGVufDF8fHx8MTc2ODY1ODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Leitura divertida",
      color: "from-orange-400 to-orange-500"
    },
    {
      url: "https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc2ODY3MzM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Atividades coloridas",
      color: "from-purple-400 to-purple-500"
    },
    {
      url: "https://images.unsplash.com/photo-1620398722262-969d8f2bc875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZHJhd2luZyUyMGFydHxlbnwxfHx8fDE3Njg2NzMzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Arte e criatividade",
      color: "from-pink-400 to-pink-500"
    },
    {
      url: "https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwcGxheWluZ3xlbnwxfHx8fDE3Njg2NzMzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Aprender brincando",
      color: "from-green-400 to-green-500"
    },
    {
      url: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xhc3Nyb29tJTIwZnVufGVufDF8fHx8MTc2ODY3MzM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sala de aula feliz",
      color: "from-cyan-400 to-cyan-500"
    }
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-spin" style={{ animationDuration: '10s' }}>⭐</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-spin" style={{ animationDuration: '15s' }}>🎨</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-3 rounded-full font-black text-lg mb-6 shadow-lg">
            MOMENTOS ESPECIAIS
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
            Nossa Galeria 📸
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Veja como é divertido aprender na AprendeKids!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}>
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Camera className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4" />
                    <h3 className="text-xl md:text-2xl font-black text-white px-4">{photo.title}</h3>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 md:p-10 shadow-lg">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
              Acompanhe nas Redes Sociais!
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
              Compartilhamos fotos e vídeos das atividades todos os dias!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                Instagram
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
