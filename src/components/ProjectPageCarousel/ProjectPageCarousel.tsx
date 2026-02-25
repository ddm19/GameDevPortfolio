import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import "./ProjectPageCarousel.scss"

export interface CarouselSettings {
    loop?: boolean
    autoplay?: boolean
    delay?: number
    stopOnInteraction?: boolean
    stopOnMouseEnter?: boolean
    showDots?: boolean
    showArrows?: boolean
    draggable?: boolean
}

export interface CarouselItem {
    src: string
    alt?: string
    title?: string
    caption?: ReactNode
}

interface ProjectPageCarouselProps {
    items: CarouselItem[]
    settings?: CarouselSettings
}

const ProjectPageCarousel = ({ items, settings }: ProjectPageCarouselProps) => {
    const plugins = useMemo(() => {
        if (settings?.autoplay === false) {
            return []
        }
        return [
            Autoplay({
                delay: settings?.delay ?? 4500,
                stopOnInteraction: settings?.stopOnInteraction ?? false,
                stopOnMouseEnter: settings?.stopOnMouseEnter ?? true
            })
        ]
    }, [settings?.autoplay, settings?.delay, settings?.stopOnInteraction, settings?.stopOnMouseEnter])
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: settings?.loop ?? true,
            watchDrag: settings?.draggable ?? true
        },
        plugins
    )
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)
    const showDots = settings?.showDots ?? false
    const showArrows = settings?.showArrows ?? false

    const onUpdate = useCallback(() => {
        if (!emblaApi) {
            return
        }
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setScrollSnaps(emblaApi.scrollSnapList())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) {
            return
        }
        onUpdate()
        emblaApi.on("select", onUpdate)
        emblaApi.on("reInit", onUpdate)
        return () => {
            emblaApi.off("select", onUpdate)
            emblaApi.off("reInit", onUpdate)
        }
    }, [emblaApi, onUpdate])

    return (
        <div className="projectPageCarousel">
            <div className="projectPageCarousel__viewport" ref={emblaRef}>
                <div className="projectPageCarousel__container">
                    {items.map((item, index) => (
                        <figure
                            key={`${item.title ?? item.src}-${index}`}
                            className="projectPageCarousel__slide"
                        >
                            <img
                                src={item.src}
                                alt={item.alt ?? item.title ?? `Slide ${index + 1}`}
                                loading="lazy"
                                draggable="false"
                            />
                            {(item.title || item.caption) && (
                                <figcaption className="projectPageCarousel__caption">
                                    {item.title ? <h3>{item.title}</h3> : null}
                                    {item.caption}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>
                {showArrows && (
                    <div className="projectPageCarousel__arrows">
                        <motion.button
                            type="button"
                            className="projectPageCarousel__arrow"
                            onClick={() => emblaApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            aria-label="Slide anterior"
                            whileHover={{ transform: "translateX(-4px)" }}
                            whileTap={{ scale: 0.8, transform: "translateX(-10px)" }}
                        >
                            <ArrowLeftIcon />
                        </motion.button>
                        <motion.button
                            type="button"
                            className="projectPageCarousel__arrow"
                            onClick={() => emblaApi?.scrollNext()}
                            disabled={!canScrollNext}
                            aria-label="Slide siguiente"
                            whileHover={{ transform: "translateX(4px)" }}
                            whileTap={{ scale: 0.8, transform: "translateX(10px)" }}
                        >
                            <ArrowRightIcon />
                        </motion.button>
                    </div>
                )}
            </div>

            {showDots && scrollSnaps.length > 1 && (
                <div className="projectPageCarousel__dots">
                    {scrollSnaps.map((_, index) => (
                        <button
                            type="button"
                            key={`dot-${index}`}
                            className={`projectPageCarousel__dot${index === selectedIndex ? " is-active" : ""}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProjectPageCarousel
