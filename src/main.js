import React from 'react';
import App from './components/app';

const items = [
  {
    'id': 1,
    'img': 'http://lorempixel.com/80/80/sports',
    'title': 'Item 1',
    'price': 250,
    'desc' : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    'id': 2,
    'img': 'http://lorempixel.com/80/80/sports',
    'title': 'Item 2',
    'price': 1000,
    'desc' : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porttus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    'id': 3,
    'img': 'http://lorempixel.com/80/80/sports',
    'title': 'Item 3',
    'price': 500,
    'desc' : 'Cras jcilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    'id': 4,
    'img': 'http://lorempixel.com/80/80/sports',
    'title': 'Item 4',
    'price': 700,
    'desc' : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec idat eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }, {
    'id': 5,
    'img': 'http://lorempixel.com/80/80/sports',
    'title': 'Item 5',
    'price': 1500,
    'desc' : 'Cras justo  ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
];

// Expose globally for debugging purpose
window.React = React;

React.render(<App items={items} />,
    document.getElementById('root'));
