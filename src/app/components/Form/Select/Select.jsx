import { useState, useCallback } from "react";
import style from "./Select.module.scss";
import Arrow from "@/app/icons/arrow";
import { trends } from "@/app/helpers/constants";
export default function Select({ data, onChangeSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((p) => !p);
  };

  const handleChange = useCallback(
    (value) => {
      onChangeSelect(value);
      setIsOpen(false);
    },
    [onChangeSelect]
  );

  return (
    <div className={style.Container}>
      <div
        className={data?.trend ? style.Selected : style.Placeholder}
        onClick={() => handleOpen()}
      >
        {data?.trend ? data?.trend : "Select"}
      </div>
      {isOpen && (
        <div className={style.Dropdown}>
          <div className={style.Item} onClick={() => handleChange("")}>
            —
          </div>
          {trends?.map((trend, index) => (
            <div
              key={index}
              className={style.Item}
              onClick={() => handleChange(trend)}
            >
              {trend}
            </div>
          ))}
        </div>
      )}
      <Arrow className={isOpen ? style.ArrowUp : style.ArrowDown} />
    </div>
  );
}
