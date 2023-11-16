import {type FC} from "react";
import {GoalModel} from "../models/goalModel.ts";
import CourseGoal from "./CourseGoal.tsx";

type GoalListProps = {
    goals: GoalModel[];
    onDelete?: (id: number) => void;
}


const CourseGoalList:FC<GoalListProps> = ({goals,onDelete}) => {
    return (
    <ul>
        {goals.map((goal: GoalModel) => (
        <li  key={goal.id}>
            <CourseGoal
                title={goal.title}
                onDelete={onDelete}
                id={goal.id}
            >
                <p>{goal.description}</p>
            </CourseGoal>
        </li>
        ))}
    </ul>
    );
};

export default CourseGoalList;