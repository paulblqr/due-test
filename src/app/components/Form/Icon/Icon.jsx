import { useMemo } from "react";
import style from "./Icon.module.scss";
export default function Icon({ name, icon, dataIcon, onChangeIcon }) {
  const isSelected = useMemo(() => {
    return name === dataIcon;
  }, [name, dataIcon]);
  return (
    <div
      className={
        isSelected ? `${style.Container} ${style.Selected}` : style.Container
      }
      onClick={() => onChangeIcon(name)}
    >
      {icon}
    </div>
  );
}
