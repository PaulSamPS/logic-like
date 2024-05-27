import styles from "./page.module.scss";
import { IItems } from "@/shared/types";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { Sidebar } from "@/widgets/sidebar";
import dynamic from "next/dynamic";

const getData = async (): Promise<IItems[]> => {
  const res = await fetch(`${process.env.API_URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ListCards = dynamic(() => import("@/widgets/list-card/list-card"), {
  loading: () => (
    <div style={{ height: "100vh", width: "100%" }}>
      <UiSpinner
        color={"var(--black)"}
        position={"relative"}
        bg={"transparent"}
      />
    </div>
  ),
  ssr: false,
});

const Home = async () => {
  const data = await getData();

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <ListCards items={data} />
      </div>
    </main>
  );
};

export default Home;
