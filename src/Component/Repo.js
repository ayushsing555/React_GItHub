import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
const Repo = () => {
  const [repo, setRepo] = useState([]);
  const {id} = useParams();
  const getData = useCallback(async (id) => {
    const res = await fetch(`https://api.github.com/users/${id}/repos`);
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
          <h1 class=" text-indigo-500 tracking-widest font-medium title-font mb-1">Repositories</h1>
        </div>
        <div class="flex flex-wrap items-center justify-center">
          {
            repo.map((elem) => {
              return (
                <>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-dotted border-2 border-red-500 border-radius-50 rounded-2xl shadow-md  shadow-lg shadow-red-300/50 border-opacity-60 bg-slate-200 m-6">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{elem.name}</h2>
                     <p className='text-red-600'>
                      {
                        elem.private?"Private":"Public"
                      },
                     issues = {elem.open_issues}
                     {
                        elem.language!=null?`,${elem.language}`:""
                     }
                      
                     </p>
                    <a class="text-indigo-500 inline-flex items-center" href={elem.html_url}>
                     <button  className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold mt-2 py-2 px-4 rounded-3">Check Repo</button>

                      
                    </a>
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
  );
};

export default Repo;