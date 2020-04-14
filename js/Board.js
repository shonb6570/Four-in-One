class Board {
    constructor () {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    /** 
     * Generates a 2D array of spaces. 
     * @return  {Array} - An array of space objects.
     */
    createSpaces() {
            const rowLength = 6; // Main array length
            const board=[];
            for(let i = 0; i < rowLength; i++){
              for(let j = 0; j < rowLength(i); j++){
                let boardSpace = Space(i, j);
                board.push(boardSpace);
              }
            }
            return board;
    }
};

// Ashley`s code for comparison

// createSpaces() {

//   const spaces = [];

//   for(let x = 0; x < this.columns; x++){
//     const column = [];

//     for(let y = 0; y < this.rows; y++){
//       const space = new Space(i, j);
//       column.push(space);
//     }
//   }
//   return board;
// };


