"use client";

import { useState, useCallback } from "react";

import style from "./page.module.scss";
import Banner from "@/app/components/Banner";
import Card from "@/app/components/Card";
import Form from "@/app/components/Form";
import AddIcon from "@/app/icons/Vector";

import { v4 as uuidv4 } from "uuid";
export default function Home() {
  const [kpiList, setKpiList] = useState([]);
  const [selectedKpi, setSelectedKpi] = useState(null);

  const handleFillForm = useCallback((kpi) => {
    setSelectedKpi(kpi);
  }, []);

  const handleCreateKpi = useCallback(() => {
    const id = uuidv4();
    const newKpi = {
      id,
      name: "",
      tooltip: "",
      value: "",
      icon: null,
      trend: "",
    };
    setKpiList([...kpiList, newKpi]);
    setSelectedKpi(newKpi);
  }, [kpiList]);

  const handleSubmit = useCallback(
    (kpi) => {
      const index = kpiList.findIndex((item) => item.id === kpi.id);
      const newKpiList = [...kpiList];
      newKpiList[index] = kpi;
      setKpiList(newKpiList);
    },
    [kpiList]
  );

  const handleDelete = useCallback(
    (id) => {
      const newKpiList = kpiList.filter((item) => item.id !== id);
      setKpiList(newKpiList);
      if (id === selectedKpi?.id) setSelectedKpi(null);
    },
    [kpiList, selectedKpi]
  );
  return (
    <div className={style.main}>
      <Banner />
      <div className={style.KPIs}>
        <div className={style.Wrapper}>
          {kpiList.map((kpi) => (
            <Card
              key={kpi?.id}
              kpi={kpi}
              onClick={handleFillForm}
              selectedKpiId={selectedKpi?.id}
              onDelete={handleDelete}
            />
          ))}
          <div className={style.AddKPI} onClick={handleCreateKpi}>
            <AddIcon className={style.SVG} />
          </div>
        </div>
      </div>
      <div className={style.FormContainer}>
        {selectedKpi && (
          <Form
            selectedKpi={selectedKpi}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
