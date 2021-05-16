---
title:  Running AV at the Women of React Conference
published: 2020-05-10
---

On April 25 the first [Women of React](https://womenofreact.com) Conference took place online. Ten speakers and two six-person panels happened over the 6 hours, and the whole event went from inception to delivery in about 5 weeks. As of writing the stream has had 22,000 views both live and on-demand, with a peak concurrent viewership of 1360 people.

<!--more-->

I was approached by [Rachel Nabors](https://twitter.com/rachelnabors) to ask if I was willing to help with the A/V for the conference after some of my earlier posts. My team at [Vonage](https://developer.nexmo.com/team) are serious about supporting initiatives that have a positive social impact, and highlighting the amazing work of women in tech very much has the type of impact we love to see. I was given a few days by my manager to support the conference technically.

While I was happy to provide opinion and guidance using my general event experience, my role was firmly on the tech to get the stream delivered. Rachel oversaw the event and handled curation, [Jenn Creighton](https://twitter.com/gurlcode) looked after moderation with an expert team (and support from [Aisha Blake](https://twitter.com/AishaBlake)), [Sara Vieira](https://twitter.com/NikkitaFTW) supported in multiple ways (but most notably built the awesome website), [Elizabet Oliviera](https://twitter.com/miuki_miu) lent her design eye to creating a cute brand, and [Cassidy Williams](https://twitter.com/cassidoo) was the emcee for the day.

It's not right that I cover any of the areas looked after by them, so this post is all about the stream - how we made it work, what the shortcomings were, and what I (personally) would do differently next time.

## Platforms

The event took place across three platforms.

Our [YouTube Live stream](https://www.youtube.com/watch?v=K8MF3aDg-bM) was used purely as a broadcast platform, and we chose it because of it's ability to turn off live chat and comments so we could moderate just a single space.

People who pre-registered were granted access to our Discord for the day (1500 people did from the 3200 registered). We didn't provide invite links for people who were joining on-the-day to avoid trolls finding it and deciding it could be a place to cause havoc.

Finally, Skype for speakers and panelists (only) to present their camera and screens. There's a reason we used it which we'll cover shortly.

## OBS Studio

OBS Studio is a free and open-source piece of streaming software. In it, you can include __sources__, which can be anything from a microphone or camera input, 'virtual' audio inputs from software, browsers, display captures, and more.

Any number of sources are then combined into __scenes__, which is a specific view that an audience-member will see. For example, a scene could comprise of a webcam and microphone, a display capture to show the screen, a logo and some text.

![Screenshot of No Experience Required](/articles/women-of-react-av/ner.png)

This is an example of a scene from my fortnightly coding stream. Sources include the background gradient, my camera and mic, two display captures (one for my browser, one with captions), and some text/images along the top.

The final key concept to understand is the Studio Mode. When turned on, you get two 'canvasses' to work with. The __preview__ canvas is where you can get things ready - toggle settings, move sources around, etc - and the audience don't see what you're doing. Only once you transition the contents to the __program__ canvas is that content live. This is critical to running a smooth show of moving parts.

![OBS Studio Mode during the event](/articles/women-of-react-av/obs.png)

__TL;DR: OBS is a piece of streaming software. In it, you set up scenes made up of sources. You can fiddle with the active scenes/sources in the preview canvas and them transition it to the program canvas to go live.__

## Speakers Setup (Skype/NDI)

In the run-up to the week, Rachel and I spent some time with every single speaker and panelist (who I'll refer to collectively as participants from here on). This served not only as a friendly check-in, but ensured I could do all of the pre-event set up required.

To make the stream work with the design we wanted, we needed to capture each participant's camera separately from each other and a screen share. There are a number of ways to do this, but we opted to use [Skype for Content Creators](https://www.skype.com/en/content-creators/).

Once enabled in the advanced Skype audio & video settings, other applications can ingest an 'NDI source' for each speaker. To do this in OBS you'll need to install [a free plugin](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/).

As a participant's connection quality alters, Skype will send you the highest quality video stream possible. As a result, their video can shift size. From the Skype FAQ:

> To keep a consistent size in OBS:
>
> 1. Right-click the NDI source, and then select Transform
> 2. Select Edit Transform.
> 3. Change the Bounding Box Type to Scale inner bounds.

The other shortcoming (possibly bug) with this solution on macOS is that the audio streams are not split per-user like the video is. This means that if you have two active NDI sources (the MC chatting to the speaker, for example), then you'll hear an echo if you don't mute one of the audio sources.

During this call with speakers we also asked them for name pronunciations, spoke about any off-limit Q&A topics, and how the whole event would work technically (more on this later).

## Audio Control

Other than the Skype call audio coming from each NDI source, we also had music playing in the break from [Pam Selle](https://beats.thewebivore.com/). These were pre-recorded downloads from Pam's site, made into a VLC playlist and played on my local computer.

To split VLC audio into OBS from the rest of my system, I used [Loopback](https://rogueamoeba.com/loopback/) which is not free (sorry). This was important so I could continue to set up following speakers without streaming all of my computer's audio.

![Screenshot of Loopback](/articles/women-of-react-av/loopback.png)

This Loopback setup results in a new audio input option in OBS called VLC, which only carries audio from that specific application. You'll notice I have a few of these for use in other streams.

As the stream operator, it was incredibly helpful to be able to unmute my mic on Skype and speak to participants on the call without streaming my microphone audio. I used this extensively during the day to say things like "you're live" to participants so they know to speak.

## The Women of React Sources & Scenes

One interesting feature of OBS is that scenes can also act as sources in other scenes. I used this to create "component" scenes which were common throughout multiple main scenes.

![All scenes in OBS](/articles/women-of-react-av/scenes.png)

### Component Scenes

#### Captioning

More on captioning later, but this component included a web browser with some pre-applied CSS. Wherever this scene was included as a source, the size and position of these elements would be the same.

![Captioning Scene](/articles/women-of-react-av/captioning.png)

#### Schedule Box

Again, I've got a section on this particular feature later, but the component scene included the blue box and text source.

![Schedule Box Scene](/articles/women-of-react-av/schedule.png)

#### Speaker/Screenshare/MC

These three scenes were all similar - each including a number of Skype NDI sources. Because the speakers would be shown in a number of contexts (during the talk and during the Q&A), I could change which speaker source was visible in one place and know it was updated in both main scenes.

Skype also makes the current screenshare a source, so this was made available in the Screenshare scene.

![Speaker scene sources](/articles/women-of-react-av/speaker-scenes.png)

Here are all the sources inside of the speaker scene. You can toggle visibility with the eye symbol, and when turned on it is immediately accessible in the Talk With Slides and Speaker Q&A scenes.

You may also have noted the Placeholder Video source. This was a video source from my own computer, which I can turn on when configuring scenes and no one is live on a Skype call with me.

### Main Scenes

#### One Cam

![One Cam Screenshot](/articles/women-of-react-av/one-cam.png)

Used while it's MC-only, during opening/closing talks, and for yoga

#### Talk With Slides

![Talk with Slides screenshot](/articles/women-of-react-av/talk-w-slides.png)

#### Speaker Q&A

![Speaker Q&A screenshot](/articles/women-of-react-av/qa.png)

#### Panel

![Panel screenshot](/articles/women-of-react-av/panel.png)

Participant names are text sources. Participants and their names are grouped in OBS into "Fireside Chat", "Q&A" and "Farewell", so I could easily toggle each entire set on and off.

#### Text

![Text scene screenshot](/articles/women-of-react-av/text.png)

All a pre-made static image except the top line of text, where there were several pre-made variants.

## Schedule Box

The schedule box was made up of two sources. The first was a pre-made graphic of the blue box with 'glitches'. The second was a text element which read from a local file. Throughout the day I manually updated that file with what should be displayed.

Given more time I would have pre-made all variants as static text elements and toggled them on/off.

## Captioning

We worked with the amazing Andrew Howell from [White Coat Captioning](https://whitecoatcaptioning.com/) to make our live captions work. Whether online or in-person, there are two requirements to make working with the team easy:

1. A way to get live (or near-live) audio from the participants.
2. A way to display captions from either a live-updating webpage, or a service that lets you ingest live captions in a standard format.

To make sure Andrew could get audio, he hung out in the Skype call which speakers joined/left throughout the day. This meant he wasn't subject to the ~10-second delay in getting the content on YouTube Live.

The captions were set up in OBS using the browser source type. This is a literal web browser which you can give a URL and provide custom CSS to. Our CSS set the background color, font color and spacing.

White Coat Captioning stenographers output their live transcriptions using a platform called StreamText, and each event has a custom URL. Here are the full browser settings I used in OBS:

* URL: https://www.streamtext.net/player?event=WomenofReact
* Size: 1860 x 200 (and positioned near the bottom of the screen)

And used this custom CSS:

```css
#header, #messenger-wrap, #footer, .player-status { display: none; }
#content { background: #130F41; color: white; }
#player-wrap { display: block; width: 100%; }
#streamTextPlayer {
  padding-top: 0.25em !important;
  color: white;
  font-size: 40px !important;
  line-height: 1.5 !important;
  height: 100vh !important;
  width: 100vw !important;
  font-family: Arial !important;
  font-weight: bold;
}
```

## Stream Deck

When you cut back all the marketing, the Stream Deck is a set of programmable macro keys that you plug into your computer. It has really nice integration with OBS.

{% twitter 1254207811292143616 %}

I set up the following keys:

* Change to the MC-Only view (One Cam scene with MC scene source)
* Change to the Talk Q&A view (Speaker Q&A view)
* For every speaker a button which would turn off all other speaker sources, turn on that speaker and change to Talk With Slides source
* For all panels (fireside chat, Q&A, farewell from team), turn off all participant sources from the Panel scene, turn on only the right people, and change to the Panel scene
* For all 'holding' text-only variants, turn off all sources in that scene, turn on only the right one, open VLC and hit the play key, then change the scene to Text.

For every one of these keys, I lined up these settings in the preview canvas, so I was just one click away from putting it live.

## On the Day

15 minutes before each session began (which was often 10 minutes from the end of the current talk), check in with speakers in the private speakers-green-room channel on Discord.

After the talk and Q&A of the current speaker is over, move the the MC-only view, and tell the speaker to join the Skype call they already have access to.

Once set up, I unmute my mic in Skype and tell Cassidy we're ready (not streamed). She nicely segues and I transition the speaker live, unmute my mic and tell them that they're live.

5 minutes from the end of each talk, I unmute my mic and ring a bell on my desk, which speakers already know indicated a 5 minute warning.

Once the talk is over, I transition to the speaker Q&A view, unmute my mic and tell Cassidy she's live. Once the Q&A is over, I transition to the MC-only view and tell Cassidy through Skype.

Rinse and repeat.

## Having an Emcee

Having Cassidy as our emcee was absolutely invaluable. She was ready to plug gaps as we required to keep the day running smoothly (externally), even if it's actually chaos.

My only note around having this role is that you should be super clear ahead of time what you need from your emcee. They are closer to an organiser than they are a speaker, and they should expect to improvise as you require. This is more a note from my previous event experience - it worked really well for this event.

## What would I change?

* It came down to me, and if my machine failed or I was ill, the event would have fallen apart. We didn't have time to create a strong contingency, but it should have either been to rent a colocated streaming machine that multiple organisers had access to, or to use an online streaming package like Streamyard.
* Related - it was a LONG day over in the UK. The event began around 5pm and ended near 1am. If we had the provision to share the streaming workload on-the-day I could have had a break.
* Skype not splitting audio was a huge pain, and required me to make some quick moves while live to fix. I think the solution is to have one Skype source always on and active, but hidden off-canvas, and mute all speaker sources.
* I'm not sure the whole event needed to be live (Rachel did initially say this). Talks could have been recorded and then the live portions could have been the Q&As and panels.

## Summary

Hopefully this is a useful insight into the various puzzle pieces that is running an online conference. This was my first, and there were plenty of points for improvement.

If there's anything you think could value from further explanation please tell me so I can make more valuable resources and support community organisers take their initiatives online.
