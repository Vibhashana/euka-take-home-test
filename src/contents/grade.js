import { juniorIcon, middleIcon, seniorIcon } from "./../assets/images";

export default {
  title: "Confirm your child's grade level",
  description: "",
  grades: [
    {
      name: "junior",
      title: "Euka Junior",
      description: "",
      icon: juniorIcon,
      label: "Grade 1 to Grade 7",
    },
    {
      name: "middle",
      title: "Euka Middle",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet illo aliquam nobis, velit magnam quo nesciunt dicta.",
      icon: middleIcon,
      label: "Grade 8 to Grade 10",
    },
    {
      name: "senior",
      title: "Euka Senior",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet illo aliquam nobis, velit magnam quo nesciunt dicta.",
      icon: seniorIcon,
      label: "Grade 11 & 12",
    },
  ],
};
