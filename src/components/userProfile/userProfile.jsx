import styles from "./UserProfile.module.css";

export default function UserProfile(props) {
  const {
    firstName = "First name not added",
    lastName = "Last name not added",
    skills = "Skills not added",
  } = props;

  return (
    <>
      <section className={`${styles["user-details"]} ${styles.border}`}>
        <ul>
          <li>First Name : {firstName}</li>
          <li>Last Name : {lastName}</li>
          <li>Skill : {skills}</li>
        </ul>
      </section>
    </>
  );
}
