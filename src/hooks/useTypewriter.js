import { useEffect, useState } from "react";

export default function useTypewriter(text, speedMs = 14) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setOutput(text);
      return;
    }

    setOutput("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);

    return () => clearInterval(id);
  }, [text, speedMs]);

  return output;
}
