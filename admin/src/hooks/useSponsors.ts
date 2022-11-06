import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Sponsors } from "../models";

const useSpomsors = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [sponsors, setSponsors] = useState<Sponsors[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchSponsor();
  }, []);

  const fetchSponsor = async () => {
    setLoading(true);
    try {
      const sponsors = await DataStore.query(Sponsors, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });

      setSponsors(sponsors);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getSponsor = async (id: string) => {
    setLoadingSingle(true);

    let sponsorData = undefined;
    try {
      const sponsor = await DataStore.query(Sponsors, id);
      sponsorData = sponsor;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return sponsorData;
  };

  const createSponsor = async (data: Sponsors) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Sponsors(data));
      setSponsors((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updateSponsor = async (id: string, newData: Sponsors) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Sponsors, id);

      if (!original) return;

      const updated = await DataStore.save(
        Sponsors.copyOf(original, (updated) => {
          updated.imageUrl = newData.imageUrl;
          updated.position = newData.position;
          updated.name = newData.name;
        })
      );

      setSponsors((state) => {
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

  const deleteSponsor = async (id: string) => {
    try {
      const todelete = await DataStore.query(Sponsors, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setSponsors((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    sponsors,
    loading,
    loadingSingle,
    loadingCreate,
    createSponsor,
    updateSponsor,
    getSponsor,
    deleteSponsor,
  };
};

export default useSpomsors;
