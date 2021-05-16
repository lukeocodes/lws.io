---
title: So You Want To Run Online Events
description: Many developer relations professionals are having to figure out the world of online events. In this talk, we'll cover how three different events have been run, each with their own tooling, and introduce a framework for assessing new approaches.
type: talk
youtube: 56rvtjZ9x3g
events:
    - DevRelCon Earth 2020
latest: 2020-07-07
---

So you want to run an online event. That’s what we’re going to be talking a bit about today. But first, although I’m very thankful for Lorna for not doing the really embarrassing, cringy intro, just a quick introduction that yes, my name is Kevin.

I work at Vonage as a developer advocate, but former to this, I ran a developer events agency. So I’ve run quite a lot of physical events, hackathons, conferences, meetups, and some more weird and niche event formats. So hopefully, I can share my experience as a physical event organizer taking things online for the first time.

I work for Vonage, if you’ve heard of Nexmo before, that’s gone away now, we’re called Vonage. So same great team, but we’re called Vonage now, and I’m really excited to be here, and sharing with you what we’ve learnt in running online events so far because I think it’s absolutely undeniable to kind of nod to the fact that this is the year that everything has changed for what we do as developer advocates and developer evangelists.

A lot of the work that my team do at Vonage, the community team, revolves arounpd physical events, and, of course, Coronavirus has put a dent in that. So we went out to get more knowledge around what it means to run a really good online event, run a few ourselves, and now I’m here to try and cover what it is we’ve learnt, so you can make more informed decisions when you start to plan your events.

I’m going to do this through three examples of events that have been run during lockdown. In fact, I think all of these also fully organized during that time as well. The Women of React Conference, You Got This From Home, and Vonage Developer Day, run in April…they’re not in chronological order. April, June, and May respectively.

While we’re doing this, we’re going to be looking at some core considerations and returning to these a few times around running online events, and the things you should be considering when picking your platforms in your setup. The first is the complexity of operation. If you have a more experienced team in running online events, for example, if you have lots of Twitch streamers in your team, you might be more comfortable with a more complex setup than perhaps those who don’t.

Next, how much creative flexibility do you actually want or need in your event? This can be things like on-stream branding, the placement of different elements on the screen, and interactive elements to your event. How much moderation bandwidth does your team have? If you have multiple channels that you’re trying to manage, you will almost certainly need more people to do this.

And then also how complex is your incident response procedure, dictates how many channels that your team can handle. The last two kind of come as a couple. The first is the attendee experience. What does your ideal attendee experience actually look like in terms of consuming content, networking, and interacting with your partners, and sponsors, and other stakeholders?

And finally, the speaker experience, how involved or complex can your speaker experience stand to be? For example, if you have an all internal speaker lineup, you might be able to have a more complex setup because you have the time and affordance to be able to train people on the platforms that you will be using for your event. Now, before we get on to talking about Women of React, the first three events I’m going to cover, I wanted to give you a quick primer on some key streaming terminology for those of you who don’t know already.

This is an example of two different scenes, one on the left and one on the right. You can think of scenes effectively as layouts, and each component in a scene is called a source. So a source could be a camera, a screen share, still images, colors, audio, and more.

So here on the left scene we have…this is meant to represent someone sharing their screen with their little camera hovering in the bottom right, and also an audio source required in order to actually hear that person. And on the right-hand side is a scene where you have two people side by side having a conversation perhaps an interview or perhaps more than two, a panel discussion, where in this case, you would need a camera source and a microphone source for each individual person plus whatever branding you want on the stream.

So scenes and sources are two bits of terminology that will come up a few times. Now we’ve spoken about the basics, let’s get to our first event. Women of React was run on April 25th. It was arranged all in about five weeks. And while I handled the streaming element, I absolutely have to give huge props to Rachel Nabors, Sarah Vieira, and Jenn Creighton who organized the majority of the event, found some amazing speakers, made sure that everything run smoothly, but I can talk about the streaming side of it.

Let me show you what some of the scenes looked like for Women of React. The kind of flow was that Cassidy, our MC, would chat to the audience, speak directly to them. Notice the different sources here, you have a logo in the top right, it’s kind of light pink background, this blue box on the right with some text that got changed based on the file on my desktop, these captions down at the bottom.

Then once the speaker was introduced, we moved into a scene which I very helpfully called “Speaker with Slides.” There’s a speaker up in the top right, and also a screen share in the middle. And then once their talk concluded, it went into a bit of a Q&A. So two people side by side just like that example scene I showed you just a moment ago. Women of React also had this scene layout which I called panel.

