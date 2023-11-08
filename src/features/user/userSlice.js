import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
	autumn: "autumn",
	dracula: "dracula",
};

const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeForLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.autumn;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: getUserFromLocalStorage(),
	theme: getThemeForLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem("user");
			toast.success("Logged Out Successfully");
		},
		toggleTheme: (state) => {
			const { autumn, dracula } = themes;
			state.theme = state.theme === dracula ? autumn : dracula;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
