import { motion } from "framer-motion"
import FlippingBook from "components/FlippingBook/FlippingBook"
import "./Loader.scss"

interface LoaderBrandProps {
    mode?: "overlay" | "inline"
    showTitle?: boolean
    showBook?: boolean
    showPotions?: boolean
}

const LoaderBrand = ({ mode = "overlay", showTitle = true, showBook = true, showPotions = true }: LoaderBrandProps) => {
    const isInline = mode === "inline"
    return (
        <motion.div
            className={`loader${isInline ? " loader--inline" : ""}`}
            initial={isInline ? undefined : { opacity: 1 }}
            exit={isInline ? undefined : { opacity: 0 }}
            transition={isInline ? undefined : { duration: 0.6 }}
        >
            {showBook && (
                <FlippingBook mode={mode} />
            )}

            {showPotions && (
                <motion.div
                    className="potion__wrapper"
                    animate={{ y: [0, -3, 0], rotate: [0, 3, -3, 0] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                >
                    <img src="/shared/brand/potion.svg" alt="Magic Potion" className="potion__flask" draggable="false" />
                    <div className="liquids__mask">
                        <motion.div
                            className="liquid liquid--green"
                            animate={{
                                height: ["25%", "35%", "25%"],
                                skewX: [0, 5, 8, 5, 0, -5, -8, -5, 0],
                                skewY: [0, -5, -8, -5, 0, 5, 8, 5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />

                        <div className="bubbles">
                            <div className="bubble b1" />
                            <div className="bubble b2" />
                            <div className="bubble b3" />
                        </div>
                    </div>
                </motion.div>
            )}

            {showTitle && (
                <motion.h1 className="loader__title">
                    <span className="base">Dani Domenech</span>
                    <motion.span
                        className="fill"
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "33%", "66%", "100%"] }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                    >
                        Dani Domenech
                    </motion.span>
                </motion.h1>
            )}

            <motion.div
                className="logo__wrapper"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {showPotions && (
                <motion.div
                    className="potion__wrapper potion__wrapper--right"
                    animate={{ y: [0, -3, 0], rotate: [0, -3, 3, 0] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                >
                    <img src="/shared/brand/potion.svg" alt="Magic Potion" className="potion__flask" draggable="false" />

                    <div className="liquids__mask">
                        <motion.div
                            className="liquid liquid--blue"
                            animate={{
                                height: ["25%", "35%", "25%"],
                                skewX: [0, -5, -8, -5, 0, 5, 8, 5, 0],
                                skewY: [0, 5, 8, 5, 0, -5, -8, -5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                        <div className="bubbles">
                            <div className="bubble b1" />
                            <div className="bubble b2" />
                            <div className="bubble b3" />
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export default LoaderBrand