There were two of these throughout the day… I’m mistaken, three of these throughout the day. So there are the scenes that we used for Women of React, now let’s talk about how we constructed them. The first piece of the jigsaw is a tool that if you’ve done any streaming before, you will more than likely be familiar with. It’s called Open Broadcaster Studio.

And this is a piece of streaming software that looks a little bit like this. We have a canvas up in the top, and this canvas is what is currently being streamed out to the audience. And in the bottom, we have all kinds of bits that we can fiddle with. And we’ll notice the same things again, we have scenes, we have sources that comprise the scene that is currently selected, and then we also have an audio mixer and some other settings.

Let’s talk about this scene right here and all the sources that were within it. So we had this background. We had this blue box graphic, the text that actually populated that box, and that was sourced from a text file that I manually updated throughout the day. There were definitely better ways to do this if I had more time to prepare. There’s the captioning down at the bottom, and at the end of this talk, I will cover captioning for all the different setups that I’ve done.

We have the speaker video and audio in the top right, and finally, the speaker screen. But how did we get the speakers into OBS in the first place? Enter the next piece of the puzzle, Skype. So Skype allows you to take streams that are coming into a video call and pipe them straight into OBS using a network device interface, NDI, which is a standard protocol used in broadcasting technology.

And Skype is one of the few consumer tools that supports it, so we can pull it straight into OBS. I think Zoom also supports this. So the way we did this was that we gave access to this Skype video call to all of our speakers and anyone who was on the stream ahead of time. And then we told them to join.

Just as they were being introduced, they would share their screen, and then I would have access to their streams inside of OBS. I have to give a huge thanks to Nathaniel, my friend who showed me Skype for content creators which is what they call the NDI setting inside of Skype. I didn’t know it existed originally and it is very, very handy. The next part, though, is now we’re kind of moving…

So that’s the streaming side, now we’re going to move into how users actually consumed this content that we were streaming out. I’ll keep this very brief, but we use YouTube Live. I found it quite difficult to work with. There were some errors that weren’t very well explained or documented anywhere. But we used this purely because you could turn comments off. You can’t turn comments off on Twitch, you can’t turn them off on Facebook Live, plus you require logins on certain platforms.

YouTube Live seemed to be the best kind of general-purpose solution for just streaming video. And while we turn comments off, we had attendees interact with the event using a Discord server set up for the conference. For those of you who don’t know, Discord is quite similar to Slack, but it really revolves around role-based permissions as opposed to user-based permissions.

Let’s dig into Discord a little more. So as I mentioned, a lot of it revolves around giving people roles, and those roles permitting them access to certain privileges. We had three roles during the day. We had speakers, we had moderators, and we had organizers. Now we had setup a set of channels, rather than for each talk, we did them around themes of the conference in the idea that people can continue to chat after the event was over.

We also had some back-channel channels. We also had some back channels for speakers, and moderators, and organizers, and ability to join those was automatic based on roles provided to users. We did not have any voice channels for this event though because they are reasonably difficult to moderate.

Speaking about moderation, though, we only allowed access to Discord for people who preregistered for the event before the day. This was a choice to try and stop bad actors finding it on the day, and feeling like it could be their punch back. We also used a Discord bot called Dyno Bot which provides moderation commands such as kick, ban, mute.

Also turning on slow mode for channels or locking channels for a temporary amount of time or permanently. And, of course, none of this would have been possible without an excellent team of moderators… An excellent team of moderators, that was the end of the sentence. So taking a look at Women of React, there were kind of four parts to making this work.

Our speakers interacted directly with Skype. I grab their video and audio streams, made these nice scenes in OBS with their video and audio coming straight into it, and live-streamed that out to YouTube, and attendees had both YouTube open and Discord open if they wanted to take part in the conversations. Let’s go back to the core considerations, and see how we stack up in these five areas.

So firstly, the complexity of operation. This was by far the most complex of the three setups that I’m going to show you today. There were quite a few things that I had to manage as the sole operator of this stream, especially as this was my first online conference as well. So I had to manage this Skype call, I had to manage Discord, although obviously we had moderators and organizers, Discord was where I was telling speakers, “Right, it’s now time to join Skype,” so I had to keep an eye on that, and any debugging or troubleshooting happened over Discord, and I had to manage OBS, of course, as well.

Skype NDI is also interesting. It has a certain behavior which some might describe as a bug, every participant in the call can show up as a separate NDI source inside of OBS. And so you would imagine that their audio would get carried inside of that NDI source.

