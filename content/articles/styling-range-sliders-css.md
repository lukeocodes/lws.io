---
title: Styling Range Sliders with CSS
published: 2020-01-05
---


In this post I will cover how to custom style a HTML range input (the slider). You can also get this to work in Internet Explorer, but this guide will just cover Webkit-based browsers and Firefox.

<!--more-->

![Default range slider with no custom CSS](/articles/styling-range-sliders-css/default.png)

The only thing you need to know terminology wise is that the long bar which indicates the length of the slider is called the 'track' and the knob that you slide along it is called the thumb.

## Getting rid of the main default styling

```css
input[type="range"] {
 -webkit-appearance: none;
}

input[type="range"]:focus {
 outline: none;
}
```

## Styling the track

```css
input[type="range"]::-webkit-slider-runnable-track {
 background: tomato;
 height: 5px;
}

input[type="range"]::-moz-range-track {
 background: tomato;
 height: 5px;
}
```

## Styling the thumb

```css
input[type="range"]::-webkit-slider-thumb {
 -webkit-appearance: none;
 height: 15px;
 width: 15px;
 background: pink;
 margin-top: -5px;
 border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
 height: 15px;
 width: 15px;
 background: pink;
 margin-top: -5px;
 border-radius: 50%;
}
```

You'll notice that the thumb requires a `-webkit-appearance: none;` in the webkit-prefixed version of these rules.

![Range slider with orange track and peach round thumb](/articles/styling-range-sliders-css/tutorial-styles.png)

That's pretty much it! Have fun applying your own custom styles.

I recently added a border and box-shadow to the thumb, and a border-radius to the track, like so:

![Range slider with white track and rounded ends, and a pink thumb with white border and shadow](/articles/styling-range-sliders-css/custom.png)
