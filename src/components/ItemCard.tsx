import { Accordion, Card } from "react-bootstrap";
import { ItemList } from "./ItemList";
import { ItemTable } from "./ItemTable";
import { Category } from "./SidePanel";

interface ItemCardProps {
  categoryTitle: string;
  category: Category;
}
export const ItemCard: React.FC<ItemCardProps> = ({
  categoryTitle,
  category,
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
              {Array.isArray(category.listItems) ? (
                <ItemList items={category.listItems} />
              ) : (
                <ItemTable items={category.listItems} />
              )}
              <p>
                <a
                  href={category.seeMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See More...
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
