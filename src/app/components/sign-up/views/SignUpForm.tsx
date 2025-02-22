"use client";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const SignUpForm = (props: {
  handleSubmit: () => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordConChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isDisabled: boolean;
}) => {
  const {
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordConChange,
    isLoading,
    isDisabled,
  } = props;
  return (
    <>
      {isLoading && <p>loading...</p>}
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        mt={4}
      >
        <FormControl isRequired>
          <FormLabel>お名前</FormLabel>
          <Input onChange={handleNameChange} type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input onChange={handleEmailChange} type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input onChange={handlePasswordChange} type="password" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password確認</FormLabel>
          <Input onChange={handlePasswordConChange} type="password" />
        </FormControl>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled}
          mt={4}
          colorScheme="teal"
        >
          登録
        </Button>
      </Box>
    </>
  );
};
export default SignUpForm;
