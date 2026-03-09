import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
        >
          <div className="px-4 py-3 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10">
            <button
              onClick={scrollToOffer}
              className="w-full cta-shimmer text-white py-4 rounded-sm font-black text-base flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Quiero el mapa — $14
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[9px] text-muted-foreground mt-1.5">
              60 días garantía · Acceso inmediato
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
