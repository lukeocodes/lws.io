---
title: Playing a Twitter adventure game using SMS and Twilio on Glitch
published: 2017-04-06
redirect: 'https://www.twilio.com/blog/2017/04/playing-a-twitter-adventure-game-using-sms-and-twilio-on-glitch.html'
redirect_text: Twilio Blog
---

A few years ago, [Terence Eden](http://twitter.com/edent) created [@wnd_go](http://twitter.com/wnd_go), a “choose your own adventure” style game using a series of Twitter accounts which link to one another. I thought it’d be fun to show you how to build an application which makes this more accessible by replicating the gameplay via SMS. For this we’ll be using Node.js and an online editor called Glitch. Greg has previously written a [post on receiving SMS using Glitch (then HyperDev)](https://www.twilio.com/blog/2016/08/how-to-receive-an-sms-in-node-js-with-twilio-and-hyperdev.html).

<!--more-->

## Our tools

- We’ll be using the online IDE Glitch for this project – you can get to writing code straight away without an account.
- A Twilio phone number.

## Setting up Glitch and our project’s dependencies.

Head over to [Glitch](http://glitch.com/edit) and you’ll immediately be set up with a new environment. Open up `package.json` – a file which provides information about your project. Click the Add package button and add the `cheerio`, `body-parser` and `request` modules. As soon as you click on the search result it’ll install the module for you.

![A screenshot of Glitch showing the add package dialog](/articles/twilio-twitter-game/add-packages.png)

Now let’s head to `server.js` from the sidebar and then delete the contents of the file. While some of it is useful, I’d like to start from scratch and run through the whole project with you. Let’s include the packages in our project, which we do using `require` in Node.js.

```js
var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
```

Time to set up our express application with `body-parser`, which will make parsing incoming SMS data easier. The express module is installed by default and is a framework for building Node.js applications.

```js
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
```

## Set up a Twilio number, receive and respond to a SMS

Before being able to receive messages to a phone number we’ll need to go and get one. You can [get a Twilio phone number here](https://www.twilio.com/console/phone-numbers/search). Make sure to get one which is SMS enabled.

Go back to Glitch and click on “Show”. Copy the URL and return to your Twilio dashboard and configure your number as seen in this image:

![The Twilio number settings showing number configuration](/articles/twilio-twitter-game/webhooks.png)

Once we’ve configured the number, return to Glitch and let’s build some logic for the /sms route. Place the following code just before the event listener:

```js
app.post('/sms', function(req, responseText) {
    console.log(req.body);
  responseText.send('<Response><Message>' + req.body.Body + '</Message></Response>');
});

var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
```

Time to take it for a spin! If you click the Logs button in the top left of your editor and text your Twilio number, it’ll show you all of the data associated with your message and respond with an identical message.

![Glitch terminal showing inbound SMS](/articles/twilio-twitter-game/logs.png)

## Using request and Cheerio to read latest tweets

Now we’ve got requests and responses working correctly it’s time to set up our application. We will send it a Twitter username via SMS and it will respond with their latest tweet.

Let’s edit what happens when we receive an incoming SMS.

```js
app.post('/sms', function(req, responseText) {
    request('http://twitter.com/' + req.body.Body, function(err, res, body) {
        $ = cheerio.load(body);
        var firstItem = $('ol.stream-items').children().first();
        var tweetContent = firstItem.find('.tweet-text').text();
        responseText.send('<Response><Message>' + tweetContent + '</Message></Response>');
    });
});
```

The request function takes a URL and then a callback function to execute once it gets a response. If the user types in ‘twilio’, we’ll go and grab the data from http://twitter.com/twilio, if they type in ‘_phzn’, we’ll grab data from http://twitter.com/_phzn instead. Once we get the data, we pass it to Cheerio, which allows us to use jQuery-like syntax to look through the DOM of the page.

We find the HTML of the first tweet and assign it to `firstItem`, and then its content and assign it to `tweetContent`. Once we’ve got the `tweetContent` we create our TwiML response and send it back via SMS.

There’s no need to save and run your project with Glitch – it’s already running. Try texting your number again with a Twitter username and it should respond with their latest tweet.

## Showing new users a message

For this project we are not storing data about the user but we can use the contents of their SMS to determine whether the user is new and then show them a message in case they are.

At the very top of `app.post()`, let’s figure out if the SMS begins with “wnd_” or “@wnd_”.

```js
app.post('/sms', function(req, responseText) {
    var startOfString = req.body.Body.split('_')[0];
    var startingPlayer = startOfString !== 'wnd' && startOfString !== '@wnd' ? true : false;
    var userText = !startingPlayer ? req.body.Body : 'wnd_go';

    request('http://twitter.com/' + userText, function(err, res, body) {
        $ = cheerio.load(body);
        var firstItem = $('ol.stream-items').children().first();
        var tweetContent = firstItem.find('.tweet-text').text();

        if(startingPlayer) tweetContent = 'Welcome to the adventure. Respond with "wnd_run" or "wnd_hide" to continue \n\n' + tweetContent;

        responseText.send('<Response><Message>' + tweetContent + '</Message></Response>');
    });
});
```

Now `startingPlayer` will be true if the message does not start with “wnd_” or “@wnd_”, and `userText` will be set to wnd_go. We’ve also changed the first parameter of `request()` to be `userText` (it was `req.body.Body` before).

Finally, if `startingPlayer` is true, we add a welcome message to the front of the `tweetContent`.

Now we’re all finished up, try playing the game and see how long you can stay alive.

![Animation of SMS conversation with the Twilio number](/articles/twilio-twitter-game/demo.gif)

## Receiving, reading and responding to SMS is a doozy

You’ve now seen how you can receive, read and respond to SMS with just a few lines of code. There’s a lot more that you can do with this application. Here are just a few ideas:

- Edit tweets to make the prompts more user-friendly
- Store data about user sessions
- Build your own ‘choose your own adventure story’ system from scratch

If you’d like to look at my complete project and ‘remix’ it in your own account, you can find it here. And if you have any questions at all or are wondering what else you can do with this project, feel free to message me on Twitter @_phzn.
