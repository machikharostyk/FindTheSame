import React from 'react'
import {Component} from 'react'
import Slice from './Slice'
import mixColor from '../data';
class MakingBoard extends Component{
    renderSlices(i){
        return <Slice value={i}/>
    }
    render(){
        return(
            <div>
                <div className='board-row'>
                    {this.renderSlices(mixColor[0])}
                    {this.renderSlices(mixColor[1])}
                    {this.renderSlices(mixColor[2])}
                    {this.renderSlices(mixColor[3])}
                    {this.renderSlices(mixColor[4])}
                    {this.renderSlices(mixColor[5])}
                    {this.renderSlices(mixColor[6])}
                    {this.renderSlices(mixColor[7])}
                    {this.renderSlices(mixColor[8])}
                    {this.renderSlices(mixColor[9])}
                    {this.renderSlices(mixColor[10])}
                    {this.renderSlices(mixColor[11])}
                    {this.renderSlices(mixColor[12])}
                    {this.renderSlices(mixColor[13])}
                    {this.renderSlices(mixColor[14])}
                    {this.renderSlices(mixColor[15])}
                </div>
            </div>
        )
    }
}

export default MakingBoard;