// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sponsors, PromoTypes, Promos, Organisers, Events, Places, UserPlaces, Users, UserEvent, UserPromo, UserOrganisers, EventTypes, UtilTypes, Utils } = initSchema(schema);

export {
  Sponsors,
  PromoTypes,
  Promos,
  Organisers,
  Events,
  Places,
  UserPlaces,
  Users,
  UserEvent,
  UserPromo,
  UserOrganisers,
  EventTypes,
  UtilTypes,
  Utils
};