"use client";

import styles from "@/module/AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import { useState } from "react";
import Loader from "../element/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function AdminCard({ profile: { _id, title, price, location, description } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const publishHandler = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/profile/publish/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.message) {
        toast.success(data.message);
        router.refresh();
      }
    } catch (err) {
      toast.warning("مشکلی پیش آمده");
    }

    setLoading(false);
    router.refresh();
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)} تومان</span>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <button onClick={() => publishHandler(_id)}>انتشار</button>
      )}

      <Toaster />
    </div>
  );
}

export default AdminCard;
