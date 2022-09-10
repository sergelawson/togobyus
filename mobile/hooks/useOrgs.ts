import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Organisers } from "../src/models";

const useOrgs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [orgs, setOrgs] = useState<Organisers[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(true);

  useEffect(() => {
    fetchOrgs();
  }, []);

  const fetchOrgs = async () => {
    setLoading(true);
    try {
      const orgs = await DataStore.query(Organisers, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });
      setOrgs(orgs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getOrgs = async (id: string) => {
    setLoadingSingle(true);

    let orgData = undefined;
    try {
      const org = await DataStore.query(Organisers, id);
      orgData = org;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return orgData;
  };

  const createOrgs = async (data: Organisers) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Organisers(data));
      setOrgs((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateOrgs = async (id: string, newData: Organisers) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Organisers, id);

      if (!original) return;

      const updated = await DataStore.save(
        Organisers.copyOf(original, (updated) => {
          updated.name = newData.name;
          updated.address = newData.address;
          updated.type = newData.type;
          updated.contact = newData.contact;
          updated.imageUrl = newData.imageUrl;
        })
      );

      setOrgs((state) => {
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

  const deleteOrg = async (id: string) => {
    try {
      const todelete = await DataStore.query(Organisers, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setOrgs((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    orgs,
    loading,
    loadingSingle,
    loadingCreate,
    createOrgs,
    updateOrgs,
    getOrgs,
    deleteOrg,
  };
};

export default useOrgs;
