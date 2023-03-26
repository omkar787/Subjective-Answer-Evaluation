import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FacultyHome from "./FacultyHome";
import StudHome from "./StudentHome";

export default function Home() {
	const navigate = useNavigate();

	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	if (user.role === "student") {
		// On Student Login in
		return <StudHome />;
	} else {
		return <FacultyHome />;
	}
}
