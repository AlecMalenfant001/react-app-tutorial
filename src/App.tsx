import { useState } from "react";
import Alert from "./Components/Alert";
import DangerButton from "./Components/DangerButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          <h1>Hide from the moose! He will knock over your water!!</h1>
        </Alert>
      )}

      <DangerButton onClick={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
