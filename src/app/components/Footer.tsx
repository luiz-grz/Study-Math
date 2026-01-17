import { Rocket, Facebook, Instagram, Youtube, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-full p-3">
                <Rocket className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black">Aprende</span>
                <span className="text-2xl md:text-3xl font-black text-orange-300">Kids</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6 font-medium leading-relaxed">
              Onde aprender é uma aventura mágica! Transformando crianças em pequenos gênios desde 2014. 🚀✨
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all transform hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black mb-6 text-orange-300">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg hover:translate-x-2 transform inline-block">
                  🏠 Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg hover:translate-x-2 transform inline-block">
                  📚 Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg hover:translate-x-2 transform inline-block">
                  📸 Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg hover:translate-x-2 transform inline-block">
                  💬 Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black mb-6 text-orange-300">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-blue-100 font-semibold text-lg">✏️ Reforço Escolar</li>
              <li className="text-blue-100 font-semibold text-lg">🎨 Arte & Criatividade</li>
              <li className="text-blue-100 font-semibold text-lg">🔢 Matemática Divertida</li>
              <li className="text-blue-100 font-semibold text-lg">📖 Português Lúdico</li>
              <li className="text-blue-100 font-semibold text-lg">🌍 Ciências</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black mb-6 text-orange-300">Horários</h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="font-bold text-lg mb-2">Segunda a Sexta</div>
                <div className="text-blue-100 text-lg">8h às 18h</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="font-bold text-lg mb-2">Sábados</div>
                <div className="text-blue-100 text-lg">9h às 13h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left font-medium text-lg">
              &copy; 2026 AprendeKids - Reforço Escolar Infantil. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-blue-100 font-medium">Feito com</span>
              <Heart className="w-6 h-6 text-red-400 fill-red-400 animate-pulse" />
              <span className="text-blue-100 font-medium">para as crianças!</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
