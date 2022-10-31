import { Card, ListGroup, Row } from "react-bootstrap";
import classnames from "classnames";

export interface GitHubData {
  title: string;
  id: string;
  url: string;
  affectedWorkspaces: string[];
  lastActive: string;
  createdAt: string;
  state: string;
}

interface GitHubCardProps {
  githubData: GitHubData[];
}

export const GitHubCard: React.FC<GitHubCardProps> = ({ githubData }) => {
  return (
    <ListGroup.Item>
      {githubData.map((issue) => {
        const cardStyles = classnames("my-2 bg-opacity-25", {
          "bg-success": issue.state === "open",
          "bg-danger": issue.state === "closed",
        });

        return (
          <Card className={cardStyles}>
            <Card.Body className="px-5">
              <Row>
                <a
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-0"
                >
                  {issue.id} {issue.title}
                </a>
              </Row>
              <Row>Status: {issue.state}</Row>
              <Row>Created: {issue.createdAt}</Row>
              <Row>Last active: {issue.lastActive}</Row>
            </Card.Body>
          </Card>
        );
      })}
    </ListGroup.Item>
  );
};
