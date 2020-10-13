[![Netlify Status](https://api.netlify.com/api/v1/badges/ab973711-a0f8-447a-b1e0-29e75b506b09/deploy-status)](https://app.netlify.com/sites/nrvdev/deploys)

<p align="center">
  <img src="/images/logo-full-coral.svg" width="400" />
</p>

## Welcome
We are glad you are here! This is the repository for the website of NRV Developer Community. This site is meant to be simple, and easy to maintain. With that, let's talk about some of the tools used to build it.

### Eleventy
According to their site, [Eleventy (11ty)](https://www.11ty.dev/) is "a simpler static site generator". Eleventy is like the node version of Jekyll. It essentially takes any template (currently supports 11 different types), and converts it to HTML. Eleventy was chosen because it's simple to use and very flexible.

### Vue
We try to stay as static as possible, but there are a few places that required some JavaScript. [Vue](https://vuejs.org/) was chosen because of how unintrusive it is to the rest of the site. We can use Vue very similarly to how jQuery used to be used, just here and there. Wait, was jQuery ever just used like that? Anyway, it's lightweight and easy to use for simple bindings. 

> There are some new developments happening right with Eleventy and Vue that could make utilizing Vue inside Eleventy _even_ easier!

### SASS
We could have gotten away with using CSS only, but [SASS](https://sass-lang.com/) still offers quite a bit of convience over raw CSS.

### Netlify
There have been versions of NRV DEV hosted on Heroku, GitHub Pages, Firebase and a few others. Once again, this comes down to ease of use, and price. [Netlify](https://www.netlify.com/) offers a lot of benefits for free. One of our favorites being the deploy previews for PRs. We will hopefully being using Netlify even more in the future (functions, forms). If you haven't already, you should absolutely check them out.

## Local Development
Hopefully the list of tools wasn't too overwhelming. The goal was to make this a pretty simple site to contribute to. In order to get started locally, you should only need to run two commands.
```
yarn install
yarn dev
```

`yarn dev` is going to run the eleventy command to build our templates into HTML, and then watch our files for any changes and reload the dev server when needed.

## We Are Just Getting Started
We really don't know what to expect quite yet, but we wanted to get something out there for the community. This site has been built in many frameworks with many different ideas and designs. Ultimately we've stepped back and tried to make it as simple as possible, and allow the community to drive where the site goes.

If you have an idea for the site, create an Issue for it. Please be as descriptive as possible. 
If you find a bug on the site, create an Issue for that too! And then take a shot at fixing it!

We are proud to be part of the New River Valley community of Developers, and look forward to what this site will become with your help.