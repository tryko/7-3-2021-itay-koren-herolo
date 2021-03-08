// node modules
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@chakra-ui/react";

// store and hook
import { useInterval } from "./custom-hooks/useInterval";
import {
  fetchCurrencyRate,
  changeCurrencyAction,
} from "./features/BoughtRecived/boughtRecivedSlice";

// components
import Toaster from "./components/Toaster";
import SwitchBtn from "./components/SwitchBtn";
import NavBar from "./components/NavBar";
import List from "./views/List";
import Recived from "./views/Recived";

function App() {
  const dispatch = useDispatch();
  const fetchRateStatus = useSelector((state) => state.fetchRateStatus);

  // useInterval(() => {
  //   dispatch(fetchCurrencyRate());
  // }, 7000);

  // useEffect(() => {
  //   if (fetchRateStatus === "idle") {
  //     dispatch(fetchCurrencyRate());
  //   }
  // }, [fetchRateStatus, dispatch]);

  return (
    <div>
      <Router>
        <NavBar>
          <div>
            <Button fontSize="14px" h="20px" mr="10px">
              <Link to="/list">List</Link>
            </Button>
            <Button fontSize="14px" h="20px">
              <Link to="/recived">Recived</Link>
            </Button>
          </div>
          <SwitchBtn
            defaultValue="USD"
            switchValue="ILS"
            leftTxt="USD"
            rightTxt="ILS"
            toggle={(selectedCurrency) =>
              dispatch(changeCurrencyAction(selectedCurrency))
            }
          />
        </NavBar>
        <Box mt="50px">
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/recived" component={Recived} />
            <Redirect from="/" to="/list" />
            <Route path="/" component={() => <div>home</div>} />
          </Switch>
        </Box>
      </Router>
      <Toaster hasMSG={true} />
    </div>
  );
}

export default App;
