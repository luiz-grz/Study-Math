import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! 🎉 Entraremos em contato em breve!");
    setFormData({ name: "", email: "", phone: "", childName: "", childAge: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-orange-400 text-white px-8 py-3 rounded-full font-black text-lg mb-6 shadow-lg">
            FALE CONOSCO
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
            Vamos Conversar? 💬
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Entre em contato e agende a primeira aula grátis do seu filho!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-400 to-blue-500 border-0 p-8 md:p-10 shadow-2xl rounded-3xl text-white">
              <h3 className="text-3xl md:text-4xl font-black mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Telefone / WhatsApp</div>
                    <a href="tel:+5511999999999" className="text-blue-100 hover:text-white text-lg">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">E-mail</div>
                    <a href="mailto:contato@aprendekids.com.br" className="text-blue-100 hover:text-white text-lg">
                      contato@aprendekids.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Endereço</div>
                    <p className="text-blue-100 text-lg">
                      Rua das Estrelas, 456 - Jardim Feliz<br />
                      São Paulo, SP - CEP 04567-890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Horário de Funcionamento</div>
                    <p className="text-blue-100 text-lg">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábados: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-8 bg-white text-blue-600 hover:bg-blue-50 text-lg font-black py-6 rounded-full shadow-xl"
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                Chamar no WhatsApp
              </Button>
            </Card>

            {/* Map */}
            <Card className="border-0 p-2 shadow-2xl rounded-3xl overflow-hidden">
              <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6333094!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Localização AprendeKids"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 p-8 md:p-10 shadow-2xl rounded-3xl">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">Envie uma Mensagem</h3>
              <p className="text-gray-600 font-medium">Preencha o formulário e responderemos rapidinho!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-bold text-base">Nome do Responsável *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="mt-2 h-12 rounded-xl border-2 text-base"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-bold text-base">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="mt-2 h-12 rounded-xl border-2 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-bold text-base">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="mt-2 h-12 rounded-xl border-2 text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="childName" className="text-gray-700 font-bold text-base">Nome da Criança *</Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Nome do seu filho(a)"
                    required
                    className="mt-2 h-12 rounded-xl border-2 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-gray-700 font-bold text-base">Idade *</Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    type="number"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="Ex: 8 anos"
                    required
                    className="mt-2 h-12 rounded-xl border-2 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-bold text-base">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre as necessidades do seu filho..."
                  required
                  rows={5}
                  className="mt-2 rounded-xl border-2 text-base"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black text-lg py-6 rounded-full shadow-xl"
                size="lg"
              >
                <Send className="mr-2 w-6 h-6" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
