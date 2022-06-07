import { useState } from "react"
import '../../stylesheets/template_styles.scss'
import {BsFillPencilFill} from 'react-icons/bs'
const ProfileDetails = () => {

    const [usersName, setUsersName] = useState<string>('Jane Doe');
    const [weight, setWeight] = useState<number>(60.7);
    const [profilePic, setProfilePic] = useState<string>('https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

    return (

        <div className="ProfileDetails white_form_styling">
            <div className="container">
                <div className="leftSide">
                    <div className="profilePic">
                        
                        <img src={profilePic} alt="profile_pic" />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="nameLabel " >
                        <div className="name teal_gradient_styling">
                            {usersName}
                            <BsFillPencilFill className="usersName"/>
                        </div>
                        <div className="weight">
                            <h1>{weight} kg</h1>
                            <p>Weight</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;