import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { ReactNode, useContext } from "react";
import { AppContext } from "../Providers/AppProvider";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Avatar, Fab } from "@mui/material";

interface NavbarProps {
  children: ReactNode;
}

const drawerWidth = 350;

const Navbar = ({ children }: NavbarProps) => {
  const { allGears, setToActive, activeUser, notes, setNoteActive } =
    useContext(AppContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("showGears");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textAlign: "center", width: "100%" }}
          >
            PSC Motorsports
          </Typography>
          {!activeUser ? (
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: theme.palette.secondary.dark }}
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          ) : (
            <Avatar
              component={Fab}
              src="/broken-image.jpg"
              onClick={() => navigate("/welcome")}
            />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.secondary.light,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ display: "flex", justifyContent: "center", margin: 2 }}
          >
            <Button
              onClick={() => setActiveButton("showGears")}
              sx={{
                bgcolor:
                  activeButton === "showGears"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                color: theme.palette.text.primary,
              }}
            >
              Show Gears
            </Button>
            <Button
              onClick={() => setActiveButton("emptyDrawer")}
              sx={{
                bgcolor:
                  activeButton === "emptyDrawer"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                color: theme.palette.text.primary,
              }}
            >
              Show Notes
            </Button>
          </ButtonGroup>
          {activeButton === "showGears" ? (
            <>
              <List>
                <ListItem>
                  <ListItemButton
                    sx={{ bgcolor: theme.palette.secondary.main }}
                  >
                    <ListItemText>+ Add New Gear</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
                {allGears.map((gear) => (
                  <ListItem key={gear.id}>
                    <ListItemButton
                      onClick={() => {
                        setToActive(gear);
                        navigate("/");
                      }}
                      sx={{
                        justifyContent: "center",
                        bgcolor: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.dark",
                          color: theme.palette.text.secondary,
                        },
                      }}
                    >
                      <ListItemText
                        primary={gear.partNumber}
                        sx={{
                          color: theme.palette.text.primary,
                          textAlign: "center",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </>
          ) : (
            <List>
              <ListItem>
                <ListItemButton sx={{ bgcolor: theme.palette.secondary.main }}>
                  <ListItemText>+ Add New Note</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              {notes
			  .map((note) => (
                <ListItem key={note.userId}>
                  <ListItemButton
                    onClick={() => {
                      setNoteActive(note);
                      navigate("/");
                    }}
                    sx={{
                      justifyContent: "center",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        color: theme.palette.text.secondary,
                      },
                    }}
                  >
                    <ListItemText
                      primary={note.title}
                      sx={{
                        color: theme.palette.text.primary,
                        textAlign: "center",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: theme.palette.secondary.light,
          maxWidth: 5000,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Navbar;
