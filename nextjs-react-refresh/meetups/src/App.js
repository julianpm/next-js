import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from './components/layout/Layout';

function App() {
  return (
		<Layout>
			<Routes>
				<Route element={ <AllMeetupsPage /> } path="/" />
				<Route element={ <NewMeetupPage /> } path="/new-meetup" />
				<Route element={ <FavouritesPage /> } path="/favourites" />
			</Routes>
		</Layout>
  );
}

export default App;
