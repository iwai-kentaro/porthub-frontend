"use client";
import CreateProjectForm from "@/app/components/create-project/views/CreateProjectForm";
import useCreateProject from "@/app/components/create-project/hooks/useCreateProject";
const CreateProjectContainer = () => {
  const createProjectProps = useCreateProject();
  return <CreateProjectForm {...createProjectProps} />;
};

export default CreateProjectContainer;
