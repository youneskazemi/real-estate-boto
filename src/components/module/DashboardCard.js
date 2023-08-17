import styles from "@/module/DashboardCard.module.css";
import Card from "@/module/Card";

function DashboardCard({ data }) {
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}></div>
    </div>
  );
}

export default DashboardCard;
