import { Box, Typography, Container, TextField, Button, CssBaseline, InputAdornment, Link, Avatar } from "@mui/material";
import { positions } from "@mui/system";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { call } from "../services/api";

const Signup = ({setToken}) => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    age: "",
  }

  const [value, setValue] = useState(initialValue);


  const onChangeHandler = (e) => {
    setValue((prevState) => {
      return ({...prevState, [e.target.name]: e.target.value});
    })
  }; 

  const onSubmitHandler = (e) => {
    e.preventDefault();

    call("POST", "/users", value).then((data)=>{
      setToken(data.token);
    }).catch((err)=>{
      console.log(err);
    })
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Avatar sx={{bgcolor: "secondary.main", m:1,}}>
          <PersonIcon />
        </Avatar>

        <Typography variant="h5" sx={{m:1}} component="h1">Create new account</Typography>

        <Box component="form" onSubmit={onSubmitHandler}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              value={value.name}
              label="Name"
              autoFocus
              onChange={onChangeHandler}
              
              />
          <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              value={value.email}
              label="Email Address"
              onChange={onChangeHandler}
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={value.password}
              onChange={onChangeHandler}
            />

            
            <TextField
              margin="normal"
              fullWidth
              name="age"
              value={value.age}
              label="Age"
              onChange={onChangeHandler}
              type="number"
              inputProps={{
                min: 10,
                max: 90,
              }}

              InputProps={{
                endAdornment: <InputAdornment position="end"> year</InputAdornment>,
              }}
              />
            
            <Button type="submit" variant="contained" fullWidth> Signup </Button>
             <Box sx={{display: "flex", justifyContent: "center"}}>
                <Link href="#" variant="body2" onClick = {() => navigate('/login')}>
                    {"Already have an account? Log in"}
                  </Link>
                </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
