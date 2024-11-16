// Creating a 2D array with 3 rows and 3 columns
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  //accessing the 2d array
  console.log(twoDArray[0][0])
  console.log(twoDArray[2][0])

  //changing the array element
  twoDArray[2][0]=10
  console.log(twoDArray)

  //iterating over the 2D array
  for(i=0; i< twoDArray.length ;i++){
    for(j=0; j< twoDArray[i].length ;j++){
        console.log(twoDArray[i][j])
    }
  }

