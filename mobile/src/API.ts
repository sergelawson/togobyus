/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventTypesInput = {
  id?: string | null,
  name?: string | null,
  order?: number | null,
  _version?: number | null,
};

export type ModelEventTypesConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelEventTypesConditionInput | null > | null,
  or?: Array< ModelEventTypesConditionInput | null > | null,
  not?: ModelEventTypesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type EventTypes = {
  __typename: "EventTypes",
  id: string,
  name?: string | null,
  Events?: ModelEventsConnection | null,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEventsConnection = {
  __typename: "ModelEventsConnection",
  items:  Array<Events | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Events = {
  __typename: "Events",
  id: string,
  placesID: string,
  organisersID: string,
  eventtypesID: string,
  name?: string | null,
  type?: string | null,
  end_time?: string | null,
  start_time?: string | null,
  description?: string | null,
  Places?: Places | null,
  Organisers?: Organisers | null,
  UserEvents?: ModelUserEventConnection | null,
  imageUrl?: string | null,
  date?: string | null,
  tags: Array< string >,
  active?: boolean | null,
  recurrent?: boolean | null,
  vedette?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Places = {
  __typename: "Places",
  id: string,
  name?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: string | null,
  city?: string | null,
  imageUrl?: string | null,
  Events?: ModelEventsConnection | null,
  open_time?: string | null,
  close_time?: string | null,
  open_days?: Array< string | null > | null,
  Promos?: ModelPromosConnection | null,
  UserPlaces?: ModelUserPlacesConnection | null,
  address?: string | null,
  contact?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPromosConnection = {
  __typename: "ModelPromosConnection",
  items:  Array<Promos | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Promos = {
  __typename: "Promos",
  id: string,
  name?: string | null,
  description?: string | null,
  percentage?: number | null,
  amount?: number | null,
  organisersID: string,
  Organisers?: Organisers | null,
  placesID: string,
  Places?: Places | null,
  UserPromos?: ModelUserPromoConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Organisers = {
  __typename: "Organisers",
  id: string,
  name?: string | null,
  address?: string | null,
  type?: string | null,
  imageUrl?: string | null,
  Events?: ModelEventsConnection | null,
  Promos?: ModelPromosConnection | null,
  UserOrganisers?: ModelUserOrganisersConnection | null,
  contact?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserOrganisersConnection = {
  __typename: "ModelUserOrganisersConnection",
  items:  Array<UserOrganisers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserOrganisers = {
  __typename: "UserOrganisers",
  id: string,
  usersID: string,
  organisersID: string,
  Organisers?: Organisers | null,
  Users?: Users | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Users = {
  __typename: "Users",
  id: string,
  email?: string | null,
  fullName?: string | null,
  imageUrl?: string | null,
  UserEvents?: ModelUserEventConnection | null,
  UserPromos?: ModelUserPromoConnection | null,
  UserPlaces?: ModelUserPlacesConnection | null,
  UserOrganisers?: ModelUserOrganisersConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserEventConnection = {
  __typename: "ModelUserEventConnection",
  items:  Array<UserEvent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserEvent = {
  __typename: "UserEvent",
  id: string,
  eventsID: string,
  usersID: string,
  Users?: Users | null,
  Events?: Events | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserPromoConnection = {
  __typename: "ModelUserPromoConnection",
  items:  Array<UserPromo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserPromo = {
  __typename: "UserPromo",
  id: string,
  usersID: string,
  Users?: Users | null,
  promosID: string,
  Promos?: Promos | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserPlacesConnection = {
  __typename: "ModelUserPlacesConnection",
  items:  Array<UserPlaces | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserPlaces = {
  __typename: "UserPlaces",
  id: string,
  usersID: string,
  Users?: Users | null,
  placesID: string,
  Places?: Places | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEventTypesInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  _version?: number | null,
};

export type DeleteEventTypesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUtilTypesInput = {
  id?: string | null,
  name?: string | null,
  order?: number | null,
  _version?: number | null,
};

export type ModelUtilTypesConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelUtilTypesConditionInput | null > | null,
  or?: Array< ModelUtilTypesConditionInput | null > | null,
  not?: ModelUtilTypesConditionInput | null,
};

export type UtilTypes = {
  __typename: "UtilTypes",
  id: string,
  Utils?: ModelUtilsConnection | null,
  name?: string | null,
  order?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUtilsConnection = {
  __typename: "ModelUtilsConnection",
  items:  Array<Utils | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Utils = {
  __typename: "Utils",
  id: string,
  name?: string | null,
  contact?: string | null,
  order?: number | null,
  utiltypesID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUtilTypesInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  _version?: number | null,
};

export type DeleteUtilTypesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUtilsInput = {
  id?: string | null,
  name?: string | null,
  contact?: string | null,
  order?: number | null,
  utiltypesID: string,
  _version?: number | null,
};

export type ModelUtilsConditionInput = {
  name?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  order?: ModelIntInput | null,
  utiltypesID?: ModelIDInput | null,
  and?: Array< ModelUtilsConditionInput | null > | null,
  or?: Array< ModelUtilsConditionInput | null > | null,
  not?: ModelUtilsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUtilsInput = {
  id: string,
  name?: string | null,
  contact?: string | null,
  order?: number | null,
  utiltypesID?: string | null,
  _version?: number | null,
};

export type DeleteUtilsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserOrganisersInput = {
  id?: string | null,
  usersID: string,
  organisersID: string,
  _version?: number | null,
};

export type ModelUserOrganisersConditionInput = {
  usersID?: ModelIDInput | null,
  organisersID?: ModelIDInput | null,
  and?: Array< ModelUserOrganisersConditionInput | null > | null,
  or?: Array< ModelUserOrganisersConditionInput | null > | null,
  not?: ModelUserOrganisersConditionInput | null,
};

export type UpdateUserOrganisersInput = {
  id: string,
  usersID?: string | null,
  organisersID?: string | null,
  _version?: number | null,
};

export type DeleteUserOrganisersInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserPlacesInput = {
  id?: string | null,
  usersID: string,
  placesID: string,
  _version?: number | null,
};

export type ModelUserPlacesConditionInput = {
  usersID?: ModelIDInput | null,
  placesID?: ModelIDInput | null,
  and?: Array< ModelUserPlacesConditionInput | null > | null,
  or?: Array< ModelUserPlacesConditionInput | null > | null,
  not?: ModelUserPlacesConditionInput | null,
};

export type UpdateUserPlacesInput = {
  id: string,
  usersID?: string | null,
  placesID?: string | null,
  _version?: number | null,
};

export type DeleteUserPlacesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserPromoInput = {
  id?: string | null,
  usersID: string,
  promosID: string,
  _version?: number | null,
};

export type ModelUserPromoConditionInput = {
  usersID?: ModelIDInput | null,
  promosID?: ModelIDInput | null,
  and?: Array< ModelUserPromoConditionInput | null > | null,
  or?: Array< ModelUserPromoConditionInput | null > | null,
  not?: ModelUserPromoConditionInput | null,
};

export type UpdateUserPromoInput = {
  id: string,
  usersID?: string | null,
  promosID?: string | null,
  _version?: number | null,
};

export type DeleteUserPromoInput = {
  id: string,
  _version?: number | null,
};

export type CreatePromosInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  percentage?: number | null,
  amount?: number | null,
  organisersID: string,
  placesID: string,
  _version?: number | null,
};

export type ModelPromosConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  percentage?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  organisersID?: ModelIDInput | null,
  placesID?: ModelIDInput | null,
  and?: Array< ModelPromosConditionInput | null > | null,
  or?: Array< ModelPromosConditionInput | null > | null,
  not?: ModelPromosConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePromosInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  percentage?: number | null,
  amount?: number | null,
  organisersID?: string | null,
  placesID?: string | null,
  _version?: number | null,
};

export type DeletePromosInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserEventInput = {
  id?: string | null,
  eventsID: string,
  usersID: string,
  _version?: number | null,
};

export type ModelUserEventConditionInput = {
  eventsID?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  and?: Array< ModelUserEventConditionInput | null > | null,
  or?: Array< ModelUserEventConditionInput | null > | null,
  not?: ModelUserEventConditionInput | null,
};

export type UpdateUserEventInput = {
  id: string,
  eventsID?: string | null,
  usersID?: string | null,
  _version?: number | null,
};

export type DeleteUserEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganisersInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  type?: string | null,
  imageUrl?: string | null,
  contact?: string | null,
  _version?: number | null,
};

export type ModelOrganisersConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  type?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  and?: Array< ModelOrganisersConditionInput | null > | null,
  or?: Array< ModelOrganisersConditionInput | null > | null,
  not?: ModelOrganisersConditionInput | null,
};

export type UpdateOrganisersInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  type?: string | null,
  imageUrl?: string | null,
  contact?: string | null,
  _version?: number | null,
};

export type DeleteOrganisersInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventsInput = {
  id?: string | null,
  placesID: string,
  organisersID: string,
  eventtypesID: string,
  name?: string | null,
  type?: string | null,
  end_time?: string | null,
  start_time?: string | null,
  description?: string | null,
  imageUrl?: string | null,
  date?: string | null,
  tags: Array< string >,
  active?: boolean | null,
  recurrent?: boolean | null,
  vedette?: boolean | null,
  _version?: number | null,
};

export type ModelEventsConditionInput = {
  placesID?: ModelIDInput | null,
  organisersID?: ModelIDInput | null,
  eventtypesID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  date?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  recurrent?: ModelBooleanInput | null,
  vedette?: ModelBooleanInput | null,
  and?: Array< ModelEventsConditionInput | null > | null,
  or?: Array< ModelEventsConditionInput | null > | null,
  not?: ModelEventsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEventsInput = {
  id: string,
  placesID?: string | null,
  organisersID?: string | null,
  eventtypesID?: string | null,
  name?: string | null,
  type?: string | null,
  end_time?: string | null,
  start_time?: string | null,
  description?: string | null,
  imageUrl?: string | null,
  date?: string | null,
  tags?: Array< string > | null,
  active?: boolean | null,
  recurrent?: boolean | null,
  vedette?: boolean | null,
  _version?: number | null,
};

export type DeleteEventsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlacesInput = {
  id?: string | null,
  name?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: string | null,
  city?: string | null,
  imageUrl?: string | null,
  open_time?: string | null,
  close_time?: string | null,
  open_days?: Array< string | null > | null,
  address?: string | null,
  contact?: string | null,
  _version?: number | null,
};

export type ModelPlacesConditionInput = {
  name?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  type?: ModelStringInput | null,
  city?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  open_time?: ModelStringInput | null,
  close_time?: ModelStringInput | null,
  open_days?: ModelStringInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  and?: Array< ModelPlacesConditionInput | null > | null,
  or?: Array< ModelPlacesConditionInput | null > | null,
  not?: ModelPlacesConditionInput | null,
};

export type UpdatePlacesInput = {
  id: string,
  name?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  type?: string | null,
  city?: string | null,
  imageUrl?: string | null,
  open_time?: string | null,
  close_time?: string | null,
  open_days?: Array< string | null > | null,
  address?: string | null,
  contact?: string | null,
  _version?: number | null,
};

export type DeletePlacesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUsersInput = {
  id?: string | null,
  email?: string | null,
  fullName?: string | null,
  imageUrl?: string | null,
  _version?: number | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type UpdateUsersInput = {
  id: string,
  email?: string | null,
  fullName?: string | null,
  imageUrl?: string | null,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  _version?: number | null,
};

export type ModelEventTypesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelEventTypesFilterInput | null > | null,
  or?: Array< ModelEventTypesFilterInput | null > | null,
  not?: ModelEventTypesFilterInput | null,
};

export type ModelEventTypesConnection = {
  __typename: "ModelEventTypesConnection",
  items:  Array<EventTypes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUtilTypesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelUtilTypesFilterInput | null > | null,
  or?: Array< ModelUtilTypesFilterInput | null > | null,
  not?: ModelUtilTypesFilterInput | null,
};

export type ModelUtilTypesConnection = {
  __typename: "ModelUtilTypesConnection",
  items:  Array<UtilTypes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUtilsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  order?: ModelIntInput | null,
  utiltypesID?: ModelIDInput | null,
  and?: Array< ModelUtilsFilterInput | null > | null,
  or?: Array< ModelUtilsFilterInput | null > | null,
  not?: ModelUtilsFilterInput | null,
};

export type ModelUserOrganisersFilterInput = {
  id?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  organisersID?: ModelIDInput | null,
  and?: Array< ModelUserOrganisersFilterInput | null > | null,
  or?: Array< ModelUserOrganisersFilterInput | null > | null,
  not?: ModelUserOrganisersFilterInput | null,
};

export type ModelUserPlacesFilterInput = {
  id?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  placesID?: ModelIDInput | null,
  and?: Array< ModelUserPlacesFilterInput | null > | null,
  or?: Array< ModelUserPlacesFilterInput | null > | null,
  not?: ModelUserPlacesFilterInput | null,
};

export type ModelUserPromoFilterInput = {
  id?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  promosID?: ModelIDInput | null,
  and?: Array< ModelUserPromoFilterInput | null > | null,
  or?: Array< ModelUserPromoFilterInput | null > | null,
  not?: ModelUserPromoFilterInput | null,
};

export type ModelPromosFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  percentage?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  organisersID?: ModelIDInput | null,
  placesID?: ModelIDInput | null,
  and?: Array< ModelPromosFilterInput | null > | null,
  or?: Array< ModelPromosFilterInput | null > | null,
  not?: ModelPromosFilterInput | null,
};

export type ModelUserEventFilterInput = {
  id?: ModelIDInput | null,
  eventsID?: ModelIDInput | null,
  usersID?: ModelIDInput | null,
  and?: Array< ModelUserEventFilterInput | null > | null,
  or?: Array< ModelUserEventFilterInput | null > | null,
  not?: ModelUserEventFilterInput | null,
};

export type ModelOrganisersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  type?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  and?: Array< ModelOrganisersFilterInput | null > | null,
  or?: Array< ModelOrganisersFilterInput | null > | null,
  not?: ModelOrganisersFilterInput | null,
};

export type ModelOrganisersConnection = {
  __typename: "ModelOrganisersConnection",
  items:  Array<Organisers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventsFilterInput = {
  id?: ModelIDInput | null,
  placesID?: ModelIDInput | null,
  organisersID?: ModelIDInput | null,
  eventtypesID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  end_time?: ModelStringInput | null,
  start_time?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  date?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  recurrent?: ModelBooleanInput | null,
  vedette?: ModelBooleanInput | null,
  and?: Array< ModelEventsFilterInput | null > | null,
  or?: Array< ModelEventsFilterInput | null > | null,
  not?: ModelEventsFilterInput | null,
};

export type ModelPlacesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  type?: ModelStringInput | null,
  city?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  open_time?: ModelStringInput | null,
  close_time?: ModelStringInput | null,
  open_days?: ModelStringInput | null,
  address?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  and?: Array< ModelPlacesFilterInput | null > | null,
  or?: Array< ModelPlacesFilterInput | null > | null,
  not?: ModelPlacesFilterInput | null,
};

export type ModelPlacesConnection = {
  __typename: "ModelPlacesConnection",
  items:  Array<Places | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateEventTypesMutationVariables = {
  input: CreateEventTypesInput,
  condition?: ModelEventTypesConditionInput | null,
};

export type CreateEventTypesMutation = {
  createEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventTypesMutationVariables = {
  input: UpdateEventTypesInput,
  condition?: ModelEventTypesConditionInput | null,
};

export type UpdateEventTypesMutation = {
  updateEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventTypesMutationVariables = {
  input: DeleteEventTypesInput,
  condition?: ModelEventTypesConditionInput | null,
};

export type DeleteEventTypesMutation = {
  deleteEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUtilTypesMutationVariables = {
  input: CreateUtilTypesInput,
  condition?: ModelUtilTypesConditionInput | null,
};

export type CreateUtilTypesMutation = {
  createUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUtilTypesMutationVariables = {
  input: UpdateUtilTypesInput,
  condition?: ModelUtilTypesConditionInput | null,
};

export type UpdateUtilTypesMutation = {
  updateUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUtilTypesMutationVariables = {
  input: DeleteUtilTypesInput,
  condition?: ModelUtilTypesConditionInput | null,
};

export type DeleteUtilTypesMutation = {
  deleteUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUtilsMutationVariables = {
  input: CreateUtilsInput,
  condition?: ModelUtilsConditionInput | null,
};

export type CreateUtilsMutation = {
  createUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUtilsMutationVariables = {
  input: UpdateUtilsInput,
  condition?: ModelUtilsConditionInput | null,
};

export type UpdateUtilsMutation = {
  updateUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUtilsMutationVariables = {
  input: DeleteUtilsInput,
  condition?: ModelUtilsConditionInput | null,
};

export type DeleteUtilsMutation = {
  deleteUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserOrganisersMutationVariables = {
  input: CreateUserOrganisersInput,
  condition?: ModelUserOrganisersConditionInput | null,
};

export type CreateUserOrganisersMutation = {
  createUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserOrganisersMutationVariables = {
  input: UpdateUserOrganisersInput,
  condition?: ModelUserOrganisersConditionInput | null,
};

export type UpdateUserOrganisersMutation = {
  updateUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserOrganisersMutationVariables = {
  input: DeleteUserOrganisersInput,
  condition?: ModelUserOrganisersConditionInput | null,
};

export type DeleteUserOrganisersMutation = {
  deleteUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserPlacesMutationVariables = {
  input: CreateUserPlacesInput,
  condition?: ModelUserPlacesConditionInput | null,
};

export type CreateUserPlacesMutation = {
  createUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserPlacesMutationVariables = {
  input: UpdateUserPlacesInput,
  condition?: ModelUserPlacesConditionInput | null,
};

export type UpdateUserPlacesMutation = {
  updateUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserPlacesMutationVariables = {
  input: DeleteUserPlacesInput,
  condition?: ModelUserPlacesConditionInput | null,
};

export type DeleteUserPlacesMutation = {
  deleteUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserPromoMutationVariables = {
  input: CreateUserPromoInput,
  condition?: ModelUserPromoConditionInput | null,
};

export type CreateUserPromoMutation = {
  createUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserPromoMutationVariables = {
  input: UpdateUserPromoInput,
  condition?: ModelUserPromoConditionInput | null,
};

export type UpdateUserPromoMutation = {
  updateUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserPromoMutationVariables = {
  input: DeleteUserPromoInput,
  condition?: ModelUserPromoConditionInput | null,
};

export type DeleteUserPromoMutation = {
  deleteUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePromosMutationVariables = {
  input: CreatePromosInput,
  condition?: ModelPromosConditionInput | null,
};

export type CreatePromosMutation = {
  createPromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePromosMutationVariables = {
  input: UpdatePromosInput,
  condition?: ModelPromosConditionInput | null,
};

export type UpdatePromosMutation = {
  updatePromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePromosMutationVariables = {
  input: DeletePromosInput,
  condition?: ModelPromosConditionInput | null,
};

export type DeletePromosMutation = {
  deletePromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserEventMutationVariables = {
  input: CreateUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type CreateUserEventMutation = {
  createUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserEventMutationVariables = {
  input: UpdateUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type UpdateUserEventMutation = {
  updateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserEventMutationVariables = {
  input: DeleteUserEventInput,
  condition?: ModelUserEventConditionInput | null,
};

export type DeleteUserEventMutation = {
  deleteUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganisersMutationVariables = {
  input: CreateOrganisersInput,
  condition?: ModelOrganisersConditionInput | null,
};

export type CreateOrganisersMutation = {
  createOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganisersMutationVariables = {
  input: UpdateOrganisersInput,
  condition?: ModelOrganisersConditionInput | null,
};

export type UpdateOrganisersMutation = {
  updateOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganisersMutationVariables = {
  input: DeleteOrganisersInput,
  condition?: ModelOrganisersConditionInput | null,
};

export type DeleteOrganisersMutation = {
  deleteOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEventsMutationVariables = {
  input: CreateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type CreateEventsMutation = {
  createEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventsMutationVariables = {
  input: UpdateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type UpdateEventsMutation = {
  updateEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventsMutationVariables = {
  input: DeleteEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type DeleteEventsMutation = {
  deleteEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlacesMutationVariables = {
  input: CreatePlacesInput,
  condition?: ModelPlacesConditionInput | null,
};

export type CreatePlacesMutation = {
  createPlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlacesMutationVariables = {
  input: UpdatePlacesInput,
  condition?: ModelPlacesConditionInput | null,
};

export type UpdatePlacesMutation = {
  updatePlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlacesMutationVariables = {
  input: DeletePlacesInput,
  condition?: ModelPlacesConditionInput | null,
};

export type DeletePlacesMutation = {
  deletePlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetEventTypesQueryVariables = {
  id: string,
};

export type GetEventTypesQuery = {
  getEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventTypesQueryVariables = {
  filter?: ModelEventTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventTypesQuery = {
  listEventTypes?:  {
    __typename: "ModelEventTypesConnection",
    items:  Array< {
      __typename: "EventTypes",
      id: string,
      name?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventTypesQueryVariables = {
  filter?: ModelEventTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventTypesQuery = {
  syncEventTypes?:  {
    __typename: "ModelEventTypesConnection",
    items:  Array< {
      __typename: "EventTypes",
      id: string,
      name?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUtilTypesQueryVariables = {
  id: string,
};

export type GetUtilTypesQuery = {
  getUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUtilTypesQueryVariables = {
  filter?: ModelUtilTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUtilTypesQuery = {
  listUtilTypes?:  {
    __typename: "ModelUtilTypesConnection",
    items:  Array< {
      __typename: "UtilTypes",
      id: string,
      name?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUtilTypesQueryVariables = {
  filter?: ModelUtilTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUtilTypesQuery = {
  syncUtilTypes?:  {
    __typename: "ModelUtilTypesConnection",
    items:  Array< {
      __typename: "UtilTypes",
      id: string,
      name?: string | null,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUtilsQueryVariables = {
  id: string,
};

export type GetUtilsQuery = {
  getUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUtilsQueryVariables = {
  filter?: ModelUtilsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUtilsQuery = {
  listUtils?:  {
    __typename: "ModelUtilsConnection",
    items:  Array< {
      __typename: "Utils",
      id: string,
      name?: string | null,
      contact?: string | null,
      order?: number | null,
      utiltypesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUtilsQueryVariables = {
  filter?: ModelUtilsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUtilsQuery = {
  syncUtils?:  {
    __typename: "ModelUtilsConnection",
    items:  Array< {
      __typename: "Utils",
      id: string,
      name?: string | null,
      contact?: string | null,
      order?: number | null,
      utiltypesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserOrganisersQueryVariables = {
  id: string,
};

export type GetUserOrganisersQuery = {
  getUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserOrganisersQueryVariables = {
  filter?: ModelUserOrganisersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOrganisersQuery = {
  listUserOrganisers?:  {
    __typename: "ModelUserOrganisersConnection",
    items:  Array< {
      __typename: "UserOrganisers",
      id: string,
      usersID: string,
      organisersID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserOrganisersQueryVariables = {
  filter?: ModelUserOrganisersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserOrganisersQuery = {
  syncUserOrganisers?:  {
    __typename: "ModelUserOrganisersConnection",
    items:  Array< {
      __typename: "UserOrganisers",
      id: string,
      usersID: string,
      organisersID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserPlacesQueryVariables = {
  id: string,
};

export type GetUserPlacesQuery = {
  getUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserPlacesQueryVariables = {
  filter?: ModelUserPlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPlacesQuery = {
  listUserPlaces?:  {
    __typename: "ModelUserPlacesConnection",
    items:  Array< {
      __typename: "UserPlaces",
      id: string,
      usersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserPlacesQueryVariables = {
  filter?: ModelUserPlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserPlacesQuery = {
  syncUserPlaces?:  {
    __typename: "ModelUserPlacesConnection",
    items:  Array< {
      __typename: "UserPlaces",
      id: string,
      usersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserPromoQueryVariables = {
  id: string,
};

export type GetUserPromoQuery = {
  getUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserPromosQueryVariables = {
  filter?: ModelUserPromoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPromosQuery = {
  listUserPromos?:  {
    __typename: "ModelUserPromoConnection",
    items:  Array< {
      __typename: "UserPromo",
      id: string,
      usersID: string,
      promosID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserPromosQueryVariables = {
  filter?: ModelUserPromoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserPromosQuery = {
  syncUserPromos?:  {
    __typename: "ModelUserPromoConnection",
    items:  Array< {
      __typename: "UserPromo",
      id: string,
      usersID: string,
      promosID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPromosQueryVariables = {
  id: string,
};

export type GetPromosQuery = {
  getPromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPromosQueryVariables = {
  filter?: ModelPromosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPromosQuery = {
  listPromos?:  {
    __typename: "ModelPromosConnection",
    items:  Array< {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPromosQueryVariables = {
  filter?: ModelPromosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPromosQuery = {
  syncPromos?:  {
    __typename: "ModelPromosConnection",
    items:  Array< {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserEventQueryVariables = {
  id: string,
};

export type GetUserEventQuery = {
  getUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserEventsQueryVariables = {
  filter?: ModelUserEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserEventsQuery = {
  listUserEvents?:  {
    __typename: "ModelUserEventConnection",
    items:  Array< {
      __typename: "UserEvent",
      id: string,
      eventsID: string,
      usersID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserEventsQueryVariables = {
  filter?: ModelUserEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserEventsQuery = {
  syncUserEvents?:  {
    __typename: "ModelUserEventConnection",
    items:  Array< {
      __typename: "UserEvent",
      id: string,
      eventsID: string,
      usersID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganisersQueryVariables = {
  id: string,
};

export type GetOrganisersQuery = {
  getOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganisersQueryVariables = {
  filter?: ModelOrganisersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganisersQuery = {
  listOrganisers?:  {
    __typename: "ModelOrganisersConnection",
    items:  Array< {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganisersQueryVariables = {
  filter?: ModelOrganisersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganisersQuery = {
  syncOrganisers?:  {
    __typename: "ModelOrganisersConnection",
    items:  Array< {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventsQueryVariables = {
  id: string,
};

export type GetEventsQuery = {
  getEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventsConnection",
    items:  Array< {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventsConnection",
    items:  Array< {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlacesQueryVariables = {
  id: string,
};

export type GetPlacesQuery = {
  getPlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlacesConnection",
    items:  Array< {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlacesQueryVariables = {
  filter?: ModelPlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlacesQuery = {
  syncPlaces?:  {
    __typename: "ModelPlacesConnection",
    items:  Array< {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEventTypesSubscription = {
  onCreateEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventTypesSubscription = {
  onUpdateEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventTypesSubscription = {
  onDeleteEventTypes?:  {
    __typename: "EventTypes",
    id: string,
    name?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUtilTypesSubscription = {
  onCreateUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUtilTypesSubscription = {
  onUpdateUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUtilTypesSubscription = {
  onDeleteUtilTypes?:  {
    __typename: "UtilTypes",
    id: string,
    Utils?:  {
      __typename: "ModelUtilsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUtilsSubscription = {
  onCreateUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUtilsSubscription = {
  onUpdateUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUtilsSubscription = {
  onDeleteUtils?:  {
    __typename: "Utils",
    id: string,
    name?: string | null,
    contact?: string | null,
    order?: number | null,
    utiltypesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserOrganisersSubscription = {
  onCreateUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserOrganisersSubscription = {
  onUpdateUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserOrganisersSubscription = {
  onDeleteUserOrganisers?:  {
    __typename: "UserOrganisers",
    id: string,
    usersID: string,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserPlacesSubscription = {
  onCreateUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserPlacesSubscription = {
  onUpdateUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserPlacesSubscription = {
  onDeleteUserPlaces?:  {
    __typename: "UserPlaces",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserPromoSubscription = {
  onCreateUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserPromoSubscription = {
  onUpdateUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserPromoSubscription = {
  onDeleteUserPromo?:  {
    __typename: "UserPromo",
    id: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    promosID: string,
    Promos?:  {
      __typename: "Promos",
      id: string,
      name?: string | null,
      description?: string | null,
      percentage?: number | null,
      amount?: number | null,
      organisersID: string,
      placesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePromosSubscription = {
  onCreatePromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePromosSubscription = {
  onUpdatePromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePromosSubscription = {
  onDeletePromos?:  {
    __typename: "Promos",
    id: string,
    name?: string | null,
    description?: string | null,
    percentage?: number | null,
    amount?: number | null,
    organisersID: string,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    placesID: string,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserEventSubscription = {
  onCreateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserEventSubscription = {
  onUpdateUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserEventSubscription = {
  onDeleteUserEvent?:  {
    __typename: "UserEvent",
    id: string,
    eventsID: string,
    usersID: string,
    Users?:  {
      __typename: "Users",
      id: string,
      email?: string | null,
      fullName?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Events?:  {
      __typename: "Events",
      id: string,
      placesID: string,
      organisersID: string,
      eventtypesID: string,
      name?: string | null,
      type?: string | null,
      end_time?: string | null,
      start_time?: string | null,
      description?: string | null,
      imageUrl?: string | null,
      date?: string | null,
      tags: Array< string >,
      active?: boolean | null,
      recurrent?: boolean | null,
      vedette?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganisersSubscription = {
  onCreateOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganisersSubscription = {
  onUpdateOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganisersSubscription = {
  onDeleteOrganisers?:  {
    __typename: "Organisers",
    id: string,
    name?: string | null,
    address?: string | null,
    type?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEventsSubscription = {
  onCreateEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventsSubscription = {
  onUpdateEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventsSubscription = {
  onDeleteEvents?:  {
    __typename: "Events",
    id: string,
    placesID: string,
    organisersID: string,
    eventtypesID: string,
    name?: string | null,
    type?: string | null,
    end_time?: string | null,
    start_time?: string | null,
    description?: string | null,
    Places?:  {
      __typename: "Places",
      id: string,
      name?: string | null,
      longitude?: string | null,
      latitude?: string | null,
      type?: string | null,
      city?: string | null,
      imageUrl?: string | null,
      open_time?: string | null,
      close_time?: string | null,
      open_days?: Array< string | null > | null,
      address?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Organisers?:  {
      __typename: "Organisers",
      id: string,
      name?: string | null,
      address?: string | null,
      type?: string | null,
      imageUrl?: string | null,
      contact?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    imageUrl?: string | null,
    date?: string | null,
    tags: Array< string >,
    active?: boolean | null,
    recurrent?: boolean | null,
    vedette?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlacesSubscription = {
  onCreatePlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlacesSubscription = {
  onUpdatePlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlacesSubscription = {
  onDeletePlaces?:  {
    __typename: "Places",
    id: string,
    name?: string | null,
    longitude?: string | null,
    latitude?: string | null,
    type?: string | null,
    city?: string | null,
    imageUrl?: string | null,
    Events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    open_time?: string | null,
    close_time?: string | null,
    open_days?: Array< string | null > | null,
    Promos?:  {
      __typename: "ModelPromosConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    address?: string | null,
    contact?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    email?: string | null,
    fullName?: string | null,
    imageUrl?: string | null,
    UserEvents?:  {
      __typename: "ModelUserEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPromos?:  {
      __typename: "ModelUserPromoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserPlaces?:  {
      __typename: "ModelUserPlacesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganisers?:  {
      __typename: "ModelUserOrganisersConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
