export default function TasksCounter({ status = "todo", count } = props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`rounded-full border-solid border-4 p-6 mb-4  
          ${status === "todo" && "border-red-500"} 
          ${status === "inProgress" && "border-orange-500"} 
          ${status === "completed" && "border-green-500"} 
          `}
      >
        <div className="flex justify-center min-w-10 min-h-10 text-white text-3xl text-center leading-10">
          {count}
        </div>
      </div>
      {status === "todo" && <div>Todo</div>}
      {status === "inProgress" && <div>In Progress</div>}
      {status === "completed" && <div>Completed</div>}
    </div>
  );
}
