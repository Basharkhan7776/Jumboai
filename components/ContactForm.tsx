import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";

// --- Input Component with Micro-interactions ---
interface FloatingInputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  id: string;
}

const FloatingInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  ...props
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;

  return (
    <div className="relative mb-8 group">
      <motion.label
        htmlFor={id}
        initial={{ y: 0, scale: 1, color: "#9CA3AF" }}
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "#FF9933" : hasValue ? "#0A0A0A" : "#9CA3AF",
          originX: 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-0 top-2 cursor-text pointer-events-none font-medium"
      >
        {label}
      </motion.label>

      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-gray-200 py-2 text-jumbo-black outline-none resize-none h-32 transition-colors duration-300"
          {...(props as any)}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-gray-200 py-2 text-jumbo-black outline-none transition-colors duration-300"
          {...props}
        />
      )}

      {/* Base Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      {/* Active Line (Animated) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-jumbo-saffron origin-left"
      />
    </div>
  );
};

// --- Main Form Component ---
const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram environment variables missing");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const text = `New Contact Form Submission From Jumbo AI:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Failed to send message", await response.text());
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending message", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-jumbo-saffron/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-jumbo-greenNeon/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Text Column */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-jumbo-black tracking-tight mb-6">
              Let's Align <br />
              <span className="text-jumbo-saffron">Frequencies.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-md leading-relaxed">
              Ready to engineer the future? Drop us a signal. Our neural network
              is listening.
            </p>
          </motion.div>

          <div className="flex gap-4">
            {["Build", "Scale", "Future"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="px-4 py-2 rounded-full border border-gray-100 text-xs font-medium text-gray-400 uppercase tracking-widest"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Tilt Form Card */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex-1 w-full max-w-md perspective-1000"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative group">
            {/* Gloss Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10">
              <FloatingInput
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingInput
                id="message"
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="mt-12 flex justify-end">
                <button
                  type="submit"
                  disabled={status !== "idle" && status !== "error"}
                  className="relative group outline-none"
                  data-cursor="hover"
                >
                  <AnimatePresence mode="wait">
                    {(status === "idle" || status === "error") && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // Improved styling for clipping and contrast
                        className="relative flex items-center gap-3 bg-jumbo-black px-8 py-4 rounded-full font-medium overflow-hidden isolate"
                        style={{ transform: "translateZ(0)" }} // Fix for Safari clipping issues
                      >
                        {/* Fill Animation Layer */}
                        <div className="absolute inset-0 bg-jumbo-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.87,0,0.13,1)] z-0" />

                        {/* Text Content */}
                        <span className="relative z-10 text-white group-hover:text-jumbo-black transition-colors duration-500">
                          {status === "error" ? "Retry" : "Initialize Sequence"}
                        </span>
                        <ArrowRight className="w-4 h-4 relative z-10 text-white group-hover:text-jumbo-black group-hover:translate-x-1 transition-all duration-500" />
                      </motion.div>
                    )}

                    {status === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center"
                      >
                        <Loader2 className="w-6 h-6 text-jumbo-black animate-spin" />
                      </motion.div>
                    )}

                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2 bg-jumbo-green text-white px-8 py-4 rounded-full font-medium"
                      >
                        <Check className="w-5 h-5" />
                        <span>Transmission Sent</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
