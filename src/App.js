import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Github from './Component/Github';
import Home from './Component/Home';
import Repo from './Component/Repo';
import {Route,Routes} from "react-router-dom"
import Follower from './Component/Follower';
import Following from './Component/Following';
import User from './Component/user';
function App () {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id/repo" element={<Repo/>}/>
        <Route path='/:id/followers' element={<Follower/>}/>
        <Route path='/:id/following' element={<Following/>}/>
        <Route path='/user/:id' element={<User/>}/>
      </Routes>
  );
}

export default App;
