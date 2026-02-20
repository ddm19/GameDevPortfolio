import Section from "components/Section/Section"
import { motion } from "framer-motion"
import { useState } from "react"
import "./Contact.scss"
import { CheckIcon, CopyIcon, PaperPlaneIcon } from "@radix-ui/react-icons"

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "https://formspree.io/f/mqeddygw"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [emailCopied, setEmailCopied] = useState(false)
    const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !email || !message) return
        setStatus("sending")

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ name, email, message }),
            })

            if (res.ok) {
                setStatus("success")
                setName("")
                setEmail("")
                setMessage("")
            } else {
                setStatus("error")
            }
        } catch (err) {
            setStatus("error")
        }
    }

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("domenechmorenodaniel@gmail.com")
        setEmailCopied(true)
        setTimeout(() => {
            setEmailCopied(false)
        }, 1500)
    }


    return (
        <Section id="contact">
            <h2 className="section__title">Quieres que hablemos?</h2>
            <motion.button
                className={`cta cta--secondary contact__submit ${emailCopied ? "green" : ""}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                onClick={copyEmailToClipboard}
            >


                {emailCopied ? <span><span>Copiado {":)"}</span> <CheckIcon /></span>
                    : <span>Copia mi email <CopyIcon /></span>
                }

            </motion.button>
            <motion.button
                className="cta cta--secondary contact__submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    var el = document.createElement("a")
                    el.href = "mailto:domenechmorenodaniel@gmail.com"
                    el.click()
                }}
            >
                Envíame un email <PaperPlaneIcon />
            </motion.button>
            <h2>o</h2>
            <h2 className="contact__subtitle">Envíame un mensaje</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <label className="contact__field">
                    <span className="contact__label">Nombre*</span>
                    <input
                        name="name"
                        className="contact__input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label className="contact__field">
                    <span className="contact__label">Email*</span>
                    <input
                        name="email"
                        type="email"
                        className="contact__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label className="contact__field">
                    <span className="contact__label">Mensaje*</span>
                    <textarea
                        name="message"
                        className="contact__textarea"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>

                <motion.button
                    type="submit"
                    className="cta cta--secondary contact__submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "sending"}
                >
                    {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </motion.button>

                {status === "success" && <div className="contact__msg contact__msg--success">Mensaje enviado. Gracias.</div>}
                {status === "error" && <div className="contact__msg contact__msg--error">Error al enviar. Intenta de nuevo.</div>}
            </form>
        </Section>
    )
}

export default Contact
