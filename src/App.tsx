import React from "react";
import axios from "axios";
type Items = {
  TrackingNumber: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
};

function App() {
  const [items, setItems] = React.useState<Items>();
  React.useEffect(() => {
    axios
      .get("https://tracking.bosta.co/shipments/track/6636234")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="TEST">
      {items ? (
        <div>
          <h1>{items.TrackingNumber}</h1>
          <h1>{items.CurrentStatus.state}</h1>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>loading</h1>
      )}
    </div>
  );
}

export default App;
