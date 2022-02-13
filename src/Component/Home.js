import { Route, Switch, useRouteMatch } from "react-router-dom";

import BookedHotel from "./BookedHotel";
import CityWiseHotel from "./CityWiseHotel";
import HotelDetails from "./HotelDetails";
import NavBar from "./NavBar";
import TopHotels from "./TopHotels";

const Home = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <NavBar />
      <div>
        <Route path={`${path}/`} component={CityWiseHotel} exact  />
        <Route path={`${path}/top-hotels`} component={TopHotels} />
        <Route path={`${path}/booked-hotels`} component={BookedHotel} />
        <Route path={`${path}/hotel-details`} component={HotelDetails} />
      </div>
    </div>
  );
};
export default Home;
