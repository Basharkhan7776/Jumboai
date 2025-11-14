"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Contact the support team at Shadcnblocks.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: Contact7Props) => {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              {description}
            </p>
          </motion.div>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-muted/50 rounded-lg p-6 border transition-all hover:border-primary hover:shadow-md"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              <span className="bg-primary/10 mb-4 flex size-10 flex-col items-center justify-center rounded-lg">
                <Mail className="h-5 w-auto text-primary" />
              </span>
              <p className="mb-2 text-base font-semibold">{emailLabel}</p>
              <p className="text-muted-foreground mb-3 text-sm">{emailDescription}</p>
              <a
                href={`mailto:${email}`}
                className="text-sm font-medium hover:underline"
              >
                {email}
              </a>
            </motion.div>
            <motion.div
              className="bg-muted/50 rounded-lg p-6 border transition-all hover:border-primary hover:shadow-md"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              <span className="bg-primary/10 mb-4 flex size-10 flex-col items-center justify-center rounded-lg">
                <MapPin className="h-5 w-auto text-primary" />
              </span>
              <p className="mb-2 text-base font-semibold">{officeLabel}</p>
              <p className="text-muted-foreground mb-3 text-sm">{officeDescription}</p>
              <a href="#" className="text-sm font-medium hover:underline">
                {officeAddress}
              </a>
            </motion.div>
            <motion.div
              className="bg-muted/50 rounded-lg p-6 border transition-all hover:border-primary hover:shadow-md"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              <span className="bg-primary/10 mb-4 flex size-10 flex-col items-center justify-center rounded-lg">
                <Phone className="h-5 w-auto text-primary" />
              </span>
              <p className="mb-2 text-base font-semibold">{phoneLabel}</p>
              <p className="text-muted-foreground mb-3 text-sm">{phoneDescription}</p>
              <a href={`tel:${phone}`} className="text-sm font-medium hover:underline">
                {phone}
              </a>
            </motion.div>
            <motion.div
              className="bg-muted/50 rounded-lg p-6 border transition-all hover:border-primary hover:shadow-md"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              <span className="bg-primary/10 mb-4 flex size-10 flex-col items-center justify-center rounded-lg">
                <MessageCircle className="h-5 w-auto text-primary" />
              </span>
              <p className="mb-2 text-base font-semibold">{chatLabel}</p>
              <p className="text-muted-foreground mb-3 text-sm">{chatDescription}</p>
              <a href="#" className="text-sm font-medium hover:underline">
                {chatLink}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Contact7 };