Instead, though, the entire call’s audio was carried in every individual audio stream in the mixer. So for example, when Cassidy, our MC, was having a Q&A session with Maggie, one of our speakers, if one of the two of them wasn’t muted, I was getting the full call audio twice leading to echo. Also, this was all very dependent on me, my machine not falling down, OBS not crashing, Skype not crashing, my network being okay, and things like that.

I’ve seen people do this setup on a hired machine, like in a data center somewhere and multiple people having access to that, but I just didn’t have time to set that up. Fortunately, here everything went fine, but I was gritting my teeth the whole day worrying that something would go wrong.

Next, well, on the flip side of it being the most complex, I also had the most creative flexibility out of the three options. Every scene could be fully designed, I could pick which sources were on and off their layouts, their positions, things like that. And while it was a little fiddly, I also played music into the stream during the breaks using a separate application, and that could kind of come straight into OBS, and then out to the stream.

And because I had full control, captions here could be designed to match the theme of the conference, and bake straight into the stream known as open captioning when everyone can see them. And as I said, we’ll talk more about captioning at the end of this talk. In terms of moderation bandwidth, though, we only had to moderate a single platform which was quite useful.

We had oversight of everything that was going on because attendees couldn’t create their own channels, that was a privilege only awarded to certain roles, and Dyno commands made handling all of these channels a lot easier. But it cannot be understated that there was quite a large team of moderators working to make sure that this event was a safe space for everyone. In terms of attendees, a bit of a mixed bag.

Attendees seemed to enjoy the event. We got positive feedback, but they did have to manage two separate platforms at the same time. They would be watching the stream on YouTube, and then if they wanted to participate, they also had to manage Discord and all of the channels in Discord, at that, unless they chose to mute certain ones. But they were given the ability to ask questions, which was quite nice, they had a way to impact the stream directly as it was happening.

And because this is a community trying to be built, this audience is now also captured inside of a Discord server, a Discord server that doesn’t disappear at the end of the event. Of course, many people disengaged, they came just for the event, but, you know, a fair number also continue to engage with it to this day. Next, the speaker experience and this is probably the bit where I want to give the biggest word of warning about this setup.

Speakers interacted directly with Skype, but they didn’t know when they were live necessarily. They didn’t know whether they could be heard because I could see that as the operator, but only as a result of the call. So essentially, I kept my mic muted throughout. I unmuted it at points just to say, “You’re live now,” and potentially any debugging happened over voice as well.

And Cassidy, the MC, had quite the job to manage this kind of troubleshooting conversation happening in her headphones while not letting that distract her from plugging the gap while we set everything up. And so yeah, there was a little bit of a disjoint between what was actually going live and the experience for speakers and Cassidy, the MC.

So that’s Women of React. When it came to You Got This From Home, though, I wanted to see how we could change and reduce the complexity of streaming, while keeping the speaker experience…sorry, while keeping the attendee experience for the event the same.

So this is very much the goal of You got This. The experience for attendees, as I said, was the same. They still watched it on YouTube, they still interacted in Discord, but I wanted to make my life as the operator a lot more chill. And as I gain more experience in running online events, I learned about more platforms, different ways to achieve similar results, and this is the culmination of that.

Let’s go back and take a look at the scenes. They will look a bit similar. So we had Carolyn, our MC, talking to the audience. Notice the branding at the bottom. Then we have a speaker speaking with their slides. This might look similar to what you are looking at right now for DevRelCon Earth. And then there is the Q&A session between the MC and the speaker.

At You Got This, we didn’t have any panel session, so we didn’t have a scene set up for that. As I mentioned, we still used YouTube Live and Discord as our output to attendees, but we changed the streaming software, this time to a piece of software called StreamYard. This is what StreamYard looks like.

It’s a browser-based streaming software, and this is the overall view. Let’s take a look at each part of this a little more closely. Firstly, I want you to notice this set of icons below the main canvas, they look like this. These are the seven preset scenes that StreamYard affords stream operators. They can’t be edited, but they are a decent set of opinionated layouts that will probably serve most people well for what it is they’re trying to achieve.

You notice one is selected right now, let’s move up to the canvas and see what that results in. It results in a stream that looks a little bit like this. You have speakers one or more on the left, and then you have the slides over on the right. And below the scene selector are all of the sources available to this scene. So you’ll notice here that two of them are blue.

This means that they are live to the audience, and then there is one on the right-hand side which is faded out. That means it’s an available source, but it can’t be seen, and it can’t be heard by the audience. Only the operator can see that this exists, and then can choose to pull it on when ready. People taking part in the stream as speakers, and workshop facilitators, and what have you, get told when they join that they can’t be seen or heard.

