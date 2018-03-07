import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

console.log("React Online ...");

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
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
