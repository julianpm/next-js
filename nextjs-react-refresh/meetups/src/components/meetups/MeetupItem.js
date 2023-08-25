import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesContext = useContext(FavouritesContext);
  const itemIsFavourite = favouritesContext.itemIsFavourite(props?.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesContext.removeFavourite(props?.id);
    } else {
      favouritesContext.addFavourite({
        id: props?.id,
        title: props?.title,
        description: props?.description,
        image: props?.image,
        address: props?.address,
      });
    }
  }

  const { address, description, image, title } = props;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove From Favourites" : "Add To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
