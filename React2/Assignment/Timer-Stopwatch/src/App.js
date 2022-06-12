import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Tabs >
        <TabList>
          <Tab><Heading>Timer</Heading></Tab>
          <Tab><Heading>Stopwatch</Heading></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Timer />
          </TabPanel>
          <TabPanel>
            <Stopwatch />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
