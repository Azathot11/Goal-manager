import { FC, PropsWithChildren } from "react";
import { GoalModel } from "../models/goalModel.ts";

type CourseGoalProps = PropsWithChildren<GoalModel>;

const CourseGoal: FC<CourseGoalProps> = ({ title, onDelete, id, children }) => {
    const deleteFunc = () => {
        if (onDelete) {
            onDelete(id);
        }
    };
    return (
        <article>
            <div>
                <h2 className="text-red-500">{title}</h2>
                {children}
            </div>
            <button type="button" onClick={deleteFunc}>
                DELETE
            </button>
        </article>
    );
};

export default CourseGoal;
