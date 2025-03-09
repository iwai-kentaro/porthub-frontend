import SideHeader from "@/app/components/side-header/SideHeader";
import { Box, Heading } from "@chakra-ui/react";
import ListProjectsContainer from "@/app/components/list-projects/ListProjectsContainer";
const ProjectListPage = () => {
  return (
    <Box display="flex">
      <SideHeader />
      <Box width="100%" h={"100vh"} padding={4} overflowY="auto">
        <Heading>プロジェクト一覧</Heading>
        <ListProjectsContainer />
      </Box>
    </Box>
  );
};

export default ProjectListPage;
