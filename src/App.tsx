import { Tracking, Shipment, TrackShipment } from './components';

function App() {
  return (
    <div>
      <TrackShipment />
      <Tracking trackingNumber={1094442} />
      <Shipment />
    </div>
  );
}

export default App;
