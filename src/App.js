import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "react-circular-menu/styles.css";

import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";

import { menuCircle, screen } from "./style";
import Colors from "./Components/ColorsPage/Colors";
import Letters from "./Components/LettersPage/Letters";
import Numbers from "./Components/NumbersPage/Numbers";
import Shapes from "./Components/ShapesPage/Shapes";
import Home from "./Components/HomePage/Home";

function App() {
  const [section, setSection] = useState("Home");

  return (
    <div style={screen}>
      <div style={menuCircle}>
        <CircleMenu
          startAngle={-90}
          rotationAngle={360}
          itemSize={4}
          radius={6}
          /**
           * rotationAngleInclusive (default true)
           * Whether to include the ending angle in rotation because an
           * item at 360deg is the same as an item at 0deg if inclusive.
           * Leave this prop for angles other than 360deg unless otherwise desired.
           */
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            onClick={() => setSection("Colors")}
            // tooltip="Email"
            tooltipPlacement="right"
          >
            Colors
          </CircleMenuItem>
          <CircleMenuItem
            onClick={() => setSection("Letters")}
            // tooltip="Help"
          >
            Letters
            {/* <HelpOutlineIcon /> */}
          </CircleMenuItem>
          <CircleMenuItem
            onClick={() => setSection("Numbers")}
            // tooltip="Location"
          >
            Numbers
            {/* <MapIcon /> */}
          </CircleMenuItem>
          <CircleMenuItem
            onClick={() => setSection("Shapes")}
            // tooltip="Info"
          >
            Shapes
          </CircleMenuItem>
        </CircleMenu>
      </div>
      {section === "Home" ? (
        <Home />
      ) : section === "Colors" ? (
        <Colors />
      ) : section === "Letters" ? (
        <Letters />
      ) : section === "Numbers" ? (
        <Numbers />
      ) : section === "Shapes" ? (
        <Shapes />
      ) : null}
      <Router>
        <Switch>
          <Route
            exact
            path="/Colors"
            component={() => {
              <Colors />;
            }}
          />
          <Route exact path="/Letters" component={Letters} />
          <Route exact path="/Numbers" component={Numbers} />
          <Route exact path="/Shapes" component={Shapes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
