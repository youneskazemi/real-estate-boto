import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          name={name}
          type="text"
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          name={name}
          type="text"
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
