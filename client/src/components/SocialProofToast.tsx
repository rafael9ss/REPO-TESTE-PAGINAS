import { useEffect } from "react";
import { toast } from "sonner";
import { BadgeCheck } from "lucide-react";

const BUYERS = [
  { name: "Valentina M.", city: "Buenos Aires", flag: "🇦🇷", kg: "8", time: "3 min" },
  { name: "Camila R.", city: "Lima", flag: "🇵🇪", kg: "12", time: "7 min" },
  { name: "Isabella F.", city: "Bogotá", flag: "🇨🇴", kg: "6", time: "1 min" },
  { name: "Sofía D.", city: "Ciudad de México", flag: "🇲🇽", kg: "10", time: "5 min" },
  { name: "María C.", city: "Santiago", flag: "🇨🇱", kg: "9", time: "2 min" },
  { name: "Ana L.", city: "Montevideo", flag: "🇺🇾", kg: "7", time: "9 min" },
  { name: "Rosa T.", city: "Medellín", flag: "🇨🇴", kg: "14", time: "4 min" },
  { name: "Lucía P.", city: "Guadalajara", flag: "🇲🇽", kg: "11", time: "6 min" },
];

export default function SocialProofToast() {
  useEffect(() => {
    let index = Math.floor(Math.random() * BUYERS.length);

    const show = () => {
      const b = BUYERS[index % BUYERS.length];
      index++;
      toast.custom(
        () => (
          <div
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="flex items-center gap-3 bg-[#141414] border border-white/10 rounded-sm px-4 py-3 shadow-2xl w-[280px]"
          >
            <span className="text-xl flex-shrink-0">{b.flag}</span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#F0EDE6] truncate">
                {b.name} · {b.city}
              </p>
              <p className="text-[10px] text-[#10A34F] flex items-center gap-1 mt-0.5">
                <BadgeCheck className="w-3 h-3 flex-shrink-0" />
                Compró hace {b.time} · perdió -{b.kg} kg
              </p>
            </div>
          </div>
        ),
        { duration: 5000, position: "bottom-left" }
      );
    };

    const t1 = setTimeout(show, 12000);
    const interval = setInterval(show, 55000);
    return () => {
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  return null;
}
