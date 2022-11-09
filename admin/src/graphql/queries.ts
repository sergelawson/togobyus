/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSponsors = /* GraphQL */ `
  query GetSponsors($id: ID!) {
    getSponsors(id: $id) {
      id
      position
      imageUrl
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        imageUrl
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSponsors = /* GraphQL */ `
  query SyncSponsors(
    $filter: ModelSponsorsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSponsors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        position
        imageUrl
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPromoTypes = /* GraphQL */ `
  query GetPromoTypes($id: ID!) {
    getPromoTypes(id: $id) {
      id
      name
      order
      Promos {
        items {
          id
          name
          description
          percentage
          amount
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
          promotypesID
          start_date
          end_date
          promo_amount
          imageUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const listPromoTypes = /* GraphQL */ `
  query ListPromoTypes(
    $filter: ModelPromoTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromoTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        order
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPromoTypes = /* GraphQL */ `
  query SyncPromoTypes(
    $filter: ModelPromoTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPromoTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        order
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEventTypes = /* GraphQL */ `
  query GetEventTypes($id: ID!) {
    getEventTypes(id: $id) {
      id
      name
      Events {
        items {
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
export const listEventTypes = /* GraphQL */ `
  query ListEventTypes(
    $filter: ModelEventTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Events {
          items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEventTypes = /* GraphQL */ `
  query SyncEventTypes(
    $filter: ModelEventTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Events {
          items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUtilTypes = /* GraphQL */ `
  query GetUtilTypes($id: ID!) {
    getUtilTypes(id: $id) {
      id
      Utils {
        items {
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
export const listUtilTypes = /* GraphQL */ `
  query ListUtilTypes(
    $filter: ModelUtilTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtilTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Utils {
          items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUtilTypes = /* GraphQL */ `
  query SyncUtilTypes(
    $filter: ModelUtilTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUtilTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Utils {
          items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUtils = /* GraphQL */ `
  query GetUtils($id: ID!) {
    getUtils(id: $id) {
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
export const listUtils = /* GraphQL */ `
  query ListUtils(
    $filter: ModelUtilsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtils(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUtils = /* GraphQL */ `
  query SyncUtils(
    $filter: ModelUtilsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUtils(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserOrganisers = /* GraphQL */ `
  query GetUserOrganisers($id: ID!) {
    getUserOrganisers(id: $id) {
      id
      usersID
      organisersID
      Organisers {
        id
        name
        address
        type
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      Users {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
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
export const listUserOrganisers = /* GraphQL */ `
  query ListUserOrganisers(
    $filter: ModelUserOrganisersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrganisers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        organisersID
        Organisers {
          id
          name
          address
          type
          imageUrl
          Events {
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
        Users {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserOrganisers = /* GraphQL */ `
  query SyncUserOrganisers(
    $filter: ModelUserOrganisersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserOrganisers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        organisersID
        Organisers {
          id
          name
          address
          type
          imageUrl
          Events {
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
        Users {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserPlaces = /* GraphQL */ `
  query GetUserPlaces($id: ID!) {
    getUserPlaces(id: $id) {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
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
        Events {
          items {
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
          nextToken
          startedAt
        }
        open_time
        close_time
        open_days
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserPlaces = /* GraphQL */ `
  query ListUserPlaces(
    $filter: ModelUserPlacesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        Users {
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
        placesID
        Places {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserPlaces = /* GraphQL */ `
  query SyncUserPlaces(
    $filter: ModelUserPlacesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        Users {
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
        placesID
        Places {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserPromo = /* GraphQL */ `
  query GetUserPromo($id: ID!) {
    getUserPromo(id: $id) {
      id
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
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
        placesID
        Places {
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
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        promotypesID
        start_date
        end_date
        promo_amount
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
export const listUserPromos = /* GraphQL */ `
  query ListUserPromos(
    $filter: ModelUserPromoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPromos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        Users {
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
        promosID
        Promos {
          id
          name
          description
          percentage
          amount
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
          promotypesID
          start_date
          end_date
          promo_amount
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserPromos = /* GraphQL */ `
  query SyncUserPromos(
    $filter: ModelUserPromoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPromos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        Users {
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
        promosID
        Promos {
          id
          name
          description
          percentage
          amount
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
          promotypesID
          start_date
          end_date
          promo_amount
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
      nextToken
      startedAt
    }
  }
`;
export const getPromos = /* GraphQL */ `
  query GetPromos($id: ID!) {
    getPromos(id: $id) {
      id
      name
      description
      percentage
      amount
      placesID
      Places {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        open_time
        close_time
        open_days
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      UserPromos {
        items {
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
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
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
        nextToken
        startedAt
      }
      promotypesID
      start_date
      end_date
      promo_amount
      imageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPromos = /* GraphQL */ `
  query ListPromos(
    $filter: ModelPromosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        percentage
        amount
        placesID
        Places {
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
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        promotypesID
        start_date
        end_date
        promo_amount
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPromos = /* GraphQL */ `
  query SyncPromos(
    $filter: ModelPromosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPromos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        percentage
        amount
        placesID
        Places {
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
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        promotypesID
        start_date
        end_date
        promo_amount
        imageUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserEvent = /* GraphQL */ `
  query GetUserEvent($id: ID!) {
    getUserEvent(id: $id) {
      id
      eventsID
      usersID
      Users {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
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
        Places {
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
        Organisers {
          id
          name
          address
          type
          imageUrl
          Events {
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
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserEvents = /* GraphQL */ `
  query ListUserEvents(
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventsID
        usersID
        Users {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserEvents = /* GraphQL */ `
  query SyncUserEvents(
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventsID
        usersID
        Users {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganisers = /* GraphQL */ `
  query GetOrganisers($id: ID!) {
    getOrganisers(id: $id) {
      id
      name
      address
      type
      imageUrl
      Events {
        items {
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
        nextToken
        startedAt
      }
      UserOrganisers {
        items {
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
export const listOrganisers = /* GraphQL */ `
  query ListOrganisers(
    $filter: ModelOrganisersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        type
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganisers = /* GraphQL */ `
  query SyncOrganisers(
    $filter: ModelOrganisersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        type
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
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
        Events {
          items {
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
          nextToken
          startedAt
        }
        open_time
        close_time
        open_days
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      Organisers {
        id
        name
        address
        type
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      UserEvents {
        items {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        Organisers {
          id
          name
          address
          type
          imageUrl
          Events {
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
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        Organisers {
          id
          name
          address
          type
          imageUrl
          Events {
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
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const getPlaces = /* GraphQL */ `
  query GetPlaces($id: ID!) {
    getPlaces(id: $id) {
      id
      name
      longitude
      latitude
      type
      city
      imageUrl
      Events {
        items {
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
        nextToken
        startedAt
      }
      open_time
      close_time
      open_days
      Promos {
        items {
          id
          name
          description
          percentage
          amount
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
          promotypesID
          start_date
          end_date
          promo_amount
          imageUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserPlaces {
        items {
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlacesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        open_time
        close_time
        open_days
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlacesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        longitude
        latitude
        type
        city
        imageUrl
        Events {
          items {
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
          nextToken
          startedAt
        }
        open_time
        close_time
        open_days
        Promos {
          items {
            id
            name
            description
            percentage
            amount
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
            imageUrl
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
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
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      email
      fullName
      imageUrl
      UserEvents {
        items {
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
        nextToken
        startedAt
      }
      UserPromos {
        items {
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
            placesID
            promotypesID
            start_date
            end_date
            promo_amount
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
        nextToken
        startedAt
      }
      UserPlaces {
        items {
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
        nextToken
        startedAt
      }
      UserOrganisers {
        items {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        fullName
        imageUrl
        UserEvents {
          items {
            id
            eventsID
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPromos {
          items {
            id
            usersID
            promosID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserPlaces {
          items {
            id
            usersID
            placesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        UserOrganisers {
          items {
            id
            usersID
            organisersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
