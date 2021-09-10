const {readdirSync} = require('fs');

module.exports = (client) => {
  client.logger.log("=-=-=-=-=-=-=- Loading command(s) -=-=-=-=-=-=-=")
  readdirSync('./Commands').forEach(dir => {
    const commands = readdirSync(`./Commands/${dir}/`).filter(file => file.endsWith('.js'));
    for(let file of commands){
      let pull = require(`../Commands/${dir}/${file}`);
      if(pull.name){
        client.commands.set(pull.name, pull);
        client.logger.log(`Loading Command: ${pull.name}`)
      } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
    }
  })
}