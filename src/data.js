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
export default colorArr;