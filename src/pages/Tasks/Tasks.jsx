import FilterBar from "@/components/FilterBar/FilterBar";
import TasksCounter from "@/components/TasksCounter/TasksCounter";

export default function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="flex flex-row justify-around">
            <TasksCounter status="todo" count={1} />
            <TasksCounter status="inProgress" count={4} />
            <TasksCounter status="completed" count={2} />
          </div>
          <FilterBar />
        </div>
      </section>
      <section className="flex basis-1/3">Create Task Section</section>
    </section>
  );
}
