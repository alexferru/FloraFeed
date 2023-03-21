import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MapView from "./components/MapView";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import ListView from "./components/ListView";
import GridView from "./components/GridView";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import firebase from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { SubmitForm } from "./components/Submit/SubmitForm";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Submit/SubmitStyles';

const App = () => {
  const [view, setView] = useState("MAP");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebase.auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignup = async (firstName, lastName, email, password) => {
    try {
      await createUserWithEmailAndPassword(firebase.auth, email, password);

      alert("User registered successfully");
    } catch (error) {
      alert(error.message);
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
      {user ? (
        <>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "40px",
              marginBottom: "40px",
              marginLeft: "10%"
            }}
          >
            <div>
              <Button
                variant="outlined"
                color="success"
                style={{ marginRight: "20px" }}
                onClick={() => setView("GRID")}
              >
                Grid
              </Button>
              <Button
                variant="outlined"
                color="success"
                style={{ marginRight: "20px" }}
                onClick={() => setView("LIST")}
              >
                List
              </Button>
              <Button
                variant="outlined"
                color="success"
                style={{ marginRight: "20px" }}
                onClick={() => setView("MAP")}
              >
                Map
              </Button>
            </div>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                color="success"
                onClick={() => setView("SubmitForm")}
                sx={{ marginLeft: "auto" }}
                startIcon={<AddIcon />}
              >
                New Post
              </Button>
            </div>
          </Container>
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
            {view === "MAP" ? <MapView /> : ""}
            {view === "LIST" ? <ListView /> : ""}
            {view === "GRID" ? <GridView /> : ""}
            {view === "SubmitForm" ? <SubmitForm /> : ""}
          </Container>
          <Button>Test</Button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );  
};

const WrappedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
