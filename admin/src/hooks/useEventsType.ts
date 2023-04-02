import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { EventTypes } from "../models";

const useEventsType = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [events, setEvents] = useState<EventTypes[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async (page: number = 0) => {
    setLoading(true);
    try {
      const events = await DataStore.query(EventTypes, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: page,
        limit: 10,
      });

      setEvents(events);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getEvent = async (id: string) => {
    setLoadingSingle(true);

    let eventData = undefined;
    try {
      const event = await DataStore.query(EventTypes, id);
      eventData = event;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return eventData;
  };

  const createEvents = async (data: EventTypes) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new EventTypes(data));
      setEvents((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateEvents = async (id: string, newData: EventTypes) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(EventTypes, id);

      if (!original) return;

      const updated = await DataStore.save(
        EventTypes.copyOf(original, (updated) => {
          updated.name = newData.name;
        })
      );

      setEvents((state) => {
        const newState = [...state];
        const itemIndex = newState.findIndex((item) => item.id === original.id);
        if (itemIndex === -1) return newState;

        newState[itemIndex] = newData;
        return newState;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const todelete = await DataStore.query(EventTypes, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setEvents((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    events,
    loading,
    loadingSingle,
    loadingCreate,
    createEvents,
    updateEvents,
    getEvent,
    deleteEvent,
  };
};

export default useEventsType;
