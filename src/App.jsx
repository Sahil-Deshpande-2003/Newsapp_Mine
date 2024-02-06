import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  static propTypes = {

  }

  /*

  business
entertainment
general
health
science
sports
technology
  */

  render() {
    console.log("Inside render")
    return (
      <div>
        
        <Router>
          {/* My mistake was that I had kept Navbar outside Router, it should be inside Router */}
        <Navbar/>
        <Routes>
          {/* problem is navbar pe dusre catgeory pe click karne par component remount nahi ho raha hai naye props ke saath, uske liye har News component ko ek unique key deni padegi */}

          <Route exact path="/" element={<News pageSize={5}  key="general" country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="general" />}/>
          <Route exact path="/business" element={<News pageSize={5}  key="business" country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="business" />}/>
          <Route exact path="/entertainment"  element={<News pageSize={5}  key="entertainment" country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="entertainment" />}/>
          <Route exact path="/health"  element={<News pageSize={5} country="in" key="health"apiKey="524be655ed644951bdc2ae78c8711c0e" category="health" />}/>
          <Route exact path="/science" key="science" element={<News pageSize={5} country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="science" />}/>
          <Route exact path="/sports"  element={<News pageSize={5} country="in" key="sports"apiKey="524be655ed644951bdc2ae78c8711c0e" category="sports" />}/>
          <Route exact path="/technology"  element={<News pageSize={5} country="in" key="technology"apiKey="524be655ed644951bdc2ae78c8711c0e" category="technology" />}/>
         
         
           
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App
