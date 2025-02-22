import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const LoginForm = (props: {
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isDisabled: boolean;
  email: string;
  password: string;
  isLoading: boolean;
}) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isDisabled,
    email,
    password,
    isLoading,
  } = props;
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
      >
        {isLoading && <p>loading...</p>}

        <FormControl isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            onChange={handleEmailChange}
            placeholder="メールアドレス"
            value={email}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          type="submit"
          disabled={isDisabled}
          mt={4}
          colorScheme="teal"
        >
          ログイン
        </Button>
      </Box>
    </>
  );
};
export default LoginForm;
