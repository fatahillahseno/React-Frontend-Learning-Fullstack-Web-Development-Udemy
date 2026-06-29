import TaskPagination from "../TaskPagination/TaskPagination.jsx";
export default function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <p>Order Select</p>
      </nav>
    </>
  );
}
