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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
