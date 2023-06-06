import { STATS_TABLE } from '@/consts'
import { useMemo } from 'react'
import { Mousewheel, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from './Button'
import Container from './Container'

const commonBiggerScreen = {
  centeredSlides: false,
  centeredSlidesBounds: false,
  spaceBetween: 15,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
}

export default function CollectionsSection({ title }: { title: string }) {
  const shuffledData = useMemo(() => {
    return STATS_TABLE.sort(() => 0.5 - Math.random())
  }, [])

  return (
    <Container className="pt-16">
      <div className="flex items-center justify-between">
        <span className="font-poppins text-lg font-semibold text-slate-900 md:text-2xl">{title}</span>
        <Button>View All</Button>
      </div>

      <div className="-mx-4 sm:mx-0">
        <Swiper
          modules={[Navigation, Mousewheel]}
          mousewheel={{ invert: false, forceToAxis: true }}
          breakpoints={{
            0: {
              slidesPerView: 'auto',
              slidesPerGroup: 1,
              centeredSlides: true,
              centeredSlidesBounds: true,
              spaceBetween: 8,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
            },
            600: { slidesPerView: 2, slidesPerGroup: 2, ...commonBiggerScreen },
            768: { slidesPerView: 3, slidesPerGroup: 3, ...commonBiggerScreen },
            1024: { slidesPerView: 4, slidesPerGroup: 4, ...commonBiggerScreen },
            1200: { slidesPerView: 5, slidesPerGroup: 5, ...commonBiggerScreen },
            1600: { slidesPerView: 6, slidesPerGroup: 6, ...commonBiggerScreen },
          }}
          navigation
          className="collections-slide"
        >
          {shuffledData.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="cursor-pointer overflow-hidden rounded-2xl shadow duration-200 will-change-transform hover:-translate-y-1 hover:shadow-md sm:w-full"
                key={i}
              >
                <div className="relative aspect-video">
                  <img src={`/carousel/${item.image}`} className="absolute inset-0 h-full w-full object-cover object-top" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900">{item.name}</p>

                  <div className="mt-4 flex gap-x-8">
                    <div>
                      <p className="text-sm">Floor</p>
                      <p className="font-semibold text-slate-900">{item.floor} ETH</p>
                    </div>
                    <div>
                      <p className="text-sm">24h Volume</p>
                      <p className="font-semibold text-slate-900">{item.volume} ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  )
}
