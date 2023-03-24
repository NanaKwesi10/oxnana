import React, {useState, } from "react"//useEffect
import { HashRouter  as Router, Route, Switch, Redirect } from "react-router-dom";
//home
import {NavTop, NavDown,ToolMenu,Section1,Menu,Section2,Section3,Section4,Search, Footer, FooterDown} from './components/home/renders' 
import logo from './components/home/images/oxlogo.jpg'
import './main.css' //styling elements
//import {Navbar, Main} from './components/query/renders' 

/** <Redirect to="/" /> <Route path="/query" component={Query}></Route> */
const App = () => {
  return(
  <Router>
    <Switch>
        <>
        <Route exact path="/" component={Home}></Route>
        </>
    </Switch>
  </Router>
  );
}
export default App;

const Home = () => {
    //const [size, setSize] = useState("maximized");
    //const mql = window.matchMedia('(max-width: 600px)');
    /*
    mql.onchange = (e) => {
        const min = () => {setSize("minimized")};
        const max = () => {setSize("maximized")}
        if (e.matches) {
        min(); 
      } else {
        max();
      }
    }*/
    
    return (
        <div id="app" style={{margin:0, padding: 0, backgroundColor: "lightgrey" }}>
          <div style={{backgroundColor:"white", width:"100%", height:"100vh"}} className="slideOutUp"><center><img width={"50%"} src={logo} alt="oxservices" /></center></div>
        <div style={{position: "fixed", top: "65vh", zIndex: "0", right: "0px" , color:"white", backgroundColor:"red", width: "50px", height: "150px" }}><div style={{marginTop: "150%",transform: "rotate(-90deg)"
        }}>Feedback</div></div>
        
        <div style={{width: "90vw", marginLeft: "5vw", border: "1px solid rgb(31, 28, 28)", backgroundColor: "white" }}>
            <div style={{width:"20%", float: "left"}}>
            <div className id="nav-logo"><img width={"100%"} src={logo} alt="oxservices" /></div>
            </div>

            <div id="navright" style={{width:"78%", float:"right"}}>
            <NavTop/>
            <ToolMenu/>
            </div>

            <Section1/>
            <Menu/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Search/>
            <Footer/>
            <FooterDown/>
        </div>
        </div>
        );
}
/*
const NewPage = () => {
  return(
    <>
    <Navbar/>
    <Main/>
    </>
  );
}*/