import { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
//@ts-ignore
import Logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

type InputType = {
  email: string;
  password: string;
};

const Login = () => {
  const [formInput, setFormInput] = useState<InputType>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { signIn, loading, message } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  const changeText = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    //@ts-ignore
    setFormInput((state) => ({ ...state, [name]: value }));
  };

  const onLogin = () => {
    signIn(formInput);
  };

  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      navigate("/", { replace: true });
    } catch (error) {}
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <img style={{ width: "250px" }} src={Logo} />
          <Heading fontSize={"2xl"}>Se connecter</Heading>
          {message && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={400}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                onChange={changeText}
                name="email"
                type="email"
                placeholder="Email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input
                onChange={changeText}
                name="password"
                type="password"
                placeholder="Mot de passe"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                isLoading={loading}
                onClick={onLogin}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.700",
                }}
              >
                Se connecter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
