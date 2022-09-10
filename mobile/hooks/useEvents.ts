import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Events } from "../src/models";
import { Storage } from "aws-amplify";

const useEvents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [events, setEvents] = useState<Events[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const events = await DataStore.query(Events, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      setEvents(eventsData);
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
      const event = await DataStore.query(Events, id);
      eventData = event;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return eventData;
  };

  const createEvents = async (data: Events) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Events(data));
      setEvents((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateEvents = async (id: string, newData: Events) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Events, id);

      if (!original) return;

      const updated = await DataStore.save(
        Events.copyOf(original, (updated) => {
          updated.name = newData.name;
          updated.imageUrl = newData.imageUrl;
          updated.placesID = newData.placesID;
          updated.organisersID = newData.organisersID;
          updated.start_time = newData.start_time;
          updated.end_time = newData.end_time;
          updated.date = newData.date;
          updated.description = newData.description;
        })
      );

      setEvents((state) => {
        const newState = [...state];
        const itemIndex = newState.findIndex((item) => item.id === original.id);
        if (itemIndex == -1) return newState;

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
      const todelete = await DataStore.query(Events, id);
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

export default useEvents;
