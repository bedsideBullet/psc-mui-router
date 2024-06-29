import React, { useContext } from "react";
import { SteeringGear } from "../types";
import toast from "react-hot-toast";
import { AppContext } from "../Providers/AppProvider";
import {
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";

export const ActiveGear: React.FC = () => {
  const { activeSteeringGear, noteDisplay, notes, setActiveNote, activeUser } =
    useContext(AppContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const copyStateToClipboard = (state: SteeringGear) => {
    const stateString = JSON.stringify(state, null, 2);
    navigator.clipboard
      .writeText(stateString)
      .then(() => {
        toast.success("Gear Data copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Could not copy text: " + err);
      });
  };

  const gearNote = notes.find(
    (note) => String(note.id) === String(activeSteeringGear?.id)
  );

  const handleButtonClick = () => {
    if (!activeUser) {
      navigate("/login");
      return;
    }
    if (gearNote) {
      setActiveNote(gearNote);
      navigate("/active-note");
    }
  };

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        gap={12}
        sx={{ flexGrow: 1 }}
      >
        <Box
          className="image-container"
          textAlign="center"
          mb={2}
          sx={{ flexGrow: 1 }}
        >
          <img
            src={activeSteeringGear?.image}
            alt={"Steering Gear Image"}
            style={{ maxWidth: "300px" }}
          />
          <Box mt={2}>
            <Typography variant="h5">Notes</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              size="large"
            >
              {noteDisplay()}
            </Button>
          </Box>
        </Box>
        <Box className="gear-details" textAlign="center" sx={{ flexGrow: 2 }}>
          <Typography variant="h4" gutterBottom>
            {activeSteeringGear?.partNumber}
          </Typography>
          <Box
            className="info-wrapper"
            mt={2}
            sx={{ backgroundColor: theme.palette.secondary.dark, padding: 2 }}
          >
            <List>
              <ListItem>
                <ListItemText primary={`Ratio: ${activeSteeringGear?.ratio}`} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Rotation: ${activeSteeringGear?.rotation}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Sector Spline: ${activeSteeringGear?.sectorSpline}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Input: ${activeSteeringGear?.input}`} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Turns lock-to-lock: ${activeSteeringGear?.turns}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`T-Bar: ${activeSteeringGear?.tbar}`} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Mount Location: ${activeSteeringGear?.mountLocation}`}
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                activeSteeringGear
                  ? copyStateToClipboard(activeSteeringGear)
                  : toast.error("Nothing to copy");
              }}
			  sx={{mr:1}}
            >
              <strong>Copy</strong>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate(`/edit-gear/${activeSteeringGear?.id}`);
              }}
			  sx={{ml:1}}
            >
              Edit Gear
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ActiveGear;
