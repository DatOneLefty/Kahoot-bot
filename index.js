var Kahoot = require('kahoot.js');
var client = new Kahoot;
var NameGenerator = require('nodejs-randomnames');
var randomEmoji = require('random-emoji');
var exec = require('child_process').exec;
var rn = randomEmoji.random({count: 5});
var randomName = rn[0].character + " " + rn[1].character+  " " + rn[2].character+ " " + rn[3].character+ " " + rn[4].character;
var game_pin = parseInt(process.argv[2]);
var randomnumber = Math.round(Math.random() * 3);

client.join(game_pin, randomName);
client.on("joined", () => {
    console.log(randomName + " joined the Kahoot!");
});
client.on("questionStart", question => {
    console.log(randomName + " answered " + randomnumber);
    question.answer(randomnumber);
    randomnumber = Math.floor(Math.random() * 3);
});
client.on("quizEnd", () => {
    console.log(randomName + " CUT OFF ONE HEAD, AND TWO MORE SHALL TAKE ITS PLACE! HAIL HYDRA");
    process.exit();


});

function puts(error, stdout, stderr) { console.log(stdout) }
