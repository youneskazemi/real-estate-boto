import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است!</p>
      )}

      {profiles.map((i) => (
        <DashboardCard key={i._id} data={i} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
