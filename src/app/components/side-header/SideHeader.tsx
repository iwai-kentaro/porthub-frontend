import LogoutContainer from "@/app/components/logout/LogoutContainer";
import { Box, Heading, Link } from "@chakra-ui/react";

const SideHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="left"
      justifyContent="space-between"
      gap={4}
      width={300}
      height={"100vh"}
      borderRight="1px solid #e0e0e0"
      padding={4}
      bg={"blue.200"}
    >
      <Box display="flex" flexDirection="column" gap={4}>
        <Heading>
          <Link href="/dashboard">Dashboard</Link>
        </Heading>
        <Link href="/dashboard/create-project">プロジェクト作成</Link>
        <Link href="/dashboard/project-list">プロジェクト一覧</Link>
      </Box>
      <Box display="flex" justifyContent="center">
        <LogoutContainer />
      </Box>
    </Box>
  );
};

export default SideHeader;
