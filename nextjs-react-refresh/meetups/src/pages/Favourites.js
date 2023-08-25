import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouritesContext = useContext(FavouritesContext);

  let content;
  if (favouritesContext.totalFavourites === 0) {
    content = <p>you got no favourites.</p>;
  } else {
    content = <MeetupList meetups={favouritesContext.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
