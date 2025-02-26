"use client";
import ListProject from "@/app/components/list-projects/views/ListProject";
import useListProjects from "@/app/components/list-projects/hooks/useListProjects";

const ListProjectsContainer = () => {
  const listProjectsProps = useListProjects();
  return <ListProject {...listProjectsProps} />;
};

export default ListProjectsContainer;
