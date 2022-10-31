import { Table } from "react-bootstrap";

interface ItemTableProps {
  items: Record<string, string>;
}

export const ItemTable: React.FC<ItemTableProps> = ({ items }) => {
  return (
    <Table>
      <tbody>
        {Object.entries(items).map(([key, value]) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
