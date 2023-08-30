import Card from "@/module/Card";
import styles from "@/template/BuyResidentialsPage.module.css";
function BuyResidentialsPage({ profiles }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        {profiles.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است!</p>
        )}
        {profiles.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
