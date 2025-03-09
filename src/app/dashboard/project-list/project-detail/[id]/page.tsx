"use client";

import ShowProjectDetailContainer from "@/app/components/show-project/ShowProjectDetailContainer";
import SideHeader from "@/app/components/side-header/SideHeader";
import { Box } from "@chakra-ui/react";

const DetailPage = () => {
  return (
    <Box display="flex">
      <SideHeader />
      <Box width="100%" h={"100vh"} padding={4} overflowY="auto">
        <ShowProjectDetailContainer />
      </Box>
    </Box>
  );
};

export default DetailPage;
