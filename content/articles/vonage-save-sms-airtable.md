---
title: Save Received SMS Messages With Airtable and Node.js
published: 2020-03-05
redirect: 'https://learn.vonage.com/blog/2020/03/05/save-received-sms-messages-with-airtable-and-node-js-dr/'
redirect_text: Vonage Developer Blog
---

[Airtable](https://airtable.com) is an online database tool that allows you to create linked datasets with a friendly interface. Instead of needing to build admin dashboards for your data, Airtable lets you query, sort, and filter data through it’s accessible, collaborative, and (dare I say) fun interface.

By the end of this tutorial, you’ll be able to store SMS messages sent in from your users in an Airtable base and reply to them using the [Nexmo Messages API](https://developer.nexmo.com/messages/overview). <!--more-->

The code for this tutorial is on [GitHub](https://github.com/nexmo-community/save-sms-airtable-express).

## Prerequisites

* A [Nexmo account](https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=airtable-sms-logging-express)
* An [Airtable account](https://airtable.com/signup)
* [Node.js](https://nodejs.org/en/download/) installed on your machine
* [ngrok](https://ngrok.com/) to make the code on your local machine accessible to the outside world
* The Nexmo CLI: `npm install -g nexmo-cli`

## Set Up an Airtable Base

Databases in Airtable are known as bases and consist of several tables. Like all relational databases, these tables can link using common fields. While you'll be interacting with Airtable via their API, you must first set up the base on their website.

![The first table is called Messages and contains Message (text), Number (relationship), Received (created), and Notes (text). The second table is called Numbers and contains Number (phone), Messages (relationship), and Notes (text).](/articles/vonage-save-sms-airtable/airtable-setup.png)


As you can see above, create a Messages and a Numbers table. The Messages table should have a link to the Numbers table, which will create a new field in Numbers on your behalf. Note that table/field names are case sensitive. Add your phone number to the Numbers table using the standard Nexmo number format (for example, a US number would have the format 14155550101, while a UK number would have the format 447700900123).

In your [Airtable account](https://airtable.com/account) you should also generate and take note of your API key.

## Run ngrok

Our Nexmo application requires a public URL, and ngrok allows you to take applications running on localhost and make them public. For more information, [check out our post](https://www.nexmo.com/blog/2017/07/04/local-development-nexmo-ngrok-tunnel-dr) all about local development with ngrok. Once set up, you'll need to run it targeting port 3000 - the port we'll later build our Express.js application on:

```
$ ngrok http 3000
```

When you run ngrok, you'll see that localhost:3000 is given a forwarding URL that you can use to provide public access to your local app. It'll look something like `https://qwertyui.ngrok.io`. You'll need this again later, so take note of it.

## Create a Nexmo Application

To get started with the Messages API, you'll need to purchase a virtual phone number and set up a new Nexmo application. While you will just be using the Messages API for SMS, you can easily extend it to WhatsApp, Facebook Messenger, Viber and more. Create a directory for your new project, navigate to it in your terminal, and run the following commands:

```
# Search numbers that can send/receive SMS (replace GB for other regions)
$ nexmo number:search GB --sms

# Buy a number from the list
$ nexmo number:buy NUMBER_FROM_LIST

# Create a new Nexmo messages application
$ nexmo app:create "Application Name" --capabilities=messages --messages-inbound-url=YOUR_NGROK_URL/inbound --messages-status-url=YOUR_NGROK_URL/status --keyfile=private.key

# Link your number to your application
$ nexmo link:app NEXMO_NUMBER APPLICATION_ID
```

## Install Dependencies

The final step before you write some code is to install dependencies:

```
# Create package.json (you may leave all answers as default)
$ npm init

# Install dependencies
$ npm install nexmo@beta express body-parser airtable
```

## Set Up Express.js Application

Create an `index.js` file and set up a standard Express.js application:

```
const app = require('express')();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Other code will go in here

app.listen(3000);
```

## Create an Inbound Webhook Handler

When you set up your Nexmo application, you provided an inbound messages URL, based on the ngrok address. Next, you will create the route which handles this incoming data:

```
app.post('/inbound', async (req, res) => {
  console.log(req.body);
  res.status(200).end();
}
```
_Checkpoint! Try your application out. Run your application using `node index.js`, then send an SMS message to your Nexmo number. You should see the data from that call appear in your terminal._

![](/articles/vonage-save-sms-airtable/terminal.png)

# Log SMS Messages to Airtable

Great! You've got a working Express.js server able to accept inbound SMS messages. Now let's push them to Airtable inside of the inbound message handler. Before you use this snippet, just a note that when referring to linked fields, Airtable requires you to provide that field's Airtable ID, not their value. For example, if you have a Number record for 4412345678900 that record will also have an ID. When creating a Message record, you need the record ID - not 4412345678900.

```
const Airtable = require('airtable');
const base = new Airtable({ apiKey: config.AIRTABLE_KEY }).base('YOUR_AIRTABLE_BASE_ID');

app.post('/inbound', async (req, res) => {
  const { msisdn, text } = req.body;

  base('Messages').select({
		filterByFormula: `Number=${msisdn}`
	}).eachPage(records => {
		createMessage(text, records[0].fields.Number[0])
	});

	function createMessage(message, numberId) {
		base('Messages').create({
			Message: message,
			Number: [numberId]
		}, err => {
			if (err) { console.error(err); return; }
			console.log('Message saved to Airtable')
			res.status(200).end();
		})
	}

  res.status(200).end();
}
```

At the top, you require the Airtable JavaScript client and initialize it with your base ID. If 'https://airtable.com/tblAuZ8qFuP2I8mDh/viwVyLmBMW772S9sd' is the URL of your Airtable webpage, then `tblAuZ8qFuP2I8mDh` is the base ID (the second long string is the view, which we don't require).

In the first section, you select all Messages where the Number value is equal to the incoming MSISDN (phone number), then get the Airtable ID of that Number field and pass it into our `createMessage` function.

The createMessage function creates a new Airtable row, and logs a success or error message to the console when completed.

_Checkpoint! Try your application out. Restart your application and send an SMS message to your virtual phone number. You should see a new message appear in the Messages table._

## Log New Numbers in Airtable

If you send an SMS message from a number that isn't already in your Numbers table, you'll get an error from Airtable. You must check when you receive a message if you already have a Numbers record. If you don't, then create one first, and if you do, you should create a Message as normal. Let's amend the message selection and create a new function to create a Number:

```
app.post('/inbound', async (req, res) => {
  const { msisdn, text } = req.body;

  base('Messages').select({
		filterByFormula: `Number=${msisdn}`
	}).eachPage(records => {
		if (records.length == 0) {
			createNumber(text, msisdn)
		} else {
			createMessage(text, records[0].fields.Number[0])
		}
	});

	function createNumber(message, msisdn) {
			base('Numbers').create({
				Number: msisdn
			}, (err, record) => {
				if (err) { console.error(err); return; }
				createMessage(message, record.getId())
			})
    }

	function createMessage(message, numberId) {
		// ...
	}

  res.status(200).end();
}
```

Now, if there are no records associated with the incoming phone number, you will first create a Number record and then a Message record. If one exists, we will go straight on to create a Message.

_Checkpoint! Delete all Messages and Numbers from your Airtable base. Restart your application and send an SMS message to your virtual phone number. You should see both a new number and message in Airtable._

## Send Confirmation to User

The fact you're now correctly logging data is brilliant, but your users have no idea that their message has been received. Let's fix that.

Before your inbound message handler, include the Nexmo JavaScript Node.js client and initialize it:

```
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
	apiKey: YOUR_NEXMO_KEY,
	apiSecret: YOUR_NEXMO_SECRET,
	applicationId: YOUR_NEXMO_APPLICATION_ID,
	privateKey: './private.key'
})
```

The `private.key` file should have been generated in this directory when you created a new Nexmo application. Make sure it's there (move it into this directory if not), and you'll be good to go.

Now that your client is included and initialized, update the `createMessage` function to send an SMS in reply once you've saved the Airtable record:

```
function createMessage(message, numberId) {
	base('Messages').create({
		Message: message,
		Number: [numberId]
	}, err => {
		if (err) { console.error(err); return; }
		nexmo.channel.send(
			{ "type": "sms", "number": msisdn },
			{ "type": "sms", "number": YOUR_NEXMO_NUMBER },
			{ "content": { "type": "text", "text": "Thank you for getting in touch. We will ring you back as soon as possible." } },
			nexmoErr => {
					if(nexmoErr) { console.error(err); return; }
			}
		),
		res.status(200).end();
	})
}
```

And with that, the demo is complete. Restart your application once more and give it a whirl. When you message in you should now receive a reply via the new Nexmo Messages API.

## What Next?

There are a lot of ways to build on this application—from more robust error handling, to asking for a user's name and logging it against a number, to a fully-fledged log of every interaction both received and sent. Feel free to get creative!

But for now, sit back and wait for the texts to come in.

The full code example is available at <https://github.com/nexmo-community/save-sms-airtable-express>
