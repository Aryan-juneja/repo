
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress : 10
  }
  setProgress =(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
            <Route exact  path="/Sports"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Sports" category='Sports'/>}>
            </Route>
            <Route exact  path="/"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="" category=''/>}>
            </Route>
            <Route exact path="/Business"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Business" category='Business'/>}>
            </Route>
            <Route exact path="/General"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} key="General" country='in' category='General' />}>
            </Route>
            <Route exact path="/Entertainment"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Entertainment" category='Entertainment'/>}>
            </Route>
            <Route exact path="/Science"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Science" category='Science'/>}>
            </Route>
            <Route exact path="/Health"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Health"  category='Health'/>}>
            </Route>
            <Route exact path="/Technology"  element={<Newscomponent setProgress={this.setProgress} pageSize={5} country='in' key="Technology" category='Technology'/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )  
  }
}





