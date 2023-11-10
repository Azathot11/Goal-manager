import {GoalModel} from "../models/goalModel.ts";
import {type FC, type PropsWithChildren} from "react";


type  CourseGoalProps = PropsWithChildren<GoalModel>;
const CourseGoal:FC<CourseGoalProps> = ({title,children}) => {
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