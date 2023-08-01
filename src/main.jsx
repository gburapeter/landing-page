import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
	ToneMapping,
	Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Content from "./Content/Content.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback={null}>
			<Canvas
				gl={{ antialias: false }}
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 80 + 15 }}
			>
				<color attach="background" args={["#87CEEB"]} />

				<Environment preset="park" />
				<spotLight
					position={[10, 10, 10]}
					angle={1.9}
					penumbra={1}
					intensity={5}
					color="orange"
					castShadow
				/>
				<spotLight
					position={[100, 1000, 100]}
					angle={1.9}
					penumbra={1}
					intensity={5}
					color="orange"
					castShadow
				/>
				<spotLight
					position={[0, 0, 0]}
					angle={1.9}
					penumbra={1}
					intensity={5}
					color="orange"
					castShadow
				/>

				{/* <ambientLight intensity={0.5} /> */}

				<App />
				<EffectComposer multisampling={0}>
					<DepthOfField
						target={[0, 0, 60]}
						focalLength={1}
						bokehScale={2}
						height={700}
					/>
				</EffectComposer>
			</Canvas>
		</Suspense>
		<Content />
	</React.StrictMode>
);
