import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import app from './Config';
// import logo from './logo.svg';
// import './App.css';
// import Notes from './components/NotesPrincipal'


import Home from './Home';
import Login from './Login';
import SignUp from './SignUp/SignUpView';

class App extends Component{
  state = {loading:true, authenticated:false, user:null};
  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render(){
    const {authenticated, loading } = this.state;
    if(loading){
      return <p>Loadin...</p>;
    }
  
  return(
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} authenticated={this.state.authenticated}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    </Router>
  )}
}
export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <Notes />
//         </header>
//         <p className="App-intro">
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
