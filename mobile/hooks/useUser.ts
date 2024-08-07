import { createUserEvent } from "../src/graphql/mutations";
import { Events, Organisers } from "../src/models";
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

  const addUserEvents = async (event: Events) => {
    const userData = user.user as { email: string };
    const exists = await DataStore.query(UserEvent, (c) =>
      c.eventsID("eq", event.id).usersID("eq", userData.email)
    );

    if (exists.length > 0) {
      return;
    }

    console.log("Gol D Roger", event);

    try {
      await DataStore.save(
        new UserEvent({
          usersID: userData?.email,
          eventsID: event.id,
        })
      );

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const removeUserEvent = async (eventId: string) => {
    const userData = user.user as { email: string };
    try {
      await DataStore.delete(UserEvent, (event) =>
        event.eventsID("eq", eventId).usersID("eq", userData.email)
      );

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserEvent = async (eventID: string) => {
    try {
      const userData = user.user as { email: string };
      const exists = await DataStore.query(UserEvent, (c) =>
        c.eventsID("eq", eventID).usersID("eq", userData.email)
      );

      if (exists.length > 0) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  };

  const addUserOrg = async (org: Organisers) => {
    const userData = user.user as { email: string };
    const exists = await DataStore.query(UserOrganisers, (c) =>
      c.organisersID("eq", org.id).usersID("eq", userData.email)
    );

    if (exists.length > 0) {
      return;
    }

    try {
      await DataStore.save(
        new UserOrganisers({
          usersID: userData?.email,
          organisersID: org.id,
        })
      );

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const removeUserOrg = async (orgID: string) => {
    const userData = user.user as { email: string };
    try {
      await DataStore.delete(UserOrganisers, (org) =>
        org.organisersID("eq", orgID).usersID("eq", userData.email)
      );

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserOrg = async (orgID: string) => {
    try {
      const userData = user.user as { email: string };
      const exists = await DataStore.query(UserOrganisers, (c) =>
        c.organisersID("eq", orgID).usersID("eq", userData.email)
      );

      if (exists.length > 0) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  };

  return {
    removeUserEvent,
    addUserEvents,
    updateUser,
    createUser,
    checkUser,
    getUser,
    checkUserEvent,
    addUserOrg,
    removeUserOrg,
    checkUserOrg,
  };
};

export default useUser;
