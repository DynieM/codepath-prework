# Pre-work - Mimic Me

Mimic Me is a Light & Sound Memory game to apply for Futureforce Tech Launchpad . 

Submitted by: Dynie Mesoneuvre

Time spent: 6 hours spent in total

Link to project: https://mimic-me.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Start game and animals pop up on each buttion pressed:

![GamePlay](https://user-images.githubusercontent.com/102767729/164792596-26bd576a-bb79-4e73-90cc-c66db1cd2189.gif)

Game play until user wins/loses and a pop up appears:

![GamePlay2](https://user-images.githubusercontent.com/102767729/164792622-cc2e82d6-788c-4c1d-8726-ecb5a856fd90.gif)

New random pattern and three strikes feature:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/102767729/164793941-c29b5559-3702-4678-a407-9a7fddf39330.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used freecodecamp.org and w3schools.com to help complete my submission.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered was trying to make my buttons more creative by adding in images. First was adding in the actual images, which I uploaded to the assests folder of Glitch, afterwards I had to decide how I wanted to use the img tag because I knew I wanted it to be positioned directly on top of it's assigned button. I had to make sure my code was in the right format and order for it to work properly. The part I struggled with the most was making the image appear on the button was clicked. How I was able to overcome that issue was by implementing Javascript code to perform a function that retrieved the ID of the image and change it's visibility by also adjusting my code in the index.html folder instead of editing my CSS code. Before that realization, I was trying to somehow make the image visible using my button:active declaration block. However, that gave little result and only led to my buttons not working at all once they were clicked. Once I figured out that it was an interactive function that I needed, I decided to focus on Javascript. After that I was able to use the same JS functionality for the rest of my images and get the images on my buttons to appear once they've been clicked.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Questions that I have regarding web development is how to host a website using a domain and allow the public to have access to it. I'm very interested in understanding the development process of creating a webpage, whether it be from scratch or using pre-coded material, and launching it for public use. There is also the direction of connecting the front-end aspect of a project with the back-end and seeing it all come together. I'm also curious about how web frameworks Django and Ruby on Rails work to build a website in comparison to HTML and CSS. Not much is discussed when it comes to them even though they were well known in front-end development.



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours on the project, I would definitely spend them to make my game more unique. Additional features aside from the optional ones listed would be coding the project to allow more than one user to play, however, this would mean branching off web development and getting into cloud systems. I would also had in levels, ranging from easy to difficult, the difficult level being that the buttons would move around and switch places when it's the user's turn to playback the pattern. I would take a look at the code that involved patterns and audio and see if I could have the sounds mimic a well-known song/genre that the user could select, for example Country or Taylor Swift. I think adding that functionality would definitely make the game more engaging and fun to play for the user.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Dynie Mesoneuvre

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
