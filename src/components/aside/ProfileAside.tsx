import styles from "./profileAside.module.css";
import ProfileImage from "@/components/common/profileImage/ProfileImage";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import GithubIcon from "@/assets/github.svg?react";
import { ImAttachment } from "react-icons/im";

const ProfileAside = () => {
  return (
    <aside className={styles.wrap}>
      <div className={styles["profile-wrap"]}>
        <ProfileImage />
        <div className="px-[29px] pb-[25px]">
          <div className={styles["introduce-txt"]}>
            <p className="text-[15px] text-[#666] text-center">나에게 당근을 준다면<br/> 유혈사태는 일어나지 않을 것입니다.</p>
          </div>
          <div className={styles["info-wrap"]}>
            <h2 className={styles["nickname"]}>Aibao</h2>
            <span className="text-[10px] text-[#888]">Employee, Everland</span>
          </div>
          <dl className="flex items-center gap-x-[5px]">
            <dt>
              <FaLocationDot size={15} className="pt-[2px] fill-[#555]" />
            </dt>
            <dd>
              <span className="text-[#555] text-[12px]">Yongin, Korea</span>
            </dd>
          </dl>
          <ul className="flex items-center mt-[30px] gap-x-[8px]">
            <li>
              <button type="button" aria-label="포트폴리오" title="포트폴리오">
                <ImAttachment size={24} />
              </button>
            </li>
            <li>
              <button type="button" aria-label="이메일" title="이메일">
                <MdOutlineAlternateEmail size={24} />
              </button>
            </li>
            <li>
              <button type="button" aria-label="링크드인" title="링크드인">
                <FaLinkedin size={24} />
              </button>
            </li>
            <li>
              <button type="button" aria-label="깃허브" title="깃허브">
                <GithubIcon className="w-[24px] fill-[#888]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProfileAside;
