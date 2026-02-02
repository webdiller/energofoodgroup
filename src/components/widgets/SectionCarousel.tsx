import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

interface SlideItem {
  image: string
  title?: string
  description?: string
}

const SLIDE_ITEMS: SlideItem[] = [
  { image: "./2.jpeg" },
  { image: "./1.jpeg" },
  { image: "./3.jpeg" }
]

export const SectionCarousel = () => {
  return (
    <section className="section-carousel py-12 md:py-16">
      <div className="relative px-0!">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".carousel-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={{
            prevEl: ".carousel-btn-prev",
            nextEl: ".carousel-btn-next",
          }}
          breakpoints={{
            1024: { slidesPerView: 1 },
            1280: { slidesPerView: 2 },
          }}
          className="pb-4!">
          {SLIDE_ITEMS.map((item, index) => (
            <SwiperSlide
              className="h-auto!"
              key={index}>
              <article className="flex h-full max-h-[400px] flex-col overflow-hidden bg-gray-100">
                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
                {!item.title?.length ||
                  (!item.description?.length && (
                    <div className="flex-1 p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      {item.description != null && item.description !== "" && <p className="mt-1 text-sm text-gray-600">{item.description}</p>}
                    </div>
                  ))}
              </article>
            </SwiperSlide>
          ))}
          {/* Arrows: absolute over slides, centered vertically */}
          <div
            slot="container-end"
            className="pointer-events-none absolute inset-x-0 top-[55%] z-10 flex w-full justify-between">
            <button
              type="button"
              className="carousel-btn-prev swiper-button-prev pointer-events-auto inline-flex size-10! items-center justify-center rounded-full bg-black/50 text-gray-500 transition hover:text-black disabled:pointer-events-none disabled:opacity-35"
              aria-label="Previous slide">
              <ChevronLeft className="size-5! fill-transparent! stroke-white" />
            </button>
            <button
              type="button"
              className="carousel-btn-next swiper-button-next pointer-events-auto inline-flex size-10! items-center justify-center rounded-full bg-black/50 text-gray-500 transition hover:text-black disabled:pointer-events-none disabled:opacity-35"
              aria-label="Next slide">
              <ChevronRight className="size-5! fill-transparent! stroke-white" />
            </button>
          </div>
        </Swiper>
      </div>
      <p className="mt-10 text-center lg:text-xl">*5% of all sales goes directly to Thai kids as a charity</p>
    </section>
  )
}
