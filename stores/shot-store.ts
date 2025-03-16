import { IShot } from "@/types";
import { create } from "zustand";

type StoreState = {
  shotDetail: IShot | null;
  updateShotDetail: (detail: IShot | null) => void;
};

export const useShotStore = create<StoreState>((set) => ({
  shotDetail: null,
  updateShotDetail: (detail) => {
    set({ shotDetail: detail });
  },
}));
