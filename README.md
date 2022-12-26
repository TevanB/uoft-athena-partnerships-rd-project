# Athena Experiential Learning Application

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
  To improve on the experiential learning system with University Partnerships, reducing the load on Educators while streamlining the interactions between Students, Partners, and Educators.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Folder Structure](#structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

There are two parts to this project, a front-end (/client) and a back-end (/server).

To start the front-end please run the command for local development.

```
cd client && npm i && npm run dev
```

To start the back-end please run the command for local development.

```
cd server && npm i && npm run start
```

Please note that production of this app uses SSR (server-side rendering) - meaning that the front-end's static files are deployed through the server in order to have the same port for front-end and back-end.

This makes us have to re-build every time we change something so unideal for front-end development.

Please change to distinct ports when developing locally and when pushing to prod, change back to common ports.

Note: future contributors can look into the src/setupProxy.js file to get a proxy going to make this change easier.

## Structure

### Tech Stack

This project uses the MERN stack, keeping 100% of the current implementation in JavaScript!

### Folders

In the client folder we have a Next.js folder structure.

The .next folder has next configurations, the out folder has prod files that are SSR via our server to deployment.

In the src/components folder we have React components organized by folders representing the page they're used in.

In the src/pages folder we have our main pages - note that routing is auto-setup by next based on naming of files/folders in this directory. Basically, sub-folders are sub-directories and files are end-paths, with dynamic paths taken care of by naming convention [project_name] for example.

In the src/context folder we have React contexts to control global states across our application.

## Usage

### Build System

The client build system uses Next.js to streamline and effectively speed up the building process, all while allowing hot-reloading during client (front-end) development.

### User Types

We have 4 user types: general, student, partner, educator.

General just means we don't enforce auth to access the dashboard since we wan't users to be able to look at course overviews/projects without logging in.

### Matching Algorithm

One of the highlights of this project is a matching algorithm between teams and projects with currently has an infrastructure and simple implementation in the back-end but should be extended with more data and a UX/UI mockup for displaying matching results.

The infrastructure currently has a series of function calls in a POST back-end route with a structure that's easily extendable to Machine Learning models like Multivariable Regression - but currently takes advantage of a Maximum Bipartite Matching algorithm based on weights.

## Deployment

This app is currently deployed via Heroku on a free instance (possible to run on 1 Dyno due to our usage of SSR).

URL: https://athena-partners-prod.herokuapp.com/

Note: since Heroku dropped support for the free tier, this link will not work.

## Credits

Tevan Bhatia (https://github.com/TevanB) (https://tevanb.com)

If you have questions about the project, feel free to reach out and I'll try to get back to you when I can!

## License

MIT License

Copyright (c) 2021 Tevan Bhatia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Template Credits:

https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
