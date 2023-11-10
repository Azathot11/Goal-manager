
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";
import {useState} from "react";
import {GoalModel} from "./models/goalModel.ts";
import CourseGoalList from "./components/CourseGoalList.tsx";

export default function App({}) {
    const  [goals,setGoals] = useState<GoalModel[]>([]);


    const handlerAddGoal = () => {
       setGoals((prevState:GoalModel[])=>{
              const updatedGoals:GoalModel[] = [...prevState];
              updatedGoals.unshift({
                id: Math.random(),
                title: 'Learn React + TS ',
                description: 'Learn React with Typescript from the ground up'
              });
              return updatedGoals;
       })
    };



    return(
        <main>
            <Header image={goalsImage} alt={'A list of goals'}>
                <h1> Your Course Goals</h1>
            </Header>
            <button onClick={handlerAddGoal}>Add Goal</button>
                    <CourseGoalList goals={goals} />
        </main>
  );
}
