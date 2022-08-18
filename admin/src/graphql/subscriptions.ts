/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserOrganisers = /* GraphQL */ `
  subscription OnCreateUserOrganisers(
    $filter: ModelSubscriptionUserOrganisersFilterInput
  ) {
    onCreateUserOrganisers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
export const onUpdateUserOrganisers = /* GraphQL */ `
  subscription OnUpdateUserOrganisers(
    $filter: ModelSubscriptionUserOrganisersFilterInput
  ) {
    onUpdateUserOrganisers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
export const onDeleteUserOrganisers = /* GraphQL */ `
  subscription OnDeleteUserOrganisers(
    $filter: ModelSubscriptionUserOrganisersFilterInput
  ) {
    onDeleteUserOrganisers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
export const onCreateUserPlaces = /* GraphQL */ `
  subscription OnCreateUserPlaces(
    $filter: ModelSubscriptionUserPlacesFilterInput
  ) {
    onCreateUserPlaces(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnUpdateUserPlaces(
    $filter: ModelSubscriptionUserPlacesFilterInput
  ) {
    onUpdateUserPlaces(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnDeleteUserPlaces(
    $filter: ModelSubscriptionUserPlacesFilterInput
  ) {
    onDeleteUserPlaces(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnCreateUserPromo(
    $filter: ModelSubscriptionUserPromoFilterInput
  ) {
    onCreateUserPromo(filter: $filter) {
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
          Promos {
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
  subscription OnUpdateUserPromo(
    $filter: ModelSubscriptionUserPromoFilterInput
  ) {
    onUpdateUserPromo(filter: $filter) {
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
          Promos {
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
  subscription OnDeleteUserPromo(
    $filter: ModelSubscriptionUserPromoFilterInput
  ) {
    onDeleteUserPromo(filter: $filter) {
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
          Promos {
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
  subscription OnCreatePromos($filter: ModelSubscriptionPromosFilterInput) {
    onCreatePromos(filter: $filter) {
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
        Events {
          items {
            id
            placesID
            organisersID
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnUpdatePromos($filter: ModelSubscriptionPromosFilterInput) {
    onUpdatePromos(filter: $filter) {
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
        Events {
          items {
            id
            placesID
            organisersID
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnDeletePromos($filter: ModelSubscriptionPromosFilterInput) {
    onDeletePromos(filter: $filter) {
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
        Events {
          items {
            id
            placesID
            organisersID
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
  subscription OnCreateUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onCreateUserEvent(filter: $filter) {
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
        name
        imageUrl
        start_time
        end_time
        date
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
          Promos {
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
  subscription OnUpdateUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onUpdateUserEvent(filter: $filter) {
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
        name
        imageUrl
        start_time
        end_time
        date
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
          Promos {
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
  subscription OnDeleteUserEvent(
    $filter: ModelSubscriptionUserEventFilterInput
  ) {
    onDeleteUserEvent(filter: $filter) {
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
        name
        imageUrl
        start_time
        end_time
        date
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
          Promos {
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
  subscription OnCreateOrganisers(
    $filter: ModelSubscriptionOrganisersFilterInput
  ) {
    onCreateOrganisers(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Promos {
        items {
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
export const onUpdateOrganisers = /* GraphQL */ `
  subscription OnUpdateOrganisers(
    $filter: ModelSubscriptionOrganisersFilterInput
  ) {
    onUpdateOrganisers(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Promos {
        items {
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
export const onDeleteOrganisers = /* GraphQL */ `
  subscription OnDeleteOrganisers(
    $filter: ModelSubscriptionOrganisersFilterInput
  ) {
    onDeleteOrganisers(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Promos {
        items {
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
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
      id
      placesID
      organisersID
      name
      imageUrl
      start_time
      end_time
      date
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
      id
      placesID
      organisersID
      name
      imageUrl
      start_time
      end_time
      date
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
      id
      placesID
      organisersID
      name
      imageUrl
      start_time
      end_time
      date
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
            organisersID
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
            name
            imageUrl
            start_time
            end_time
            date
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Promos {
          items {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
export const onCreatePlaces = /* GraphQL */ `
  subscription OnCreatePlaces($filter: ModelSubscriptionPlacesFilterInput) {
    onCreatePlaces(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          organisersID
          Organisers {
            id
            name
            address
            type
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePlaces = /* GraphQL */ `
  subscription OnUpdatePlaces($filter: ModelSubscriptionPlacesFilterInput) {
    onUpdatePlaces(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          organisersID
          Organisers {
            id
            name
            address
            type
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePlaces = /* GraphQL */ `
  subscription OnDeletePlaces($filter: ModelSubscriptionPlacesFilterInput) {
    onDeletePlaces(filter: $filter) {
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
          name
          imageUrl
          start_time
          end_time
          date
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
          organisersID
          Organisers {
            id
            name
            address
            type
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
            name
            imageUrl
            start_time
            end_time
            date
            description
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
