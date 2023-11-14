import React, { useMemo } from "react";
import style from "./Card.module.scss";
import Tooltip from "./Tooltip";
import { useGraphTrend, useIntToString } from "@/app/helpers/hooks";
import { icons } from "@/app/helpers/constants";

export default function Card({ kpi, onClick, selectedKpiId }) {
  const trendImage = useGraphTrend(kpi?.trend);

  const isSelected = useMemo(() => {
    return selectedKpiId === kpi?.id;
  }, [selectedKpiId, kpi?.id]);

  const formattedValue = useIntToString(kpi?.value);
  return (
    <div
      className={isSelected ? `${style.Card} ${style.Selected}` : style.Card}
      onClick={() => onClick(kpi)}
    >
      <div className={style.Container}>
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
