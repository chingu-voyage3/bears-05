import React, { Component } from 'react'
import {getDiscovery} from '../api'
import DiscoverPage from './discover'
import DiscoverSwitch from './discoverswitch'
import DiscoverFilter from './discoverfilter'
import Header from '../header'

class Discover extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: "movie",
			year: undefined,
			yearLabel: undefined,
			sortby: undefined,
			sortbyLabel: undefined,
			genre: undefined,
			genreLabel: undefined,
			result: undefined
		}
		this.handleSwitch = this.handleSwitch.bind(this)
		this.handleYearFilter = this.handleYearFilter.bind(this)
		this.handleSortByFilter = this.handleSortByFilter.bind(this)
		this.handleGenreFilter = this.handleGenreFilter.bind(this)
	}

	componentWillMount() {
		getDiscovery().then(function(response) {
			this.setState({
				result: response.data.results
			})
		}.bind(this))
	}

	handleSwitch(type) {
		getDiscovery(type, new Date().getFullYear(), "popularity.desc", "").then(function(response) {
			this.setState({
				active: type,
				year: undefined,
				sortby: undefined,
				genre: undefined,
				result: response.data.results 
			})
		}.bind(this))
	}

	handleYearFilter(e, value = undefined) {
		e.persist()
		getDiscovery(this.state.active, value, this.state.sortby, this.state.genre).then(function(response) {
			this.setState({
				year: value,
				yearLabel: e.target.innerHTML,
				result: response.data.results
			})
		}.bind(this)).catch(function(err) {
			this.setState({
				year: undefined,
				result: this.state.result
			})
		}.bind(this))
	}

	handleSortByFilter(e, value = undefined) {
		e.persist()
		getDiscovery(this.state.active, this.state.year, value, this.state.genre).then(function(response) {
			this.setState({
				sortby: value,
				sortbyLabel: e.target.innerHTML,
				result: response.data.results
			})
		}.bind(this)).catch(function(err) {
			this.setState({
				sortby: undefined,
				result: this.state.result
			})
		}.bind(this))
	}

	handleGenreFilter(e, value = undefined) {
		e.persist()
		getDiscovery(this.state.active, this.state.year, this.state.sortby, value).then(function(response) {
			this.setState({
				genre: value,
				genreLabel: e.target.innerHTML,
				result: response.data.results
			})
		}.bind(this)).catch(function(err) {
			this.setState({
				genre: undefined,
				result: this.state.result
			})
		}.bind(this))
	}

	render() {
		let currentYear = new Date().getFullYear()
		let years = []
		for(let y = this.state.active === "movie" ? 1900 : 1950; y<=currentYear; y++) {
			years.unshift(y)
		}

		let props = this.state.active === "movie" ?
			{
				switch: {
					method: this.handleSwitch,
					active: this.state.active
				},
				year: {
					label: this.state.year == undefined ? "Year" : this.state.yearLabel,
					options: ["None", ...years],
					values: ["", ...years],
					method: this.handleYearFilter
				},
				sortby: {
					label: this.state.sortby == undefined ? "Sort by" : this.state.sortbyLabel,
					options: ["popularity descending", "popularity ascending", "rating descending", "rating ascending", "release date descending", "release date ascending", "title (a-z)", "title (z-a)"],
					values: ["popularity.desc", "popularity.asc", "vote_average.desc", "vote_average.asc", "release_date.desc", "release_date.asc", "original_title.desc", "original_title.asc"],
					method: this.handleSortByFilter
				},
				genre:{
					label: this.state.genre == undefined ? "Genre" : this.state.genreLabel,
					options:	["action", "adventure", "animation", "comedy", "crime", "documentary", "drama", "family", "fantasy", "history", "horror", "music", "mystery", "romance", "science fiction", "tv movie", "thriller", "war", "western"],
					values: [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37],
					method: this.handleGenreFilter
				},
				result: this.state.result
			} :
			{
				switch: {
					method: this.handleSwitch,
					active: this.state.active
				},
				year: {
					label: this.state.year == undefined ? "Year" : this.state.yearLabel,
					options: ["None", ...years],
					values: ["", ...years],
					method: this.handleYearFilter
				},
				sortby: {
					label: this.state.sortby == undefined ? "Sort by" : this.state.sortbyLabel,
					options: ["popularity descending", "popularity ascending", "first air date descending", "first air date ascending", "vote average descending", "vote average ascending"],
					values: ["popularity.desc", "popularity.asc", "first_air_date.desc", "first_air_date.asc", "vote_average.desc", "vote_average.asc"],
					method: this.handleSortByFilter
				},
				genre: {
					label: this.state.genre == undefined ? "Genre" : this.state.genreLabel,
					options: ["action & adventure", "animation", "comedy", "crime", "documentary", "drama", "family", "kids", "mystery", "news", "reality", "sci-fi & fantasy", "soap", "talk", "war & politics", "western"],
					values: [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37],
					method: this.handleGenreFilter
				},
				result: this.state.result
			}

		return(
			<div>
				<Header/>
				<DiscoverSwitch props={props.switch}/>
				<DiscoverFilter props={{year: props.year, sortby: props.sortby, genre: props.genre}}/>
				<DiscoverPage props={props.result} active={this.state.active}/>
			</div>
		)
	}
}

export default Discover