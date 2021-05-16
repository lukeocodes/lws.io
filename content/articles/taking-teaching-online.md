---
title: Taking Your Teaching Online
published: 2020-03-16
---

Over the weekend I was asked by some lecturers at my alma mater about taking lectures online following [my blog post last week about running my first online meetup](https://dev.to/_phzn/running-my-first-online-meetup-o1h). Having researched options for a few hours, here are my thoughts on how to get going on a minimal or zero budget.

<!--more-->

Again, thanks to my amazing colleagues at Vonage for helping me gain this knowledge and make sure I can share it. They rock!

# Considerations

Here are the considerations I've taken into account:

* You may just want to talk to your class without slides
* You may want to run through a slide deck with or without your webcam
* There needs to be some way to handle live questions and have some feedback from students
* Has to be cheap or free
* The setup must be minimal

I'm going to rip off the band-aid quickly and say that if you want to share your slides and your voice, and broadcast this content to your class live, you'll need a paid solution or be willing to do 10 minutes of initial setup before your first class.

## You just want to talk, no slides

If you just want to talk to your class and the need for slides isn't there, I'd take a look at YouTube Live. Here's how to do it...

![YouTube showing the Go Live button](https://dev-to-uploads.s3.amazonaws.com/i/5aznd92lm3voy65dk33l.png)

Firstly, go to YouTube while logged in, click the Create button in the top right and click Go live

![Livestream settings](https://dev-to-uploads.s3.amazonaws.com/i/o7jexqzf0fwxpg12m29d.png)

Pick Webcam at the top. Put in the name of your class, make it unlisted (you must provide the link for it to be visible) and pick schedule for later.

Next, make sure you pick "No, it's not made for kids", as this is required for live chat to be available. In the advanced settings make sure live chat is turned on.

![Livestream management](https://dev-to-uploads.s3.amazonaws.com/i/lb6fbckktgjvwwoxlacf.png)

Once scheduled, the livestream will be visible in your Manage tab. You can share the URL to your students.

![Livestream view](https://dev-to-uploads.s3.amazonaws.com/i/xmjerr1btdchaw4bz9dt.png)

When you choose to go live this will be your view - you have the live chat on the right which students can use. You can check your video, and when you're finished you can end the stream.

## You want to show slides and have some budget

I'd recommend checking out <https://www.crowdcast.io>, <https://livestorm.co> or <https://zoom.us>. Zoom does have a free tier, but it caps at 40 minute sessions and 100 participants.

## You want to show slides and have no budget

To achieve this, we're going to set up [Open Broadcaster Software (OBS) Studio](https://obsproject.com/). It is free and open source, and available on Windows, Mac and Linux.

Before we get to that, let's once again setup a YouTube session.

![Livestream settings for streaming](https://dev-to-uploads.s3.amazonaws.com/i/t481u8q3mw3llz7bcey8.png)

Instead of the Webcam tab, choose the stream tab and fill in all the same information. Once you've done this you should be directed to the manage pane. All you need from here is to copy the Stream key for later - this is how you'll hook up OBS to YouTube.

![Stream key location](https://dev-to-uploads.s3.amazonaws.com/i/63s9l92lzg6ovhyw2x3p.png)

Go back to OBS, open the settings, go to the stream section. Pick YouTube as the service, and paste your stream key in the pane. Click OK and close the settings.

Go to the Sources pane, click the ➕ and pick Display Capture. Once you've done this you should be able to see your screen in OBS.

If the audio mixer is empty, add another source and make it the Audio Input Capture. Make it your microphone and you should see the capture appear in the audio mixer. This represents the audio being picked up by the mic - you can always mute your mic by clicking the loudspeaker icon 📢.

If you want to stream your webcam as well, add a Video Capture Device source and pick your webcam.

![OBS with multiple sources](https://dev-to-uploads.s3.amazonaws.com/i/h0pfu21qiz3xqr2nserw.png)

You can use the handles along the red outline of each source to resize them. You might choose to have your webcam overlaying the screen, or resize the screen too so you can see it all, like so:

![Suggested layouts](https://dev-to-uploads.s3.amazonaws.com/i/wn11t73iadq6ot0ugyk6.png)

Your OBS setup should look similar to this, with at least one item in the audio mixer, and the canvas at the top looking how you want when you livestream:

![OBS livestreaming](https://dev-to-uploads.s3.amazonaws.com/i/rxss2h26qoptzehaq2fz.png)

Once this is done, hit "Start Streaming" in the bottom right and check your YouTube studio stream manager. There will be a delay, but as long as it's streaming you should be good. Remember to check in on the YouTube chat.

Once you're finished, just Stop Streaming inside of OBS.

# The limitations

If you want to play sound you'll need an additional piece of (free) software as detailed in my blog post last week. I am a macOS user so, while I'm sure there are equivalent tools for Windows and Linux, I don't know what they are.

This is the only place I'd recommend altering teaching materials/style to just tell people to go away and watch the content and come back in 5 minutes, etc.

I hope this helps people who are having to work out how to deliver content online without prior experience. If you need advice send me a Twitter DM.
