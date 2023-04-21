import memeData from '../memeData.js';
import React from 'react';
import DisplayText from './DisplayText';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memeData);

	function getRandomMeme(e) {
		e.preventDefault();
		const randomNumber = Math.round(
			Math.random() * allMemeImages.data.memes.length
		);
		const randomMeme = allMemeImages.data.memes[randomNumber];
		const url = randomMeme.url;
		setMeme(prevState => ({
			...prevState,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		console.log(meme.topText, meme.bottomText);
		const { name, value } = event.target;
		setMeme(prevState => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleSubmit() {}

	return (
		<main>
			<form
				className="form"
				onSubmit={handleSubmit}
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
