import styles from "./UserProfile.module.css";
import LikeButton from "../LikeButton/LikeButton.jsx";

export default function UserProfile(props) {
  const {
    firstName = "First name not added",
    lastName = "Last name not added",
    skills = "Skills not added",
  } = props;

  return (
    <>
      <section>
        <ul className={`${styles["user-details"]} ${styles.border}`}>
          <li>First Name : {firstName}</li>
          <li>Last Name : {lastName}</li>
          <li>Skill : {skills}</li>
        </ul>
        <LikeButton />
      </section>
    </>
  );
}
