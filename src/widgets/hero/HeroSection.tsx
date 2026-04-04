import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Button, MaxWidth } from '@/shared/ui'
import firstImg from "./assets/first.png";
import secondImg from "./assets/second.png";
import thirdImg from "./assets/third.png";

type EmblaApiType = NonNullable<UseEmblaCarouselType[1]>

const SLIDES = [
  {
    title: "Start learning something new today",
    desc: "Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.",
    btn: "Browse Courses",
    bg: firstImg
  },
  {
    title: "Pick up where you left off",
    desc: "Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.",
    btn: "Start Learning",
    bg: secondImg
  },
  {
    title: "Learn together, grow faster",
    desc: "Connect with others and accelerate your progress through collaborative learning experiences.",
    btn: "Learn More",
    bg: thirdImg
  }
]

export const HeroSection = () => {
  //  loop is false so we have actual start/end boundaries
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

  const onSelect = useCallback((api: EmblaApiType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevBtnDisabled(!api.canScrollPrev())
    setNextBtnDisabled(!api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <MaxWidth className='relative'>
      <div className="overflow-hidden rounded-[30px]" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, i) => (
            <div 
              key={i} 
              style={{ backgroundImage: `url(${slide.bg})` }}
              className={`flex-[0_0_100%] min-w-0 h-105 bg-cover bg-center p-12 flex`}
            >
              <div className='flex flex-col gap-10 items-start '>
                <div className='flex flex-col gap-3 max-w-7xl'>
                  <h2 className='text-5xl text-white font-bold leading-none'>
                    {slide.title}
                  </h2>
                  <p className='text-2xl text-white font-light leading-snug'>
                    {slide.desc}
                  </p>
                </div>
                <Button variant='primary' className='px-6.25 py-5 text-xl font-medium'>
                  {slide.btn}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tabs */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {SLIDES.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 w-12 rounded-full transition-all duration-300 ${
              i === selectedIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-12 flex gap-6">
        <button 
          onClick={() => emblaApi?.scrollPrev()}
          disabled={prevBtnDisabled}
          className={`size-12 rounded-full border-3 flex items-center justify-center transition-all 
            ${prevBtnDisabled 
              ? 'border-[#C1BCBC80] text-[#C1BCBC80] cursor-default' 
              : 'border-white text-white hover:bg-white/10 cursor-pointer'
            }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button 
          onClick={() => emblaApi?.scrollNext()}
          disabled={nextBtnDisabled}
          className={`size-12 rounded-full border-3 flex items-center justify-center transition-all 
            ${nextBtnDisabled 
              ? 'border-[#C1BCBC80] text-[#C1BCBC80] cursor-default' 
              : 'border-white text-white hover:bg-white/10 cursor-pointer'
            }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </MaxWidth>
  )
}