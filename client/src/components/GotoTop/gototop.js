import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top:96,behavior:'smooth'});
    console.log(window)
  }, [pathname]);

  return null;
}
