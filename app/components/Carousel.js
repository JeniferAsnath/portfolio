import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 1",
    title: "Project 1",
    description: "Description of project 1.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 2",
    title: "Project 2",
    description: "Description of project 2.",
    technologies: ["Next.js", "Express", "MongoDB"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 3",
    title: "Project 3",
    description: "Description of project 3.",
    technologies: ["Vue.js", "Firebase"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 1",
    title: "Project 1",
    description: "Description of project 1.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 2",
    title: "Project 2",
    description: "Description of project 2.",
    technologies: ["Next.js", "Express", "MongoDB"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 3",
    title: "Project 3",
    description: "Description of project 3.",
    technologies: ["Vue.js", "Firebase"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 1",
    title: "Project 1",
    description: "Description of project 1.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 2",
    title: "Project 2",
    description: "Description of project 2.",
    technologies: ["Next.js", "Express", "MongoDB"],
  },
  {
    src: "/online-school-equipment-home(1).jpg",
    alt: "Project 3",
    title: "Project 3",
    description: "Description of project 3.",
    technologies: ["Vue.js", "Firebase"],
  },
];

const Carousel = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="mySwiper h-96 mt-10 dark:text-white"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiper-slide bg-center bg-cover w-80 md:w-80 md:h-48">
          <div className="relative w-full h-80">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="block w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{image.title}</h3>
              <p>{image.description}</p>
              <ul>
                {image.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
