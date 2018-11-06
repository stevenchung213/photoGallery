// import React from 'react';
// import { shallow } from 'enzyme';
// import ExpandButton from '../client/src/components/ExpandButton.jsx';
// import LeftArrow from '../client/src/components/LeftArrow.jsx';
// import RightArrow from '../client/src/components/RightArrow.jsx';

// describe('Expand button', () => { 
    
//   test('Expand button should be defined', () => {
//     expect(ExpandButton).toBeDefined();
//   });
    
//   test('Expand button should render correctly', () => {
//     const tree = shallow(<ExpandButton name='expand button test' />);
//     expect(tree).toMatchSnapshot();
//   });

//   test('Should call mock function when button is clicked', () => {
//     const tree = shallow(<ExpandButton name='expand button test' handleClick={mockFn} />);
//     tree.simulate('click');
//     expect(mockFn).toHaveBeenCalled();
//   });

// });
