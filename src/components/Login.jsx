import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link} from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { call } from '../services/api';
const initialState = {
  email: "",
  password: "",
}

const Login = ({setToken}) => {
  const [value, setValue] = useState(initialState);
  const onChangeHandler = (e) => {
    setValue((prevValue)=>{
      const newValue = {...prevValue, [e.target.name]: e.target.value}
      return newValue;
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    call("POST", "/users/login", value).then((res) => {
      // console.log(res);
      setToken(res.token);
    }).catch((err) => {
      console.log(err);
    })
  }

  const navigate = useNavigate();
  return (
    <Container >
      <CssBaseline />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m:1, bgcolor: "secondary.main"}} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={onSubmitHandler}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            value={value.email}
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
            ></TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={value.password}
              onChange={onChangeHandler}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt:2, mb:1}}
              >
                Sign In
              </Button>
              <Box sx={{display: "flex", justifyContent: "center"}}>
                <Link href="#" variant="body2" onClick = {() => navigate('/signup')}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Box>
          </Box>
        </Box>
    </Container>
  )
}

export default Login;