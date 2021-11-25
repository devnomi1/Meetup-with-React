import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
	const favouritesCtx = useContext(FavouritesContext);
	const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

	function toggleFavouriteStatusHandler() {
		if (itemIsFavourite) {
			favouritesCtx.removeFavourtite(props.id);
		} else {
			favouritesCtx.addFavourtite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite? 'Remove From Favourite' : 'To Favourite' }</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
