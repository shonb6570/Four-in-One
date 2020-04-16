class Player {
    constructor (name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    /** create tokens for player
      * @param {number} num - Number of token objects to be created.
      * 
      */ 
    createTokens(num){
        const tokens = [];
        for (let i = 0; i < num.length; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }
    /**
     * Gets all tokens that are 'unused' (dropped property = false)
     */
    get unusedTokens () {
        return this.tokens.filter(token => !token.dropped);
    }
    /**
     * Returns the active token.
     * @return {object}  first unused token from token array.
     */
    get activeToken () {
        return this.unusedTokens[0];
    }

}


