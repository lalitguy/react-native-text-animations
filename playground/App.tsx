import "./global.css";
import { Playgroud } from "./src/context/Playground";
import PlaygroundPage from "./src/pages/PlaygroundPage";

export default function App() {
  return (
    <Playgroud>
      <PlaygroundPage />
    </Playgroud>
  );
}
