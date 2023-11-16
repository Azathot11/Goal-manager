import {type FC, ReactNode} from "react";
import {GoalModel} from "../models/goalModel.ts";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

type GoalListProps = {
    goals: GoalModel[];
    onDelete?: (id: number) => void;
}



const CourseGoalList:FC<GoalListProps> = ({goals,onDelete}) => {

    if(goals === undefined || goals.length === 0){
      return  (
          <InfoBox mode={'hint'} >
              You have no goals yet. Why not add one?
        </InfoBox>
      )
    }
    let warningBox:ReactNode
    if(goals.length >= 4){
        warningBox = (
            <InfoBox mode={'warning'} severity={'low'}>
                You have too many goals. Please remove one.
            </InfoBox>
        )
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal: GoalModel,i) => (
                <li  key={i}>
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
        </>
    );
};

export default CourseGoalList;