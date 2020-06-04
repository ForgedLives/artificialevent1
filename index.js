const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online.`)
    bot.user.setActivity("Forged sucks at coding", {type: "ONLINE"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[1];

    if(cmd === `${prefix}key`){
        message.author.send("https://discord.gg/szCfKwW")
    }
    if(cmd === `${prefix}stealkey`){
        let stealkeyRole = message.member.guild.roles.find("name", "stealkey");
        message.member.addRole(stealkeyRole)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}nothing`){
        let nothing = message.member.guild.roles.find("name", "nothing");
        message.member.addRole(nothing)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}actdead`){
        let actdead = message.member.guild.roles.find("name", "actdead");
        message.member.addRole(actdead)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}start`){
        let start =message.member.guild.roles.find("name", "start")
        message.member.addRole(start)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}pills`){
        let pills =message.member.guild.roles.find("name", "pills")
        message.member.addRole(pills)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}knife`){
        let knife = message.member.guild.roles.find("name", "knife")
        message.member.addRole(knife)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}escape`){
        let escape = message.member.guild.roles.find("name", "escape")
        message.member.addRole(escape)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}toilet`){
        let toilet = message.member.guild.roles.find("name", "toilet")
        message.member.addRole(toilet)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}basement`){
        let basement = message.member.guild.roles.find("name", "basement")
        message.member.adddRole(basement)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}sewers`){
        let sewers = message.member.guild.roles.find("name", "sewers")
        message.member.addRole(sewers)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}run`){
        let run = message.member.guild.roles.find("name", "run")
        message.member.addRole(run)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}wait`){
        let wait = message.member.guild.roles.find("name", "wait")
        message.member.addRole(wait)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}lockerroom`){
        let lockerroom = message.member.guild.roles.find("name", "lockerroom")
        message.member.addRole(lockerroom)
        message.channel.send("Success!")
    }
if(cmd === `${prefix}talktohim`){
        let talktohim = message.member.guild.roles.find("name", "talktohim")
        message.member.addRole(talktohim)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}swimout`){
        let swimout = message.member.guild.roles.find("name", "swimout")
        message.member.addRole(swimout)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}maingate`){
        let maingate = message.member.guild.roles.find("name", "maingate")
        message.member.addRole(maingate)
        message.channel.send("Success!")
    }
    if(cmd ===  `${prefix}hotwire`){
        let hotwire = message.member.guild.roles.find("name", "hotwire")
        message.member.hasPermission("ATTACH_FILES")
        message.member.addRole(hotwire)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}changeclothes`){
        let changeclothes = message.member.guild.roles.find("name", "changeclothes")
        message.member.hasPermission("EMBED_LINKS")
        message.member.addRole(changeclothes)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}climbladder`){
        let climbladder = message.member.guild.roles.find("name", "climbladder")
        message.member.addRole(climbladder)
        message.channel.send("Success!")
    }
  if(cmd === `${prefix}swimout`){
        let swimout = message.member.guild.roles.find("name", "swimout")
        message.member.addRole(swimout)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}walkout`){
        let walkout = message.member.guild.roles.find("name", "walkout")
        message.member.addRole(walkout)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}window`){
        let window = message.member.guild.roles.find("name","window")
        message.member.addRole(window)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}kidnapped`){
        let kidnapped = message.member.guild.roles.find("name", "kidnapped")
        message.member.addRole(kidnapped)
        message.channel.send("Success!")
    }
    if (message.content.startsWith(`${prefix}eval`)) {
        const args = message.content.split(" ").slice(1);
        function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
        }
    
        if(message.author.id !== botconfig.ownerID) {
          const ChangeEmbed = new Discord.RichEmbed()
            .setColor('#00ffea')
            .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
            .setDescription(`<:xemoji:678803037661429801> **Insufficient Command Permissions**`)
            .addField('Accessibility', "Bot Owner")
            .setTimestamp()
          return message.channel.send(ChangeEmbed)
        }
        else {
          try {
            const code = args.join(" ");
            let evaled = eval(code);
    
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
    
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
        }
      }
      if(cmd === `${prefix}theagency`){
        message.author.send("https://discord.gg/tGGNBq3")
     }
     if(cmd === `${prefix}mainframe`){
     const mEmbed = new Discord.RichEmbed()
     .setColor(`#2ecc71`)
     .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
     .setDescription("**The Mainframe**")
     .addField("Training Room Password:", "november")
     return message.channel.send(mEmbed)
     }
     if(message.content.startsWith(`${prefix}lexa`)){
       let lEmbed = new Discord.RichEmbed()
       .setColor(`#2ecc71`)
       .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
       .addField("**Is Lexa bald?**", "i wonder")
       return message.channel.send(lEmbed)
       }
       if(message.content.startsWith(`${prefix}tom`)){
         let tomEmbed = new Discord.RichEmbed()
         .setColor(`#2ecc71`)
         .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
         .setDescription("**Tom-mas the Choo Choo Train**")
         return message.channel.send(tomEmbed)
       }
       if(message.content.startsWith(`${prefix}adam`)){
           let adamEmbed = new Discord.RichEmbed()
           .setColor(`#2ecc71`)
           .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
           .setDescription("ForgedLivesIsNOTTrxsh")
           return message.channel.send(adamEmbed)
       }
       if(message.content.startsWith(`${prefix}avery`)){
        let averyEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .addField(`Avery's Titles:`, "**Biggest Noob of All Time, Simp for Arkhell**")
        return message.channel.send(averyEmbed)
    }
    if(message.content.startsWith(`${prefix}8ball`)){
        let choices = ["yes", "no", "stop asking me nonsense questions."]
        var response = choices[Math.floor(Math.random() * choices.length)];
        message.channel.send(response)
    }
    if(message.content.startsWith(`${prefix}cookie`)){
        let cookieEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("vsco girl")
        return message.channel.send(cookieEmbed)
    }
    if(message.content.startsWith(`${prefix}twcx`)){
        let twcxEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("Joey")
        return message.channel.send(twcxEmbed)
    }
    if(message.content.startsWith(`${prefix}forged`)){
        let forgedEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("Bot Owner")
        return message.channel.send(forgedEmbed)
    }
    if(message.content.startsWith(`${prefix}cloud`)){
        let cloudEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("**clout the choo choo train**")
        return message.channel.send(cloudEmbed)
    }
    if(message.content.startsWith(`${prefix}legendary`)){
        let legEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("ledge and dairy")
        return message.channel.send(legEmbed)
    }
    if(message.content.startsWith(`${prefix}start1`)){
        message.guild.createChannel(`${message.author.username}-decisions`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL'],
                },
            ],
        })
    }
    if(message.content.startsWith(`${prefix}melody`)){
        let melEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("**Loves cows a bit too much**")
        return message.channel.send(melEmbed)
    }
    if (message.content.startsWith(`${prefix}speak1`)){
        message.channel.send("Spymaster: Welcome back, Agent Zero. I would have expected you to realize as soon as you were going to break out of prison, we will always find you. No matter what the cost. It's time for you to return back to your duties.                                  **Decisions:** `/accept` or `/decline` ")
    }
    if (message.content.startsWith(`${prefix}accept`)){
        message.channel.send("You: Alright sir. what are my duties?")
        message.channel.send("Spymaster: Now, we want you to investigate the meteors falling from the sky. Reports from the goverment of The Immortals says that the meteors have been falling nonstop throughout day and night. We are assigning you to do such a task because we feel that you are most capable of this task. Before we send you in, we will put you in the training room to sharpen your agent skills.                                                                              **Decisions:** `/train`")         
    }
    if(message.content.startsWith(`${prefix}decline`)){
        message.channel.send("You: Why should I work for you, when you kidnapped me?")
        message.channel.send("Spymaster: Well, these meteors could result in the end of the Earth. If you refuse to help us, I doubt any other organization or goverment could investigate such a mystery. You are known as the top agent in the world after all. Now choose. Will you help us or will you let the Earth die?                                                              **Decisions:** `/accept`")
    }
    if(message.content.startsWith(`${prefix}astrid`)){
        let astridEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription(" another reminder to shoot mel with my M16")
        return message.channel.send(astridEmbed)
    }
         if(message.content.startsWith(`${prefix}bmat`)){
        let bmatEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("EMOJI EMOJI EMOJI")
        return message.channel.send(bmatEmbed)
    }
              if(message.content.startsWith(`${prefix}pedro`)){
        let pedroEmbed = new Discord.RichEmbed()
        .setColor(`#2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("simp for mel")
        return message.channel.send(pedroEmbed)
    }
    if(message.content.startsWith(`${prefix}namel`)){
        let namelEmbed = new Discord.RichEmbed()
        .setColor(`2ecc71`)
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("Tom smells like fish")
        return message.channel.send(namelEmbed)
    }
    if(message.content.startsWith(`${prefix}train`)){
        let train = message.member.guild.roles.find("name", "Training")
        message.member.addRole(train)
        message.channel.send("Success!")
    }
    if(cmd === `${prefix}yGmdapwdn`){
    let TrainingTwo = message.member.guild.roles.find("name", "TrainingTwo")
    message.member.addRole(TrainingTwo)
    message.channel.send("Success!")
    message.author.send("You move on to the next training!")
    }
    if(message.content.startsWith(`${prefix}jes`)){
        let jesEmbed = new Discord.RichEmbed()
        .setColor('#2ecc71')
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        .setDescription("smol bean")
        return message.channel.send(jesEmbed)
    }
    if(message.content.startsWith(`${prefix}12`)){
        message.author.send("**25*2** **Please write your answer in <#715498073849069578>")
    }
    if(message.content.startsWith(`${prefix}50`)){
        message.author.send("**216/6=?** **Please write your answer in <#715498073849069578>.**")
    }
    if(message.content.startsWith(`${prefix}36`)){
        message.author.send("**Is 638123794 divisible by 4?** **Please write your answer in <#715498073849069578> with /positive or /negative.**")
    }
    if(message.content.startsWith(`${prefix}negative`)){
        message.author.send("**One day, Bob was walking home with some fresh apples he just bought. He met his friend Jimbo and he gave 1/3 of this apples him. After a while, he met with friend Harry and gave him 1/2 of his apples. When he finally arrived home, he gave his neighbor, Jace, 1/4 of his apples. He only has 15 apples left. How much apples did he have originally? Please write your answer in <#715498073849069578>.**")
    }
    if(message.content.startsWith(`${prefix}60`)){
        let TrainingThree = message.member.guild.roles.find("name", "TrainingThree")
        message.member.addRole(TrainingThree)
        message.channel.send("Success!")
        message.author.send("You move on to the next training!")
    }
    if(message.content.startsWith(`${prefix}monochrome`)){
        let TrainingFour = message.member.guild.roles.find("name", "TrainingFour")
        message.member.addRole(TrainingFour)
        message.channel.send("Success!")
        message.author.send("You move on to the next training!")
    }
    if(message.content.startsWith(`${prefix}alps`)){
        message.author.send("**What is the sixth noble gas?**")
    }
    if(message.content.startsWith(`${prefix}radon`)){
        message.author.send("**Name 1 of the 3 types of rocks.**")
    }
    if(message.content.startsWith(`${prefix}igneous`)){
        message.author.send("**What is the body of water to the west of France? Hint: It's not the Atlantic Ocean.**")
    }
    if(message.content.startsWith(`${prefix}sedimentary`)){
        message.author.send("**What is the body of water to the west of France? Hint: It's not the Atlantic Ocean.**")
    }
    if(message.content.startsWith(`${prefix}metamoraphic`)){
        message.author.send("**What is the body of water to the west of France? Hint: It's not the Atlantic Ocean.**")
    }
    if(message.content.startsWith(`${prefix}bayofbiscay`)){
        message.author.send("**The Earth's air is 21 percent oxygen and is 78 percent...?**")
    }
    if(message.content.startsWith(`${prefix}nitrogen`)){
        let TrainingFive = message.member.guild.roles.find("name", "TrainingFive")
        message.member.addRole(TrainingFive)
        message.channel.send("Success!")
        message.author.send("You move on to the next training!")
    }
    if(message.content.startsWith(`${prefix}alanturing`)){
        message.channel.send("Congratulations, Agent Zero. You have finish training. Are you ready to go investigate the case?        **Decisions: /continue**")
    }
    if(message.content.startsWith(`${prefix}continue`)){
        message.author.send("https://discord.gg/tGk23XF")
    }
      // 420 to idk will be for 3rd Phase, im dead atm jESUS
      if(message.content.startsWith(`${prefix}start2`)){
        message.guild.createChannel(`${message.author.username}-decisions`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL'],
                },
            ],
        })
    }
    if(message.content.startsWith(`${prefix}speak2`)){
        let meteorsite = message.member.guild.roles.find("name", "meteorsite")
        message.member.addRole(meteorsite)
        message.channel.send("Welcome to the meteor site, Agent Zero. We are in a desert approximately a few miles away from the agency. We want you to look around and observe the meteor.")
    } 
    if(message.content.startsWith(`${prefix}approach`)){
        let approach = message.member.guild.roles.find("name", "approach")
        message.member.addRole(approach)
    }
    if(message.content.startsWith(`${prefix}hackaway`)){
        if(message.member.hasPermission("EMBED_LINKS")){
            message.channel.send("You hack away at the meteor and grab a piece of it.")
            let meteor = message.member.guild.roles.find("name", "meteor")
            message.member.addRole(meteor)
        }
        else{
            message.channel.send("You have nothing to use to hack away the meteor at.")
        }
    }
    if(message.content.startsWith(`${prefix}examine`)){
        if(message.member.hasPermission("ATTACH_FILES")){
            message.channel.send("You examine the meteor and find a virus inside. The virus is known as ebola and was created by Dr. 'Zoom' Ebola. This was rapidly spread across Africa in late 2013, this however was stopped in late March of 2019. What could the Ebola virus be doing in the meteor? Could it have been something to do with Zoom?                                   Decisions: `/zoom` or `/notzoom`")
            let ebola = message.member.guild.roles.find("name", "ebola")
            message.member.addRole(ebola)
        }
        else{
            message.channel.send("What are you trying to examine...?")
        }
    }
  if(message.content.startsWith(`${prefix}zoom`)){
        let zoomslab = message.member.guild.roles.find("name", "zoomsoffice")
        message.member.addRole(zoomslab)
        message.channel.send("It must have something to do with Zoom. Ask the Spymaster for a ride to his office. Time is of the essence.")
    }
    if(message.content.startsWith(`${prefix}notzoom`)){
        let namelslab = message.member.guild.roles.find("name", "namelslab")
        message.member.addRole(namelslab)
        message.channel.send("We shouldn't jump to conclusions. We need more evidence that it's Zoom that's doing this.")
        message.channel.send("Spymaster: Alright, I think we should move on to Namel's lab because there has been plenty of speculation that it is him pulling all of this of.")
    }
    if(message.content.startsWith(`${prefix}burkinafaso`)){
        let burkinafaso = message.member.guild.roles.find("name", "burkinafaso")
        message.member.addRole(burkinafaso)
    }
    if(message.content.startsWith(`${prefix}theunderground`)){
        message.author.send("https://discord.gg/sfsY8F3")
    }
    //phase 4 time, lets finish this 

    if(message.content.startsWith(`${prefix}start3`)){
    message.guild.createChannel(`${message.author.username}-decisions`), {
        type: 'text',
        permissionOverwrites: [{
            id: message.guild.id,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: message.author.id,
            allow: ['VIEW_CHANNEL'],
        },
        ],
    }
}
    if(message.content.startsWith(`${prefix}speak3`)){
    message.channel.send("You enter the secret entrance to the building and you are faced with 5 metallic security doors. You stand infront of the door and walk in...                **Decisions:** `/security`.")
    }
    if(message.content.startsWith(`${prefix}security`)){
        let security = message.member.guild.roles.find("name", "security")
        message.member.addRole(security)
    }
})
bot.login(process.env.token);