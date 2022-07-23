export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  RecoverPassword: undefined;
  ConfirmAccount: {
    email: string;
  };
};
