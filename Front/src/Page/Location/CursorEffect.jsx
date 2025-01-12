import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-follower");
    document.body.appendChild(cursor);

    const updateCursorPosition = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CursorEffect;
