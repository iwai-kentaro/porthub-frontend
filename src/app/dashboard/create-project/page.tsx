import CreateProjectContainer from "@/app/components/create-project/CreateProjectContainer";
import SideHeader from "@/app/components/side-header/SideHeader";
import { Box } from "@chakra-ui/react";

const CreateProjectPage = () => {
  return (
    <Box display="flex">
      <SideHeader />
      <Box width="100%" h={"100vh"} padding={4} overflowY="auto">
        <CreateProjectContainer />
      </Box>
    </Box>
  );
};

export default CreateProjectPage;
