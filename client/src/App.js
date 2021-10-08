import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, OurAim, OurVision } from "./pages/Home/HOME";
import {Chekpoint} from "./pages/Students/Checkpoint"
import {Exercice} from "./pages/Students/Exercice"
import {Lecture} from "./pages/Students/Lecture"
import Students from "./pages/Students/Student"
import { Events, EventsOne, EventsTwo } from "./pages/Teacher/Events";
import Contact from "./pages/ContactUs/ContactUs";
import { Register } from "./pages/ADMIN/Register";
import { SingIn } from "./pages/ADMIN/SingIn";
// import {AdminPage} from "./pages/ADMIN/Admin"
import Footer from "./pages/Footer/Footer"

import Quiz from "./pages/Teacher/AddCheckpoint"
import Exercice1 from "./pages/Teacher/AddExercice"
import Lecture1 from "./pages/Teacher/AddLecture"
import AddStudent from "./pages/Teacher/AddStudent"
import {StudentStastic} from "./pages/Teacher/StatisticsStudent"

import AddTeachers from "./pages/ADMIN/AddTeacher"
import {FeedBack} from "./pages/ADMIN/FeedBack"
import SchoolStat from "./pages/ADMIN/SchoolState"
import TeachersList from "./pages/ADMIN/TeacherList"
import {AdminPage} from "./pages/ADMIN/Admin"

import {SingInTeacher} from './pages/Teacher/SingIn'
import {SingInStudent} from "./pages/Students/SingInStudent"

function App() {
return (
	<Router>
	

	<Switch>
		<Route path="/home" exact component={HOME} />
		<Route path="/about-us/aim" exact component={OurAim} />
		<Route path="/about-us/vision" exact component={OurVision} />
		<Route path="/students" exact component={Students} />
		<Route path="/students/lecture" exact component={Lecture} />
		<Route path="/students/exercice" exact component={Exercice} />
		<Route path="/students/chekpoint" exact component={Chekpoint} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/teacher" exact component={Events} />
		<Route path="/events/events1" exact component={EventsOne} />
		<Route path="/events/events2" exact component={EventsTwo} />
		<Route path="/Admin/register" exact component={Register} />
		<Route path="/Admin/singin" exact component={SingIn} />
		{/* <Route path="/Admin" exact component={AdminPage} /> */}

		<Route path="/teacher/checkpoint" exact component={Quiz} />
		<Route path="/teacher/exercice" exact component={Exercice1} />
		<Route path="/teacher/lecture" exact component={Lecture1} />
		<Route path="/teacher/addstudent" exact component={AddStudent} />
		<Route path="/teacher/studentstatistic" exact component={StudentStastic} />

		<Route path="/admin/addteacher" exact component={AddTeachers} />
		<Route path="/admin/feedback" exact component={FeedBack} />
		<Route path="/admin/schoolstate" exact component={SchoolStat} />
		<Route path="/admin" exact component={AdminPage} />
		<Route path="/admin/teacherlist" exact component={TeachersList} />
		
		<Route path="/teacher/singin" exact component={SingInTeacher} />
		<Route path="/student/singin" exact component={SingInStudent} />



	</Switch>
	{/* <Footer/> */}
	</Router>
	
);
}

export default App;
