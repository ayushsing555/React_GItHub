import React, {useCallback} from 'react'
import { useState,useEffect } from 'react';
import Github from './Github';
const Home = () => {
    const [user, setUser] = useState ();
    const [Userdata,setData] = useState(JSON.stringify({" ":""}));
    const [GithubData,setGitHub] = useState();
    const getData = (async(user) => {
    console.log("ayush")
    const res = await fetch (`https://api.github.com/users/${user}`);
    const data = await res.json ();
    setData(JSON.stringify(data));
    setGitHub(data)
    console.log(GithubData)
  });
  const handleApi = () =>{
    getData(user);
  }
  useEffect(()=>{
    getData(user)
  },1)
  return (
    <>
    <div className="App">
      <div class="m-10">
        <input
          type="text"
          value={user}
          onChange={e => setUser (e.target.value)}
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border m-2s text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="elonmusk"
        />
      </div>
      <button class="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-3" onClick={handleApi}>Get</button>
    </div>
    {
       user==""?<h1  className='text-center text-3xl text-underline'>Please enter the UserName</h1>:""
    }
    <Github text={Userdata}/>
    </>
  )
}
export default Home