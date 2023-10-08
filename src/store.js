import { create } from "zustand";

const getDataFromLocalStorage = () => {
  const savedData = localStorage.getItem("userData");

  return savedData ? JSON.parse(savedData) : null;
};

const useStore = create((set) => ({
  userData: getDataFromLocalStorage() || {
    email: "",
    newsletter: false,
    grade: "",
    term: "",
  },

  setUserData: (step, data) =>
    set((state) => ({
      userData: {
        ...state.userData,
        [step]: data,
      },
    })),
}));

export default useStore;
