import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Promos } from "../src/models";
import { Storage } from "aws-amplify";

const usePromos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [promos, setPromos] = useState<Promos[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async () => {
    setLoading(true);
    try {
      const promos = await DataStore.query(Promos, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });

      const promoData: Promos[] = [];

      for (const promo of promos) {
        if (!promo.imageUrl) return;

        const imageUrl = await Storage.get(promo.imageUrl);

        promoData.push({ ...promo, imageUrl: imageUrl });
      }

      setPromos(promoData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPromo = async (id: string) => {
    setLoadingSingle(true);

    let promoData = undefined;
    try {
      const event = await DataStore.query(Promos, id);
      promoData = event;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return promoData;
  };

  const createPromo = async (data: Promos) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Promos(data));
      setPromos((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updatePromo = async (id: string, newData: Promos) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Promos, id);

      if (!original) return;

      const updated = await DataStore.save(
        Promos.copyOf(original, (updated) => {
          updated.name = newData.name;
          updated.imageUrl = newData.imageUrl;
          updated.placesID = newData.placesID;
          updated.description = newData.description;
          updated.promotypesID = newData.promotypesID;
          updated.amount = newData.amount;
          updated.promo_amount = newData.promo_amount;
          updated.start_date = newData.start_date;
          updated.end_date = newData.end_date;
        })
      );

      setPromos((state) => {
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

  const deletePromo = async (id: string) => {
    try {
      const todelete = await DataStore.query(Promos, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setPromos((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    promos,
    loading,
    loadingSingle,
    loadingCreate,
    createPromo,
    updatePromo,
    getPromo,
    deletePromo,
  };
};

export default usePromos;