They’re what StreamYard calls backstage in the studio, and then the operator has full control over who is live at any point in time. Finally, moving over to the right-hand side of the layout are all the customizable elements like colors, and logos, and overlays. Overlays are quite interesting, though, they allow you to add graphical elements to your stream including full-screen overlays which you can use for things like “Starting soon,” or “Break,” or, ” Thanks for joining us,” graphics.

That in a nutshell is how we ran You Got This From Home. Very similar, but on the operation side, quite a lot easier. Let’s go back to those core considerations again. As I keep saying, the complexity of operation was much lower. There were fewer moving parts, and having backstage was really useful. One of the challenges with using Skype is Skype only allows a single screen share at a time.

And if someone shares their screen, it stops the screen share that was already happening before that. And that meant if a speaker joined our Skype call too early in Women of React and shared their screen, they could actually affect what is going out to the audience. Fortunately, that didn’t happen. All of our speakers were absolute pros and did things exactly as asked, but it does provide the little bit of a risk where, you know, I don’t know when things are out of the hands of stream operators.

This platform is also cloud-based, so if something went wrong with me, my co-organizer had the login and could get into it if needed. Next is the creative flexibility. These two again go quite hand in hand. For how much easier it is, you also lose creative flexibility.

There are seven preset scene layouts that you cannot edit, and there is also only one screen share at a time. We’ll talk more about why this might be a challenge a little later. In terms of moderation and bandwidth, exactly the same as Women of React because we used the same audience facing tools, except we had fewer moderators. I don’t know whether this means we could have had fewer moderators for Women of React, or perhaps it was about right, bearing in mind that because Women of React was an event for underrepresented groups in tech.

Unfortunately, that probably means it would attract bad actors more than You Got This would have. The attendee experience was exactly the same, but the speaker experience was greatly improved. As a speaker, it was communicated ahead of time in our little tech checks, but it’s also pretty clear from the UI inside of StreamYard that if you are on the canvas, you can be seen.

If your little source is blue, you can be seen…you can be heard and potentially seen, and if it isn’t, then you can’t. So there was no real question as to whether or not they were live or not, they had that the ability to get that information themselves. Also, speakers could drop in early, with no impact to the stream whatsoever because ultimately, as an operator, I can choose what is live, or apparently I’m out of time, I think I started a little late.

I’m going to go really quickly through these last couple of minutes if that’s okay, and then I’ll take questions in the Slack. So most events exist on a spectrum between this kind of live, high-produced TV show. For those of you who saw Apple’s developer conference, this very much sits inside of that, you know. They had fun little segues between sections all the way through to trying to emulate physical events.

The final event I want to show you quickly is Vonage Developer Day. This was an event run by my team, the community team of Vonage. Especially a shout out to Bethany Loft who kind of organized this primarily. In this scenario, we used a single platform for everything, and it was a very different experience for attendees. We used a platform called Remo, and Remo looks like this. So this is the networking mode, you have this kind of table plan quite kind of skeuomorphic, real-world concepts bought into a digital space, and attendees could double-click on each table to move into different video calls for up to six people.

They could also pan around this canvas, zoom in and out, and so on. The second mode is the broadcast which looks a little bit like this. inside of this broadcast, everyone sees it at once. You don’t get a choice between the two, the kind of event hosts chooses where attendees can sit. People can full screen either of these panes, but they can’t reorganize them, they can’t give more precedence to the screen share, for example.

People can also be marked as speakers which gives them access to the stage here at the bottom. Attendees don’t have access to this, and you can fluctuate roles to allow people access to this, and remove it at will. Recordings look a little bit like this, they look very similar to the broadcast view.

But because you can’s alter how the broadcast view looks, you also can’t alter how the recordings come out. For the last time, let’s go through these core considerations. Much easier, single platform to manage, but we did need to continuously shift roles in and out of speakers for certain users. Terms of creative flexibility, you can change the way that Remo looks. It has kind of, like, this customizable floor plan, but a lot of the interactive UI elements aren’t editable, and you can’t change the layout of the broadcast stage or the recording.

Terms of moderation bandwidth, a bit of a mixed bag. There’s three levels of chat, global, table, and DM, but there’s no way to turn off direct messages. So we really do rely on attendees telling us if there’s something that we need to be concerned by. For the attendee experience, single integrated platforms means one place to look at, but the platform also is quite resource intensive which some of our attendees didn’t hesitate to tell us about.

