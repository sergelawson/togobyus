// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlacesType, Places, Events, Organisers, UserOrganisers, Users, UserEvent, UserPromo, Promos, UserPlaces, Sponsors, PromoTypes, EventTypes, UtilTypes, Utils } = initSchema(schema);

export {
  PlacesType,
  Places,
  Events,
  Organisers,
  UserOrganisers,
  Users,
  UserEvent,
  UserPromo,
  Promos,
  UserPlaces,
  Sponsors,
  PromoTypes,
  EventTypes,
  UtilTypes,
  Utils
};