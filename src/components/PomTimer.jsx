import { Card, Paper, Box, Typography, Button } from "@mui/material";

// a circle inside which the timer will be displayed
// a session time button with + and - signs to increment by 5 and decrement by 5
// a break time button also


const PomTimer = () => {
  return (
    <Card sx={{height: "50%", width: "100%", boxShadow: "3", display:"flex", flexDirection:"column", justifyContent: "space-around"}}>
    
          <Paper sx={{height: "10rem", width: "10rem", borderRadius: "50%",margin: "auto", display: "flex", flexDirection: "column"}}>
            <Typography variant="h3" sx={{margin: "auto"}}>
              50:00
            </Typography>
            <Typography variant="captian" sx={{margin: "auto"}}>
              5:00
            </Typography>

          </Paper>
          
          <Box display="flex">
            <Box display="flex">
              <Button>-</Button>
              <Typography>session time</Typography>
              <Button>+</Button>
            </Box>
            <Box display="flex">
              <Button>-</Button>
              <Typography>break time</Typography>
              <Button>+</Button>
            </Box>
          </Box>
        
    </Card>
  );
}

export default PomTimer;