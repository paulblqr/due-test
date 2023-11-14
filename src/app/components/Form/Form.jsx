import { useState, useEffect, useCallback } from "react";
import style from "./Form.module.scss";
import { icons, trends } from "../../helpers/constants";
import RefreshIcon from "@/app/icons/refresh";
import Icon from "./Icon";
import Select from "./Select";
export default function Form({ selectedKpi, onSubmit, onDelete }) {
  const [data, setData] = useState(selectedKpi);

  const onChange = useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data]
  );

  const onChangeSelect = useCallback(
    (trend) => {
      setData({ ...data, trend });
    },
    [data]
  );

  const onChangeIcon = useCallback(
    (icon) => {
      setData({ ...data, icon });
    },
    [data]
  );

  useEffect(() => {
    if (selectedKpi?.id !== data?.id) setData(selectedKpi);
  }, [selectedKpi, data]);

  return (
    <div className={style.Container}>
      <div className={style.Title}>Cards Settings</div>
      <div className={style.Field}>
        <div className={style.SubName}>Name</div>
        <input
          type="text"
          className={style.Input}
          name="name"
          value={data?.name}
          onChange={onChange}
          placeholder="Element Name"
        />
      </div>
      <div className={style.Field}>
        <div className={style.SubName}>Tooltip</div>
        <textarea
          className={style.Textarea}
          name="tooltip"
          value={data?.tooltip ?? ""}
          onChange={onChange}
          placeholder="Element Tooltip"
        />
      </div>

      <div className={style.Field}>
        <div className={style.SubName}>Icon</div>
        <div className={style.Icons}>
          {Object.entries(icons).map(([name, icon]) => (
            <Icon
              key={name}
              name={name}
              icon={icon}
              onChangeIcon={onChangeIcon}
              dataIcon={data?.icon}
            />
          ))}
        </div>
      </div>
      <div className={style.Field}>
        <div className={style.SubName}>Value</div>
        <input
          type="number"
          className={style.Input}
          name="value"
          value={data?.value}
          onChange={onChange}
          placeholder="Element Value"
        />
      </div>
      <div className={style.Field}>
        <div className={style.SubName}>Trend</div>
        <Select onChangeSelect={onChangeSelect} data={data} />
      </div>
      <div className={style.Buttons}>
        <div
          className={`${style.Button} ${style.DeleteButton}`}
          onClick={() => onDelete(selectedKpi?.id)}
        >
          Delete KPI
        </div>
        <div className={style.Button} onClick={() => onSubmit(data)}>
          <RefreshIcon /> Update KPI
        </div>
      </div>
    </div>
  );
}
