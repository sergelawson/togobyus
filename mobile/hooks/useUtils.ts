import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Utils } from "../src/models";

const useUtils = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [utils, setUtils] = useState<Utils[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(true);

  const fetchUtils = async () => {
    setLoading(true);
    try {
      const utils = await DataStore.query(Utils, Predicates.ALL, {
        // filter: (c) => c.
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });

      setUtils(utils);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getUtilsByType = async (typeId: string) => {
    setLoading(true);
    try {
      const utils = await DataStore.query(
        Utils,
        (c) => c.utiltypesID("eq", typeId),
        {
          sort: (s) => s.createdAt(SortDirection.ASCENDING),
          page: 0,
          limit: 10,
        }
      );

      setUtils(utils);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getUtils = async (id: string) => {
    setLoadingSingle(true);

    let eventData = undefined;
    try {
      const event = await DataStore.query(Utils, id);
      eventData = event;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return eventData;
  };

  const craeteUtils = async (data: Utils) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Utils(data));
      setUtils((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateUtils = async (id: string, newData: Utils) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Utils, id);

      if (!original) return;

      const updated = await DataStore.save(
        Utils.copyOf(original, (updated) => {
          updated.name = newData.name;
          updated.contact = newData.contact;
        })
      );

      setUtils((state) => {
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

  const deleteUtils = async (id: string) => {
    try {
      const todelete = await DataStore.query(Utils, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setUtils((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    utils,
    loading,
    loadingSingle,
    loadingCreate,
    craeteUtils,
    updateUtils,
    getUtils,
    deleteUtils,
    getUtilsByType,
  };
};

export default useUtils;
