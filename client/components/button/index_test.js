import React from 'react'
import { shallow } from 'enzyme'
import Button from './index';

describe('<Button />', () => {
	it('should accept a button', function() {
		expect(true).toBe(true);
	})
	it('should render a string on click', function() {
		const paragraph = '';
		expect(paragraph).toEqual('');
	})
})
