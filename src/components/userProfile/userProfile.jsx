import styles from "./UserProfile.module.css"

export default function UserProfile(){
  return (
    <>
      <section className={`${styles['user-details']} ${styles.border}`}>
        <ul>
          <li>First Name : John</li>
          <li>Last Name : Doe</li>
          <li>Skill : React, Javascript</li>
        </ul>
      </section>
    </>
  )
}