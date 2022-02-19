import "./App.css";
import logo from "./psh_brand.svg";
import { Button,  } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ListContacts from "./compoents/ListContacts";
import InputMessage from "./compoents/InputMessage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff5a36",
      main: "#ff0000",
      dark: "#c20000",
    },
    secondary: {
      light: "#3a3b3e",
      main: "#141518",
      dark: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="container">
        <aside id="sidebar">
          <header id="top-of-sidebar">
            <div id="app-title">
              <img src={logo} id="App-logo" alt="logo" />
              <h2>React Chat</h2>
            </div>
          </header>
          <div id="current-user">
            <ul>
              <li>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                ></img>
                <div>
                  <h3>Content Content</h3>
                  <Button id="change-user" variant="contained" color="primary">
                    <h5>Cambiar Usuario</h5>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
          <div id="contacts">
            <header id="contacts-title">
              <h2>Contactos</h2>
            </header>
            <ul id="contacts-list">
              <ListContacts />
            </ul>
          </div>
        </aside>
        <section id="main">
          <section id="messages-list"></section>
          <InputMessage />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
