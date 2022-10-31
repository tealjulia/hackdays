// use global chrome

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SidePanel } from "./components/SidePanel";

function App() {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          /**
           * Sends a single message to the content script(s) in the specified tab,
           * with an optional callback to run when a response is sent back.
           *
           * The runtime.onMessage event is fired in each content script running
           * in the specified tab for the current extension.
           */
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            { type: "GET_DOM" },
            (response) => {
              setTitle(response.title);
              setUser(response.user);
            }
          );
        }
      );
  });

  if (!user.includes("airbyte"))
    return <Container>You don't work here!</Container>;

  return (
    <Container>
      <h1>{title}</h1>
      <header className="App-header">
        <SidePanel />
      </header>
    </Container>
  );
}

export default App;
