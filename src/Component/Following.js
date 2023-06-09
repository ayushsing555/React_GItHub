import React from 'react'
import { useParams,NavLink } from 'react-router-dom';
import { useState,useEffect,useCallback } from 'react';
const Following = () => {
  const [repo, setRepo] = useState([]);
    const {id} = useParams();
    const getData = useCallback(async (id) => {
    const res = await fetch(`https://api.github.com/users/${id}/following`);
    const data = await res.json();
    setRepo(data);
    console.log(repo);
  });
  useEffect(() => {
    getData(id);
  }, 1);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class=" text-indigo-500 tracking-widest font-medium title-font mb-1">Followers</h1>
        </div>
        <div class="flex flex-wrap items-center justify-center">
          {
            repo.map((elem) => {
              return (
                <>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-dotted border-2 border-red-500 border-radius-50 rounded-2xl shadow-md  shadow-lg shadow-red-300/50 border-opacity-60 bg-slate-200 m-6">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{elem.login}</h2>
                    <img src={elem.avatar_url}/>
                    <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <NavLink to={`/user/${elem.login}`}>
                      <button class="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-3">Visit User</button>
                    </NavLink>
                    
                  </div>
                  <br/>
                </>
              );
            })
          }
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>
  )
}

export default Following