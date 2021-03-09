// node modules
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
  selectError,
} from "./features/BoughtRecived/boughtRecivedSlice";

// components
import Toaster from "./components/Toaster";
import NavBar from "./components/NavBar";
import List from "./views/List";
import Recived from "./views/Recived";

function App() {
  const errorMSG = useSelector(selectError);
  const dispatch = useDispatch();

  // useInterval(() => {
  //   dispatch(fetchCurrencyRate());
  // }, 7000);

  const changeCurrancy = (selectedCurrency) =>
    dispatch(changeCurrencyAction(selectedCurrency));

  return (
    <div>
      <Router>
        <NavBar toggle={changeCurrancy}/>
        <Box mt="50px">
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/recived" component={Recived} />
            <Redirect from="/" to="/list" />
            <Route path="/" component={() => <div>home</div>} />
          </Switch>
        </Box>
      </Router>
      <Toaster hasError={!!errorMSG} msg={errorMSG} />
    </div>
  );
}

export default App;
