import { Tracking, Shipment } from './components';

function App() {
  return (
    <div>
      <Tracking trackingNumber={1094442} />
      <Shipment />
    </div>
  );
}

export default App;
