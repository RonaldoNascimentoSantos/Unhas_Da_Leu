"use client";

import { useState, useEffect } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import { ArrowRight, Star, Calendar, Clock } from 'lucide-react';
import unhaImg from '../../../public/hero.png';
import unhasImg from '../../../public/unhas.png';
import Image from 'next/image';

// Importe as novas imagens - Você precisará criar esses imports com os caminhos corretos
import unhaButterfly from '../../../public/imagem1.png'; // Imagem 1 - borboleta
import unhaPedicure from '../../../public/imagem2.png';   // Imagem 2 - pedicure
import unhaBlue from '../../../public/imagem3.png';           // Imagem 3 - azul
import unhaFrench from '../../../public/imagem4.png';       // Imagem 4 - francesinha

// Adicione estes imports junto com os outros imports de imagens
import unhaDesign from '../../../public/imagem5.png';  // Imagem 5
import unhaNude from '../../../public/imagem6.png';    // Imagem 6

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  // Dados do carrossel atualizados com as novas imagens
const slides = [
  {
    id: 1,
    title: "Unhas da Leu",
    subtitle: "Serviços premium de manicure e pedicure com Leylane Carvalho, profissional experiente com produtos de alta qualidade.",
    image: unhaButterfly, // Imagem da borboleta
  },
  {
    id: 2,
    title: "Leylane Carvalho",
    subtitle: "Manicure e pedicure profissional especializada em designs exclusivos e técnicas avançadas para unhas impecáveis.",
    image: unhaBlue, // Imagem azul
  },
  {
    id: 3,
    title: "Atendimento Domiciliar",
    subtitle: "No conforto da sua casa, levando conforto, amor e carinho para as pessoas. Cuidando da  beleza das suas mãos e pés com todo carinho.",
    image: unhaFrench, // Imagem francesinha
  },
  {
    id: 4,
    title: "Serviços de alta qualidade para nossos clientes",
    subtitle: "Utilizamos apenas produtos de alta qualidade e marcas reconhecidas para garantir os melhores resultados.",
    image: unhaPedicure, // Imagem pedicure
  },
  {
    id: 5,
    title: "Unhas lindas e Perfeitas",
    subtitle: "Criações únicas e personalizadas para cada cliente, deixando suas unhas com um visual incrível e diferenciado.",
    image: unhaDesign, // Imagem 5
  },
  {
    id: 6,
    title: "Tendências e Novidades",
    subtitle: "Sempre atualizada com as últimas tendências do mundo da manicure para oferecer o melhor para você.",
    image: unhaNude, // Imagem 6
  }
];

  // Auto-rotação do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white overflow-hidden">
      {/* Background Image Mobile */}
      <div className="absolute inset-0 lg:hidden">
        <div className="rounded-3xl overflow-hidden h-full w-full relative">
          <Image 
            src={slides[activeSlide].image} 
            alt='Imagem de unhas em destaque'
            fill
            sizes='100vw'
            priority
            quality={90}
            className='object-cover opacity-50 transition-opacity duration-500'
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDlhYmRkIi8+PC9zdmc+"
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-fuchsia-900 to-transparent opacity-70'></div>
      </div>

      <div className="container mx-auto pt-20 pb-20 md:py-24 lg:py-28 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>Serviço de qualidade e excelência</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-500">
              <span className="text-fuchsia-200">{slides[activeSlide].title.split(" ")[0]}</span>{" "}
              {slides[activeSlide].title.split(" ").slice(1).join(" ")}
            </h1>
            
            <p className="text-lg md:text-xl text-fuchsia-100 max-w-lg transition-all duration-500">
              {slides[activeSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://api.whatsapp.com/message/VSFXTHMFB52NJ1?autoload=1&app_absent=0" 
                className="bg-green-500 hover:bg-green-600 transition-all px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
              >
                <WhatsappLogo className='w-5 h-5' weight="fill" />
                Agende seu Horário
              </a>
              
              <a 
                href="#services" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                Ver Serviços
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Informações adicionais */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-fuchsia-200" />
                <span className="text-sm">Agendamento antecipado</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-fuchsia-200" />
                <span className="text-sm">Atendimento personalizado</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mt-8 max-w-md">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-lg">Novo Cliente? Ganhe desconto!</p>
                <span className="bg-fuchsia-800 text-white px-3 py-1 rounded-lg font-bold text-lg">5%</span>
              </div>
              
              <p className="text-fuchsia-100 text-sm">Em seu primeiro atendimento, ganhe 5% de desconto em qualquer serviço. Agende já!</p>
              
              <div className='flex items-center gap-4 mt-6'>
                <div className='w-16 h-16 relative overflow-hidden rounded-full border-2 border-white/40'>
                  <Image 
                    src={unhasImg} 
                    alt="Foto de unha" 
                    fill
                    className='object-cover'
                    quality={90}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Leylane Carvalho</span>
                  <span className="text-xs text-fuchsia-200">Manicure e Pedicure Profissional</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='hidden lg:block relative h-[600px] w-full'>
            <div className="absolute -right-12 top-0 bottom-0 w-full max-w-2xl">
              <div className="relative h-full w-full">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image 
                    src={slides[activeSlide].image} 
                    alt='Foto profissional de unhas' 
                    className='object-cover hover:scale-110 duration-300'
                    fill
                    sizes='50vw'
                    quality={95}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDlhYmRkIi8+PC9zdmc+"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 w-72 h-72 bg-fuchsia-300 rounded-full blur-3xl opacity-20 -right-10 top-20"></div>
                <div className="absolute -z-10 w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-20 right-20 bottom-20"></div>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
          {slides.map((slide, index) => (
            <button 
              key={slide.id} 
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ver slide ${index + 1}: ${slide.title}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}