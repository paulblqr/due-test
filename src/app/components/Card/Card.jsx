import { useMemo, useState } from "react";
import style from "./Card.module.scss";
import Tooltip from "./Tooltip";
import { useGraphTrend, useIntToString } from "@/app/helpers/hooks";
import { icons } from "@/app/helpers/constants";
import AddIcon from "@/app/icons/Vector";

export default function Card({ kpi, onClick, onDelete, selectedKpiId }) {
  const [isHovering, setIsHovering] = useState(false);
  const trendImage = useGraphTrend(kpi?.trend);

  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(kpi?.id);
  };

  const isSelected = useMemo(() => {
    return selectedKpiId === kpi?.id;
  }, [selectedKpiId, kpi?.id]);

  const formattedValue = useIntToString(kpi?.value);
  return (
    <div
      className={isSelected ? `${style.Card} ${style.Selected}` : style.Card}
      onClick={() => onClick(kpi)}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className={style.Container}>
        {isHovering && (
          <div className={style.Delete} onClick={(e) => handleDelete(e)}>
            <AddIcon />
          </div>
        )}
        <div className={style.Top}>
          <div className={style.Name}>{kpi?.name ?? ""}</div>
          {kpi?.tooltip && kpi?.name && <Tooltip>{kpi.tooltip}</Tooltip>}
        </div>

        {kpi?.icon && <div className={style.Icon}>{icons[kpi?.icon]}</div>}
      </div>
      <div className={style.Container}>
        <div className={style.Value}>{formattedValue}</div>
        <div className={style.Trend}>{trendImage}</div>
      </div>
    </div>
  );
}
