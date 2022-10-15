import { nanoid } from "nanoid";
import { DataStore, graphqlOperation } from "aws-amplify";
import { Users, UserEvent, UserOrganisers } from "../src/models";
import { API } from "aws-amplify";
import { createUsers } from "../src/graphql/mutations";
import { listUsers } from "../src/graphql/queries";
import { ListUsersQuery } from "../src/API";
import { useState } from "react";
import { useAppSelector } from "../store";

const useUser = () => {
  const [userCheckStatus, setUserCheckStatus] = useState(false);

  const { user } = useAppSelector((state) => state);

  const getUser = async (userId: string) => {
    try {
      const userExists = await DataStore.query(Users, userId);

      return userExists;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id: string, newData: Users) => {
    try {
      const original = await DataStore.query(Users, id);
      if (!original) return;

      const updated = await DataStore.save(
        Users.copyOf(original, (updated) => {
          updated.imageUrl = newData.imageUrl;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const checkUser = async (email: string | null | undefined) => {
    if (!email) return;
    try {
      const items = await DataStore.query(Users, (c) => c.email("eq", email));

      /*       const {
        //@ts-ingore
        data: {
          listUsers: { items },
        },
      } = (await API.graphql(
        graphqlOperation(listUsers, { email: email })
      )) as Promise<ListUsersQuery>;
 */
      // console.log(email, "dya ", items);

      if (items.length > 0) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (data: Users) => {
    const userCreated = await checkUser(data.email);

    console.log("userCreated ", userCreated);

    if (userCreated || userCheckStatus) return;
    try {
      const response = await API.graphql(
        graphqlOperation(createUsers, {
          input: { id: data.email, email: data.email, fullName: data.fullName },
        })
      );
      if (data?.id) {
        setUserCheckStatus(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserEvents = async () => {
    let userData = user.user as { email: string };
    try {
      const user = await DataStore.query(UserEvent, (c) =>
        c.usersID("eq", userData?.email)
      );
    } catch (error) {}
  };

  return {
    updateUser,
    createUser,
    checkUser,
    getUser,
  };
};

export default useUser;
