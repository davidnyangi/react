/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	//STEP 1
	// const title = React.createElement(
	//     'h1',//what you're creating
	//     {id: 'title', className:'header'},//object/properties of the created element
	//     'Hello World' //child content to be contained in the element
	// )

	// ReactDOM.render(
	//     title, //name of the element to be rendered
	//     document.getElementById('react-container') //where you want to render
	// )

	//STEP 2
	// const {createElement} = React
	// const { render } = ReactDOM

	// const style1 = {
	//     backgroundColor: 'orange',
	//     color: 'white',
	//     fontFamily: 'verdana'
	// }
	// const title = createElement(
	//     'h1',//what you're creating
	//     {id: 'title', className:'header', style: style1},//object/properties of the created element
	//     'Hello World' //child content to be contained in the element
	// )

	// render(
	//     title, //name of the element to be rendered
	//     document.getElementById('react-container') //where you want to render
	// )


	//STEP 3 JSX=Javascript as XML
	//code doesn't run without a transpiler i.e babel
	var _React = React,
	    createElement = _React.createElement;
	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;


	render(React.createElement(
	    'h1',
	    { id: 'title', className: 'header', style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
	    'Hello there'
	), document.getElementById('react-container') //where you want to render
	);

	//BABEL transpile JSX to work on browser
	// use babel version 5 for in browser transpiling

/***/ }
/******/ ]);