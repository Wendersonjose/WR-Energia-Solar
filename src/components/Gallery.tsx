import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import obra1 from "../assets/obra1.jpg";
import obra2 from "../assets/obra2.jpg";
import obra3 from "../assets/obra3.jpg";
import obra4 from "../assets/obra4.jpg";
import obra5 from "../assets/obra5.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossas Obras</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10} // Reduzi o espaço entre os slides
          slidesPerView={1} // Número de slides visíveis por vez
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full max-w-2xl mx-auto" // Reduzi o tamanho máximo do carrossel
        >
          <SwiperSlide>
            <img src={obra1} alt="Obra 1" className="rounded-lg shadow-lg w-[80%] mx-auto h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={obra2} alt="Obra 2" className="rounded-lg shadow-lg w-[80%] mx-auto h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={obra3} alt="Obra 3" className="rounded-lg shadow-lg w-[80%] mx-auto h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={obra4} alt="Obra 4" className="rounded-lg shadow-lg w-[80%] mx-auto h-[250px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={obra5} alt="Obra 5" className="rounded-lg shadow-lg w-[80%] mx-auto h-[250px] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
