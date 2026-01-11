import { CampersState } from "@/types/camper";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCamperStore = create<CampersState>()(
  persist(
    (set, get) => ({
      campers: [],
      total: 0,
      page: 1,
      limit: 4,
      filters: {},
      favorites: [],
      isLoading: false,
      error: null,

      setCampers: (campers, total) => set({ campers, total }),

      appendCampers: (newCampers) => {
        set((state) => ({
          campers: [...state.campers, ...newCampers],
        }));
      },

      setFilters: (filters) => {
        set({
          filters,
          page: 1,
          total: 0,
        });
      },
      resetFilters: () =>
        set({
          filters: {},
          page: 1,
          total: 0,
        }),

      nextPage: () =>
        set((state) => ({
          page: state.page + 1,
        })),

      addToFavorites: (camper) =>
        set((state) => ({ favorites: [...state.favorites, camper] })),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((camper) => camper.id !== id),
        })),

      isFavorite: (id) => get().favorites.some((camper) => camper.id === id),
    }),
    {
      name: "campers-store",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);
