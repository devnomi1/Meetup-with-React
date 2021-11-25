import { createContext, useState } from "react";
const FavouritesContext = createContext({
	favourites: [],
	tottalFavourites: 0,
	addFavourtite: (favouriteMeetup) => {},
	removeFavourtite: (meetupId) => {},
	itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
	const [userFavourtites, setUserFavourtites] = useState([]);

	function addFavourtitesHandler(favouriteMeetup) {
		setUserFavourtites((prevUserFavourites) => {
			return prevUserFavourites.concat(favouriteMeetup);
		});
	}

	function removeFavourtitesHandler(meetupId) {
		setUserFavourtites((prevUserFavourites) => {
			return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
		});
	}

	function itemIsFavourtitesHandler(meetupId) {
		return userFavourtites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favourites: userFavourtites,
		tottalFavourites: userFavourtites.length,
		addFavourtite: addFavourtitesHandler,
		removeFavourtite: removeFavourtitesHandler,
		itemIsFavourite: itemIsFavourtitesHandler,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}
export default FavouritesContext;
