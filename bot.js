var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
	
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		var user2= args[1];
		
			
	var items = Array('Abe '+ user2 +' zyada bakchodi karega teri gaand pe rakhke tikdi fod dunga',
	 user2 +' tujhe bhookh lagi hai? Mujhe tatti aayi hai khaale.',
	'Are sun '+ user2 +' bhai? Tu uss kone mein chala jaa aur gaand marale.',
	user2 + ' zyada gaand na fulao warna maa chod denge tumhari',
	user2 + ', ae madarchod apna kaam kar na',
	'Abe '+ user2 +' zyada bolega toh lulli pe gaanth laga dunga',
	'Chaar chavanni ghode pe, '+ user2 +' mere lode pe',
	'Ek kaam kar '+ user2 +', murge ki tatti fook le',
	 user2 +' teri chodar le aur apni gaand mein daal le',
	'Abe '+ user2 +' kaisa lolapujaala hai tu',
	'Neem ka patta kadwa hai, '+ user2 +' humaara bhadva hai',
	'Dekho dekho aasman ko chodne nikla dharti ka loda '+ user2,
	'Na baans ki bansi na sone ka sariya, '+ user2 +' gaand mein danda le',
	

	);
	
	var welcome = Array('Aa gaye aap '+ user2 +' Kya chahiye? Whiskey? Beer? RoohAfza',
	'Are '+ user2 +' neat loge ya paani ke saath?',
	user2 +' abhi underage hai, isse Sprite pilaao',
	'Are '+ user2 +' thungaari aa gaye, Chakkna door karo be',
	);
	
	var praise = Array(user + ' se bada koi chutiya nahi',
	user + ' is the best we\'ve ever seen',
	user + ' ka dimaaag nahi goo hai goo',
	user + ' ke picche ladkiyo ki line lagi rehti hai',
	'5rs ki pepsi, mera ' + user + ' sexy',
	user + ', bc iske toh naam se hi ulti aa rahi hai mujhe ',
	
	);
	
	var drink = Array(user +' ke liye ek peg Jack Daniels neat',
	user +' ke liye 4 shots vodka ke',
	user +' ko ek pitcher Beer ka',
	user +' ke liye Rum bantegi',
	user +', Daaru chhod, Tu mera moot pee le',
	'Fokat ki daaru chahie?' + user + ',Bhaag yahan se! BHAAG!'
	);
       
        //args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'destroy':
                bot.sendMessage({
                    to: channelID,
                    message: items[Math.floor(Math.random()*items.length)]
                });
				break;
			case 'intro':
                bot.sendMessage({
                    to: channelID,
                    message: 'Main Bhand clan ka paaltu bot hu. Kaat lunga'
                });	
            break;
			case 'welcome':
                bot.sendMessage({
                    to: channelID,
                    message: welcome[Math.floor(Math.random()*welcome.length)]
                });	
				
            break;
			case 'praise':
                bot.sendMessage({
                    to: channelID,
                    message: praise[Math.floor(Math.random()*praise.length)]
                });	
				
            break;
			case 'drink':
                bot.sendMessage({
                    to: channelID,
                    message: drink[Math.floor(Math.random()*drink.length)]
                });	
				
            break;
            // Just add any case commands if you want to..
         }
     }
});
