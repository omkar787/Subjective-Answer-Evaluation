import React,{ useLayoutEffect, useState } from "react";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import StudHome from "./StudentHome";


export default function Home() 
{
    const [role, setRole ] = useState(0);
    const navigate = useNavigate();
	useLayoutEffect(() => {
		const get = async () => {
			const data = await verifyToken();
            console.log(data);
			if (!data) navigate("/login");
            else setRole(data.role)
		};   
		get();
	}, []);

    if(role == 'student') {
        // On Student Login in
        return <StudHome/>;
    }
    else {
        // On Faculty Login in
        console.log("Faculty Logged in");
    }
}
