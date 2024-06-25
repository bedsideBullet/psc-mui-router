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
import { ReactNode, useContext } from "react";
import { AppContext } from "../Providers/AppProvider";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
	children: ReactNode;
}

const drawerWidth = 350;

const Navbar = ({ children }: NavbarProps) => {
	const { allGears, setToActive } = useContext(AppContext);
	const theme = useTheme();
	const navigate = useNavigate();

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
					<Button
						variant="contained"
						size="small"
						sx={{ bgcolor: theme.palette.secondary.dark }}
						onClick={() => navigate("/login")}
					>
						Log In
					</Button>
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
					<List>
						<ListItem>
							<ListItemButton>
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
