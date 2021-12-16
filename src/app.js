const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
    "Popcorn",
     "Gemwoman",
     "Bolt",
     "Antwoman",
     "Mask",
     "Tiger",
     "Captain",
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id=id;
        this.name=name;
        this.type=type;
        this.strength= this.getRandomStrength();

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        let player = document.createElement('div');
        player.setAttribute('class','player');
        player.setAttribute('data-id', this.id);

        let image = document.createElement('img');
        image.setAttribute('src', "images/super-"+(this.id+1)+".png");

        let name = document.createElement('div');
        name.setAttribute('class','name');
        name.innerHTML = this.name;
        let strength = document.createElement('div');
        strength.setAttribute('class','strength');
        strength.innerHTML = this.strength;
        player.append(image, name, strength); 

    
        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
    // Create a field players 
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player, i) => {
        let type='villain';
        if(i%2===0)
        {
         type='hero';   
        }

       return new Player(i, player, type);
    });

    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}