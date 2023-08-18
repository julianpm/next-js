import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";

function App() {
  return (
		<div>
			<Routes>
				<Route element={ <AllMeetupsPage /> } path="/" />
				<Route element={ <NewMeetupPage /> } path="/new-meetup" />
				<Route element={ <FavouritesPage /> } path="/favourites" />
			</Routes>
		</div>
  );
}

export default App;
