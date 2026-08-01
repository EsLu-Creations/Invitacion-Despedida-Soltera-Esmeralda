import Countdown from "./components/Countdown/Countdown";
import DressCode from "./components/DressCode/DressCode";
import Gifts from "./components/Gifts/Gifts";
import Header from "./components/Header/Header";
import Reception from "./components/Reception/Reception";
import RSVP from "./components/RSVP/RSVP";

const App = () => {
  return (
    <div>
      <Header />
      <Countdown />
      <Reception />
      <DressCode />
      <Gifts />
      <RSVP />
    </div>
  );
};

export default App;
