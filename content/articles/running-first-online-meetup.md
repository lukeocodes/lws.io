---
title: Running My First Online Meetup
published: 2020-03-14
---

A month ago I'd never considered running online events. With recent news around COVID-19, many event organizers are being forced to find quick solutions to still bring people together and provide valuable content to their communities. [London CSS](https://twitter.com/londoncss) was one of them, making the decision to go online-only just a few days before our event. <!--more-->

⚠️ Disclaimer time - I'm not an expert, I've done this once, and I only learned what [Open Broadcaster Software (OBS) Studio](https://obsproject.com) was three weeks ago when recording an event in the London Vonage office. But this is what I now know, and I hope it can be of some use to those also having to figure out what they're doing on the fly.

# Speakers

Speakers were the group who found the adjustment to going online the weirdest - speaking 'to the room' when at home is a unique experience if you haven't done so before.

Speakers participated using a Google Hangout, but any video conferencing tool would work. Thirty minutes before the event we asked them to join the call and test their audio, video and screen sharing setup. We explained, in more detail than we would in person, who would introduce them, what we would broadcast and when (their camera vs slides for example), and that we wouldn't interrupt unless there was an issue.

# Attendee Experience

One unintended side effect of running a meetup online is that the event is immediately more accessible to your audience. Not only can they participate if sick or self-isolating, but there's no cost involved with travel.

Twitch (our chosen streaming platform) has an option in settings that automatically save broadcasts to your account (for 14 days - so make sure to grab them before they go), so folks can also watch the content on-demand. This means people who must work can also get value from the content too.

We worked with the wonderful White Coat Captioning to make sure that there was a human captioner ensuring that we were getting good quality live transcripts out with the stream. Andrew joined the speakers' video call to get live audio, and the output was updated on a webpage we were given access to.

The only other consideration is how much speaker <> attendee interaction we wanted to facilitate. Having not done this before, we decided not to invite Q&A, but if there were good questions in the Twitch chat we would surface them to the speakers at the end. Ana and Oliver (my London CSS co-organizers) were monitoring the chat throughout so we wouldn't miss anything.

One of our speakers, Glen, later said that he found having the live chat open while they spoke super distracting. This means it's our job as community organizers to find a non-distracting way of making sure that this doesn't just feel like a recorded video with no interaction opportunity.

# The Set-Up

![Two screens - on the left is a hangout chat. On the right is four open windows.](/articles/running-first-online-meetup/setup.jpg)

I think you need at least two screens to do this. On the left is a fullscreen conference call (we used Google Hangouts). On the right is:

1. [top-left] The output of the live captioning. I sized the window to the aspect ratio I wanted in the output.
2. [bottom-left] The Twitch Stream Manager - so I could both see what was going out (with about a 10-second delay given my 'okay' home internet) and the chat which Oliver and Ana were moderating.
3. [bottom-right] Team Twitter message thread so we could keep on top of the event.
4. [top-right] Open Broadcast Studio. This was the action-station. Let's talk more about it...

## Open Broadcaster Software Studio

OBS is for recording and live streaming. You create a set of __scenes__ that can be toggled between. A scene has one of more __sources__, which can be a screen capture, an audio input, or a static graphic/text. Scenes also describe the size, position and (in the case of audio) levels of sources.

Sources for the main scene:

* A graphic for the bottom of the screen - this includes event logo and sponsor logo.
* A long blue bar graphic for the top of the screen.
* A series of text elements - one for each speaker with their name, twitter handle and topic, and one for when there was no speaker promoting the event's Twitter handle. These were all positioned in the center of the blue bar.
* A display capture of the whole screen with the hangout (I cropped some Google Hangout chrome from the top-right).
* A display capture of the window with the captions , also cropped to remove all browser chrome.

### Capturing Call Audio in OBS

The only sources I didn't mention are audio-related.

If you want to capture your own mic audio, OBS provides that by default in the Audio Mixer under the name 'Mix/Aux'. If you won't want to publish this then hit the loudspeaker icon 📢 to mute yourself.

To capture the call audio and include it in OBS required an additional piece of (free) software. [iShowU Audio Capture](https://support.shinywhitebox.com/hc/en-us/articles/204161459-Installing-iShowU-Audio-Capture-Mojave-and-earlier-) can be downloaded and installed, which will provide a new audio 'input' which will be whatever should be coming out of your computer's speakers.

Create a new Audio Input Capture in OBS, and pick iShowU Audio Capture. The input should now be added the to Audio Mixer. Right-click in the Audio Mixer pane and pick 'Advanced Audio Properties'. Make sure the item with iShowU has 'Monitor and Output' selected in the monitoring settings. This means you can still hear the output while OBS has access to it.

### Other scenes

* "We'll be starting soon" graphic
* "Standby - we're experiencing some technical difficulties" graphic
* "Thanks for stopping by. Follow @LondonCSS for future events" graphic

And while our event didn't require it, it might also be a good idea to create a scene to flip to if you're handling data you don't want your audience to see (like secret keys).

Create all of these ahead of time and you can toggle scenes/sources on or off during the stream.

### How to stream from OBS to Twitch

This was the easiest part, surprisingly to me. In the Twitch Stream Manager is a 'stream key'. Copy it and paste it into OBS' Stream settings and leave the other options as default. Now the 'Start Streaming' button in OBS will put you live on Twitch.

## What I Would Change

There are four things I would love to change in the future:

1. Facilitating a formal Q&A period and making this known to attendees.
2. Making sure that there is an opportunity for watercooler chat between attendees for a little while after the event.
3. Our team comms were good enough but not amazing. Subtly asking questions such as "are we on time still" is easy in person, but not so much online unless you are glued to a private chat thread. The importance of this was much higher than I expected.
4. I've just found out that [Stream Decks](https://www.elgato.com/en/gaming/stream-deck) are a thing, which can allow you to change scenes using an external device. I plan on getting one and trying it out to see if it makes managing the stream any easier.

I hope this is useful. I must say thanks to my colleagues at Vonage (where we have a whole Slack channel dedicated to streaming) for their advice and support, especially [Lorna](https://twitter.com/lornajane) who spent 20 minutes in a call helping me test the setup. Many of my colleagues have got this whole setup much more polished than I have, but with about 6 hours to work it out I'm happy enough with how it came together.

Given that I won't be at any events for the next while I am happy to help community members take their meetups online if you lack time/people. Just send me a message on [Twitter](https://twitter.com/_phzn).
