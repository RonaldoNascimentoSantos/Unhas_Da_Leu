import Image from "next/image";
import aboutImg from '../../../public/unhas.png'
import about2Img from '../../../public/hero.png'
import {Check, MapPin} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About(){
  return(
    <section className="bg-fuchsia-600 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image src={aboutImg} alt="Foto de unha"
              fill quality={100} className="object-cover hover:scale-110 duration-300" priority/>

              <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                <Image src={about2Img} alt="Foto de unha"
                fill quality={100} priority/>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold text-white">SOBRE</h2>

            <p className="text-fuchsia-100">
              Fique Linda e Maravilhosa com as unhas da Leleu!!
            </p>

            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-2">
                <Check className="text-fuchsia-200"/>
                Aberto desde 2021
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-fuchsia-200"/>
                Atendimento e serviços 
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-fuchsia-200"/>
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a href="https://api.whatsapp.com/message/VSFXTHMFB52NJ1?autoload=1&app_absent=0"
                className="bg-[#1ab52c] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:brightness-110 transition-all"
              >
                <WhatsappLogo className="w-5 h-5 text-white"/>
                Contato via Whatsapp
              </a>

              <a href="#"
                className="bg-fuchsia-800 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-fuchsia-900 transition-all"
              >
                <MapPin className="w-5 h-5 text-white"/>
                Atendimento em Domicílio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}