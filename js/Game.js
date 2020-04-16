class Game {
    constructor () {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Finds active player.
     * @return {object} Player with active property equaling true.
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        const players = [ new Player("Player1", 1, "#e15258", true), 
                          new Player("Player2", 2, "#e59a13") ];
        return players;
    }

    /**
     * Initializes game.
     */
   startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true; 
}
};
