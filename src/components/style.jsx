import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
	},
	bg: { backgroundColor: "#063747", flexGrow: "1" },
	img1: {
		width: "80%",
		height: "60%",
		objectFit: "cover",
		overflow: "hidden",
		margin: "10% 15% 30%",
	},
	cont1: {
		margin: "15% 5% auto 15%",
	},
	txt: {
		color: "white",
		textDecoration: "none",
	},
	title: {
		flexGrow: 1,
	},
	logo: {
		width: "200px",
	},
	navLink: {
		fontSize: ".8rem",
		fontFamily: "Montserrat",
		color: "white",
		margin: "10px",
		textDecoration: "none",
	},
	googleBtn: {
		textAlign: "center",
		margin: "15% auto 30rem",
	},
}));

export default useStyles;
