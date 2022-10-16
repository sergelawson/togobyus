import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import useEvents from "../../hooks/useEvents";
import {
  UserEvent,
  Events,
  UserOrganisers,
  Organisers,
} from "../../src/models";
import { useAppSelector } from "../../store";
import { Storage } from "aws-amplify";
import { FlatList, Pressable, View } from "react-native";
import EventListCard from "../../components/Home/EventListCard";
import useOrgs from "../../hooks/useOrgs";
import OrgListCard from "../../components/Home/OrgListCard";
import useUser from "../../hooks/useUser";

const Following = () => {
  const { user } = useAppSelector((state) => state);

  const { getOrgs } = useOrgs();
  const { removeUserOrg } = useUser();

  const userOrgs = user?.orgs as UserOrganisers[];

  const [orgList, setOrgList] = useState<Organisers[] | []>([]);

  useEffect(() => {
    fetchOrgs();
  }, [userOrgs]);

  const fetchOrgs = async () => {
    let list: Organisers[] | [] = [];

    for (const userOrg of userOrgs) {
      try {
        let item = await getOrgs(userOrg.organisersID);
        if (!item || !item.imageUrl) return;

        const imageUrl = await Storage.get(item.imageUrl);

        item = { ...item, imageUrl: imageUrl };
        list = [...list, item];
      } catch (error) {
        console.log(error);
      }
    }

    setOrgList(list);
  };

  return (
    <Wrapper>
      <Header hasBackButton title="Mes Abonnements" />
      <FlatList
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
        data={orgList}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: index + 1 === orgList.length ? 70 : 0 }}>
            <OrgListCard
              id={item.id}
              image_url={item.imageUrl}
              name={item.name}
              date={item.date}
              onRemove={() => removeUserOrg(item.id)}
            />
          </View>
        )}
        keyExtractor={(item, index) => item.id + "_" + index.toString()}
      />
    </Wrapper>
  );
};

export default Following;
