import { Box, Paper, Typography, Button, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Task from "./Task";

const TaskList = () => {
  // task card with a button to mark it complete and when the task is marked complete it's content will get line through text style.
  return (
    <Box
      overflow="auto"
      height="80%"
      minWidth={1 / 2}
      boxShadow={3}
      borderRadius={4}
    >
      {/* <Paper square elevation={0} sx={{position: 'sticky',top:'0px', zIndex: '1',m: 1, backgroundColor: 'secondary.main'}}>
      <Typography>
        Tasks
      </Typography>
      </Paper> */}
        <Fab color="primary" aria-label="add" sx={{position: 'fixed', zIndex: 1, bottom: "25%", right: "10%"}}>
          <AddIcon />
        </Fab>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Box>
  );
};

export default TaskList;
