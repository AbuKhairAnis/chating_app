import { create } from "zustand";

const useConversion = create((set) => ({
  selectedConversion: null,
  setSelectedConversion: (selectedConversion) => set({ selectedConversion }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversion;
