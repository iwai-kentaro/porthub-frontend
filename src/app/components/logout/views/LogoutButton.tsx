import Loading from "@/app/components/utility/Loading";
import { Button, Text } from "@chakra-ui/react";

const LogoutButton = (props: {
  handleLogout: () => void;
  isLoading: boolean;
}) => {
  const { handleLogout, isLoading } = props;
  return (
    <>
      {isLoading ? (
        <>
          <Loading />
          <Text>ログアウト中</Text>
        </>
      ) : (
        <Button onClick={handleLogout}>ログアウト</Button>
      )}
    </>
  );
};
export default LogoutButton;
