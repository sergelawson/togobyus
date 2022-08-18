import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Places } from "../models";

const usePlaces = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [places, setPlaces] = useState<Places[]>([]);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const places = await DataStore.query(Places, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        page: 0,
        limit: 10,
      });
      setPlaces(places);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPlace = async (id: string) => {
    setLoadingSingle(true);

    let placeData = undefined;
    try {
      const place = await DataStore.query(Places, id);
      placeData = place;
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }

    return placeData;
  };

  const createPlaces = async (data: Places) => {
    setLoadingCreate(true);
    try {
      const response = await DataStore.save(new Places(data));
      setPlaces((state) => [response, ...state]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCreate(false);
    }
  };

  const updatePlaces = async (id: string, newData: Places) => {
    setLoadingCreate(true);
    try {
      const original = await DataStore.query(Places, id);

      if (!original) return;

      const updated = await DataStore.save(
        Places.copyOf(original, (updated) => {
          updated.name = newData.name;
          updated.address = newData.address;
          updated.longitude = newData.longitude;
          updated.latitude = newData.latitude;
          updated.type = newData.type;
          updated.city = newData.city;
          updated.imageUrl = newData.imageUrl;
          updated.open_time = newData.open_time;
          updated.close_time = newData.close_time;
          updated.open_days = newData.open_days;
        })
      );

      setPlaces((state) => {
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

  const deletePost = async (id: string) => {
    try {
      const todelete = await DataStore.query(Places, id);
      if (!todelete) return;
      await DataStore.delete(todelete);
      setPlaces((state) => {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== id);
        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    places,
    loading,
    loadingSingle,
    loadingCreate,
    createPlaces,
    updatePlaces,
    getPlace,
    deletePost,
  };
};

export default usePlaces;
