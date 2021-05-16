---
title: Accessing MongoDB Atlas From Netlify Functions
published: 2020-06-05
---

I recently tried to use a MongoDB Atlas instance with Netlify Functions and couldn't seem to connect to the database (I could locally). Here's why, and how I fixed it

<!--more-->

## The cause

When setting up a MongoDB Atlas Cluster you must provide a list of allowed IPs - with a one-click button to enable your own machine.

During local development everything will work file, but when you push your functions to Netlify the IP address will no longer match the one in the allowed list.

Unfortunately, Netlify don't provide the IP range for the machines that run serverless functions (as is the very nature of serverless), so this led me down a rabbit hole.

## The fix

After spending a couple of hours to find the solution, I discovered it was just a single button click. In 'Network Access' in your cluster settings click 'Add IP Address'.

Then click 'Allow Access From Anywhere' and confirm your changes.

Hopefully this short post can save you debugging time.
