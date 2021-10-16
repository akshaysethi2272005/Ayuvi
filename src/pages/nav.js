import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
var state = 0;
const Nav = () => {
    return (
        <div className="body">
            <nav className="main">
                <div id="clk">
                <svg className="cls get" onClick={() => {
                    if(state == 0){
                        document.getElementById('b').style.transition = 'all 0.4s';
                        document.getElementById('b').style.left ='0px';
                        document.getElementById('c').style.transition = 'all 0.6s';
                        document.getElementById('c').style.left ='0px';
                        document.getElementById('d').style.transition = 'all 0.8s';
                        document.getElementById('d').style.left ='0px';
                        document.getElementById('e').style.transition = 'all 0.8s';
                        document.getElementById('e').style.left ='0px';
                        state = 1;
                    }
                    else{
                        document.getElementById('b').style.left ='-300px';
                        document.getElementById('c').style.left ='-300px';
                        document.getElementById('d').style.left ='-300px';
                        document.getElementById('e').style.left ='-300px';
                        state = 0;
                    }
                }} width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                    </g>
                    <g>
                    <title>Layer 1</title>
                    <path fill="#ffffff" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s-2,-8 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"/>
                    </g>
                </svg>
                </div>
                <ul>
                    <li className="cls w" id="b"><Link className="linker" to="/">Home</Link></li>
                    <li className="cls w" id="c"><Link className="linker" to="/review">Testimonial</Link></li>
                    <li className="cls w" id="d"><Link className="linker" to="/product">Health and healing essentials</Link></li>
                    <li className="cls w ik" id="e"><Link className="linker" to="/order">Place Order</Link></li>
                </ul>
                
            </nav>
        </div>
    );
}
export default Nav;