import { useState, useEffect } from "react";

const SESSION_KEY = "dieta-urgency-end";

function getEndTime(): number {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed > Date.now()) return parsed;
    }
  } catch {}
  // 23 hours and 47 minutes from now
  const end = Date.now() + (23 * 60 + 47) * 60 * 1000;
  try {
    sessionStorage.setItem(SESSION_KEY, end.toString());
  } catch {}
  return end;
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 47, s: 0 });

  useEffect(() => {
    const endTime = getEndTime();
    const update = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");
  return {
    h: pad(timeLeft.h),
    m: pad(timeLeft.m),
    s: pad(timeLeft.s),
  };
}
