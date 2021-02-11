import React, { useState } from 'react';
import './Tindercards.css';
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';
function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: 'elon musk',
			url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30MqCvb_nvhGcj_HMlndYxDYW4VsOZj7TyA&usqp=CAU',
		},
		{
			name: 'jeff bezos',
			url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCoOwm-9tAC5E7lsIbw3U89u3_J4CJVquxw&usqp=CAU',
		},
	]);
	const swiped = (direction, nameToDelete) => {
		console.log('removing:' + nameToDelete);
		//setLastDirection(direction);
	};
	const outOfFrame = (name) => {
		console.log(name + 'left the screen');
	};
	return (
		<div className="TinderCards">
			<div className="TinderCards__CardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card">
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
