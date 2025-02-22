import { Button } from "@chakra-ui/react";

const LogoutButton = (props: { handleLogout: () => void }) => {
  const { handleLogout } = props;
  return (
    <>
      <Button onClick={handleLogout}>ログアウト</Button>
    </>
  );
};
export default LogoutButton;
