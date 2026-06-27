import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function Signup() {
  return (
    <section className="flex flex-row w-full max-w-screen-xl min-h-screen justify-center items-center">
      <div className="w-4/12 ">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create a new account to start creating tasks
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Input
              className="mb-4"
              type="text"
              placeholder="First Name"
            ></Input>
            <Input className="mb-4" type="text" placeholder="Last Name"></Input>
            <Input className="mb-4" type="email" placeholder="Email"></Input>
            <Input
              className="mb-4"
              type="password"
              placeholder="Password"
            ></Input>
          </CardContent>

          <CardFooter className="flex flex-row justify-between">
            <p className="basis-3/4">
              Already have an account?{" "}
              <Link to="/" className="hover:text-blue-500">
                Login Here
              </Link>
            </p>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
