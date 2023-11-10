import {type FC} from "react";
import {GoalModel} from "../models/goalModel.ts";
import CourseGoal from "./CourseGoal.tsx";

type GoalListProps = {
    goals: GoalModel[];
}

const CourseGoalList:FC<GoalListProps> = ({goals}) => {
    return (
    <ul>
        {goals.map((goal: GoalModel) => (
        <li  key={goal.id}>
            <CourseGoal
                title={goal.title}
            >
                <p>{goal.description}</p>
            </CourseGoal>
        </li>
        ))}
    </ul>
    );
};

export default CourseGoalList;