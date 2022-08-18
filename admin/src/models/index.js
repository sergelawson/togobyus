// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserOrganisers, Organisers, Events, Places, Promos, UserPromo, Users, UserEvent, UserPlaces } = initSchema(schema);

export {
  UserOrganisers,
  Organisers,
  Events,
  Places,
  Promos,
  UserPromo,
  Users,
  UserEvent,
  UserPlaces
};