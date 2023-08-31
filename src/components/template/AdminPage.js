import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد!</p>
      )}
      {profiles.map((profile) => (
        <AdminCard profile={profile} />
      ))}
    </div>
  );
}

export default AdminPage;
