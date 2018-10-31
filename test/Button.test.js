import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button.jsx';
import TestRenderer from 'react-test-renderer';

test ("Test Button Component for the expected output", ()=> {
    const wrapper = TestRenderer.create(<Button />);
    console.log(wrapper.toJSON());
})