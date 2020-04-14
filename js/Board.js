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

// const board=[];
// const createSpace = () => {
//         const rowLength = 6; // Main array length
//         for(let i = 0; i < rowLength.length; i++){
//             board.push(i);
//         //   for(let j = 0; j < rowLength(i); j++){
//         //     board.push(i, j);
//         //   }
//         }
//         return board;
//         console.log(board);
// };

const board=[];
const createSpace = () => {
        const rowLength = 6; // Main array length
        for(let i = 0; i < rowLength; i++){
          console.log("Here " + i);
        }
};

console.log("end");



