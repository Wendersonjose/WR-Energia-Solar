import React from 'react';
import { Sun, Leaf, Battery, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre a WR Energia Solar</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Wanderson José</h3>
            <p className="text-gray-600 mb-6">
              Especializados em energia solar fotovoltaica e instalação de carregadores para carros elétricos. 
              Atendemos residências, condomínios e indústrias com soluções personalizadas e sustentáveis.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                <span className="text-gray-700">Energia Limpa</span>
              </div>
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-green-500 mr-3" />
                <span className="text-gray-700">Sustentável</span>
              </div>
              <div className="flex items-center">
                <Battery className="h-8 w-8 text-blue-500 mr-3" />
                <span className="text-gray-700">Eficiente</span>
              </div>
              <div className="flex items-center">
                <Award className="h-8 w-8 text-purple-500 mr-3" />
                <span className="text-gray-700">Qualidade</span>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Instalação de painéis solares"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}