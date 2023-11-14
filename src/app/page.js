import style from "./page.module.scss";
import Banner from "@/app/components/Banner";
export default function Home() {
  return (
    <div className={style.main}>
      <Banner />
      INIT
    </div>
  );
}
