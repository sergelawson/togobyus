import { ImageSourcePropType } from "react-native";
import {
  hotel,
  night_club,
  bar_resto,
  shopping,
  plage,
  cinema,
  art_culture,
  sport,
  nature,
  loisir,
  activite,
  autre,
} from "./Images";

export type PlaceCatType = {
  name: string;
  id: string;
  imgSrc: ImageSourcePropType;
};

export const PlacesCat: PlaceCatType[] = [
  {
    name: "Hôtel",
    id: "hotel",
    imgSrc: hotel,
  },
  {
    name: "Night Club",
    id: "night-club",
    imgSrc: night_club,
  },
  {
    name: "Bar & Resto",
    id: "bar-resto",
    imgSrc: bar_resto,
  },
  {
    name: "Shopping",
    id: "shopping",
    imgSrc: shopping,
  },
  {
    name: "Plage",
    id: "plage",
    imgSrc: plage,
  },
  {
    name: "Cinéma",
    id: "cinema",
    imgSrc: cinema,
  },
  {
    name: "Art & Culture",
    id: "art-culture",
    imgSrc: art_culture,
  },
  {
    name: "Sport",
    id: "sport",
    imgSrc: sport,
  },
  {
    name: "Nature",
    id: "nature",
    imgSrc: nature,
  },
  {
    name: "Loisir",
    id: "loisir",
    imgSrc: loisir,
  },
  {
    name: "Activité",
    id: "activite",
    imgSrc: activite,
  },
  {
    name: "Autre",
    id: "autre",
    imgSrc: autre,
  },
];
