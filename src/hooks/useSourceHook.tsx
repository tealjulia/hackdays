import { useEffect, useState } from "react";

export const fetchData = async () => {
  const apiData = await fetch(
    `https://ironman-4200139641.us-east-1.bonsaisearch.net:443/airbyte_workspace/_doc/bd7f276c-fb96-46bf-8f3c-53d194add358`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(), // paste in creds inside these parentheses
      },
    }
  ).then((res) => res.json());

  return apiData;
};

export const useParseSourceData = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  console.log("here");

  const getData = async () => {
    try {
      const response = await fetchData();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log({ data, loading });

  const parsedGithubData = loading
    ? {}
    : data._source.issue_array.map((issue: any) => {
        return {
          title: issue.title,
          id: issue.id,
          state: issue.state,
          url: issue.issue_url,
          createdAt: issue.created_at,
          affectedWorkspaces: issue.mentioned_workspace_ids,
          lastActive: issue.comments_array
            .map((comment: any) => {
              return comment.created_at;
            })
            .sort((a: number, b: number) => b - a)[0],
        };
      });

  const githubData = parsedGithubData || {};
  const workspaceName = loading ? "" : data._source.workspace_name;
  return { workspaceName, githubData, loading };
};
