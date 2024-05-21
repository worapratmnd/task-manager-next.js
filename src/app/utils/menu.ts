import { list, check, todo, home } from "./Icons";

interface IMenu {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

const menu: IMenu[] = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
