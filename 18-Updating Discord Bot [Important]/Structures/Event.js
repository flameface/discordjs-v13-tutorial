const {readdirSync} = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Events");
table.setHeading('Events', ' Load status');

module.exports = (client) => {
  client.logger.ready("=-=-=-=-=-=-=- Loading event(s) -=-=-=-=-=-=-=");
  readdirSync('./Events/').forEach(dir => {
    const events = readdirSync(`./Events/${dir}/`).filter(file => file.endsWith('.js'));
    for(let file of events) {
      let pull = require(`../Events/${dir}/${file}`);
      if(pull.name){
        client.events.set(pull.name, pull);
            } else {
                table.addRow(file, '✔️ -> Event Loaded')
                continue;
      }
    }
  });
    console.log(table.toString());
};
