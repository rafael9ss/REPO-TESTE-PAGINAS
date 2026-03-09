import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

export default function UrgencyBar() {
  const [dismissed, setDismissed] = useState(false);
  const { h, m, s } = useCountdown();

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="urgency-bar overflow-hidden sticky top-0 z-50"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-center relative">
            <span className="text-[11px] sm:text-sm font-bold text-white leading-none">
              🔥 Oferta especial —{" "}
              <span className="text-yellow-300 font-mono tracking-wider">
                {h}:{m}:{s}
              </span>{" "}
              · De{" "}
              <span className="line-through text-white/50 text-[10px]">$147</span>{" "}
              por apenas{" "}
              <span className="text-yellow-300 font-black">$14</span>
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar barra de oferta"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
