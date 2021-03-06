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
// const {createElement} = React
// const { render } = ReactDOM

// render(
//     <h1 id='title' className='header' style={{backgroundColor:'orange', color:'white', fontFamily: 'verdana'}}>Helloy there
//     </h1>,
//     document.getElementById('react-container') //where you want to render
// )

//BABEL transpile JSX to work on browser
// use babel version 5 for in browser transpiling

/*STEP 4  
Remove 
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script> 
and install react and react-dom using npm then */

import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import { SkiDayList }  from './components/SkiDayList'

window.React = React
render (
       <SkiDayList days = {
           [
               {
                   resort: "Squa valey",
                   date: new Date("1/2/2016"),
                   powder: true,
                   backcountry: false
               },
               {
                resort: "Sssss",
                date: new Date("1/12/2016"),
                powder: false,
                backcountry: false
               },
               {
                resort: "Dav",
                date: new Date("1/2/2016"),
                powder: false,
                backcountry: true
            }
           ]
       }/>,
    document.getElementById('react-container')
)