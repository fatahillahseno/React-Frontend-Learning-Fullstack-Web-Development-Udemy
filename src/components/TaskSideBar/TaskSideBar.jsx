import { Card } from "@/components/ui/card";
import styles from "./TaskSideBar.module.css";
import UserProfile from "../UserProfile/UserProfile";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import Logout from "../Logout/Logout";
export default function TaskSideBar() {
  return (
    <section className={`fixed right-4 top-4 ${styles.sideBarHeight}`}>
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile></UserProfile>
        <CreateTaskForm></CreateTaskForm>
        <Logout></Logout>
      </Card>
    </section>
  );
}
