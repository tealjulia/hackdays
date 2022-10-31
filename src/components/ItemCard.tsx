import { Accordion, Card } from "react-bootstrap";
import { GitHubCard } from "./GitHubCard";
import { ItemList } from "./ItemList";
import { ItemTable } from "./ItemTable";

interface ItemCardProps {
  categoryTitle: string;
  data: any;
  type: string;
}
export const ItemCard: React.FC<ItemCardProps> = ({
  categoryTitle,
  data,
  type,
}) => {
  return (
    <Card className="mt-4 bg-light">
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey={categoryTitle}>
            <Accordion.Header>
              <strong>{categoryTitle}</strong>
            </Accordion.Header>
            <Accordion.Body>
              {type === "github" ? (
                <GitHubCard githubData={data} />
              ) : Array.isArray(data.listItems) ? (
                <ItemList items={data.listItems} />
              ) : (
                <ItemTable items={data.listItems} />
              )}
              {data.seeMoreLink && (
                <p>
                  <a
                    href={data.seeMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See More...
                  </a>
                </p>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
