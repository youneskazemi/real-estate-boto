import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "@/module/DashboardCard.module.css";
import Card from "@/module/Card";

function DashboardCard({ data }) {
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button>
          ویرایش
          <FiEdit />
        </button>
        <button>
          حذف
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
