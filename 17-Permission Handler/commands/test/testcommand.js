module.exports = {
  name: "test",
  aliases: ["t"],
  UserPerms: ["KICK_MEMBERS"],
  ClientPerms: ["KICK_MEMBERS"],
  description: "Test Command",
  run: async(client, message, args, prefix) => {
    message.channel.send("Works")
  }
}
