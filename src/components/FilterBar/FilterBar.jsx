import TaskPagination from "../TaskPagination/TaskPagination.jsx";
import OrderSelect from "../OrderSelect/OrderSelect.jsx";

export default function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}
