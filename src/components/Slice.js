import React, {Component} from 'react';
import {createStore} from '../redux';

const initialState = { isSame: false };

function reducer(state, action){
    switch(action.type){
        case 'FALSE': return { isSame: false }
        case 'TRUE': return { isSame: true }
        default: return state;
    }
}

const store = createStore(reducer, initialState);

const falseAction = { type: 'FALSE' };
const trueAction = { type: 'TRUE' };


let currentColor = '',
currentEl,
isOpen = 0;
class Slice extends Component{
    constructor(props){
        super(props);

        this.falseMake = this.falseMake.bind(this);
        this.trueMake = this.trueMake.bind(this);
    }
    componentDidMount(){
        store.subscribe(() => this.forceUpdate());
    }
    trueMake(){
        store.dispatch(trueAction);
    }
    falseMake(){
        store.dispatch(falseAction);
    }
    render(){
        return(
                <a color = {this.props.value} onClick = {this.handleClick} className = {`color${this.props.value} hidden`}></a>
        )
    }
    handleClick = (e) => {
        
        const trueAct = this.trueMake;
        const falseAct = this.falseMake;
        let currentTarget = e.target;
        currentTarget.className = currentTarget.className.replace('hidden', '');
        setTimeout(function(){
            if(store.getState().isSame === true){
                falseAct();
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
                trueAct();
            }
        }, 300);
    }
}


export default Slice;