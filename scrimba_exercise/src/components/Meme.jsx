import memeData from '../memeData.js';
import React from 'react';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [buttonCount, setButtonCount] = React.useState(0);

	React.useEffect(() => {
		console.log('effect ran');
		fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then(data => setAllMemes(data));
	}, [buttonCount % 100 === 0]);

	const [allMemes, setAllMemes] = React.useState(memeData);

	function getRandomMeme(e) {
		e.preventDefault();
		handleButtonClick();
		const randomNumber = Math.round(Math.random() * allMemes.data.memes.length);
		const randomMeme = allMemes.data.memes[randomNumber];
		const url = randomMeme.url;
		setMeme(prevState => ({
			...prevState,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(prevState => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleButtonClick() {
		setButtonCount(prevState => prevState + 1);
		console.log(buttonCount);
	}

	return (
		<main>
			<form
				className="form"
				onSubmit={handleButtonClick}
			>
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					name="topText"
					onChange={handleChange}
					value={meme.topText}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					name="bottomText"
					onChange={handleChange}
					value={meme.bottomText}
				/>
				<button
					className="getMemeButton"
					onClick={getRandomMeme}
				>
					Get a new meme image 🖼
				</button>
			</form>
			<div className="memeImg">
				<img
					src={meme.randomImage}
					alt="meme image"
					width="600px"
					className="memeFile"
				/>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}

export default Meme;
