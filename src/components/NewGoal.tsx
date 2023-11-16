import {useState, type FC,type FormEvent} from "react";
import {GoalModel} from "../models/goalModel.ts";

type NewGoalProps = {
    onAdd: (goal:GoalModel) => void;
}

const NewGoal:FC<NewGoalProps> = ({onAdd}) => {

    const   [goal,setGoal] = useState<GoalModel>({
        id: 0,
        title: '',
        description: ''
    })

    const addGoalHandler = (event:FormEvent) => {
        event.preventDefault();

        if (goal && goal.title?.trim().length === 0 || goal.description?.trim().length === 0) {
            return;
        }

        onAdd(goal);
    }

    return (
        <form onSubmit={addGoalHandler}>
            <p>
                <label htmlFor={'goal'}>Course Goal</label>
                <input
                    type="text"
                    id={'goal'}
                    name={'goal'}
                    value={goal.title}
                    onChange={(event: FormEvent<HTMLInputElement>)=>{
                        setGoal({
                            ...goal,
                            title: event.currentTarget?.value
                        })
                    }}
                />
            </p>
            <p>
                <label htmlFor={'description'}>Short summary</label>
                <input type={'text'}
                       id={'description'}
                       name={'description'}
                       value={goal.description}
                       onChange={(event: FormEvent<HTMLInputElement>) => {
                           setGoal({
                               ...goal,
                               description: event.currentTarget.value
                           });
                       }}

                />
            </p>
            <p>
                <button type={'submit'}>Add Goal</button>
            </p>
        </form>
    );
};

export default NewGoal;