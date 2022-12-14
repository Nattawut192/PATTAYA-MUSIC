const client = require("..");
const player = require("../handlers/player");
const { databasing } = require("../handlers/functions");

client.on("ready", async () => {
  console.log(`> ${client.user.username} Online <`.bgGreen);
  client.user.setActivity({
    name: `/help | ${client.guilds.cache.size} Servers`,
    type: "STREAMING",
    url: 'https://www.twitch.tv/',
  });

  // player
  await client.guilds.fetch();

  await client.guilds.cache.forEach(async (guild) => {
    await databasing(guild.id);
    client.updatemusic(guild);
  });
});
