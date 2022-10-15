import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { UtilTypes } from "../src/models";
import { API } from "aws-amplify";

const useUtilsType = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [utils, setUtils] = useState<UtilTypes[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(true);

  useEffect(() => {
    fetchUtils();
  }, []);

  const fetchUtils = async () => {
    setLoading(true);
    try {
      const utils = await DataStore.query(UtilTypes, Predicates.ALL, {
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

  return {
    utils,
    loading,
    loadingSingle,
    loadingCreate,
    getUtils,
  };
};

export default useUtilsType;
