import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useContext } from "react";
import { TasksContext } from "@/context/Tasks.context.jsx";

export default function TaskPagination() {
  const { tasks, setTasks } = useContext(TasksContext);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious></PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
