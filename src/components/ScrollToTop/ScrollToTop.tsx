import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const { pathname, search, hash } = useLocation()

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }
    }, [])

    useLayoutEffect(() => {
        if (hash) {
            const id = hash.replace("#", "")
            requestAnimationFrame(() => {
                const target = document.getElementById(id)
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            })
            return
        }
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        requestAnimationFrame(() => window.scrollTo(0, 0))
    }, [pathname, search, hash])

    return null
}

export default ScrollToTop
