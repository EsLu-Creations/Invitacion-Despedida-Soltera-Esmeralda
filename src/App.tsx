import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Countdown from "./components/Countdown/Countdown";
import DressCode from "./components/DressCode/DressCode";
import Footer from "./components/Footer/Footer";
import Gifts from "./components/Gifts/Gifts";
import Header from "./components/Header/Header";
import Reception from "./components/Reception/Reception";
import RSVP from "./components/RSVP/RSVP";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <Countdown />
      <Reception />
      <DressCode />
      <Gifts />
      <RSVP />
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default App;
