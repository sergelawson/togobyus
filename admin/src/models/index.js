// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EventTypes, Events, Places, Promos, Organisers, UserOrganisers, Users, UserEvent, UserPromo, UserPlaces, UtilTypes, Utils } = initSchema(schema);

export {
  EventTypes,
  Events,
  Places,
  Promos,
  Organisers,
  UserOrganisers,
  Users,
  UserEvent,
  UserPromo,
  UserPlaces,
  UtilTypes,
  Utils
};