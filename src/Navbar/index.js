import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
 
import { NavLink } from "react-router-dom";
 
export default function Navbar() {

 return (
   <div>
     <AppBar position="static">
       <Container maxWidth="xl">
         <Toolbar disableGutters>
           <NavLink className="navbar-brand" to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
               BugTracker
             </Typography>
           </NavLink>
         </Toolbar>

       </Container>


       <Button
         variant="contained"
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </Button>
 
       <NavLink className="nav-link" to="/create">
         Create Ticket 
       </NavLink>
     </AppBar>
   </div>
 );
}
