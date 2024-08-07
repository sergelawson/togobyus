/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventTypes = /* GraphQL */ `
  subscription OnCreateEventTypes {
    onCreateEventTypes {
      id
      name
      Events {
        nextToken
        startedAt
      }
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEventTypes = /* GraphQL */ `
  subscription OnUpdateEventTypes {
    onUpdateEventTypes {
      id
      name
      Events {
        nextToken
        startedAt
      }
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEventTypes = /* GraphQL */ `
  subscription OnDeleteEventTypes {
    onDeleteEventTypes {
      id
      name
      Events {
        nextToken
        startedAt
      }
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUtilTypes = /* GraphQL */ `
  subscription OnCreateUtilTypes {
    onCreateUtilTypes {
      id
      Utils {
        nextToken
        startedAt
      }
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUtilTypes = /* GraphQL */ `
  subscription OnUpdateUtilTypes {
    onUpdateUtilTypes {
      id
      Utils {
        nextToken
        startedAt
      }
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUtilTypes = /* GraphQL */ `
  subscription OnDeleteUtilTypes {
    onDeleteUtilTypes {
      id
      Utils {
        nextToken
        startedAt
      }
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUtils = /* GraphQL */ `
  subscription OnCreateUtils {
    onCreateUtils {
      id
      name
      contact
      order
      utiltypesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUtils = /* GraphQL */ `
  subscription OnUpdateUtils {
    onUpdateUtils {
      id
      name
      contact
      order
      utiltypesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUtils = /* GraphQL */ `
  subscription OnDeleteUtils {
    onDeleteUtils {
      id
      name
      contact
      order
      utiltypesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserOrganisers = /* GraphQL */ `
  subscription OnCreateUserOrganisers {
    onCreateUserOrganisers {
      id
      usersID
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserOrganisers = /* GraphQL */ `
  subscription OnUpdateUserOrganisers {
    onUpdateUserOrganisers {
      id
      usersID
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserOrganisers = /* GraphQL */ `
  subscription OnDeleteUserOrganisers {
    onDeleteUserOrganisers {
      id
      usersID
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserPlaces = /* GraphQL */ `
  subscription OnCreateUserPlaces {
    onCreateUserPlaces {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserPlaces = /* GraphQL */ `
  subscription OnUpdateUserPlaces {
    onUpdateUserPlaces {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserPlaces = /* GraphQL */ `
  subscription OnDeleteUserPlaces {
    onDeleteUserPlaces {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserPromo = /* GraphQL */ `
  subscription OnCreateUserPromo {
    onCreateUserPromo {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      promosID
      Promos {
        id
        name
        description
        percentage
        amount
        organisersID
        placesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserPromo = /* GraphQL */ `
  subscription OnUpdateUserPromo {
    onUpdateUserPromo {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      promosID
      Promos {
        id
        name
        description
        percentage
        amount
        organisersID
        placesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserPromo = /* GraphQL */ `
  subscription OnDeleteUserPromo {
    onDeleteUserPromo {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      promosID
      Promos {
        id
        name
        description
        percentage
        amount
        organisersID
        placesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePromos = /* GraphQL */ `
  subscription OnCreatePromos {
    onCreatePromos {
      id
      name
      description
      percentage
      amount
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePromos = /* GraphQL */ `
  subscription OnUpdatePromos {
    onUpdatePromos {
      id
      name
      description
      percentage
      amount
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePromos = /* GraphQL */ `
  subscription OnDeletePromos {
    onDeletePromos {
      id
      name
      description
      percentage
      amount
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserEvent = /* GraphQL */ `
  subscription OnCreateUserEvent {
    onCreateUserEvent {
      id
      eventsID
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Events {
        id
        placesID
        organisersID
        eventtypesID
        name
        type
        end_time
        start_time
        description
        imageUrl
        date
        tags
        active
        recurrent
        vedette
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserEvent = /* GraphQL */ `
  subscription OnUpdateUserEvent {
    onUpdateUserEvent {
      id
      eventsID
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Events {
        id
        placesID
        organisersID
        eventtypesID
        name
        type
        end_time
        start_time
        description
        imageUrl
        date
        tags
        active
        recurrent
        vedette
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserEvent = /* GraphQL */ `
  subscription OnDeleteUserEvent {
    onDeleteUserEvent {
      id
      eventsID
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Events {
        id
        placesID
        organisersID
        eventtypesID
        name
        type
        end_time
        start_time
        description
        imageUrl
        date
        tags
        active
        recurrent
        vedette
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrganisers = /* GraphQL */ `
  subscription OnCreateOrganisers {
    onCreateOrganisers {
      id
      name
      address
      type
      imageUrl
      Events {
        nextToken
        startedAt
      }
      Promos {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganisers = /* GraphQL */ `
  subscription OnUpdateOrganisers {
    onUpdateOrganisers {
      id
      name
      address
      type
      imageUrl
      Events {
        nextToken
        startedAt
      }
      Promos {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganisers = /* GraphQL */ `
  subscription OnDeleteOrganisers {
    onDeleteOrganisers {
      id
      name
      address
      type
      imageUrl
      Events {
        nextToken
        startedAt
      }
      Promos {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents {
    onCreateEvents {
      id
      placesID
      organisersID
      eventtypesID
      name
      type
      end_time
      start_time
      description
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserEvents {
        nextToken
        startedAt
      }
      imageUrl
      date
      tags
      active
      recurrent
      vedette
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents {
    onUpdateEvents {
      id
      placesID
      organisersID
      eventtypesID
      name
      type
      end_time
      start_time
      description
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserEvents {
        nextToken
        startedAt
      }
      imageUrl
      date
      tags
      active
      recurrent
      vedette
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents {
    onDeleteEvents {
      id
      placesID
      organisersID
      eventtypesID
      name
      type
      end_time
      start_time
      description
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        open_time
        close_time
        open_days
        address
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Organisers {
        id
        name
        address
        type
        imageUrl
        contact
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserEvents {
        nextToken
        startedAt
      }
      imageUrl
      date
      tags
      active
      recurrent
      vedette
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePlaces = /* GraphQL */ `
  subscription OnCreatePlaces {
    onCreatePlaces {
      id
      name
      longitude
      latitude
      type
      city
      imageUrl
      Events {
        nextToken
        startedAt
      }
      open_time
      close_time
      open_days
      Promos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      address
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePlaces = /* GraphQL */ `
  subscription OnUpdatePlaces {
    onUpdatePlaces {
      id
      name
      longitude
      latitude
      type
      city
      imageUrl
      Events {
        nextToken
        startedAt
      }
      open_time
      close_time
      open_days
      Promos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      address
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePlaces = /* GraphQL */ `
  subscription OnDeletePlaces {
    onDeletePlaces {
      id
      name
      longitude
      latitude
      type
      city
      imageUrl
      Events {
        nextToken
        startedAt
      }
      open_time
      close_time
      open_days
      Promos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      address
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      id
      email
      fullName
      imageUrl
      UserEvents {
        nextToken
        startedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
      id
      email
      fullName
      imageUrl
      UserEvents {
        nextToken
        startedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
      id
      email
      fullName
      imageUrl
      UserEvents {
        nextToken
        startedAt
      }
      UserPromos {
        nextToken
        startedAt
      }
      UserPlaces {
        nextToken
        startedAt
      }
      UserOrganisers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
