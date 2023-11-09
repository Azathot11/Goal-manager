import {GoalModel} from "../models/goalModel.ts";
import {type FC} from "react";

const CourseGoal:FC<GoalModel> = ({id,title,children}) => {
    console.log(id)
    return (
        <article>
            <div>
                <h2 className={'text-red-500'}>{title}</h2>
                {children}
            </div>
            <button type={'button'}>DELETE</button>
        </article>
    );
};

export default CourseGoal;