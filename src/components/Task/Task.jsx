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
import { Badge } from "@/components/ui/badge";

export default function Task() {
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">
          The Title of The Task
        </CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">
            1 Jan, 2026
          </Badge>
          <Badge className="bg-sky-800" variant="outline">
            normal
          </Badge>
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
