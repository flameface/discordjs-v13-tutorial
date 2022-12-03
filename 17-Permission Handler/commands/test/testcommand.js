module.exports = {
  name: "test",
  aliases: ["t"],
  userPerms: ["KICK_MEMBERS"], //User Permissions Here
  clientPerms: ["KICK_MEMBERS"], //Bot Permissions Here
  description: "Test Command",
  run: async (client, message, args, prefix) => {
    message.channel.send("Works")
  }
}
