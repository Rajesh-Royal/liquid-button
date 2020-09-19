<p align="center"><a href="https://github.com/Rajesh-Royal/liquid-button"><img src="screenshot/liquid button.gif" alt="Liquid button preview" height="150"/></a></p>
<h1 align="center">Liquid Button</h1>
<p align="center">A Liquid effect button built uisng svg and vanila JS, <a href="https://www.npmjs.com/package/liquid-button">NPM Repository</a></p>

<p align="center">
    <a href="https://twitter.com/intent/tweet?text=A Liquid effect button built uisng svg and vanila JS.&url=https://github.com/Rajesh-Royal/liquid-button&hashtags=javascript,opensource,js,webdev,developers,npm"><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="30"/></a>
</p><br/><br/>

## Demo - https://rajesh-royal.github.io/liquid-button/build/

TO use the LIquid button in your project -
1. - npm install liquid-button
2. - Then Import liquid-button in your react project

    `import LiquidButton from 'LiquidButton/src/LiquidButton'` if generate error then copy the LiquidButton.js file from the node_moudle folder and paste inside your src folder and import as `import LiquidButton from './LiquidButton' `

3. - use ` <LiquidButton class="your-class-name-here" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" /> `
     -------- put your desired colors -----

     #### You should have different class name each time you are using the component like -
     `ReactDOM.render(<div>`
     `<LiquidButton class="liquid-button" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />`
     `<LiquidButton class="liquid-button2" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />`
     `</div>, document.getElementById('root'));`

     see the above example it will show 2 buttons if you want to use more than your class name should be different each time.

     Now you can use more than one liquid-buttons on same page.

     Feel free to contribute on github - ( https://github.com/Rajesh-Royal/liquid-button )

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### License: MIT
