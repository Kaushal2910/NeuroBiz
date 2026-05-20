//C:\Users\sonaw\OneDrive\Desktop\NeuroBiz\client\src\store\sidebarStore.ts

import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;

  toggleSidebar: () => void;
}

export const useSidebarStore =
  create<SidebarStore>((set) => ({
    collapsed: false,

    toggleSidebar: () =>
      set((state) => ({
        collapsed: !state.collapsed,
      })),
  }));