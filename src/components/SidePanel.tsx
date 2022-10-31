import { Container } from "react-bootstrap";
import { useSourceHook } from "../hooks/useSourceHook";
import { ItemCard } from "./ItemCard";

export interface Category {
  listItems: ListItem[] | Record<string, string>;
  seeMoreLink: string;
}
export interface ListItem {
  title: string;
  link: string;
}

export const SidePanel: React.FC = () => {
  const data = useSourceHook();

  return (
    <Container className="pt-4">
      <>
        <h1>Iron Octavia</h1>
        <h2>Workspace Details</h2>
        {Object.entries(data).map(([key, value]) => {
          return <ItemCard categoryTitle={key} category={value} />;
        })}
      </>
    </Container>
  );
};
