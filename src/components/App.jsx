//import css from './App.module.css'
// import { useState } from 'react';
import Description from "./Description/Description"
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

export default function App() {
// {
// 	good: 0,
// 	neutral: 0,
// 	bad: 0
// }
  
  return (
    <>
      <Description />
      <Options />
      <Feedback/>
    </>
  );
}
