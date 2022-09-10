import {
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BoldText, Box, FlexBox, NormalText } from "../../components/Common";
import { BodyContent, HeaderEvent } from "../../components/EventDetail";
import Colors from "../../constants/Colors";
import { RouteProp, useRoute } from "@react-navigation/native";
import useEvents from "../../hooks/useEvents";
import usePlaces from "../../hooks/usePlaces";
import useOrgs from "../../hooks/useOrgs";
import { Storage } from "aws-amplify";
import { Events, Organisers, Places } from "../../src/models";
import { Image } from "react-native-expo-image-cache";
import { placeholder_blank_green } from "../../constants/Images";
import { Ionicons } from "@expo/vector-icons";
import LoadingContent from "../../components/LoadingContent";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

const DescLoader = (
  <Box mt={20}>
    <Placeholder Animation={Fade}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
  </Box>
);

const PlaceLoader = (
  <Box mt={20}>
    <Placeholder Left={PlaceholderMedia} Animation={Fade}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
    </Placeholder>
  </Box>
);

const OrgLoader = (
  <Box mt={20}>
    <Placeholder Animation={Fade}>
      <PlaceholderLine width={80} />
    </Placeholder>
  </Box>
);
type EventDetailsProps = {
  EventDetails: {
    id: string | null | undefined;
    image_url: string | null | undefined;
    name: string | null | undefined;
    placesID: string;
    organisersID: string;
  };
};

const EventDetail = () => {
  const { params } = useRoute<RouteProp<EventDetailsProps, "EventDetails">>();

  const { width } = Dimensions.get("screen");

  const [event, setEvent] = useState<Events | undefined>();
  const [place, setPlace] = useState<Places | undefined>();
  const [org, setOrg] = useState<Organisers | undefined>();
  const [imageUrl, setImageUrl] = useState<string | undefined | null>(
    params.image_url
  );

  const [limitLine, setLimitLine] = useState<number | undefined>(3);

  const toggleLineLimit = () => {
    setLimitLine((state) => {
      if (state === undefined) return 3;

      return undefined;
    });
  };

  useEffect(() => {
    fetchOrg(params?.organisersID);

    fetchEvent();

    fetchPlace(params?.placesID);
  }, []);

  const { getEvent, loadingSingle: loadingEvent } = useEvents();
  const { getPlace, loadingSingle: loadingPlace } = usePlaces();
  const { getOrgs, loadingSingle: loadingOrg } = useOrgs();

  const fetchEvent = async () => {
    if (params.id) {
      try {
        const response = await getEvent(params.id);

        setEvent(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchPlace = async (placeId: string | undefined) => {
    if (placeId) {
      const reponse = await getPlace(placeId);

      setPlace(reponse);
    }
  };

  const fetchOrg = async (orgId: string | undefined) => {
    if (orgId) {
      const reponse = await getOrgs(orgId);

      setOrg(reponse);
    }
  };

  /*   const getImage = async () => {
    if (params.image_url) {
      try {
        const response = await Storage.get(params.image_url);
        setImageUrl(response);
      } catch (error) {
        console.error(error);
      }
    }
  }; */

  const dateFormat = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderEvent />
      <Image
        style={{ width: width, height: width - 50, resizeMode: "cover" }}
        uri={imageUrl || placeholder_blank_green}
        preview={{ uri: placeholder_blank_green }}
      />
      <BodyContent>
        <Box flexDirection="row" justify="space-between">
          <FlexBox flex={1}>
            <BoldText numberOfLines={2} size={20}>
              {event?.name}
            </BoldText>
            <LoadingContent condition={loadingOrg} placeholder={OrgLoader}>
              <Box flexDirection="row" mt={10}>
                <Box>
                  <NormalText color={Colors.light.secondary}>
                    {org?.name}
                  </NormalText>
                </Box>
                <Box ml={20}>
                  <TouchableOpacity>
                    <BoldText color={Colors.light.primary}>S'abonner</BoldText>
                  </TouchableOpacity>
                </Box>
              </Box>
            </LoadingContent>
          </FlexBox>

          <TouchableOpacity
            onPress={() =>
              org?.contact ? Linking.openURL(`tel:${org?.contact}`) : null
            }
            style={{
              backgroundColor: Colors.light.primary_light,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Box flexDirection="row" align="center">
              <Ionicons
                color={Colors.light.primary}
                name="call-sharp"
                size={18}
              />
            </Box>
          </TouchableOpacity>
        </Box>

        <LoadingContent condition={loadingEvent} placeholder={PlaceLoader}>
          <Box flexDirection="row" mt={20}>
            <Box
              justify="center"
              align="center"
              style={{
                backgroundColor: Colors.light.primary_light,
                width: 35,
                height: 35,
                borderRadius: 5,
              }}
              mr={15}
            >
              <Ionicons
                color={Colors.light.primary}
                name="ios-calendar-outline"
                size={24}
              />
            </Box>
            <Box>
              <BoldText size={18}>
                {event?.date &&
                  new Date(event?.date).toLocaleDateString(
                    "fr-Fr",
                    dateFormat as any
                  )}
              </BoldText>
              <NormalText color={Colors.light.secondary}>
                Débute à {event?.start_time}
              </NormalText>
            </Box>
          </Box>
        </LoadingContent>

        <LoadingContent
          condition={loadingPlace ? loadingPlace : false}
          placeholder={PlaceLoader}
        >
          <Box flexDirection="row" mt={20}>
            <Box
              justify="center"
              align="center"
              style={{
                backgroundColor: Colors.light.primary_light,
                width: 35,
                height: 35,
                borderRadius: 5,
              }}
              mr={15}
            >
              <Ionicons
                color={Colors.light.primary}
                name="location-outline"
                size={24}
              />
            </Box>
            <Box>
              <BoldText size={18}>{place?.name}</BoldText>
              <NormalText color={Colors.light.secondary}>
                {place?.address}
              </NormalText>
              <NormalText color={Colors.light.secondary}>
                {place?.city}
              </NormalText>
            </Box>
          </Box>
        </LoadingContent>

        <LoadingContent condition={loadingEvent} placeholder={DescLoader}>
          <Box mt={20}>
            <BoldText numberOfLines={1} size={20}>
              A propos
            </BoldText>
            <NormalText mt={5} numberOfLines={limitLine}>
              {event?.description}
            </NormalText>
            <Box mt={5}></Box>
            <Pressable onPress={toggleLineLimit}>
              <BoldText>Lire plus</BoldText>
            </Pressable>
          </Box>
        </LoadingContent>

        <Box mb={50} />
      </BodyContent>
    </View>
  );
};

export default EventDetail;
