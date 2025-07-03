import './App.css'
import React from 'react';
import profile from './components/profile';
function App() {
  return (
  <>
    <h1>Hello World</h1>
    <profile/>
    </>
  );
}
function profile(){
  return (
  <>
  <div className="profile">
      <img src="https://i.pinimg.com/564x/6b/6d/3d/6b6d3d1c6d1b6d3d1c6d1b6d1c6d1b6d.jpg" alt="profile" className="profile-img"/>
      <h1 className="profile-name">Raj</h1>
      <p className="profile-bio">I am a Full Stack Web Developer</p>
      </div>
      </>
      );
};
export default App;
