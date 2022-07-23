import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Register,
  RecoverPassword,
  ConfirmAccount,
} from "../screens/auth";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
