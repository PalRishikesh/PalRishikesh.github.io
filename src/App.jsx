import useLocalStorage from 'use-local-storage';
import './App.css'
import Toggle from './Components/Toggle';
import { useEffect, useState } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import PersonalComponent from './Components/PersonalComponent';
import EducationComponent from './Components/EducationComponent';
import SkillComponent from './Components/SkillComponent';
import ExperienceComponent from './Components/ExperienceComponent';
import ProjectComponent from './Components/ProjectComponent';
import FooterComponent from './Components/FooterComponent';


function App() {
  const [localStorageMode, setLocalStorageMode] = useLocalStorage(
    "isDarkMode",
    false
  );
  const prefernece = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log("localStorageMode: ", localStorageMode);
  console.log("prefernece: ", prefernece);
 


  const [isDark, setIsDark] = useState(localStorageMode);
  function setDarkMode(){
    console.log("isDark :",isDark);
    setLocalStorageMode(!isDark);

    setIsDark(!isDark)
  }
 
  useEffect(()=>{
    if (localStorageMode === false && prefernece === true) {
      setLocalStorageMode(true);
      setIsDark(true)
    }
  },[])

  return (
    <div className="outer-container">
        <div className="container-max-width" data-theme={isDark ? "dark" : "light"}>
          <Toggle handlerChange={setDarkMode} isChecked={isDark}/>
          <HeaderComponent/>
          <PersonalComponent/>
          <EducationComponent/>
          <SkillComponent/>
          <ExperienceComponent/>
          <ProjectComponent/>
          <FooterComponent/>
          </div>
      </div>
   
  )
}

export default App
