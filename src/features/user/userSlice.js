import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
	autumn: "autumn",
	dracula: "dracula",
};

const getThemeForLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.autumn;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: { username: "ravi" },
	theme: getThemeForLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log("login");
		},
		logoutUser: (state) => {
			console.log("logout");
		},
		toggleTheme: (state, action) => {
			const { autumn, dracula } = themes;
			state.theme = state.theme === dracula ? autumn : dracula;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
