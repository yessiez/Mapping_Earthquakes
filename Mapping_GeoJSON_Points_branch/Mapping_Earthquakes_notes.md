# Introduction to Module 13

## 13.0.1: Visualizing Earthquake Data

One way we can tell stories with data is through interactive maps, which is what you'll create in this module. The video explains the technical tools you'll work with and the roles they play in enhancing data visualizations.

![roadmap](https://lh3.googleusercontent.com/1-tX8HxD5plAMtICMMUrRhiFE3xzkvEdyyeYUSlg1Ovg_j21HSEebPoBqD1igHFnlb-k=s85)


## 13.0.2: Module 13 Roadmap

### Looking Ahead

In this module, you will use the `Leaflet.js` Application Programming Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. In addition, each earthquake will have a popup marker that, when clicked, will show the magnitude of the earthquake and the location of the earthquake.

### What You Will Learn

By the end of this module, you will be able to: 

- Create a branch from the main branch on GitHub.
- Add, commit, and push data to a GitHub branch.
- Merge a branch with the main branch on GitHub.
- Retrieve data from a GeoJSON file.
- Make API requests to a server to host geographical maps.
- Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
- Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
- Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
- Render maps on a local server.

### Planning Your Schedule

Here's a quick look at the lessons and assignments you'll cover in this module. You can use the time estimates to help pace your learning and plan your schedule.

- Introduction to Module 13 (15 minutes)
- The Earthquake Mapping Project (30 minutes)
- Create Your First Map (1 hour)
- Don't Mess with the main Branch (1 hours)
- Map Geographical Features (2 hours)
- Map GeoJSON Data (2 hours)
- Map Earthquakes (2 hours)
- Application (5 hours)

## 13.0.3: Getting Ready for Virtual Class

Let’s make sure you’re prepared to join this week’s virtual classes! You’ll have the opportunity to practice your new skills with your instructional team, as well as ask any questions that you may have regarding this module’s content.

Please be sure to download the starter files below and have them ready on your computer prior to class. You do not need to complete any of the activities prior to class, but feel free to review the material ahead of time to see some of what will be covered.

## 13.0.4: Welcome to Mapping Earthquakes

You know you'll be creating interactive maps using GeoJSON data—but how and for what purpose? The following video covers the details of the specific project you'll be working on as you explore earthquakes around the world. 

# The Earthquake Mapping Project

## 13.1.1: Create and Clone a New GitHub Repository

<em>Before you get started, Basil wants to make sure you have access to GitHub. Once you have logged in to GitHub, create a new repository and clone the repository to your computer.</em>

Create a GitHub repository for your project and name it "Mapping_Earthquakes." Make the repository public. Then add a README for the repository and clone it on your computer.

## 13.1.2: Project Overview

<em>In your first team meeting, Basil assigns Sadhana as your mentor on this project, since she has created a similar map for severe weather. When you get back to your desk, you and Sadhana will go over the basic project plan and what you'll need to do.</em>

You're all set up in your office space and have cloned the GitHub repository onto your computer. Now it's time to review the plan for your project.

### Basic Project Plan

#### Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

#### Tasks

To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

#### Approach

Your approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. You'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

Now that you have an overview of the project plan, let's set up a Mapbox account and get the API token you'll need to create geographical maps.


# Create Your First Map

## 13.2.1: The Mapbox API

<em>Before you create any maps, you'll need to create a Mapbox account and get your access token. Sadhana is going to give you access to the company Mapbox account so you can create your own API key.</em>

Mapbox provides custom maps for websites and applications such as Strava, Facebook, the Financial Times, The Weather Channel, Snapchat, and Instacart. Since October 2019, Mapbox has been generating up to 14 billion individual sensor readings daily across 100,000 map updates on connected devices.

To get started, register for a Mapbox account and get an API key.

## Create a Mapbox Account

Follow the steps below to register for a Mapbox account and generate your API key so that you can render maps on the browser. Once you create an account, copy the access token and keep it somewhere safe.

The following video walks you through the process of creating your Mapbox account and generating your API key.

Now that you have your Mapbox API key, Sadhana will walk you through how to create a branch off the main branch where you'll add the code to create a simple map.

## 13.2.2: Create a Branch on Your Repository

<em>Before you add your folders and files to the `Mapping_Earthquakes !folder, Basil would like you to create a GitHub branch for the basic map. Basil informs you that creating a branch off the main branch allows you to create a new feature, or change some part of the original code. Once he has reviewed your code on your branch, Sadhana will show you how to merge it with the main branch.</em>

Branching makes it possible to create an isolated environment when creating a new feature, or to correct an issue in the main code no matter the scope.

Creating branches off the main branch is where Git shines. A branch allows you to make changes to the main code "off to the side," like a branch on a tree. Once the code on the branch has been reviewed and approved, only then can the branch be merged into the main branch. This ensures that the main branch always contains production-quality code.

Before we create a branch and add files to the new branch, make sure your copy of the main branch on your computer is up to date with the main branch on GitHub.

It's a best practice to either "pull" from the main branch to get the latest changes to the main branch, or pull "upstream" of the branch you are creating. This is important because your version of the main branch on your computer needs to be up to date with the main branch on GitHub.

Follow these steps to create a branch:

1. Navigate to the repository folder on your computer.
2. In Terminal on macOS or Git Bash on Windows, type `git pull` or `git pull origin main` and press Enter.
3. Type git `checkout -b Simple_Leaflet_Map` and press Enter.
    - `git checkout` lets us navigate between branches.
    - `-b` indicates we are creating a new branch.
    - The name of the new branch follows `-b`.

After pressing Enter, your terminal or Git Bash should return the following:
        
`Switched to a new branch 'Simple_Leaflet_Map'`

Now we are in the Simple_Leaflet_Map branch. Confirm this by typing `git branch` and pressing Enter. 

The output in Terminal or Git Bash should look as follows, with an asterisk next to the branch name:


    * Simple_Leaflet_Map
     main

At this point, the folder structure on your computer hasn't changed. The files you had in your main branch are now in your Simple_Leaflet_Map branch. Visually, the repository should look like the following:

![A visualization shows the main files in the Simple_Leaflet_Map
branch on
GitHub.](https://lh3.googleusercontent.com/zLIX_80r1bXzrqKMrMZyhWKe2qks6pd-Mv9pnwMHMVZhVmlAiBUu89We9iHuPiCVgGco3w=s147)

Next, we'll create a folder structure and write the code to create a simple map. When we are done, Sadhana will show us how to add folders and files to the Simple_Leaflet_Map branch.

## 13.2.3: Create an HTML Page and CSS File

<em>Now that you have your API token and your branch is set up, Sadhana will let you get familiar with the documentation for using Leaflet. Then, she's suggested you jump in and create an HTML and CSS file and add links to some stylesheets in the HTML file.</em>

Let's get familiar with Leaflet. Leaflet has a few links and simple HTML code that we will add to an `index.html` page.

### The Leaflet JavaScript Library

On the [Leaflet](https://leafletjs.com/index.html) homepage, scroll midpage and click the [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) link.

The Leaflet Quick Start Guide provides steps for setting up a Leaflet map. To begin, scroll midpage to the "Preparing your page" section.

The "Preparing your page" section includes links and HTML code that we'll add to our `index.html` page. First, we'll create a folder structure for our earthquake map webpage.

### Create an HTML Page

Open your Mapping_Earthquakes repository folder in Visual Studio Code (VS Code). Create a new folder called "Simple_Map." Inside the folder, create a new `index.html` file. Next, create a template for your `index.html` file.

#### REWIND

To create a template for an `html` file, type an ! (exclamation point) and press Tab or Enter, and the empty file will be filled with the complete HTML5 boilerplate code.

In our `index.html` file, we'll change the document title and add the code from the "Preparing your page" section.

1. Change the document title in the `<title>` element in the `<head>` section (`<title>Document</title>`) to "Leaflet-Basic-Map."

2. In the `<head>` section, just below the `<title>` element, add the following Leaflet CSS script from the "Preparing your page" section:

        <!-- Leaflet CSS -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>

3. In the body of our index.html file, add the Leaflet JavaScript script and id tag for the map inside a `<div>` element, as shown in the "Preparing your page" section:

        <!-- Leaflet JavaScript -->
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>

The Leaflet CSS and JavaScript files we added to the `index.html` file are referred to as content delivery networks (CDNs). Using CDNs has a security risk. To avoid the security risk, it's a best practice to include an integrity value with the CDN. Each file we added has its own integrity value, which is a Base64-encoded cryptographic hash of a resource that prevents the CDN from being hacked.

**NOTE:** For more about the Subresource Integrity value, please see the documentation on the [Download Leaflet webpage](https://leafletjs.com/download.html) and [Mozilla Developers' Subresource Integrity webpage](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).

Above the Leaflet JavaScript link script, add the following `<div>` element with the id tag for the map:

    <!-- The div that holds our map -->
    <div id="mapid"></div>

1. After adding the Leaflet CSS file, JavaScript file, and the `<div>` element with theid tag for the map.

#### IMPORTANT
Make sure you copy and paste the Leaflet CSS file and JavaScript script from the website as they appear. Do not edit the script by deleting empty spaces. This will prevent that script from working on the `index.html` file, resulting in the map not being shown on the webpage.

Next, we will modify our `#mapid` to be set at a specific height using CSS code. To do this, we'll need to create a `style.css` file.

### Create a CSS File

Before we create a `style.css` file, we'll need to create a folder for the file. 
1. In VS Code, create a new subfolder called "static" in our Simple_Map folder. 
   1. In this folder, create another subfolder named "css." In the css folder, create a new file and name it `style.css`.
2. Add the following CSS code to our `style.css` file to set the style for our map on our `index.html` page and save the file:

        html,
        body,
        #mapid {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }

5. Finally, we need to tell our `index.html` page to use the `style.css` file we created.
    - In the `<head>` section of our `index.html` page, add the following CSS link script below the Leaflet CSS and before the closing </head> element:

            <!-- Our CSS -->
            <link rel="stylesheet" type="text/css" href="static/css/style.css">

Next, we'll create the code for a simple map.

## 13.2.4: Create a Simple Map

<em>Now that you have added stylesheet links to your HTML page and CSS file, Sadhana will help you add the last two files you'll need to create a simple map—the config.js file for your API token and the logic.js file for your JavaScript and Leaflet code.</em>

To create a map, we'll need to add two final pieces to our Simple_Map folder:

- The `config.js` file, which will hold our Mapbox API key.
- The `logic.js` file, which will contain all the JavaScript and Leaflet code to create the map and add data to the map.


### Add the config.js File

In our Simple_Map folder, add a new folder in the static folder called "js." In the js folder, create a new file and name it config.js. This file will hold our Mapbox API key.

#### REWIND

The `config.js` file is like the `config.py` file we used to hold the OpenWeatherMap API and Google API keys.

On the first line of the `config.js file`, add the following code:

    // API key
    const API_KEY = "";

Add your Mapbox API key between the quotations and save the file.

### Add the logic.js File

Next, in the js folder, create a new file and name it, `logic.js`. Now we'll add some boilerplate code to the `logic.js` file. Most of this code can be reused for many of the maps we'll create later on in this module.

On the first line, add the following code:

    // Add console.log to check to see if our code is working.
    console.log("working");

The `console.log()` function with the phrase "working" inside the parentheses will help us confirm that our `logic.js` file is being accessed in the console on Chrome.

### Add a Map Object

Next, we'll add the map object, as shown on the Leaflet Quick Start Guide page with some slight modifications. We'll change the geographical center of the map to the approximate geographical center of the United States.

    // Create the map object with a center and zoom level.
    let map = L.map('mapid').setView([40.7, -94.5], 4);

In the code block above:

1. We're assigning the variable map to the object `L.map()`, and we'll instantiate the object with the given string `'mapid'`.
2. The `mapid` will reference the `id` tag in our `<div>` element on the `index.html` file.
3. The `setView()` method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

An alternative to using the `setView()` method is to modify each attribute in the map object using the curly braces notation as follows:

    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
    });

