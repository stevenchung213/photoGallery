import React from 'react';
import { shallow, mount } from 'enzyme';
import Gallery from '../client/src/components/Gallery.jsx';

describe('Gallery component', () => { 
    
    test('Gallery should render', () => {
      const wrapper = shallow(<Gallery />);
      expect(wrapper.exists()).toBe(true);
    });

    test("Confirming correct state values", done => {
        const w = mount(<Gallery />);
        expect(w.state().view).toEqual('gallery');
        expect(w.state().currentPropertyId).toEqual(null);
        expect(w.state().photos.length).toEqual(0);
        expect(w.state().currentPhoto).toEqual(null);
        expect(w.state().isExpanded).toEqual(false);
      });
    
    // test('Expand button should change the view in state', () => {
    //   const wrapper = shallow(<Gallery />);
    //   expect(wrapper.props().children[0].props.children).toEqual('gallery');
    //   wrapper.find(button .expand).simulate('click');
    //   expect(wrapper.props().children[0].props.children).toEqual('expand');
    // });
  
  });
  