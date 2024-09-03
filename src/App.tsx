import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";
import { LoginForm } from "./features/Login/LoginForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        height: "100dvh",
      }}
    >
      <div style={{ width: 300 }}>
        <Card>
          {loggedIn && (
            <Alert
              type="success"
              text="Logged in successfully!"
              onCloseClick={() => setLoggedIn(false)}
            />
          )}
          <h1 style={{ margin: "12px 0px", textAlign: "center" }}>Login</h1>
          <LoginForm onSubmit={() => setLoggedIn(true)} />
        </Card>
      </div>
    </div>
  );
}
export default App;
