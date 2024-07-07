import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { UtilTypes } from "../models";
import { API } from "aws-amplify";
import { createUtilTypes } from "../graphql/mutations";

const useUtilsType = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [utils, setUtils] = useState<UtilTypes[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchUtils();
  }, []);

  const fetchUtils = async (page: number = 0) => {
    setLoading(true);
    try {
      const utils = await DataStore.query(UtilTypes, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: page,
        limit: 10,
      });

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
      const event = await DataStore.query(UtilTypes, id);
      eventData = event;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return eventData;
  };

  const craeteUtils = async (data: UtilTypes) => {
    setLoadingCreate(true);
    try {
      console.log("Createtetet 1");
      /*       const response = await API.graphql({
        query: createUtilTypes,
        variables: { input: data },
      }); */
      const response = await DataStore.save(new UtilTypes(data));
      setUtils((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateUtils = async (id: string, newData: UtilTypes) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(UtilTypes, id);

      if (!original) return;

      const updated = await DataStore.save(
        UtilTypes.copyOf(original, (updated) => {
          updated.name = newData.name;
        })
      );

      setUtils((state) => {
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

  const deleteUtils = async (id: string) => {
    try {
      const todelete = await DataStore.query(UtilTypes, id);
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
  };
};

export default useUtilsType;
