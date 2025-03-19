"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Hanna  Cunha",
    role: "Cliente Fiel",
    content: "Estou extremamente satisfeita com o serviço! Unhas lindas e perfeitas como todas outras que você sempre faz.",
    rating: 5
  },
  {
    name: "Secleia Santos",
    role: "Cliente Frequente",
    content: "Isso que eu chamo de tranformação, arrasou mulher!!",
    rating: 5
  },
  {
    name: "Unhas da Paula Gontijo",
    role: "Amiga Profissional",
    content: "Leylane é uma profissional incrível e faz um excelente trabalho, super indico ela para minhas amigas!!",
    rating: 4
  },
  {
    name: "Cris Ferreira",
    role: "Cliente Satisfeita",
    content: "Leylane sempre faz um excelente trabalho, serviço de boa qualidade e unhas lindas e perfeitas",
    rating: 5
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-pink-800 text-center">O que nossas clientes dizem</h2>

        <div className="relative">
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-3">
                  <article className="bg-white text-pink-900 rounded-2xl p-6 shadow-md h-full flex flex-col border border-pink-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center text-pink-600 font-bold">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-pink-600 text-sm">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>

                    <p className="text-pink-700 italic flex-1">"{item.content}"</p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-pink-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-pink-600' />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <a 
            href="#services" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2"
          >
            Agende seu horário
          </a>
        </div>
      </div>
    </section>
  )
}