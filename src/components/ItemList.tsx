import { ListGroup } from "react-bootstrap";
import { ListItem } from "./SidePanel";

// assumes items are an object with link and title
interface ItemListProps {
  items: ListItem[];
}
export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ListGroup variant="flush" className="pb-3">
      {items.map((item: ListItem) => {
        return (
          <ListGroup.Item>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              {item.title}
            </a>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
