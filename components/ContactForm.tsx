import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import BreathingBlob from "./BreathingBlob";

// --- Input Component with Micro-interactions ---
const FloatingInput = ({
  label,
  id,
  type = "text",
  ...props
}: {
  label: string;
  id: string;
  type?: string;
  [key: string]: any;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mb-8 group">
      <motion.label
        htmlFor={id}
        initial={{ y: 0, scale: 1, color: "#9CA3AF" }}
        animate={{
          y: isFocused || value ? -24 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? "#1E3A8A" : value ? "#0A0A0A" : "#9CA3AF",
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
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-gray-200 py-2 text-jumbo-black outline-none resize-none h-32 transition-colors duration-300"
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
        className="absolute bottom-0 left-0 w-full h-0.5 bg-jumbo-blue origin-left"
      />
    </div>
  );
};

// --- Main Form Component ---
const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formKey, setFormKey] = useState(0);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const name =
      (document.getElementById("name") as HTMLInputElement)?.value || "";
    const email =
      (document.getElementById("email") as HTMLInputElement)?.value || "";
    const message =
      (document.getElementById("message") as HTMLInputElement)?.value || "";

    const text = `New Contact Form Submission from JumboAI\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
    const token = (import.meta as any).env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = (import.meta as any).env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram credentials are not set.");
      setStatus("idle");
      return;
    }

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
        setFormKey((prev) => prev + 1);
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Failed to send message to Telegram");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <BreathingBlob
          className="w-[35rem] h-[35rem] -top-20 -right-10"
          delay={0.5}
        />
        <BreathingBlob
          className="w-[45rem] h-[45rem] -bottom-20 -left-10"
          delay={2.5}
        />
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
              <span className="text-jumbo-blue">Frequencies.</span>
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

            <form
              key={formKey}
              onSubmit={handleSubmit}
              className="relative z-10"
            >
              <FloatingInput id="name" label="Name" />
              <FloatingInput id="email" label="Email" type="email" />
              <FloatingInput id="message" label="Message" type="textarea" />

              <div className="mt-12 flex justify-end">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="relative group outline-none"
                  data-cursor="hover"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
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
                        <div className="absolute inset-0 bg-jumbo-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.87,0,0.13,1)] z-0" />

                        {/* Text Content */}
                        <span className="relative z-10 text-white group-hover:text-white transition-colors duration-500">
                          Initialize Sequence
                        </span>
                        <ArrowRight className="w-4 h-4 relative z-10 text-white group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
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
                        className="flex items-center gap-2 bg-jumbo-blue text-white px-8 py-4 rounded-full font-medium"
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
