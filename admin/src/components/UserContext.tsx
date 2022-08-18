import { createContext } from "react";
type UserType = {
  email: string;
  name: string;
};
type ContextType = { user: UserType | null; setUser: (value: any) => void };

const UserContext = createContext<ContextType>({
  user: null,
  setUser: (value) => null,
});

export default UserContext;
