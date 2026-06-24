import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <h1>This is a login Page</h1>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          <Button asChild>
            <Link to="signup">Sign Up</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}
