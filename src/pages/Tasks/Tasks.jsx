import FilterBar from "@/components/FilterBar/FilterBar.jsx";
import TasksCounter from "@/components/TasksCounter/TasksCounter.jsx";
import Task from "@/components/Task/Task.jsx";
import TaskSideBar from "@/components/TaskSideBar/TaskSideBar";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook.js";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function DisplaySkeleton() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}

export default function Tasks() {
  const [order, setOrder] = useState("asc");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const { data, isError, isSuccess, isPending, error } = useFetchTasks({
    order,
    limit,
    page,
  });

  console.log(data);

  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-10/12 p-4 items-center">
          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="flex flex-col w-11/12">
            <div className="flex flex-row justify-between mb-16">
              <TasksCounter status="todo" count={1} />
              <TasksCounter status="inProgress" count={4} />
              <TasksCounter status="completed" count={2} />
            </div>
            <FilterBar />
            {!data &&
              [...Array(limit)].map((_entry, index) => (
                <DisplaySkeleton key={`${index}skel`} />
              ))}

            {data &&
              data.data.map((task) => (
                <Task
                  key={task["_id"]}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  description={task.description}
                  dueDate={new Date(task.dueDate)}
                  id={task["_id"]}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="flex basis-1/3">
        <TaskSideBar></TaskSideBar>
      </section>
    </section>
  );
}
