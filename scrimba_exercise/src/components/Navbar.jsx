import troll from '../assets/TrollFace.png';

function Navbar() {
	return (
		<nav className="Navbar">
			<img
				src={troll}
				className="App-logo"
				alt="logo"
				height="28.93px"
			/>
			<h2>Meme Generator</h2>
			<h3>React Course - Project 3</h3>
		</nav>
	);
}

export default Navbar;
