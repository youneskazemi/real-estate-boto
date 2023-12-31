"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/AddProfilePage.module.css";
import axios from "axios";
import Loader from "../element/Loader";
import { useRouter } from "next/navigation";

function AddProfilePage({ data }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const router = useRouter();

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    const url = "/api/profile";
    const data = JSON.stringify(profileData);
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post(url, data, config);
      if (res.status === 201) {
        setProfileData({
          title: "",
          description: "",
          location: "",
          phone: "",
          price: "",
          realState: "",
          constructionDate: new Date(),
          category: "",
          rules: [],
          amenities: [],
        });
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

  const editHandler = async () => {
    setLoading(true);
    const url = "/api/profile";
    const data = JSON.stringify(profileData);
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const res = await axios.patch(url, data, config);

      if (res.status === 200) {
        toast.success(res.data.message);
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
      const errorMessage =
        error.response?.data?.error || "خطایی در سرور رخ داده است!";
      toast.error(errorMessage);
    }
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}

      <Toaster />
    </div>
  );
}

export default AddProfilePage;
