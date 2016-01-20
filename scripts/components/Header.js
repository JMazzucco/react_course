import React from 'react';

class Header extends React.component{
	render(){
		return (
			<header className="top">
				<h1>Catch of the Day</h1>
				<h3 className="tagline">{this.props.tagline}</h3>
			</header>
		)
	}
};

Header.propTypes = {
	tagline : React.PropTypes.string.isRequired
}

export default Header;