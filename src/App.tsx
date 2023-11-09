import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";

export default function App({}) {
    return(
      <main>
          <Header image={goalsImage} alt={'A list of goals'}>
             <h1> Your Course Goals</h1>
          </Header>
          <CourseGoal
              id={1}
              title={'Learn React + TS '}
          >
              <p>Learn React with Typescript from the ground up</p>
          </CourseGoal>
      </main>
  );
}
