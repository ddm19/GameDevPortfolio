import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import "./ProjectPage.scss"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export interface TextFragment {
    text: string
    bold?: boolean
    color?: string
}

export interface ParagraphBlock {
    type: "paragraph"
    text?: string
    fragments?: TextFragment[]
}

export interface ImageBlock {
    type: "image"
    src: string
    alt: string
    className?: string
}

export interface CarouselSettings {
    loop?: boolean
    autoplay?: boolean
    delay?: number
    stopOnInteraction?: boolean
    stopOnMouseEnter?: boolean
    showDots?: boolean
    showArrows?: boolean
}

export interface CarouselItem {
    src: string
    alt?: string
    title?: string
    caption?: ParagraphBlock[]
}

export interface CarouselBlock {
    type: "carousel" | "gallery"
    items: CarouselItem[]
    settings?: CarouselSettings
}

export interface ActionBlock {
    type: "action"
    actions: HeroAction[]
}

export type ContentBlock = ParagraphBlock | ImageBlock | CarouselBlock | ActionBlock

export interface HeroAction {
    label: string
    href?: string
    to?: string
}

export interface HeroContent {
    eyebrow: string
    title: string
    lead: string
    chips: string[]
    actions: HeroAction[]
}

export interface TextSection {
    type: "text"
    id?: string
    title: string
    paragraphs: string[]
}

export interface PillarsSection {
    type: "pillars"
    id?: string
    title: string
    items: string[]
}

export interface TimelineItem {
    title: string
    blocks: ContentBlock[]
}

export interface TimelineSection {
    type: "timeline"
    id?: string
    title: string
    items: TimelineItem[]
}

export interface GalleryItem {
    src: string
    title: string
    caption: ParagraphBlock[]
}

export interface GallerySection {
    type: "gallery"
    id?: string
    title: string
    items: GalleryItem[]
}

export interface CarouselSection {
    type: "carousel"
    id?: string
    title: string
    items: CarouselItem[]
    settings?: CarouselSettings
}

export interface VideoSection {
    type: "video"
    id?: string
    title: string
    paragraphs: string[]
    poster: string
    src: string
    sourceType: string
    fallback: string
}

export interface ListSection {
    type: "list"
    id?: string
    title: string
    items: string[]
}

export interface MetricItem {
    label: string
    value: string
}

export interface MetricsSection {
    type: "metrics"
    id?: string
    title: string
    items: MetricItem[]
}

export type ProjectPageSection =
    | TextSection
    | PillarsSection
    | TimelineSection
    | GallerySection
    | CarouselSection
    | VideoSection
    | ListSection
    | MetricsSection

export interface ProjectPageData {
    baseClass: string
    hero: HeroContent
    sections: ProjectPageSection[]
}

interface ProjectPageProps {
    data: ProjectPageData
}

interface ProjectPageCarouselProps {
    items: CarouselItem[]
    settings?: CarouselSettings
    renderParagraph: (block: ParagraphBlock, key: string) => ReactNode
}

