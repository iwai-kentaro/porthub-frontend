import { Link, Box } from "@chakra-ui/react";

const TopShow = (props: { token: string | null }) => {
  const { token } = props;
  return (
    <Box>
      {token ? (
        <Link href="/dashboard">ダッシュボード</Link>
      ) : (
        <Box display="flex" gap={4}>
          <Link href="/auth/login">ログイン</Link>
          <Link href="/auth/signup">新規登録</Link>
        </Box>
      )}
    </Box>
  );
};

export default TopShow;
