import React from "react";
import { Link } from "react-router-dom"
import "./Card.css";
import { FaSearch } from "react-icons/fa";

function Card(props) {
	const stars = [];
	for (let i = 0; i < props.rating; i++) {
		stars.push(
			<i className="fa-solid fa-star" style={{ color: "#f2e231" }}></i>
		);
	}
	return (
		<>
		
		</>
	);
}

export default Card;
