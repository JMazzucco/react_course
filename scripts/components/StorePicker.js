import React from 'react';
import { Navigation } from 'react-router';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
// StorePicker
// This will let us make <StorePicker/>

class StorePicker extends React.component{
	goToStore(event) {
		event.preventDefault();
		console.log('Ya Submitted it!');
		var storeId = this.refs.storeId.value;
		this.history.pushState(null, '/store/' + storeId);
		console.log(this);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit"/>
			</form>
			)
	}
};

reactMixin.onClass(StorePicker, Navigation);

export default StorePicker;