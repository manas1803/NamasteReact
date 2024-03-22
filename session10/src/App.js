import DisplayCards from "./components/DisplayCards/DisplayCards";
import { cardData } from "./utilities/constants";

export default function App() {
  return <DisplayCards cardData={cardData} />;
}
