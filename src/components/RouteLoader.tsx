"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // duration of fake "loading"

    return () => clearTimeout(timeout);
  }, [pathname]); // triggers when route changes

  if (!loading) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-brand-secondary z-[9999]"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}
