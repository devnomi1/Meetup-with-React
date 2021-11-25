import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context"
import MeetupList  from "../meetups/MeetupList"


function Favourite() {
  const favouritesCtx = useContext(FavouritesContext)

  let content;
  if (favouritesCtx.tottalFavourites === 0) {
    content = <p>You get no favourite yet. Start Adding some ?</p>
    
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
   }
    return (
			<section>
				<h1>My Favourite</h1>
				{content}
			</section>
		);
}

export default Favourite;
