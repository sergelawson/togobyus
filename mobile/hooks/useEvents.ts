import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Events } from "../src/models";
import { Storage } from "aws-amplify";

type SearchType = { keyword: string; categorie?: string; page?: number };

const useEvents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<Events[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(true);
  const [listVedette, setListVedette] = useState<Events[]>([]);
  const [loadingVedette, setLoadingVedette] = useState<boolean>(false);
  const [eventLoadable, setEventLoadable] = useState<boolean>(false);

  const fetchEvents = async (categorie?: string) => {
    setLoading(true);
    setEventLoadable(true);
    try {
      let events;
      if (categorie !== "all" && categorie !== undefined) {
        events = await DataStore.query(
          Events,
          (c) => c.eventtypesID("eq", categorie),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: 0,
            limit: 5,
          }
        );
      } else {
        events = await DataStore.query(Events, Predicates.ALL, {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
          page: 0,
          limit: 5,
        });
      }

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      if (eventsData.length < 5) {
        setEventLoadable(false);
      }

      setEvents(eventsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEventsVedette = async () => {
    setLoadingVedette(true);
    try {
      const events = await DataStore.query(Events, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 5,
      });

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      setListVedette(eventsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingVedette(false);
    }
  };

  const moreEvents = async (
    page: number | undefined,
    categorie?: string | undefined
  ) => {
    if (!eventLoadable) return;
    try {
      let events;
      if (categorie !== "all" && categorie !== undefined) {
        events = await DataStore.query(
          Events,
          (c) => c.eventtypesID("eq", categorie),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: page,
            limit: 5,
          }
        );
      } else {
        events = await DataStore.query(Events, Predicates.ALL, {
          sort: (s) => s.createdAt(SortDirection.DESCENDING),
          page: page,
          limit: 5,
        });
      }
      console.log("page ", page, events.length);

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      setEvents((state) => [...state, ...eventsData]);

      return eventsData.length > 0;
    } catch (error) {
      console.error(error);
    }
  };

  const moreVedette = async (page: number | undefined) => {
    try {
      const events = await DataStore.query(Events, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: page,
        limit: 5,
      });

      console.log(events);

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      setListVedette((state) => [...state, ...eventsData]);

      return eventsData.length > 0;
    } catch (error) {
      console.error(error);
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

  const fetchSearchEvents = async ({ keyword, categorie }: SearchType) => {
    setLoading(true);
    setEventLoadable(true);

    if (!keyword) return;

    const normalizeText = keyword
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    try {
      let events;
      if (categorie !== "all" && categorie !== undefined) {
        events = await DataStore.query(
          Events,
          (c) =>
            c
              .or((c) =>
                c.tags("contains", normalizeText).name("contains", keyword)
              )
              .eventtypesID("eq", categorie),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: 0,
            limit: 10,
          }
        );
      } else {
        events = await DataStore.query(
          Events,
          (c) =>
            c.or((c) =>
              c.tags("contains", normalizeText).name("contains", keyword)
            ),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: 0,
            limit: 10,
          }
        );
      }

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }

      if (eventsData.length < 5) {
        setEventLoadable(false);
      }

      setEvents(eventsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const moreSearchEvents = async ({ keyword, categorie, page }: SearchType) => {
    setLoading(true);
    if (!eventLoadable) return;
    if (!keyword) return;

    const normalizeText = keyword
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    try {
      let events;
      if (categorie !== "all" && categorie !== undefined) {
        events = await DataStore.query(
          Events,
          (c) =>
            c
              .or((c) =>
                c.tags("contains", normalizeText).name("contains", keyword)
              )
              .eventtypesID("eq", categorie),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: page,
            limit: 10,
          }
        );
      } else {
        events = await DataStore.query(
          Events,
          (c) =>
            c.or((c) =>
              c.tags("contains", normalizeText).name("contains", keyword)
            ),
          {
            sort: (s) => s.createdAt(SortDirection.DESCENDING),
            page: page,
            limit: 10,
          }
        );
      }

      const eventsData: Events[] = [];

      for (const event of events) {
        if (!event.imageUrl) return;

        const imageUrl = await Storage.get(event.imageUrl);

        eventsData.push({ ...event, imageUrl: imageUrl });
      }
      setEvents((state) => [...state, ...eventsData]);
      return eventsData.length > 0;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    listVedette,
    loading,
    loadingSingle,
    getEvent,
    moreEvents,
    moreVedette,
    fetchEvents,
    fetchEventsVedette,
    fetchSearchEvents,
    moreSearchEvents,
  };
};

export default useEvents;