This method is useful when we need to add multiple tile layers, or a background image of our map(s), which we will do later in this module.

### Add a Tile Layer for Our Map

Now, we will add the map tile layer method to the `logic.js` file. The tile layer is used to load and display a tile layer on the map. We have two options to create a tile layer.

### Use the Leaflet Documentation

The [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) provides the `tileLayer()` code:

We can copy this tile layer code and assign it to the streets variable, since the tile layer will create a street-level map. Add the following code block to your `logic.js` file:

    // We create the tile layer that will be the background of our map.
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
    });
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

Let's break down what's happening in this code block:

1. We assign the `tileLayer()` method, as shown in the Quick Start Guide's "Setting up the map" section to the variable `streets`. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
2. The following URLs appear in the parentheses of our `tileLayer()` method:
    - The API URL with a reference to the `accessToken`
    - The `OpenStreetMap` URL inside the curly braces of our `tileLayer()` method
3. We add the `maxZoom` attribute and assign it a value of 18.
4. We add the `id` attribute and assign it `mapbox/streets-v11`, which will show the streets on the map.
5. We add the `accessToken` attribute and assign it the value of our `API_KEY`.
6. Finally, we call the `addTo()` function with our map object, map on our graymap object tile layer.  
   - The `addTo()` function will add the graymap object tile layer to our let map.


