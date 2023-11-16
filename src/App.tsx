import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";
import {useState} from "react";
import {GoalModel} from "./models/goalModel.ts";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export default function App({}) {
    const  [goals,setGoals] = useState<GoalModel[]>([]);


    const handlerAddGoal = (goal:GoalModel) => {
       setGoals((prevState:GoalModel[])=>{
              const updatedGoals:GoalModel[] = [...prevState];
              updatedGoals.unshift(goal);
              return updatedGoals;
       })
    };



  const deleteGoalHandler = (goalId: number) => {
    setGoals((prevState:GoalModel[])=>{
        return prevState.filter((goal: GoalModel) => goal.id !== goalId);
    })
  }

    return(
        <main>
            <Header image={goalsImage} alt={'A list of goals'}>
                <h1> Your Course Goals</h1>
            </Header>
            <NewGoal onAdd={handlerAddGoal}/>

            <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />
        </main>
  );
}
