import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./pages/StevePage";
import MarkPage from "./pages/MarkPage";
import ElonPage from "./pages/ElonPage";
import JackPage from "./pages/JackPage";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import BillPage from "./pages/BillPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import BlogPage from "./pages/BlogPage";
import StagairePage from "./pages/StagairePage";
import ShowPost from "./pages/ShowPost";
import ShowStagaires from "./pages/ShowStagaires";
function App() {
	//const [color, setColor] = useState("bg-blue-500");
	const [ company, setCompany] =useState("Apple");
	return (
		<Router>
			{/*<Navigation color={color} setColor={setColor} />*/}
			<Routes>
				<Route path='/' element=<StevePage company= {company} /> />
				<Route path='/mark' element=<MarkPage /> />
				<Route path='/elon' element=<ElonPage /> />
				<Route path='/jack' element=<JackPage /> />
				<Route path='/bill' element=<BillPage /> />
				<Route path='/contact' element=<ContactPage /> />
				<Route path='*' element=<ErrorPage /> />
				<Route path='/blog' element=<BlogPage /> />
				<Route path='/stagaire' element=<StagairePage /> />
				<Route path='/post/:id' element=<ShowPost /> />
				<Route path='/user/:id' element=<ShowStagaires /> />
			</Routes>
	{/*<Footer color={color} />*/}
		</Router>
	);
}

export default App;
