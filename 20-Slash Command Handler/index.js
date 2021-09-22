client.slash = new Collection();

//FIND STRUCTURES
["Command", "Event", "Slash"].forEach(handler => {
    require(`./Structures/${handler}`)(client);
});
