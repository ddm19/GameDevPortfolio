import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./FlippingBook.scss"

const pagesCount = 25;
const restingAngles = [-34, -32, -30, -28]
const flippedAngle = -150

const FlippingBook = () => {
    const [current, setCurrent] = useState<number>(-1)

    useEffect(() => {
        let idx = -1
        let mounted = true

        const flipSequence = () => {
            idx++
            if (!mounted) return
            if (idx < pagesCount) {
                setCurrent(idx)
                setTimeout(flipSequence, 150)
            } else {
                setTimeout(() => {
                    if (!mounted) return
                    setCurrent(-1)
                    idx = -1
                    setTimeout(flipSequence, 550)
                }, 550)
            }
        }

        const starter = setTimeout(flipSequence, 200)
        return () => {
            mounted = false
            clearTimeout(starter)
        }
    }, [])

    return (
        <div className="flipping-book">
            <div className="book">
                <div className="pages">

                    {Array.from({ length: pagesCount }).map((_, i) => {
                        const angle = i <= current ? flippedAngle : restingAngles[i] || -28
                        return (
                            <motion.div
                                key={i}
                                className={`page page-${i + 1}`}
                                animate={{ rotateY: angle }}
                                initial={{ rotateY: restingAngles[i] || -28 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{ zIndex: pagesCount - i }}
                            >
                                <div className="page-inner">
                                    <div className="face front" />
                                    {i === 0 && (
                                        <div className="face back-cover" />
                                    )}
                                    <div className="face back" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default FlippingBook
