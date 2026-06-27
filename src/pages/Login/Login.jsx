import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <section className="flex flex-row w-full max-w-screen-xl min-h-screen justify-center items-center">
      <div className="w-4/12">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login and create tasks</CardDescription>
          </CardHeader>

          <CardContent>
            <Input className="mb-4" type="email" placeholder="Email"></Input>
            <Input
              className="mb-4"
              type="password"
              placeholder="Password"
            ></Input>
          </CardContent>

          <CardFooter className="flex flex-row justify-between">
            <p className="basis-3/5">
              Don't have an account?{" "}
              <Link to="signup" className="hover:text-blue-500">
                Sign Up Here
              </Link>
            </p>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
