// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sponsors, PromoTypes, Promos, Places, Events, Organisers, UserOrganisers, Users, UserEvent, UserPromo, UserPlaces, EventTypes, UtilTypes, Utils } = initSchema(schema);

export {
  Sponsors,
  PromoTypes,
  Promos,
  Places,
  Events,
  Organisers,
  UserOrganisers,
  Users,
  UserEvent,
  UserPromo,
  UserPlaces,
  EventTypes,
  UtilTypes,
  Utils
};