function createGame(){
    document.getElementById('root').style.display = 'flex';
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
    for(j = 0; j < 16; j++) {
		document.getElementById('root').innerHTML += '<a color="' + colorArr[j] + '" class="color' + colorArr[j] + ' hidden" color=""> </a>';
	}
    let isSame = false, 
		currentColor = 0, 
		currentEl, 
		isOpen = 0,
		a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
        a[i].addEventListener('click', function(event){
            let currentTarget = event.target;
            currentTarget.className = currentTarget.className.replace('hidden', '');
            setTimeout(function(){
                if(isSame){
                    isSame = false;
                    if(currentTarget.getAttribute('color') == currentColor){
                        isOpen++;
                        if(isOpen == 8){
                            alert('You win');
                        }
                    }
                    else{
                        currentEl.className += ' hidden'; 
						currentTarget.className += ' hidden';
                    }
                }
                else{
                    currentColor = currentTarget.getAttribute('color'); 
					currentEl = currentTarget; 
					isSame = true;
                }
                
            }, 300);
        });
    }
}
createGame();




