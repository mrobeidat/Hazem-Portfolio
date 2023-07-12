import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Protfilo from "./Pages/Protfilo/Protfilo";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {

  return (
    <>
    <Container className={'top_60'}>

    

      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12}>
          <Profile />
        </Grid>

        <Grid item xs>
          
          <Router>
          <Header />

          <div className="main_content container_shadow">
            <Switch>
                  <Route path="/portfolio">
                      <Protfilo />
                  </Route>
                  <Route path="/">
                      <Resume />
                  </Route>
              </Switch>
          </div>

          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
