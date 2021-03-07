import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyRate } from "./features/BoughtRecived/boughtRecivedSlice";
import { useInterval } from "./custom-hooks/useInterval";

// import components
import NavBar from "./components/NavBar";
import List from "./views/List";
import Recived from "./views/Recived";

function App() {
  const dispatch = useDispatch();
  const fetchRateStatus = useSelector((state) => state.fetchRateStatus);

  // useInterval(() => {
  //   dispatch(fetchCurrencyRate());
  // }, 3000);

  // useEffect(() => {
  //   console.log("fetching rates: ");
  //   if (fetchRateStatus === "idle") {
  //     dispatch(fetchCurrencyRate());
  //   }
  // }, [fetchRateStatus, dispatch]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/recived" component={Recived} />
          <Route path="/" component={() => <div>home</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
