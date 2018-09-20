import React, {Component} from 'react'
let sameColor = false;
let currentColor = '',
currentEl,
isOpen = 0;
// const setColors = mixColor.map( mix => 
//     <a className = 'corol'{mix}></a>
// );
class Slice extends Component{
    render(){
        return(
            <a color = {this.props.value} onClick = {this.handleClick} className = {`color${this.props.value} hidden`} >
            </a>
        )
    }
    handleClick = (e) => {
        let currentTarget = e.target;
        currentTarget.className = currentTarget.className.replace('hidden', '');
        setTimeout(function(){
            if(sameColor){
                sameColor = false;
                if(currentTarget.getAttribute('color') === currentColor){
                    isOpen++;
                    if(isOpen === 8){
                        alert('You win!');
                    }
                }else{
                    currentEl.className += ` hidden`;
                    currentTarget.className += ` hidden`;
                }
            }
            else{
                currentColor = currentTarget.getAttribute('color');
                currentEl = currentTarget;
                sameColor = true;
            }
        }, 300);
    }
}


export default Slice;