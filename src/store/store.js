import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  email: "",
  newsletter: false,
  grade: "",
  term: "",
  setEmail: (email) => set({ email }),
  setNewsletter: (newsletter) => set({ newsletter }),
  setGrade: (grade) => set({ grade }),
  setTerm: (term) => set({ term }),
}));

export default useStore;
