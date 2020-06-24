import { useEffect, useState } from "react";

const useScrollAtBottom = () => {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const offset = 10;
      setIsBottom(
        window.innerHeight + window.scrollY + offset >=
          document.body.offsetHeight
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return isBottom;
};

export default useScrollAtBottom;
