<template>
  <div>
    <h1 class="font-display text-3xl md:text-6xl inline-block my-2 text-gray-800">
      About
    </h1>
    <article class="prose md:prose-xl mt-6">
      <p>My name is Kevin Lewis and I am a Developer Advocate at Orbit. My job is all about helping software developers discover, understand, and build using our community CRM.</p>
      <p>In the past I ran a developer events agency called Underland Events as well as a development studio called Underland Dev which specialised in building proof-of-concepts for clients. I have also worked at Vonage (previously Nexmo), FutureGov, Rebel Uncut, Major League Hacking, Digiotology, Rewired State and Young Rewired State moving between engineering and developer relations roles. I've also done quite a lot of contracting for folks like GitHub, Twilio, and Clarifai.</p>
      <p>I'm Lead Organizer of <a href="https://yougotthis.io">You Got This</a> - a set of community conferences focusing on core skills needed for a happy, healthy work life. Themes include professional development, self care, ethics in tech, creating a more inclusive industry, and self advocacy. Being Lead Organizer means running a few events a year, and supporting organizing teams in New York, Poland, and Germany run their events. I also look after the ongoing online presence between events including the website which hosts a freely-accessible talk library.</p>
      <p>I'm also part of the organizing teams for London Node User Group, London CSS, Barcamp London, and Thundercloud Ldn.</p>
      <p>Some of my previous projects include BASH Festival - a week-long coding festival for 13-17 year olds, Sex Tech Hack - a series of hackathons focused on intimacy and sexuality with technology, UKGovHack - a series of civic tech hackathons, and Hacksmiths - a hacker club which grew 500% while I ran it while improving diversity to be 49% not-men.</p>
      <p>
        My degree is in Creative Computing from Goldsmiths, University of London, and I co-authored a paper on the data players use when strategizing in social deception games. I'm a huge boardgaming fan - you can see my collection <a href="/games">here</a>.
      </p>
      <p>I live in Lincolnshire, UK, with my partner, daughter and small doggo. I've spent most of my life in London, with stints in Birmingham and Reading.</p>
      <img src="~assets/images/about-fam.jpg" alt="Amy and Kevin are in a grungy white tunnel. They are both looking at a small baby who is looking back at Amy.">
      <h2>Speaker Information</h2>
      <p>I am happy to talk or deliver workshops at events on JavaScript, git, serverless, APIs, running events, and more (try me!). I prefer delivering content for people earlier on in their career as that's where I believe I can have the most impact. I do have some requirements of events that I attend as a speaker or facilitator...</p>
      <ul>
        <li>Events must have diverse lineups. If you have no or very few speakers who are not white men then I won't be able to take part.</li>
        <li>If you event is not free to attend, you must provide some avenue for folks who cannot afford it to participate. Ideally this will focus on groups who generally get fewer opportunities.</li>
        <li>I won't pay to speak, and this includes tickets to your event.</li>
        <li>You must have a Code of Conduct and a clear plan on how to enforce it. I'm an events organizer - so I know what I expect to see.</li>
      </ul>
      <h3>Speaker Bio</h3>
      <p>Kevin is a Developer Advocate at Orbit and Lead Organizer of You Got This conferences which focus on skills needed for a happy, healthy work life. He is an experienced event organizer, avid boardgamer and dad to a small dog and child.</p>
      <h3>Photos</h3>
      <p>I prefer to use my cartoon avatar, but appreciate that some events prefer a real photo. With this in mind here is both:</p>
      <div class="grid grid-cols-2 gap-4 -mt-8">
        <img src="~assets/images/about-avatar-irl.jpg" alt="">
        <img src="~assets/images/about-avatar-cartoon.png" alt="">
      </div>
    </article>
    <p />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About - Kevin Lewis'
    }
  }
}
</script>

<script>
export default {
  head() {
    return {
      meta: [
          { property: 'og:image', content: `https://lws.io/api/og/template=main/title=About Kevin` }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .prose a {
    color: inherit !important;
    text-decoration: underline;
  }
</style>
