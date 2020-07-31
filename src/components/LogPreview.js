import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';

const LogPreview = (props) => {
	const { id, title, category, date, } = props.log;

	return (
		<tr>
			<td>{title}</td>
			<td>{category}</td>
			<td>{date}</td>
			<td>
				<Link to={`/log/${id}`} class="btn btn-secondary">
					<FaAngleDoubleRight /> Details
				</Link>
			</td>
		</tr>
	);
};

export default LogPreview;
