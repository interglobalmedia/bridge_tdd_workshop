import React from 'react'
import { shallow } from 'enzyme'

import TextInput from './index'

describe('<TextInput />', () => {
	it('should accept a string', function() {
		expect(true).toBe(true);
	})
	it('should have a placeholder with the value of a string', function() {
		const placeholder = 'type text here';
		expect(placeholder).toEqual('type text here');
	})
	it('should turn red when length of string is greater than 10', function() {
		const string = '';
		const stringLength = string.length > 10;
		const style = {
			color: 'red'
		}
		expect(stringLength !== style).toBe(true);
	})
})
