import { Container, Box, CssBaseline } from "@mui/material";
import UserDetails from "./UserDetails";
import TaskList from "./TaskList";
import PomTimer from "./PomTimer";
import {useState, useEffect } from "react";
import { call } from "../services/api";

const initialTasks = {
  countCompleted:null,
  countPending: null,
};

// it'll update the count
const updateCount = (data, setTasks) => {
  let countCompleted = 0;
      data.forEach((element)=>{
        if(element.completed === true)
          countCompleted++;
      })
  setTasks((prevState)=> {
    return ({...prevState , countCompleted: countCompleted, countPending: data.length-countCompleted})
  })
}

const User = () => {

  const [tasks, setTasks] = useState(initialTasks);
  console.log(tasks);
  
  useEffect(()=>{
    call("GET", "/tasks").then((data)=>{

      setTasks(data);
      updateCount(data, setTasks);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <Box
      height="85%"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      m={2}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <UserDetails tasks={tasks}/>
        <PomTimer />
      </Box>
      <TaskList />
    </Box>
  );
};

export default User;
