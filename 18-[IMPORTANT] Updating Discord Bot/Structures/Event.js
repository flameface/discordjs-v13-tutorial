const {readdirSync} = require('fs');

module.exports = (client) => {
  readdirSync("./Events/").forEach((file) => {
    const events = readdirSync("./Events/").filter((file) => file.endsWith(".js"));
    for(let file of events) {
      let pull = require(`../Events/${file}`);
      if(pull.name){
        client.events.set(pull.name, pull);
      } else {
        continue;
      }
    }
  });
  client.logger.log("=-=-=-=-=-=-=- Event(s) Loaded -=-=-=-=-=-=-=");
};