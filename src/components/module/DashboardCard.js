"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "@/module/DashboardCard.module.css";
import Card from "@/module/Card";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "../element/Loader";

function DashboardCard({ data }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const url = `/api/profile/delete/${data._id}`;
    const config = { hedaers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.delete(url, config);
      if (res.status === 200) {
        toast.success(res.data.message);
        router.refresh();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "خطایی در سرور رخ داده است!";
      toast.error(errorMessage);
    }
    setLoading(false);
  };
  return loading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف
          <AiOutlineDelete />
        </button>
      </div>

      <Toaster />
    </div>
  );
}

export default DashboardCard;
