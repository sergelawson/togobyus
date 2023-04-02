import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { PromoTypes } from "../models";

const usePromoType = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [promos, setPromos] = useState<PromoTypes[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async (page: number = 0) => {
    setLoading(true);
    try {
      const promos = await DataStore.query(PromoTypes, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: page,
        limit: 10,
      });

      setPromos(promos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPromos = async (id: string) => {
    setLoadingSingle(true);

    let promoData = undefined;
    try {
      const promo = await DataStore.query(PromoTypes, id);
      promoData = promo;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return promoData;
  };

  const createPromos = async (data: PromoTypes) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new PromoTypes(data));
      setPromos((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updatePromos = async (id: string, newData: PromoTypes) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(PromoTypes, id);

      if (!original) return;

      const updated = await DataStore.save(
        PromoTypes.copyOf(original, (updated) => {
          updated.name = newData.name;
        })
      );

      setPromos((state) => {
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

  const deletePromos = async (id: string) => {
    try {
      const todelete = await DataStore.query(PromoTypes, id);
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
    createPromos,
    updatePromos,
    getPromos,
    deletePromos,
  };
};

export default usePromoType;