To change the map's style, change the map id using the list of Mapbox ids below:

- mapbox/streets-v11
- mapbox/outdoors-v11
- mapbox/light-v10
- mapbox/dark-v10
- mapbox/satellite-v9
- mapbox/satellite-streets-v11


### Use the Mapbox Styles API

To use the Mapbox Styles API, edit the URL in the Leaflet `tilelayer()` method, as detailed on the Leaflet website:

1. First, navigate to the [Mapbox Glossary](https://docs.mapbox.com/help/glossary/).
2. Search the [Static Tiles API](https://docs.mapbox.com/help/glossary/static-tiles-api/).
3. Copy this part of the URL: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/`.
4. In your `tileLayer()` code, replace this part of the URL, `https://api.tiles.mapbox.com/v4/{id}/`, with the Mapbox Styles API URL you copied.
5. Remove the `.png` from the URL.
6. Remove the `id` attribute and the map style reference.
7. The code for the tileLayer() should look like the following:

        // We create the tile layer that will be the background of our map.
        let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

        // Then we add our 'graymap' tile layer to the map.
        streets.addTo(map);

    **NOTE:** If you have trouble editing the URL, copy the URL above.

8. To change your map style, click on the [Static Tiles API documentation](https://docs.mapbox.com/api/maps/static-tiles/) link on the Static Tiles API page.
9. On the left sidebar, click on the [Styles](https://docs.mapbox.com/api/maps/styles/) link
10. Below the Styles subheading, find a list of different Mapbox styles.
11. To change the map style, use the style given in the URLs (e.g., "streets-v11," "dark-v10," etc.).

**NOTE:** For the rest of this module, we'll use the Static Tiles API format in the Leaflet `tileLayer()` method.

Next, we'll add the `logic.js` and `config.js` scripts to the HTML page.

### Add JavaScript Tags to HTML Page

The last step is to allow our `index.html` file to use the `logic.js` and `config.js` scripts. To do this, open up the `index.html` file and add the following `<script>` elements below the Leaflet JavaScript link script and above the closing `</body>` element, and save the file.

    <!-- API key -->
    <script type="text/javascript" src="static/js/config.js"></script>
    <!-- Our JavaScript -->
    <script type="text/javascript" src="static/js/logic.js"></script>

### Open the Map in the Browser

Now, open the `index.html` file.

To open the `index.html` file in the browser:

1. Open the command line and navigate to your  Mapping_Earthquakes folder. 
    - The `index.html` file should be in the top-level of that folder.
2. On the command line, type `python -m http.server` and press Enter.
    - Your web browser will launch a basic open street map of North America.

Congratulations on creating your first map using Leaflet and the Mapbox API!

**NOTE:**
For more information, see the [Leaflet documentation on methods using the map object and tile layer](https://leafletjs.com/reference-1.6.0.html#map-example). 



# Don't Mess with the Main Branch

## 13.3.1: Add, Commit, and Push to a Branch

<em>Basil wants you to commit your changes to the Simple_Leaflet_Map branch so the team can review. If he says there are no changes to be made to your branch, then you can merge it with the main branch.</em>

First, we'll check to see if you're in the Simple_Leaflet_Map branch. In the command line, navigate to your Mapping_Earthquakes folder and type `git branch`. If the following output is returned with an asterisk next to the branch name, you're in the Simple_Leaflet_Map branch:

      * Simple_Leaflet_Map
        main

Just as we have checked the main branch status of other repositories, we'll do the same with the Simple_Leaflet_Map branch.
flet_Map
branch.

To see all the folders and files in the Simple_Map folder, type `git status -u` and press Enter.


We don't want to add config.js file to the repo because our repository is public. This means the Mapbox API key would be available for anyone to copy and use, possibly causing us to incur charges.



If you didn't initialize the repository with a `.gitignore` file, we'll create one. Then we'll add `config.js` to the `.gitignore file` so that GitHub doesn't track that file.

In VS Code, create a new file in the Simple_Map folder and name it `.gitignore`. 

Next, add the following lines to the .gitignore file and save the file:

    # Ignore the config.js file.
    config.js

In the command line, type `git status - u` and press Enter. The output should have the `.gitignore` file and all the files as before, except the `config.js` file. All the files in red will be tracked when we use git add, with the exception of the `config.js` file. 

After creating the .gitignore file, type `git status -u` for the status of the Simple_Leaflet_Map branch.

Next, we'll add these folders and files to the Simple_Leaflet_Map branch as we did for the main branch by typing `git push`.

To push the folders and files to the Simple_Leaflet_Map branch for the first time, type `git push --set-upstream origin Simple_Leaflet_Map` in the command line and press Enter.
- To add any files after this initial push, type `git push`. 

Now all the folders and files are in the Mapping_Earthquakes repository in the Simple_Leaflet_Map branch. Confirm this by navigating to the repository and refreshing the page.

We can see that we have created a new branch, indicated at the top. If we click the dropdown menu "Branch: main" in our repository, the Simple_Leaflet_Map branch appears.

To check if our folders and files are in the Simple_Leaflet_Map branch, select the branch from the dropdown menu. You should see all the files we added.

Congratulations on adding your files to a new branch!

## 13.3.2: Compare Branch to the main Branch

<em>Basil has reviewed your code and is impressed with the comments you made; comments to your code allow others to understand what the code does.  Now that your code has Basil's approval, Sadhana will walk you through the steps to merge your branch with the main branch. The first step when merging a branch is to compare the changes between the Simple_Leaflet_Map branch and the main branch.</em>

To merge your Simple_Leaflet_Map branch with the main branch, we will:

1. Compare the changes between the Simple_Leaflet_Map branch and the main branch so that we can merge them.
2. If we are able to merge the Simple_Leaflet_Map branch into the main branch, we need to create a pull request on GitHub.
3. After we review the pull request, we can merge the branch into the main branch.

Let's compare the changes between our Simple_Leaflet_Map branch and the main branch:

1. Navigate to your Mapping_Earthquake GitHub repository.

2. To start merging your branch into the main branch, compare the branches to confirm they can be merged.

    **NOTE:**
    If changes have been made in the main branch after you added your files to a branch, you might not be able to merge.

3. You have two ways to compare your branch with the main branch:

   - Click the green "Compare & pull request" button, or
   - Click the gray "New pull request" button.
       (If you click the "Compare & pull request" button, skip to Step 5.)

4. If you click the "New pull request" button, a new page will open with two buttons: "base: **main**" and "compare: **main**." Compare the Simple_Leaflet_Map branch with the base or main branch.

    **NOTE:**
    Developers and team members often refer to pull requests as "PRs."

5. Click on the "compare: **main**" button and select the branch you want to compare (the Simple_Leaflet_Map branch).


Next, Sadhana will show you how to create a pull request required to merge a branch with the main branch.

## 13.3.3: Create a Pull Request

<em>You made it through the first step. Now, Sadhana will show you how to create a pull request. This step is important when working on a team because it allows other team members to check your code on your branch, and then either ask you to make changes or approve it so it can be merged with the main branch.</em>

The next step is to create a pull request on GitHub. This step is essential when working with your Disaster Reporting Network team. It will allow Basil and Sadhana to review and run your code to verify there are no errors. If there are errors in your code, or if the code can be modified to be easier to read, then they will ask you to make changes. If your code looks good and there are no changes to be made, then you can merge your branch with the main branch.

Let's walk through the process of creating a pull request. 
- First, select the Simple_Leaflet_Map branch
  - Or, you can select the green "Compare & pull request" button.
- A new page called "Open a pull request" will launch.


The page shows the five key elements of a pull request:

1. Near the top of the page is a green checkmark and text stating "Able to merge." If you're unable to merge, GitHub will display an explanatory message.
2. Next is the commit message you made.
3. "Reviewers" and "Assignees" are members, such as yourself, with access to the repository. You can assign the pull request to yourself. Labels, Projects, and Milestones are completed by team members and owners of the repository. Click on a gear wheel to modify any of these items.
4. In the "Leave a comment" field, describe what you're adding to the main branch in the pull request.
5. After entering a comment, click the green "Create pull request" button.
6. Scroll below "Open a pull request" to see the files you're adding to the pull request.
7. Write a message and create a pull request. In the "Leave a comment" field, type the following message:

        Adding the following folders and files to create a simple Leaflet map.
        - .gitignore
        - Simple_Map/index.html
        - Simple_Map/static/css/style.css
        - Simple_Map/static/js/logic.js

8. Click the green "Create pull request" button.

Reviewers can add a comment in the "Leave a comment" field. For example, Sadhana or Basil could type approval and further instructions: "Looks good to me. You can merge." Once a reviewer approves your pull request in a comment, you can click the green Merge pull request button.

If your code looks good, click the "Merge pull request" button.

Don't navigate away from GitHub. Next, Sadhana will walk you through the final steps of merging your branch with the main branch.

## 13.3.4: Merge Branch Into main Branch

<em>Congratulations on creating a pull request, which can be daunting sometimes. The final step will be to merge the Simple_Leaflet_Map branch into the main branch.</em>

After clicking the "Merge pull request" button, the page will refresh with two options: "Confirm merge" or "Cancel."

1. Click the green "Confirm merge" button. The page refreshes to confirm, in three places, that the pull request has been merged into the main branch.
   - This page gives the option of deleting the branch. However, don't delete it so that future interns can use it to create a simple Leaflet map.
2. Navigate to the main branch on GitHub to confirm all the folders and files have been merged from the Simple_Leaflet_Map branch.
3. Next, pull the latest changes on the main branch on our computer because the main branch on our computer is not up to date. Follow these steps.
    - Open the terminal or Git Bash and type `git checkout main` and press Enter.
    - Type `git status` and press Enter. The output might tell you that you are up to date, which can be misleading, or it might say you are "1" commit behind the Simple_Leaflet_Map branch.
    - Type `git pull` and press Enter. 
3. To confirm that the files are in the main branch on your computer, if you have a Mac type `open .` to view the directory in Finder, or if you have a PC type `start .` to view the directory in File Explorer.

Congratulations on merging your Simple_Leaflet_Map branch into the main branch!


# Map Geographical Features

## 13.4.1: Map a Single Point

<em>Creating a simple Leaflet map was relatively straightforward. Now Sadhana will show you how to add a single marker to a map and change the radius of the marker. However, she would like you to create a branch for adding points to a map for the GitHub repository so that new interns and employees can use this as a tutorial.</em>

Now that we can create a simple Leaflet map, we can plot data on the map. First, let's create a new branch. Sadhana suggests that we name this branch "Mapping_Single_Points" since we'll map single points.


Follow these steps to create a branch off of the main branch:
1. Navigate to your repository on your computer.
   - Make sure you're on the main branch by typing: `git branch`
2. If you're not on the main branch, type: `git checkout main`
3. Pull the changes from the main branch by typing: `git pull`
4. Create a new branch by typing: `git checkout -b [name_of_your_new_branch]`
5. In your new branch, we'll add a new folder inside the Mapping_Earthquakes folder. Since we're going to work with the same file names in the same folder structure, we'll use the same folder structure as we did for the Simple_Leaflet_Map branch.

Set up the folder structure as follows: 

- Mapping_Single_Points
    - `index.html`
    - static
      - css
        - `style.css`
    - js
      - `config.js`
      - `logic.js`
  
The two files that we'll change most often are the `index.html` and the `logic.js` files. Also, we might add an external file in the js folder. After checking out the new Mapping_Single_Points branch, copy all files from your Simple_Leaflet_Map folder and add them to a new Mapping_Single_Points folder..

Next, push the latest changes to the Mapping_Single_Points branch to GitHub.


Follow these steps to push changes to a new branch:

1. Type: `git status`
2. Add the folders and files by typing: `git add .`
3. Confirm the correct files will be added by typing: `git status`
4. Commit the changes by typing: `git commit -m`
5. Push the changes to the branch by typing: `git push --set-upstream origin Mapping_Single_Points`


Next, we'll edit the `logic.js file` to add single points or markers to the basic map.

### Add a Marker to the Map

Adding a marker to our simple map requires only one line of code, found in the Leaflet Quick Start Guide, under the "Markers, circles and polygons" subheading. Below the map is a line of code that reads as follows:

`var marker = L.marker([51.5, -0.09]).addTo(map);`

We're going to edit this line of code with the latitude and longitude for Los Angeles, California, and add it to our `logic.js` file that we used to create a simple map.

Open up the `logic.js` file using VS Code and add the following line of code before our `tileLayer()` code, and save the `logic.js` file:

    //  Add a marker to the map for Los Angeles, California.
    let marker = L.marker([34.0522, -118.2437]).addTo(map);

Next, open the `index.htm`l file in your browser. 

Next, we'll change the marker to a circle.

### Add a Circle to the Map

To change the marker on our map to a point or dot, we'll use the `circle()` function. The `circle()` function will place a circle on the map at the given coordinates. The syntax for using the circle() function follows:

    L.circle([34.0522, -118.2437], {
        radius: 100
    }).addTo(map);

When using the `circle()` function, the default is just a small dot on the map, but we want to adjust the radius so that it's bigger and easier to see. The radius for the `circle()` function is measured in meters.

For the code above, add a circle with a 100-meter radius over Central Los Angeles when we assign a value to the radius key in the `circle()` function.

Copy the code for the circle function and replace it with the `marker()` function we used previously. We're also going to zoom in to a level of 14 on the `setView()` method.

When we open our `index.html` file in our browser, it will show a circle over Central Los Angeles.

#### SKILL DRILL
Using the Leaflet documentation, create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.

Alternatively, we can create a circle using the `circleMarker()` function. The `circleMarker()` function measures the radius of the circle in pixels, with the default radius set at 10 pixels. The syntax for using the `circleMarker()` function follows:

`L.circleMarker([34.0522, -118.2437]).addTo(map);`

Let's create a light-yellow circle with black lines indicating a 300-pixel radius on a dark map. Edit your `logic.js` file from the previous Skill Drill by changing your `circle()` function to a `circleMarker()` function. 

Use the `circleMarker()` function to create a light-yellow circle with black lines indicating a 300-pixel radius of Central Los Angeles on a dark map.

If you didn't get the correct map style in the Skill Drill, replace the "streets-v11" in our tileLayer() code with "dark-v10" to look like the following:

    // We create the tile layer that will be the background of our map.
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'

Save your `logic.js` file and open your `index.html` file in our browser. The circle will show a 300-pixel radius of Central Los Angeles.

The OpenStreetMap shows a light-yellow circle with black lines indicating a 300-pixel radius of Central Los Angeles.

Wow! What a big difference between the circle()and `circleMarker()` functions.

Remember, it's a best practice to commit early and often! Before you commit your code for the Mapping_Single_Points branch to GitHub, check to see if all the files will be tracked in the branch.
`
In the Mapping_Single_Points branch on the command line, type git status and you'll see that the `logic.js` file will be tracked.

Great job! Now, commit and push these files to the Mapping_Single_Points branch. Don't delete the branch, so that others can use it to learn how to map single points.

Next, Sadhana is going to show you how to add multiple locations to a map and change the radius of each marker.

NOTE
Use the links below to learn more about these Leaflet functions:

[marker() function](https://leafletjs.com/reference-1.6.0.html#marker)
[`circle()` function](https://leafletjs.com/reference-1.6.0.html#circle))
[circleMaker() function](https://leafletjs.com/reference-1.6.0.html#circlemarker)

13.4.2
Map Multiple Points
Now that you have added a single marker to a map and changed some of the features of the marker, Sadhana wants you to iterate through an array of objects and map them. Other employees really like the branches you created, so Sadhana would like you to create a new branch for adding multiple points to a map.
Before we plot multiple markers and points, Sadhana wants you to create a new branch for mapping multiple points.

Create a new branch called "Mapping_Multiple_Points" with the following folder structure:

Mapping_Multiple_Points
index.html
static
css
style.css
js
config.js
logic.js
Copy the necessary folders and files from your Mapping_Single_Points branch and add them to the Mapping_Multiple_Points folder.

Add Multiple Markers
When we added a single marker to our simple map, we assigned our marker variable to the Leaflet class marker() function. This function will only add one latitude and longitude to the map. To add more markers to the map, the latitudes and longitudes are usually nested in an array. To add a marker for each location, we have to iterate through the array and add each latitude and longitude to the map.

First, in the logic.js file, replace the marker variable (which we used to map one location) with the cities variable that references the five most populous cities array in the following code block. Then save the file:

// An array containing each city's location, state, and population.
let cities = [{
  location: [40.7128, -74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
},
{
  location: [41.8781, -87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994
},
{
  location: [29.7604, -95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502
},
{
  location: [34.0522, -118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456
},
{
  location: [33.4484, -112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272
}
];
Next, we need to iterate through each city object and add each city location to the marker() function, which will, in turn, be added to the map.



Below the cities array, add the following code to iterate through the array. Inside the brackets, use the console.log() function to print each object in the array to the console:

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
 console.log(city)
});
Save the logic.js file and open the index.html file in your browser.

If we look at the console tab, we'll see that each object, or city, of the cities array is printed to the console.

A U.S. map has a Chrome console tab on the right showing each object in the cities array.

Now, add each city's location to the map by adding the location to the marker() function.



In the forEach() function, assign the city variable to each object of the cities.js file. Then, get the coordinates of each city by adding city.location in the L.marker() function. We can then add each location to the map with the addTo() function and pass themap object as the argument.

Add the following code to your logic.js file and save it:

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
});
When you open the index.html file in your browser, the map will show a marker on each city in the cities array.

The OpenStreetMap has five markers for the five cities in the cities array: Los Angeles,Phoenix, Houston, Chicago, and New York City.

When handling large datasets, it's a best practice to have the data in an external file and refer to that file and dataset in the logic.js file.

Even though our cities array is not that large, let's create a new file in the "js" folder called cities.js. Cut the cities array data from the logic.js file, place it in the cities.js file, and save the file.

Next, in the logic.js file, where the cities array was located, add a variable and assign it to the cities array. Add the following code to the logic.js file:

// Get data from cities.js
let cityData = cities;
Now the cities array is assigned to the cityData variable, which means we'll need to replace cities with cityData in our forEach() function. Edit the forEach() function so that it looks like the following and save the logic.js file:

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
});
Now open the index.html in your browser to confirm these changes worked.

Uh-oh! Something went wrong, as shown in the following image: 

When there is an error in a file, a blank webpage appears instead of a map.



After you inspect the page using the DevTools, the console might have an error message that says Uncaught ReferenceError: cities is not defined. This means the cities array data can't be found.

To correct this error, in the body of the index.html file and before the path to the logic.js script, add a <script> file with the path to the JavaScript cities.js file, like this:

 <script type="text/javascript" src="static/js/cities.js"></script>
After adding the <script> file, the body of our index.html file should look like the following:

The body of the index.html file shows the path to the cities.js
file.

Now, when we open up the index.html in our browser, the map should look like it did before we created the cities.js file and edited thelogic.js and index.html files.

The OpenStreetMap has five markers for the five cities in the cities array: Los Angeles, Phoenix, Houston, Chicago, and New York City.

Bind a Popup to the Marker
To add data from each object in the cities array, we'll use Leaflet's bindPopup() method on the marker() function. According to the guidance in the Quick Start Guide (Links to an external site.)'s "Working with popups" section, we only need to add HTML code inside the parentheses of the bindPopup() method:

Follow the bindPopup() method guidance, found in the Quick Start Guide's "Working with popups"section.

In the logic.js file, edit the forEach function and add the bindPopup() method. Inside the parentheses of the bindPopup() method, we'll retrieve the name of the city, state, and population.

Edit the forEach function to look like the following, save the logic.js file, and open the index.html file in your browser:

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});
Now, when we click on each marker, it will show the name, state, and population of the city.

The OpenStreetMap has five popup markers for the five cities in the cities array: Los Angeles, Phoenix, Houston, Chicago, and New York City.When a city popup marker is clicked, it shows data, such as population.

Let's format the population with a thousands separator by using the toLocaleString() method on the city.population in the bindPopup() method, like this:

The logic.js file edited with code to format the population of each city with a thousands separator.

Now our popup markers have the population formatted with a thousands separator.

The popup marker for Houston with population data has been formatted with a thousands separator.

Next, change the marker for each city to a circle that has a radius equivalent to the city's population.

In the logic.jsfile, we'll replace the marker() function with the circleMarker() function in the forEach() function. Then we'll assign the "radius" key to the population by using city.population.

The forEach() function in our logic.js file should look like the following:

The logic.js file is edited with code to format the population of each city with a thousands separator and add circle the size of the population.

After you save the logic.js file and open the index.html file in your browser, your map will look like the following:

The OpenStreetMap now has a blue background.

Well, that doesn't look like the map from before! If we click on that map, "Phoenix, AZ" and its population appear in a popup.

The OpenStreetMap has a blue background and a popup marker for Phoenix.

We know that the data is being loaded onto the map, but what is the problem?



The problem with the map is that the radii are too large and don't fit on the map. To fix this, we'll have to decrease each city's radius so the circle markers fit on the map. In the logic.js file, divide the city.population value by "100000" to look like this:

radius: city.population/100000
Now when we open the map in our browser, the radius for each city looks proportional to the population.

The OpenStreetMap shows five city circle markers for the five cities
in the cities array, where the radius is in proportion to each city's
population, formatted with a thousands
separator.

Congratulations on creating varying size circle markers with popup information!

SKILL DRILL
Edit the logic.js file to create an orange circle popup marker for each city, with a lineweight of 4, a radius where the population number is decreased by 200,000,  that's on a dark map. When you click on the circle, the popup should display the city, state, and the population formatted with a thousands separator.

Your map should look similar to the following:  The OpenStreetMap shows five circle markers on a dark map, where each circle is orange and has a radius where the population number is decreased by 200,000. Each popup marker shows the city, state, and population formatted with the thousands separator.

Next, Sadhana will show you how to plot lines on a map.

ADD/COMMIT/PUSH
Add, commit, and push your changes to the Mapping_Mulitple_Points branch. Don't delete the branch so that others can use it to learn how to map multiple points with popup markers.

NOTE
For more information, see the Leaflet documentation on the bindPopup() method (Links to an external site.).
# Map GeoJSON Data



# Map Earthquakes



# Application
