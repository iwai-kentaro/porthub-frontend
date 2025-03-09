"use client";
import useShowProjectDetail from "@/app/components/show-project/hooks/useShowProjectDetail";
import ProjectDetail from "@/app/components/show-project/views/ProjectDetail";

const ShowProjectDetailContainer = () => {
  const showProjectDetailProps = useShowProjectDetail();
  return <ProjectDetail {...showProjectDetailProps} />;
};

export default ShowProjectDetailContainer;