const ProjectPageCarousel = ({ items, settings, renderParagraph }: ProjectPageCarouselProps) => {
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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: settings?.loop ?? true }, plugins)
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
                            {(item.title || item.caption?.length) && (
                                <figcaption className="projectPageCarousel__caption">
                                    {item.title && <h3>{item.title}</h3>}
                                    {item.caption?.map((block, blockIndex) =>
                                        renderParagraph(block, `${item.title ?? index}-${blockIndex}`)
                                    )}
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
                            whileTap={{ scale: 0.80, transform: "translateX(-10px)" }}

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
                            whileTap={{ scale: 0.80, transform: "translateX(10px)" }}

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

const ProjectPage = ({ data }: ProjectPageProps) => {
    const className = (element?: string) => (element ? `${data.baseClass}__${element}` : data.baseClass)

    const renderActions = (actions: HeroAction[], keyPrefix: string) => (
        <div className={className("actions")}>
            {actions.map((action, index) => {
                const key = `${keyPrefix}-${action.label}-${index}`
                if (action.to) {
                    return (
                        <Link key={key} to={action.to}>
                            {action.label}
                        </Link>
                    )
                }
                return (
                    <a key={key} href={action.href}>
                        {action.label}
                    </a>
                )
            })}
        </div>
    )

    const renderParagraph = (block: ParagraphBlock, key: string): ReactNode => {
        if (block.fragments?.length) {
            return (
                <p key={key}>
                    {block.fragments.map((fragment, index) => {
                        const text = fragment.bold ? <strong>{fragment.text}</strong> : fragment.text
                        if (fragment.color) {
                            return (
                                <span key={`${key}-${index}`} style={{ color: fragment.color }}>
                                    {text}
                                </span>
                            )
                        }
                        return <span key={`${key}-${index}`}>{text}</span>
                    })}
                </p>
            )
        }
        if (!block.text) {
            return null
        }
        return <p key={key}>{block.text}</p>
    }

    const renderBlock = (block: ContentBlock, key: string): ReactNode => {
        if (block.type === "action") {
            return renderActions(block.actions, key)
        }
        if (block.type === "carousel" || block.type === "gallery") {
            return (
                <ProjectPageCarousel
                    key={key}
                    items={block.items}
                    settings={block.settings}
                    renderParagraph={renderParagraph}
                />
            )
        }
        if (block.type === "image") {
            return (
                <img
                    key={key}
                    src={block.src}
                    alt={block.alt}
                    loading="lazy"
                    className={block.className ?? className("image")}
                    draggable="false"
                />
            )
        }
        if (block.type === "paragraph") {
            return renderParagraph(block, key)
        }
        return null
    }

    return (
        <main className={className()}>
            <section className={className("hero")}>
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={className("heroContent")}
                >
                    <p className={className("eyebrow")}>{data.hero.eyebrow}</p>
                    <h1>{data.hero.title}</h1>
                    <p className={className("lead")}>{data.hero.lead}</p>

                    <div className={className("chips")}>
                        {data.hero.chips.map((chip) => (
                            <span key={chip}>{chip}</span>
                        ))}
                    </div>

                    {renderActions(data.hero.actions, "hero-actions")}
                </motion.div>
            </section>

            {data.sections.map((section, sectionIndex) => {
                if (section.type === "text") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className={className("text")}>
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    )
                }

                if (section.type === "pillars") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            <div className={className("pillars")}>
                                {section.items.map((item) => (
                                    <article key={item} className={className("card")}>
                                        <p>{item}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )
                }

                if (section.type === "timeline") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            <div className={className("timeline")}>
                                {section.items.map((item, itemIndex) => (
                                    <article key={`${item.title}-${itemIndex}`} className={className("timelineItem")}>
                                        <h3>{item.title}</h3>
                                        {item.blocks.map((block, blockIndex) => renderBlock(block, `${item.title}-${blockIndex}`))}
                                    </article>
                                ))}
                            </div>
                        </section>
                    )
                }

                if (section.type === "gallery") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            <div className={className("gallery")}>
                                {section.items.map((item) => (
                                    <figure key={item.title} className={className("shot")}>
                                        <img src={item.src} alt={item.title} loading="lazy" draggable="false" />
                                        <figcaption>
                                            <h3>{item.title}</h3>
                                            {item.caption.map((block, blockIndex) => renderParagraph(block, `${item.title}-${blockIndex}`))}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>
                    )
                }

                if (section.type === "carousel") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            <ProjectPageCarousel
                                items={section.items}
                                settings={section.settings}
                                renderParagraph={renderParagraph}
                            />
                        </section>
                    )
                }

                if (section.type === "video") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className={className("text")}>
                                    {paragraph}
                                </p>
                            ))}
                            <div className={className("videoWrap")}>
                                <video controls preload="metadata" poster={section.poster}>
                                    <source src={section.src} type={section.sourceType} />
                                    {section.fallback}
                                </video>
                            </div>
                        </section>
                    )
                }

                if (section.type === "list") {
                    return (
                        <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                            <h2>{section.title}</h2>
                            <ul className={className("list")}>
                                {section.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )
                }

                return (
                    <section key={`${section.title}-${sectionIndex}`} id={section.id} className={className("section")}>
                        <h2>{section.title}</h2>
                        <div className={className("metrics")}>
                            {section.items.map((item) => (
                                <article key={item.label} className={className("metric")}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </article>
                            ))}
                        </div>
                    </section>
                )
            })}
        </main>
    )
}

export default ProjectPage