We could also live stream straight out to YouTube Live, so we could have kind of an inner circle of people who registered and also broadcast out if we wished. Finally, the speaker experience is exactly the same as the attendee experience. So that is Vonage Developer Day. Last thing before I wrap up is to talk about captioning in online events as each of these platforms have a different way of handling it.

In Women of React, the way we did those baked in captions was using the OBS built-in browser. Weichert [SP] Captioning, who did our live captioning, provided a web page and that web page had our captions, and then we could apply CSS directly on top of it inside of OBS hence it looked like the rest of the stream. For You Got This From Home, there is no way to share more than one screen so there’s no way to get captions into the stream itself.

Fortunately, the streaming package that Weichert Captioning used can also be ingested directly by YouTube so it’s toggleable via the Closed Caption button. And finally, for Remo, you would have to share an entire additional screen into the broadcast area with the captions, but also they would be captured in the recording exactly the same way. So I’m not going to spend much time wrapping this up because I’m being told that I am incredibly short on time.

Women of React had the most flexibility, but also was the most complex to run. You Got This From Home was way more clear for speakers, way easier for operators, but there was no way to bake in captions into the stream. And finally, Vonage Developer Day, while resource intensive, provided the kind of integrated experience for attendees, and it’s kind of clear where everyone is at during the event.

Yeah, I think that’s my talk. Thank you so much. Hopefully, I haven’t wrecked the schedule too much, and if you have any questions, I’ll be happy to take them on Slack.

> [Lorna] Awesome. Thank you, Kevin. That was super [crosstalk] interesting, and I think a really nice representation of just how many variables there are in this space, and all the different tools that I think we’re all still trying to come to grips with. I didn’t attend all of these, but I’ve seen some different combinations of the different platforms, and I thought this was a really nice overview.

One thing that I hadn’t really thought about before is the difference between how difficult it is for speakers versus how much engagement there is for attendees. So I really liked that distinction as well, I thought that was really nice. Do you think there’s a difference in the platform that you would choose whether you’re looking for a more attendee engaging networking experience versus just like straight-up education, would you approach those differently?

> I mean, education doesn’t also mean…like, it depends the level of interaction you want with your audience, right? I mean, there is this middle ground which I didn’t really explore much which is you live stream out to a platform such as Twitch exactly like this, but you leave the comments open. There’s still a way to interact with the event. There’s a single stream of activity happening which is a little easier to moderate as well.

So yeah, it’s very much a sliding scale. In terms of more education-led events, it depends how much interaction you need in order to educate people, right, in the setup. If you’re after something more complex, I would probably push towards something which has more robust community engagement tools like Remo.

> Yeah. I was with you on the Remo call. We like this platform so much that we now use it for internal stuff. We did some hackathon stuff on it since we did our public platform, so it’s completely different to the others, and I think it’s less approachable for community groups.

But I think that’s been a really nice one. We’ve got a couple more minutes of questions, no one’s flattening me in the channel, so then I get to ask more questions which is great. The events that we’ve talked about today have been all single track, do you think multitrack works in digital or something like DevRelCon where we just do…you can come on different days and see different stuff.

> Yeah, it depends what the experience is, and what the expectations are of your audience. I’m a big fan of single stream conferences. I think everyone gets a shared experience which also makes networking a little easier. All of these solutions do work multi-stream. I think where you’re streaming out to a platform like Twitch or you’re streaming out to a platform like YouTube Live, they’re just a bit more clunky because they’re not really intended for multi-stream activities.

Remo also is a single stream platform you would need to set up, like, several events in order to facilitate that, and then your attendees get split networking-wise between those events. I have seen multi-stream platforms, though, and yeah, they work.

> Yeah, I saw State of the Map at the weekend. And they were trying to say like, go to the schedule, click on this YouTube stream for this and that YouTube stream for that, and I was a bit like, oh, and of course, they use IRC and multiple other external kind of attendee integration platform so it’s all a little bit…

Yeah. Your ability to interact with all your attendees and make it… Like, people think, “Oh, we communicated it, it’s fine.” When you’re in a room and you can grab a megaphone and know everyone’s heard you, that’s fantastic. You just lose that online. Simplify it as much as possible because you will lose people between these different strands otherwise.

> Yeah. I saw a staff conference where a person was, like, normally I would be in the hallway chasing you all into the room, and now I just have to imagine that you’re here already. And it is a really different event when we think about it in that context. And I’ll just say thanks, Kevin. That was awesome. I really enjoyed your talk. ♪

[music] ♪
