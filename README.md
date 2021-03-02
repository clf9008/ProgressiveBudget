![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
# ProgressiveBudget
Progressive Budget application for use online/offline
- Using Progressive Web Application (PWA) this application enables the user to add expenses and deposits to their budget with or without an online connection. When entering transactions offline, data should populate the total when connected back online.

## Usage
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Table of contents
- [General Info](#Info)
- [Dependencies](#Dependencies)
- [Technologies](#Technologies)

# General Info

### What is Progressive Web Application?
- A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an app-like experience to users. These apps meet certain requirements (see below), are deployed to servers, accessible through URLs, and indexed by search engines.

#### Offline Support
- Apps should be able to work offline. Whether that be displaying a proper "offline" message or caching app data for display purpose.

# Functionality 

Offline Functionality:
- Enter deposits offline
- Enter expenses offline

When brought back online:
- Offline entries should be added to tracker.

# Install
- npm i install

- npm i express

- npm i mongoose

# Dependencies
``` bash
"dependencies": {
    "express": "^4.17.1",
    "install": "^0.13.0",
    "mongodb": "^3.5.5",
    "mongoose": "^5.9.7",
    "nodemon": "^2.0.2"
  }

```

# Technologies
- HTML5
- CSS
- jQuery
- Express
- MongoDB
- Mongoose
- IndexedDB
