import ProfileDetails from "./ProfileDetails";
import CalorieBreakdown from "./CalorieBreakdown";
import AddFoodItem from "./AddFoodItem";
import '../../stylesheets/template_styles.scss'
import AddDataForm from "./AddDataForm"

const MainPage = () => {
    
    return ( 
        <div className="MainPage">
            <AddDataForm/>
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