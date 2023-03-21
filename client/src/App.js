import React, { useState } from "react";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import MapView from "./components/MapView/MapView";
import ListView from "./components/ListView/ListView";
import GridView from "./components/GridView/GridView";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useAuth } from "./hooks/useAuth";
import Navigation from "./components/Navigation/Navigation";
import { SubmitForm } from "./components/Submit/SubmitForm";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Submit/SubmitStyles";

const App = () => {
  const { user, handleLogin, handleSignup } = useAuth();
  const [view, setView] = useState("MAP");

  const renderView = () => {
    switch (view) {
      case "MAP":
        return <MapView />;
      case "LIST":
        return <ListView />;
      case "GRID":
        return <GridView />;
      case "SubmitForm":
        return <SubmitForm />;
      default:
        return null;
    }
  };

  if (!user) {
    return (
      <>
        {view !== "SIGNUP" ? <Login onLogin={handleLogin} /> : ""}
        {view === "SIGNUP" ? <Signup onSignup={handleSignup} /> : ""}
        <Button
          onClick={() => setView(view === "SIGNUP" ? "LOGIN" : "SIGNUP")}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          {view === "SIGNUP" ? "Log in" : "Sign up"}
        </Button>
      </>
    );
  }

  return (
    <div>
      <Navigation setView={setView} />
      <Sidebar />
      <Container
        sx={{
          width: "80%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderView()}
      </Container>
    </div>
  );
};

const WrappedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
