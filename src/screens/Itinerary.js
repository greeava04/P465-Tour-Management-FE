import AppBarComponent from "../util/AppBarComponent";

function Itinerary(){
    return(
    <div>
        <AppBarComponent />
        {/* Add buttons 'saved' and 'booked' at the top as a menu for itinerary */}
        {/* Multiple div components to show bookings of different types  */}
        <div class ='saved'>

        </div>
        <div class='booked'>

        </div>
    </div>
    )
}
export default Itinerary;