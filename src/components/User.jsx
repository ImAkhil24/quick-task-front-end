import { Container, Box, CssBaseline } from "@mui/material";
import UserDetails from "./UserDetails";
import TaskList from "./TaskList";
import PomTimer from "./PomTimer";
import { useState, useEffect } from "react";
import { call } from "../services/api";

// helpers
const taskCount = (data) => {
  let countCompleted = 0;
  data.forEach((element) => {
    if (element.completed === true) countCompleted++;
  });

  return [countCompleted, data.length - countCompleted];
};

const User = (id) => {
  // states

  const initialTasks = {
    tasks: [],
    countCompleted: 0,
    countPending: 0,
  };
  const [tasks, setTasks] = useState(initialTasks);

  // handlers

  const deleteTaskHandler = (id) => {
    call("DELETE", "/tasks/" + id)
      .then((data) => {
        let newTasks = { ...tasks };

        newTasks.tasks = newTasks.tasks.filter((task) => {
          return task._id !== id;
        });

        const [countCompleted, countPending] = taskCount(newTasks.tasks);
        newTasks.countCompleted = countCompleted;
        newTasks.countPending = countPending;

        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTaskHandler = (formData) => {
    call("POST", "/tasks", formData)
      .then((data) => {
        setTasks((prevState) => {
          const newState = { ...prevState };
          newState.tasks.push(data);
          const [countCompleted, countPending] = taskCount(newState.tasks);
          return { ...newState, countCompleted, countPending };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const taskUpdateHandler = (updatedTask, id) => {
    call("PATCH", "/tasks/" + id, updatedTask)
      .then((data) => {
        setTasks((prevState) => {
          let newState = { ...prevState };
          newState.tasks = newState.tasks.filter((task) => {
            return task._id !== id;
          });

          newState.tasks.push(data);
          const [countCompleted, countPending] = taskCount(newState.tasks);
          return { ...newState, countCompleted, countPending };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleCompleteHandler = (id) => {
    const newTask = tasks.tasks.find((task) => {
      return id === task._id;
    });
    let { title, description, completed } = newTask;
    completed = !completed;
    taskUpdateHandler({ title, description, completed }, id);
  };

  useEffect(() => {
    call("GET", "/tasks")
      .then((data) => {
        const [countCompleted, countPending] = taskCount(data);
        setTasks((prevState) => {
          return {
            ...prevState,
            tasks: data,
            countCompleted: countCompleted,
            countPending: data.length - countCompleted,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // JSX
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
        <UserDetails tasks={tasks} />
        <PomTimer />
      </Box>
      <TaskList
        tasks={tasks}
        deleteTaskHandler={deleteTaskHandler}
        addTaskHandler={addTaskHandler}
        taskUpdateHandler={taskUpdateHandler}
        toggleCompleteHandler={toggleCompleteHandler}
      />
    </Box>
  );
};

export default User;
