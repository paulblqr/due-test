import { useState } from "react";
import style from "./Tooltip.module.scss";
import Info from "@/app/icons/info_outined";
export default function Tooltip({ children }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      className={style.Container}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Info className={style.SVG} />
      <div className={isHovering ? style.Tooltip : style.Hidden}>
        {children}
      </div>
    </div>
  );
}
