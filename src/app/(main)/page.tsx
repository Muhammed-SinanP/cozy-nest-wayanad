"use client";
import Header from "@/components/headers/Header";
import MobileHeader from "@/components/headers/MobileHeader";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useEffect, useState } from "react";

const Main = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight-78);
    }
  }, []);
  const screenHeightScrolled = useScrollPosition(screenHeight);
console.log(screenHeightScrolled);

  return (
    <div>
      <Header screenHeightScrolled={screenHeightScrolled} />
      <MobileHeader screenHeightScrolled={screenHeightScrolled} />
    </div>
  );
};

export default Main;
