import { string } from 'yup';
import '../../stylesheets/template_styles.scss'



const AddDataForm = () => {
    return (
        <div className="AddDataForm">

            <div className="white_form_styling">

                    <label htmlFor="profilePic">Paste URL to your new profile picture here</label>
                    <input type="text" className='gray_input' id='profilePic' />
            

               
                    <label htmlFor="login">Write your new username here</label>
                    <input type="text" className='gray_input' id='login' />
                

                
                    <label htmlFor="weight">Write your weight here</label>
                    <input type="text" className='gray_input' id='weight' />

                <div className="buttons">
                <button className="submit_button">Cancel</button>
                <button className="submit_button">Change data</button>
                </div>

            </div>
        </div>
    );
}

export default AddDataForm;