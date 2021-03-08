import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SwitchBtn from "./components/SwitchBtn";
import {
  fetchCurrencyRate,
  changeCurrencyAction,
} from "./features/BoughtRecived/boughtRecivedSlice";
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
  //   if (fetchRateStatus === "idle") {
  //     dispatch(fetchCurrencyRate());
  //   }
  // }, [fetchRateStatus, dispatch]);

  return (
    <div>
      <Router>
        <NavBar>
          <div>
            <Link to="/list">List</Link>
            <span> </span>
            <Link to="/recived">Recived</Link>
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
