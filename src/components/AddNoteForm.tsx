import React, { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";
import { Box, Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";

const AddNoteForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>(""); 
  const [gearId, setGearId] = useState<string | null>("");

  const { createNote } = useContext(AppContext); 
  const navigate = useNavigate();
  const theme = useTheme();

  const reset = () => {
    setTitle("");
    setContent("");
    setUserId("");
    setGearId("");
  };

  const handleNoteSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createNote({
      title,
      content,
      userId: parseInt(userId), 
      gearId: gearId ? parseInt(gearId) : null, // Assuming gearId needs to be an integer or null
    });
    reset();
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    color: "text.secondary",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style} component="form" onSubmit={handleNoteSubmit}>
      <Typography id="add-note-modal-title" variant="h6" component="h2">
        + Add New Note
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        label="Title"
        variant="outlined"
        value={title}
        InputProps={{
          sx: { color: theme.palette.text.secondary },
        }}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        margin="normal"
        fullWidth
        label="Content"
        variant="outlined"
        value={content}
        InputProps={{
          sx: { color: theme.palette.text.secondary },
        }}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <TextField
        margin="normal"
        fullWidth
        label="User ID"
        variant="outlined"
        value={userId}
        InputProps={{
          sx: { color: theme.palette.text.secondary },
        }}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <TextField
        margin="normal"
        fullWidth
        label="Gear ID (optional)"
        variant="outlined"
        value={gearId ?? ""}
        InputProps={{
          sx: { color: theme.palette.text.secondary },
        }}
        onChange={(e) => setGearId(e.target.value)}
      />
      <Stack spacing={1}>
        <Button type="submit" variant="contained" color="primary">
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNoteForm;
