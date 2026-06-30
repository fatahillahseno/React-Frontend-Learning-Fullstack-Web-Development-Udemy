import * as React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function Task() {
  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3">The Title of The Task</CardTitle>
        <div className="flex flex-row basis-1/3 justify-between">
          <p>Date</p>
          <p>Badge</p>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          molestiae non porro repudiandae quasi et ducimus officia saepe, fugit
          similique, totam quisquam quia culpa pariatur deleniti. Sequi dolorum
          ad eum.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <p>Switch in Progress</p>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}
