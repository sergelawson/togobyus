import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PromosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganisersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserOrganisersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPromoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserPlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UtilTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UtilsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EventTypes {
  readonly id: string;
  readonly name?: string | null;
  readonly Events?: (Events | null)[] | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EventTypes, EventTypesMetaData>);
  static copyOf(source: EventTypes, mutator: (draft: MutableModel<EventTypes, EventTypesMetaData>) => MutableModel<EventTypes, EventTypesMetaData> | void): EventTypes;
}

export declare class Events {
  readonly id: string;
  readonly placesID: string;
  readonly organisersID: string;
  readonly eventtypesID: string;
  readonly name?: string | null;
  readonly type?: string | null;
  readonly end_time?: string | null;
  readonly start_time?: string | null;
  readonly description?: string | null;
  readonly Places?: Places | null;
  readonly Organisers?: Organisers | null;
  readonly UserEvents?: (UserEvent | null)[] | null;
  readonly imageUrl?: string | null;
  readonly date?: string | null;
  readonly tags: string[];
  readonly active?: boolean | null;
  readonly recurrent?: boolean | null;
  readonly vedette?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Events, EventsMetaData>);
  static copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}

export declare class Places {
  readonly id: string;
  readonly name?: string | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly type?: string | null;
  readonly city?: string | null;
  readonly imageUrl?: string | null;
  readonly Events?: (Events | null)[] | null;
  readonly open_time?: string | null;
  readonly close_time?: string | null;
  readonly open_days?: (string | null)[] | null;
  readonly Promos?: (Promos | null)[] | null;
  readonly UserPlaces?: (UserPlaces | null)[] | null;
  readonly address?: string | null;
  readonly contact?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Places, PlacesMetaData>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places, PlacesMetaData>) => MutableModel<Places, PlacesMetaData> | void): Places;
}

export declare class Promos {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly percentage?: number | null;
  readonly amount?: number | null;
  readonly organisersID: string;
  readonly Organisers?: Organisers | null;
  readonly placesID: string;
  readonly Places?: Places | null;
  readonly UserPromos?: (UserPromo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Promos, PromosMetaData>);
  static copyOf(source: Promos, mutator: (draft: MutableModel<Promos, PromosMetaData>) => MutableModel<Promos, PromosMetaData> | void): Promos;
}

export declare class Organisers {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly type?: string | null;
  readonly imageUrl?: string | null;
  readonly Events?: (Events | null)[] | null;
  readonly Promos?: (Promos | null)[] | null;
  readonly UserOrganisers?: (UserOrganisers | null)[] | null;
  readonly contact?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Organisers, OrganisersMetaData>);
  static copyOf(source: Organisers, mutator: (draft: MutableModel<Organisers, OrganisersMetaData>) => MutableModel<Organisers, OrganisersMetaData> | void): Organisers;
}

export declare class UserOrganisers {
  readonly id: string;
  readonly usersID: string;
  readonly organisersID: string;
  readonly Organisers?: Organisers | null;
  readonly Users?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserOrganisers, UserOrganisersMetaData>);
  static copyOf(source: UserOrganisers, mutator: (draft: MutableModel<UserOrganisers, UserOrganisersMetaData>) => MutableModel<UserOrganisers, UserOrganisersMetaData> | void): UserOrganisers;
}

export declare class Users {
  readonly id: string;
  readonly email?: string | null;
  readonly fullName?: string | null;
  readonly imageUrl?: string | null;
  readonly UserEvents?: (UserEvent | null)[] | null;
  readonly UserPromos?: (UserPromo | null)[] | null;
  readonly UserPlaces?: (UserPlaces | null)[] | null;
  readonly UserOrganisers?: (UserOrganisers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class UserEvent {
  readonly id: string;
  readonly eventsID: string;
  readonly usersID: string;
  readonly Users?: Users | null;
  readonly Events?: Events | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserEvent, UserEventMetaData>);
  static copyOf(source: UserEvent, mutator: (draft: MutableModel<UserEvent, UserEventMetaData>) => MutableModel<UserEvent, UserEventMetaData> | void): UserEvent;
}

export declare class UserPromo {
  readonly id: string;
  readonly usersID: string;
  readonly Users?: Users | null;
  readonly promosID: string;
  readonly Promos?: Promos | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPromo, UserPromoMetaData>);
  static copyOf(source: UserPromo, mutator: (draft: MutableModel<UserPromo, UserPromoMetaData>) => MutableModel<UserPromo, UserPromoMetaData> | void): UserPromo;
}

export declare class UserPlaces {
  readonly id: string;
  readonly usersID: string;
  readonly Users?: Users | null;
  readonly placesID: string;
  readonly Places?: Places | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPlaces, UserPlacesMetaData>);
  static copyOf(source: UserPlaces, mutator: (draft: MutableModel<UserPlaces, UserPlacesMetaData>) => MutableModel<UserPlaces, UserPlacesMetaData> | void): UserPlaces;
}

export declare class UtilTypes {
  readonly id: string;
  readonly Utils?: (Utils | null)[] | null;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UtilTypes, UtilTypesMetaData>);
  static copyOf(source: UtilTypes, mutator: (draft: MutableModel<UtilTypes, UtilTypesMetaData>) => MutableModel<UtilTypes, UtilTypesMetaData> | void): UtilTypes;
}

export declare class Utils {
  readonly id: string;
  readonly name?: string | null;
  readonly contact?: string | null;
  readonly order?: number | null;
  readonly utiltypesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Utils, UtilsMetaData>);
  static copyOf(source: Utils, mutator: (draft: MutableModel<Utils, UtilsMetaData>) => MutableModel<Utils, UtilsMetaData> | void): Utils;
}