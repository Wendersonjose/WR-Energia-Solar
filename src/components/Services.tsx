import React from 'react';
import { Zap, Car, PenTool as Tool, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    title: 'Instalação de Módulos Solares',
    description: 'Instalação profissional de sistemas fotovoltaicos para sua residência ou empresa.'
  },
  {
    icon: <Car className="h-12 w-12 text-blue-500" />,
    title: 'Carregadores para Carros Elétricos',
    description: 'Soluções completas para carregamento de veículos elétricos em sua garagem.'
  },
  {
    icon: <Tool className="h-12 w-12 text-green-500" />,
    title: 'Manutenção e Limpeza',
    description: 'Serviços de manutenção preventiva e limpeza para garantir máxima eficiência.'
  },
  {
    icon: <Building2 className="h-12 w-12 text-purple-500" />,
    title: 'Projetos Personalizados',
    description: 'Atendimento especializado para residências, condomínios e indústrias.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}