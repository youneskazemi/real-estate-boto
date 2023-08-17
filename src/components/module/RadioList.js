import styles from "@/module/RadioList.module.css";
import RadioButton from "../element/RadioButton";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;;

    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <RadioButton
          title="ویلا"
          name="villa"
          changeHandler={changeHandler}
          category={category}
        />
        <RadioButton
          title="آپارتمان"
          name="apartment"
          changeHandler={changeHandler}
          category={category}
        />
        <RadioButton
          title="مغازه"
          name="store"
          changeHandler={changeHandler}
          category={category}
        />
        <RadioButton
          title="دفتر"
          name="office"
          changeHandler={changeHandler}
          category={category}
        />
      </div>
    </div>
  );
}

export default RadioList;
