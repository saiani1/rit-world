import styles from "./profileAside.module.css";
import NumberOfVisitors from "@/components/common/numberOfVisitors/NumberOfVisitors";
import ProfileImage from "@/components/common/profileImage/ProfileImage";

const ProfileAside = () => {
  return (
    <aside className={styles.wrap}>
      <NumberOfVisitors />
      <div className={styles["profile-wrap"]}>
        <div>
          <ProfileImage />
          <div>
            <div className={styles["info-wrap"]}>
              <h2 className={styles["nickname"]}>릿</h2>
            </div>
          </div>
          <div className={styles["introduce-txt"]}>
            <p className="text-gray-500">세상을 찢어놓으셨드아</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileAside;
