import React from "react";
import "./App.scss";
import { initializeApp } from "firebase/app";

import Book from "./components/book/Book";

const firebaseConfig = {
  apiKey: "AIzaSyDbspHMfyqsnbFRPJVkzdsVBW8XSmyZAXU",
  authDomain: "endless-story-beedf.firebaseapp.com",
  projectId: "endless-story-beedf",
  storageBucket: "endless-story-beedf.appspot.com",
  messagingSenderId: "1076141221277",
  appId: "1:1076141221277:web:72c35167cb6f45d041fb74",
};

function App() {
  initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Book />
    </div>
  );
}

export default App;
