import React from "react";
import _ from "lodash";
import PaperPlane from "./PaperPlane";

export default function App({
	count = 80,
	depth = 80,
	easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
	return (
		<>
			{_.times(50, (i) => (
				<PaperPlane
					key={i}
					index={i}
					z={Math.round(easing(i / count) * depth)}
				/>
			))}
		</>
	);
}
