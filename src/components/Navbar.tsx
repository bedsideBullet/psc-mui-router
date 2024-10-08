import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
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
import { Avatar, Fab, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

interface NavbarProps {
	children: ReactNode;
}

const drawerWidth = 400;

const Navbar = ({ children }: NavbarProps) => {
	const {
		allGears,
		setToActive,
		activeUser,
		notes,
		setNoteActive,
		deleteGear,
		deleteNote,
	} = useContext(AppContext);
	const theme = useTheme();
	const navigate = useNavigate();
	const [activeButton, setActiveButton] = useState("showGears");

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton onClick={() => navigate("/welcome")}>
						<HomeIcon />
					</IconButton>
					<Box
						component="div"
						sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "64px", flexGrow: 1 }}
					>
						<img src="src/assets/images/PSC_logo.png" alt="PSC Motorsports" style={{ maxHeight: "85%", maxWidth: "100%" }} />
					</Box>
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
										onClick={() =>
											activeUser ? navigate("/add-gear") : navigate("/login")
										}
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
												navigate("/active-gear");
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
											<Button
												onClick={(e) => {
													e.stopPropagation();
													!activeUser || !gear.id
														? navigate("/login")
														: deleteGear(gear.id);
												}}
												sx={{
													color: theme.palette.primary.dark,
													pl: 5,
													"&:hover": {
														color: theme.palette.primary.light,
													},
												}}
											>
												<DeleteSharpIcon />
											</Button>
										</ListItemButton>
									</ListItem>
								))}
							</List>
							<Divider />
						</>
					) : (
						<List>
							<ListItem>
								<ListItemButton
									onClick={() =>
										activeUser ? navigate("/add-note") : navigate("/login")
									}
									sx={{ bgcolor: theme.palette.secondary.main }}
								>
									<ListItemText>+ Add New Note</ListItemText>
								</ListItemButton>
							</ListItem>
							<Divider />
							{notes
								.filter(
									(note) => String(note.userId) === String(activeUser?.id)
								)
								.map((note) => (
									<ListItem key={note.id}>
										<ListItemButton
											onClick={() => {
												setNoteActive(note);
												navigate("/active-note");
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
											<Button
												onClick={(e) => {
													e.stopPropagation();
													!activeUser || !note.id
														? navigate("/login")
														: deleteNote(note.id);
												}}
												sx={{
													color: theme.palette.primary.dark,
													pl: 5,
													"&:hover": {
														color: theme.palette.primary.light,
													},
												}}
											>
												<DeleteSharpIcon />
											</Button>
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
