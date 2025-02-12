import { Sun, Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">WR Energia Solar</span>
            </div>
            <p className="text-gray-400">
              Soluções em energia solar e carregadores para veículos elétricos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="tel:+5511988775471"
                className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                (11) 98877-5471
              </a>
              <a
                href="https://instagram.com/energiasolar_wr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @energiasolar_wr
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WR Energia Solar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}