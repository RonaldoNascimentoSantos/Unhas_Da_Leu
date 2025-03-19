"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Palette, Sparkles, Gem, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
  {
    title: "Manicure (Mão)",
    description: "Inclui limpeza das unhas, corte, lixamento, cutículas, massagem nas mãos e esmalte da sua escolha. Ideal para quem deseja manter as unhas bem cuidadas.",
    duration: "40min",
    price: "R$ 25,00",
    icon: <Scissors />,
    linkText: 'Olá, gostaria de agendar uma Manicure Simples para Mãos.'
  },
  {
    title: "Mão com Postiça",
    description: "Tratamento completo para suas mãos, hidratação especial, além dos cuidados tradicionais com as unhas e Postiças",
    duration: "50min",
    price: "R$ 35,00",
    icon: <Palette />,
    linkText: 'Olá, gostaria de agendar uma Manicure com Postiça.'
  },
  {
    title: "Combo Pé e Mão",
    description: "Aproveite o combo com preço especial que inclui manicure e pedicure completas. O pacote perfeito para quem quer se cuidar da cabeça aos pés com economia.",
    duration: "1h30min",
    price: "R$ 40,00",
    icon: <Sparkles />,
    linkText: 'Olá, gostaria de agendar um Combo Pé e Mão.'
  },
  {
    title: "Pé e Mão com Postiças",
    description: "Aplicação de unhas postiças com designs personalizados. Inclui preparação da unha natural, colagem profissional e finalização perfeita para um resultado duradouro.",
    duration: "1h20min",
    price: "R$ 45,00",
    icon: <Gem />,
    linkText: 'Olá, gostaria de informações sobre Pé e Mão com Postiças.'
  },

  {
    title: "Pé e Mão mais SPA dos Pés ",
    description: "Pé e Mão com SPA dos pés. Inclui preparação da unha natural, colagem profissional e finalização perfeita para um resultado duradouro.",
    duration: "1h20min",
    price: "R$ 50,00",
    icon: <Gem />,
    linkText: 'Olá, gostaria de informações sobre Pé e Mão mais SPA dos Pés.'
  },

  {
    title: "Pé e Mão com Postiças mais SPA dos Pés",
    description: "Aplicação de unhas postiças com designs personalizados. Inclui preparação da unha natural, colagem profissional e finalização perfeita para um resultado duradouro.",
    duration: "1h20min",
    price: "R$ 55,00",
    icon: <Gem />,
    linkText: 'Olá, gostaria de informações sobre Pé e Mão com Postiças mais SPA dos Pés.'
  },

  {
    title: "Pedicure (Pé)",
    description: "Inclui limpeza das unhas, corte, lixamento, cutículas, massagem nas mãos e esmalte da sua escolha. Ideal para quem deseja manter as unhas bem cuidadas.",
    duration: "1h20min",
    price: "R$ 20,00",
    icon: <Gem />,
    linkText: 'Olá, gostaria de informações sobre Pé e Mão com Postiças mais SPA dos Pés.'
  },
  
  {
    title: "Pedicure mais SPA (Pé)",
    description: "Inclui limpeza das unhas, corte, lixamento, cutículas, massagem nas mãos e esmalte da sua escolha. Ideal para quem deseja manter as unhas bem cuidadas.",
    duration: "1h20min",
    price: "R$ 35,00",
    icon: <Gem />,
    linkText: 'Olá, gostaria de informações sobre Pé com SPA.'
  },
]

export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12 text-fuchsia-800">Nossos Serviços</h2>

        <div className="relative">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-fuchsia-100 text-fuchsia-900 rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex-1 flex items-start justify-between'>

                      <div className='flex gap-3'>
                        <span className='text-3xl text-fuchsia-600'>{item.icon}</span>
                        <div>
                          <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                          <p className='text-fuchsia-700 text-sm select-none'>
                            {item.description}
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className='border-t border-fuchsia-200 pt-4 flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-sm'>
                        <Clock className='w-4 h-4' />
                        <span>{item.duration}</span>
                        <span className="font-bold ml-2">{item.price}</span>
                      </div>

                      <a
                        target='_blank'
                        href={`https://api.whatsapp.com/message/VSFXTHMFB52NJ1?autoload=1&app_absent=0&text=${encodeURIComponent(item.linkText)}`}
                        className='flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md duration-300'
                      >
                        <WhatsappLogo className='w-5 h-5' />
                        Agendar
                      </a>

                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-fuchsia-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-fuchsia-600' />
          </button>

        </div>

      </div>
    </section>
  )
}