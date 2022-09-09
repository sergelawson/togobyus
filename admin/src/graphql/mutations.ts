/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventTypes = /* GraphQL */ `
  mutation CreateEventTypes(
    $input: CreateEventTypesInput!
    $condition: ModelEventTypesConditionInput
  ) {
    createEventTypes(input: $input, condition: $condition) {
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
export const updateEventTypes = /* GraphQL */ `
  mutation UpdateEventTypes(
    $input: UpdateEventTypesInput!
    $condition: ModelEventTypesConditionInput
  ) {
    updateEventTypes(input: $input, condition: $condition) {
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
export const deleteEventTypes = /* GraphQL */ `
  mutation DeleteEventTypes(
    $input: DeleteEventTypesInput!
    $condition: ModelEventTypesConditionInput
  ) {
    deleteEventTypes(input: $input, condition: $condition) {
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
export const createUtilTypes = /* GraphQL */ `
  mutation CreateUtilTypes(
    $input: CreateUtilTypesInput!
    $condition: ModelUtilTypesConditionInput
  ) {
    createUtilTypes(input: $input, condition: $condition) {
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
export const updateUtilTypes = /* GraphQL */ `
  mutation UpdateUtilTypes(
    $input: UpdateUtilTypesInput!
    $condition: ModelUtilTypesConditionInput
  ) {
    updateUtilTypes(input: $input, condition: $condition) {
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
export const deleteUtilTypes = /* GraphQL */ `
  mutation DeleteUtilTypes(
    $input: DeleteUtilTypesInput!
    $condition: ModelUtilTypesConditionInput
  ) {
    deleteUtilTypes(input: $input, condition: $condition) {
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
export const createUtils = /* GraphQL */ `
  mutation CreateUtils(
    $input: CreateUtilsInput!
    $condition: ModelUtilsConditionInput
  ) {
    createUtils(input: $input, condition: $condition) {
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
export const updateUtils = /* GraphQL */ `
  mutation UpdateUtils(
    $input: UpdateUtilsInput!
    $condition: ModelUtilsConditionInput
  ) {
    updateUtils(input: $input, condition: $condition) {
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
export const deleteUtils = /* GraphQL */ `
  mutation DeleteUtils(
    $input: DeleteUtilsInput!
    $condition: ModelUtilsConditionInput
  ) {
    deleteUtils(input: $input, condition: $condition) {
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
export const createUserOrganisers = /* GraphQL */ `
  mutation CreateUserOrganisers(
    $input: CreateUserOrganisersInput!
    $condition: ModelUserOrganisersConditionInput
  ) {
    createUserOrganisers(input: $input, condition: $condition) {
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
export const updateUserOrganisers = /* GraphQL */ `
  mutation UpdateUserOrganisers(
    $input: UpdateUserOrganisersInput!
    $condition: ModelUserOrganisersConditionInput
  ) {
    updateUserOrganisers(input: $input, condition: $condition) {
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
export const deleteUserOrganisers = /* GraphQL */ `
  mutation DeleteUserOrganisers(
    $input: DeleteUserOrganisersInput!
    $condition: ModelUserOrganisersConditionInput
  ) {
    deleteUserOrganisers(input: $input, condition: $condition) {
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
export const createUserPlaces = /* GraphQL */ `
  mutation CreateUserPlaces(
    $input: CreateUserPlacesInput!
    $condition: ModelUserPlacesConditionInput
  ) {
    createUserPlaces(input: $input, condition: $condition) {
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
export const updateUserPlaces = /* GraphQL */ `
  mutation UpdateUserPlaces(
    $input: UpdateUserPlacesInput!
    $condition: ModelUserPlacesConditionInput
  ) {
    updateUserPlaces(input: $input, condition: $condition) {
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
export const deleteUserPlaces = /* GraphQL */ `
  mutation DeleteUserPlaces(
    $input: DeleteUserPlacesInput!
    $condition: ModelUserPlacesConditionInput
  ) {
    deleteUserPlaces(input: $input, condition: $condition) {
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
export const createUserPromo = /* GraphQL */ `
  mutation CreateUserPromo(
    $input: CreateUserPromoInput!
    $condition: ModelUserPromoConditionInput
  ) {
    createUserPromo(input: $input, condition: $condition) {
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
export const updateUserPromo = /* GraphQL */ `
  mutation UpdateUserPromo(
    $input: UpdateUserPromoInput!
    $condition: ModelUserPromoConditionInput
  ) {
    updateUserPromo(input: $input, condition: $condition) {
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
export const deleteUserPromo = /* GraphQL */ `
  mutation DeleteUserPromo(
    $input: DeleteUserPromoInput!
    $condition: ModelUserPromoConditionInput
  ) {
    deleteUserPromo(input: $input, condition: $condition) {
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
export const createPromos = /* GraphQL */ `
  mutation CreatePromos(
    $input: CreatePromosInput!
    $condition: ModelPromosConditionInput
  ) {
    createPromos(input: $input, condition: $condition) {
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
            eventtypesID
            name
            type
            end_time
            start_time
            description
            imageUrl
            date
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
export const updatePromos = /* GraphQL */ `
  mutation UpdatePromos(
    $input: UpdatePromosInput!
    $condition: ModelPromosConditionInput
  ) {
    updatePromos(input: $input, condition: $condition) {
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
            eventtypesID
            name
            type
            end_time
            start_time
            description
            imageUrl
            date
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
export const deletePromos = /* GraphQL */ `
  mutation DeletePromos(
    $input: DeletePromosInput!
    $condition: ModelPromosConditionInput
  ) {
    deletePromos(input: $input, condition: $condition) {
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
            eventtypesID
            name
            type
            end_time
            start_time
            description
            imageUrl
            date
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
export const createUserEvent = /* GraphQL */ `
  mutation CreateUserEvent(
    $input: CreateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    createUserEvent(input: $input, condition: $condition) {
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
export const updateUserEvent = /* GraphQL */ `
  mutation UpdateUserEvent(
    $input: UpdateUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    updateUserEvent(input: $input, condition: $condition) {
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
export const deleteUserEvent = /* GraphQL */ `
  mutation DeleteUserEvent(
    $input: DeleteUserEventInput!
    $condition: ModelUserEventConditionInput
  ) {
    deleteUserEvent(input: $input, condition: $condition) {
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
export const createOrganisers = /* GraphQL */ `
  mutation CreateOrganisers(
    $input: CreateOrganisersInput!
    $condition: ModelOrganisersConditionInput
  ) {
    createOrganisers(input: $input, condition: $condition) {
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
export const updateOrganisers = /* GraphQL */ `
  mutation UpdateOrganisers(
    $input: UpdateOrganisersInput!
    $condition: ModelOrganisersConditionInput
  ) {
    updateOrganisers(input: $input, condition: $condition) {
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
export const deleteOrganisers = /* GraphQL */ `
  mutation DeleteOrganisers(
    $input: DeleteOrganisersInput!
    $condition: ModelOrganisersConditionInput
  ) {
    deleteOrganisers(input: $input, condition: $condition) {
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
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPlaces = /* GraphQL */ `
  mutation CreatePlaces(
    $input: CreatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    createPlaces(input: $input, condition: $condition) {
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
export const updatePlaces = /* GraphQL */ `
  mutation UpdatePlaces(
    $input: UpdatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    updatePlaces(input: $input, condition: $condition) {
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
export const deletePlaces = /* GraphQL */ `
  mutation DeletePlaces(
    $input: DeletePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    deletePlaces(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
