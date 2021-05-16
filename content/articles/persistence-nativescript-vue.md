---
title: Persisting Data Between App Launches With NativeScript Vue
published: 2020-01-02
---

Having users re-login on every app launch is probably not what you want. In this post I'll be covering how to setup a Vuex store in your NativeScript-Vue app and persist app data between launches. While this pattern will work for any data, we'll be setting it up specifically in the context of user authentication.

<!--more-->

## Our tools

* NativeScript-Vue allows full native mobile applications to be built with one Vue.js codebase.
* Axios is a JavaScript library to make HTTP requests. You can add it to your project with `npm i axios --save`.
* Vuex is an application-wide store that allows functions and data to be used anywhere in your application. You can add it to your project with `npm i vuex --save`.

## An overview

* First we'll create a login page which retrieves user data from an API
* Next, we'll set up a Vuex store which stores the returned data
* After making sure everything works, we'll push to a new page once logged in
* Then it comes to persisting data through app relaunches - which will require an edit to our Vuex store and our login page.
* Finally, we'll setup logout functionality

## Creating our login page

I've created a basic login page which you should drop in your `components/` directory

```
<template lang="html">
    <Page @loaded="checkToken">
        <ActionBar title="Login" />
        <StackLayout>
            <TextField v-model="email" hint="Email Address" />
            <TextField v-model="password" hint="Password" secure="true" />
            <Button text="Login" @tap="login" />
        </StackLayout>
    </Page>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        checkToken() {
            // We'll use this later
        }
        async login() {
           axios.post('LOGIN API URL', {
               email: this.email,
               password: this.password
           }).then(token => {
               // Returned data is in token
               console.log(token);
           })
        }
    },
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
```

This renders a text input for an email and one for a password. When the button is pressed it will run the `login()` method. The login method completes whatever external authentication logic you require (in my case an external API call) and then returns the data from that API.

We also set up a `checkToken()` method which is triggered when the page is loaded. We'll use this later.

## Setting up our Vuex store

As previously mentioned, Vuex can be used to store data which is accessible to all of your application components. Create a file at `app/store/index.js` and setup the Vuex store:

```
import Vue from 'nativescript-vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    token: false
}

const mutations = {
    setUser(state, token) {
        state.token = token;
    },
    clearUser(state) {
        state.token = false;
    }
}

const actions = {
    setUser({ commit }, token) {
        commit('setUser', token);
    },
    clearUser({ commit }) {
        commit('clearUser');
    }
}

const getters = {}

export default new Vuex.Store({state, mutations, actions, getters});

```

We then must include the store in our application by editing your entrypoint file (often `app.js` or `main.js`):

```
import Login from "./components/Login"; <-- import the login page
import store from "./store" <-- import the store
new Vue({
    store, <-- include the store
    render: h => h("frame", [h(Login)]) <-- initially render login page
}).$start();
```

We will trigger (or 'dispatch') the action `setUser()` once we've got the data we want to store, and `clearUser()` on logout.

## Push to a new page once logged in

Once logged in there are two things we need to achieve:

1. Storing the data in the Vuex store
2. Navigating the user to another page

Let's assume our full app starts at `./components/App.vue`, and edit our Login page with that in mind:

```
import App from "./App";
export default {
    methods: {
        login() {
            axios.post('LOGIN API URL', {
                email: this.email,
                password: this.password
            }).then(token => {
                this.$store.dispatch('setUser', token).then(() => {
                    this.$navigateTo(App, {
                        clearHistory: true
                    })
                })
            })
        }
    }
}
```

This is a great point to take a breather and check the app runs.

## Persisting login after app relaunch

There are two parts of this - editing the Vuex store to also store data locally as key-value pairs, and then recalling the locally-stored data and checking if the token exists (if yes, pushing user to new page). To achieve this, we'll need to import the NativeScript ApplicationSettings package.

In the Vuex store:
```
// At the top
import * as ApplicationSettings from "application-settings";

// in setUser() action
setUser({ commit }, token) {
    commit('setUser', token);
    ApplicationSettings.setString("token", JSON.stringify(token));
}
```

Now we have to be able to recall this data. Let's create a new action below `setUser()`:

```
loadFromStorage(state) {
    const storedState = ApplicationSettings.getString("token");
    if(storedState) {
        const token = JSON.parse(storedState);
        state.token = token;
    }
}
```

And finally let's use the `loadFromStorage()` Vuex action to check if there's an existing token inside of the login page.

```
checkToken() {
    this.$store.commit("loadFromStorage");
    if(state.token) {
        this.$navigateTo(App, {
            clearHistory: true
        })
    }
}
```

And that's pretty much it. Our Vuex store holds onto our token - when saved it also saves it in ApplicationSettings. Once the Login page has loaded, we load in data if it exists and if it does we navigate the user directly to the App page. There's one thing missing though...

## Handling user logout

Just as we saved data in the Vuex `setUser()` action, we will want to remove it in `clearUser()`:

```
clearUser({ commit }) {
    commit('clearUser');
    ApplicationSettings.remove("token");
}
```

Now, when we call `this.$store.dispatch('clearUser')` on clicking a logout page we clear the local storage too. We should probably redirect back to the Login page after this.

## Next steps

If your tokens have an expiry on them, you could implement checks as part of your `loadFromStorage()` Vuex action. Your pattern for handling authentication might require you to be saving multiple pieces of data.

[I've put together the final example here](https://gist.github.com/phazonoverload/76985cf84414699a61f2c665578dbad6), and if you have any questions please feel free to reach out.
