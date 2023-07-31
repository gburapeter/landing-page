import "./content.css";

export default function Content() {
	return (
		<div className="container">
			{/* Personal info */}
			<div className="personalName">
				<h2>
					Ghiurutan-Bura
					<br />
					Péter
				</h2>
				<p>Full-stack developer</p>
			</div>

			<div className="credits">
				Inspired by:{" "}
				<a target="_blank" href="https://www.awwwards.com/0ca0a/">
					0ca0a
				</a>
			</div>
			<div className="links">
				<a target="_blank" href="">
					Portfolio website
				</a>
				<br />
				<a target="_blank" href="">
					Curriculum Vitae
				</a>
				<br />
				<a target="_blank" href="">
					LinkedIn
				</a>
				<br />
				<a target="_blank" href="">
					Github
				</a>
				<br />
				<a target="_blank" href="">
					Favorite song{" "}
				</a>
				<br />
			</div>
		</div>
	);
}
