import { useState } from "react";
import "./content.css";

export default function Content() {
	// const [role, setRole] = useState("Full-stack developer");
	const role = "Full-stack developer";
	const contentResultTop = [];
	const contentResultBottom = [];

	[...role].forEach((letter, index) => {
		let delay = index * 45;
		contentResultTop.push(
			<div
				key={index}
				className="origin-top transition-transform duration-300 ease-in-out
				group-hover:scale-y-0"
				style={{ transitionDelay: `${delay}ms`, whiteSpace: "pre" }}
			>
				{letter}
			</div>
		);

		contentResultBottom.push(
			<div
				key={index}
				className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
				style={{ transitionDelay: `${delay}ms`, whiteSpace: "pre" }}
			>
				{letter}
			</div>
		);
	});

	return (
		<div className="container">
			{/* Personal info */}
			<div className="personalName">
				<h2>
					Ghiurutan-Bura
					<br />
					Péter
				</h2>

				<div className="group  w-min relative cursor-pointer transition ease-in-out duration-500 hover:scale-105">
					<div className=" flex items-center relative">
						{contentResultTop}
						<div className="  absolute bottom-0 left-0 flex items-center">
							{contentResultBottom}
						</div>
					</div>
				</div>
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
