import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useContext, useState, useEffect } from "react";
import { TasksContext } from "@/context/Tasks.context.jsx";

export function extractQueryString(url) {
  const parsedURL = new URL(url);
  const params = new URLSearchParams(parsedURL.search);
  return params;
}

export default function TaskPagination() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();

  const previousPage = links
    ? extractQueryString(links.previous).toString()
    : "#";
  const nextPage = links ? extractQueryString(links.next).toString() : "#";
  const order = links ? extractQueryString(links.current).get("order") : "#";
  useEffect(() => {
    if (tasks) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/tasks?${previousPage}`}
          ></PaginationPrevious>
        </PaginationItem>

        {meta &&
          [...Array(meta.totalPages)].map((item, index) => (
            <PaginationItem key={`pag${index}`}>
              <PaginationLink
                href={`/tasks/?limit=${meta.itemsPerPage}&page=${index + 1}&order=${order}`}
                isActive={index + 1 == meta.currentPage ? true : false}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext href={`/tasks?${nextPage}`}></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
