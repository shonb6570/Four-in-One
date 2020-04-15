class Token {
    constructor (index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
    get htmlToken()  {

    }

    drawHTMLToken() {
        var newDiv = document.createElement("div");
        const gameBoard = document.getElementById('game-board-underlay').append(newDiv);
        gameBoard.setAttribute("id", "gameBoard")
    }
};