import React, {Component} from 'react';



class App extends Component{
    render(){
        return(
            <button onClick = {createGame}>Start Game</button>
        )
    }
}
function createGame(){

    //              Mix color array
    let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], 
        j, 
        x, 
        y;
    for(y = colorArr.length; y;){
        j = Math.floor(Math.random() * y);
        x = colorArr[--y];
        colorArr[y] = colorArr[j];
        colorArr[j] = x;
    }
    // create board and tiles
    for(j = 0; j < 16; j++) {
        document.getElementById('root').innerHTML += '<a color="' + colorArr[j] + '" class="color' + colorArr[j] + ' hidden" color=""> </a>';
       
    }
    let isSame = false, 
        currentColor = 0, 
        currentEl, 
        isOpen = 0,
        a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
        // add click function to tiles
        a[i].addEventListener('click', function(event){
            let currentTarget = event.target;
            // show temporarily color of clicked tile
            currentTarget.className = currentTarget.className.replace('hidden', '');
            setTimeout(function(){
                if(isSame){
                    isSame = false;
                    // if 2 color are the same
                    if(currentTarget.getAttribute('color') === currentColor){
                        isOpen++;
                        // if number of matches are maximum
                        if(isOpen === 8){
                           alert('You win!');
                        }
                    }
                    else{
                        // if colors arent the same
                        currentEl.className += ' hidden'; 
                        currentTarget.className += ' hidden';
                    }
                }
                else{
                    // if clicked on first tile in a pair
                    currentColor = currentTarget.getAttribute('color'); 
                    currentEl = currentTarget; 
                    isSame = true;
                }
                // setTimeOut to see color of clicked tile
            }, 300);
        });
    }
}

export default App;