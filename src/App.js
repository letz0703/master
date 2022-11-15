import React from "react"
import {Header, Blog,WhatGPT3, Features, Possibility, Footer} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

export default function App() {
	return <div className="App">
		<div className="gradient__bg">
			<Navbar />
			<Header />
		</div>
		<Brand />
		<WhatGPT3/>
		<Features/>
		<Possibility/>
		<CTA/>
		<Blog/>
		<Footer />

	</div>
}

