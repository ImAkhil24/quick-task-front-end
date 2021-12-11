import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const TaskDialog = ({
  open,
  handleClickOpen,
  handleClose,
  TaskHandler,
  id,
  initialTaskDetail = {
    title: "",
    description: "",
    completed: false,
  },
}) => {
  // states

  const [taskDetail, setTaskDetail] = useState(initialTaskDetail);
  const [checked, setChecked] = useState(taskDetail.completed);

  // handlers
  const onChangeHandler = (e) => {
    setTaskDetail((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onCheckHandler = (e) => {
    setTaskDetail((prevState) => {
      return { ...prevState, complete: checked };
    });
    setChecked(!checked);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = { ...taskDetail };
    TaskHandler(formData, id);

    //resetting states iff the action is new task
    if (!id) {
      setTaskDetail(initialTaskDetail);
      setChecked(false);
    }

    // closing the dialog
    handleClose();
  };

  // jsx
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formSubmitHandler}>
          <DialogTitle>Task Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please input the task details and then click Submit button.
            </DialogContentText>

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <TextField
                required
                fullWidth
                placeholder="title"
                name="title"
                value={taskDetail.title}
                onChange={onChangeHandler}
              />
              <TextField
                required
                fullWidth
                multiline
                placeholder="description"
                maxRows="2"
                name="description"
                value={taskDetail.description}
                onChange={onChangeHandler}
              />
              <FormControlLabel
                control={<Checkbox name="completed" />}
                label="completed"
                onChange={onCheckHandler}
                checked={checked}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default TaskDialog;
