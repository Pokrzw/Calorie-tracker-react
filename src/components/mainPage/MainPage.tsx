import ProfileDetails from "./ProfileDetails";
import CalorieBreakdown from "./CalorieBreakdown";
import AddFoodItem from "./AddFoodItem";
import '../../stylesheets/template_styles.scss'

const MainPage = () => {
    
    return ( 
        <div className="MainPage">
            <div className="leftSide">
                <ProfileDetails/>
                <CalorieBreakdown/>
            </div>
            <div className="rightSide">
                <AddFoodItem/>
            </div>
        </div>
     );
}
 
export default MainPage;