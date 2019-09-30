import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LiquidButton from './LiquidButton';
import LiquidButtonMain from './LiquidButtonMain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><LiquidButton class="liquid-button" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />
                    <LiquidButton class="liquid-button2" name="FirstButton" background="black" firstcolor="#1e88e5" secondcolor="yellow" />
                    
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
