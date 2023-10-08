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
    set((state) => {
      const updatedUserData = {
        ...state.userData,
        [step]: data,
      };

      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      return { userData: updatedUserData };
    }),
}));

export default useStore;
