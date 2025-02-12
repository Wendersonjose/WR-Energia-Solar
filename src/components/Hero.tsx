import React from 'react';
import { Link } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Painéis solares"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tem um carro elétrico e precisa instalar seu carregador?
            </h1>
            <p className="text-xl mb-8">
              Somos especialistas em soluções de energia solar e instalação de carregadores para veículos elétricos.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}