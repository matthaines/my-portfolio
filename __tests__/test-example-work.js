import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../src/example-work';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const myWork = [
  {
    'title': "Code Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      "src": "images/example1.png",
      "comment": ""
    }
  },
  {
    'title': "Cat Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      "src": "images/example3.png",
      "comment": `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },
  {
    'title': "Serverless Example",
    'image': {
      'desc': "A serverless portfolio",
      "src": "images/example2.png",
      "comment": ""
    }
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("should be a 'section' component", () => {
    expect(component.type()).toEqual('section');
    // console.log(component.debug());
  });
  it("should contain as many childred as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[0]}/>);
  let images = component.find("img");

  it("should contain a single image element", () => {
    expect(images.length).toEqual(1);
  });

  it("should have the image src set correctly", () => {
    // console.log(images.getElement(0));
    expect(images.getElement(0).props.src).toEqual(myWork[0].image.src);
  });

});
