import '../../stylesheets/template_styles.scss'
import { useState } from 'react';

const CalorieBreakdown = () => {
    const [progress, setProgress] = useState<number>(0);
    return (
        <div className="CalorieBreakdown white_form_background">
            <div className="container">
                <div className="calories">
                    <p>Calories</p>
                    

                </div>
                <div className="exercise">
                    <p>Exercise</p>
                    <div className="diagram red_gradient_background">
                        <div className="exercise_data white_circle">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalorieBreakdown;