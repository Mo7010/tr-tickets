const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const EventEmitter = require("events");
const emitter = new EventEmitter;
emitter.setMaxListeners(1e20);
const mongoose = require("mongoose");
require("dotenv").config();
const { Message, Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});
const colors = require("colors");
client.on("ready", async () => {
  console.clear();
  console.log(`${""}${client.user.username}${""}`);
  console.log("Bot is now online!");
  console.log(colors.red(`${"====================> Tetra Team By Illxy <===================="}`));
  console.log(colors.blue(`${"Tickets Bot"}`));
  console.log(colors.blue(`${"Discord : https://disocrd.gg/tetra"}`));
  client.user.setActivity(`${"Tetra On Top"}`);
  client.user.setStatus(`${"online"}`);
  mongoose.set("strictQuery", false);
  mongoose.connect('mongodb+srv://doyo:doyo123600@cluster0.gnibnid.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  }).on("error", joshoua => {
    console.log("MongoDB connection error:", joshoua);
  });
});
console.log(process.version);
module.exports = client;
client.commands = new Collection;
client.slashCommands = new Collection;
require("./handlers")(client);


/*
client.on('channelCreate', async (channel) => {
  if (channel.type === 'GUILD_TEXT' && channel.name.toLowerCase().startsWith('ticket')) {
    try {
      setTimeout(async () => {
        await channel.send('**شكراً لك لأختيار خدمة  تيترا <:rasma_18:1200187871072632915> .**');
      }, 3000);
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال الرسالة:', error);
    }
  }
});


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'link') {
        message.channel.send('يرجى كتابة اسم السيرفر ثم الرابط: (مثال: Server Name https://example.com)');

        const filter = (user) => !user.bot;
        const collector = message.channel.createMessageCollector({ filter, time: 30000 });

        collector.on('collect', async (msg) => {
            const [serverName, serverLink] = msg.content.split(' ');
            const options = ['خاد عام', 'خاد افتار', 'خادم ستور'];

            const optionsEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Choose an option')
                .setDescription(options.map((option, index) => `${index + 1} - ${option}`).join('\n'));

            const sentMessage = await message.channel.send({ embeds: [optionsEmbed] });
            const optionsCollector = message.channel.createMessageCollector({ filter, time: 30000 });

            optionsCollector.on('collect', async (response) => {
                const choice = parseInt(response.content);

                if (choice >= 1 && choice <= options.length) {
                    const chosenText = options[choice - 1];

                    switch (chosenText) {
                        case 'خاد عام':
                            await message.channel.send(`Server Name: ${serverName}`);
                            break;
                        case 'خاد افتار':
                            await message.channel.send(`Server Link: ${serverLink}`);
                            break;
                        case 'خادم ستور':

                            break;
                        default:
                            break;
                    }


                    const messagesToDelete = [msg, sentMessage, response];
                    message.channel.bulkDelete(messagesToDelete).catch(console.error);
                } else {
                    await message.channel.send('Invalid choice. Please select a valid option.');
                }
            });

            optionsCollector.on('end', () => {
                sentMessage.delete().catch(console.error);
            });
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                message.channel.send('The time has expired. Please try again.');
            }
        });
    }
});
*/

client.login("MTIwMTg5ODI2OTU1NTMwMjQ0MA.G3HWbI.Y4AcMMJfYoC_uk50alOlcX6kKsoQFInI0Gikis");
