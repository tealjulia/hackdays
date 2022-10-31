import { Container } from "react-bootstrap";
import { useParseSourceData } from "../hooks/useSourceHook";
import { ItemCard } from "./ItemCard";

export interface Category {
  listItems: ListItem[] | Record<string, string>;
  seeMoreLink?: string;
}
export interface ListItem {
  title: string;
  link: string;
}

export const SidePanel: React.FC = () => {
  const { githubData, loading } = useParseSourceData();
  const data = [{ name: "Github Issues", data: githubData, type: "github" }];

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="pt-4">
      <>
        <h1>Iron Octavia</h1>
        <h2>Workspace Details</h2>{" "}
        {data.map((entry) => {
          return (
            <ItemCard
              categoryTitle={entry.name}
              data={entry.data}
              type={entry.type}
            />
          );
        })}
      </>
    </Container>
  );
};
