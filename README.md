# Machi Koro
The final project of my Software Engineering Immersive Course at General Aseembly. As the final project, I would like to recreate a board game called Machi Koro that my board game crew loves to play. This is for education purposes only and because of my passion for spending great times with friends. Images of the cards have been taken online and modified to suit my version. <br/> 

How the game is set up and the game play may vary to the original game as I am designing this based on how I play the game. For example, not all cards available for purchase is shown face up. This way, there is a bit more luck involved. <br/> 

Date Received: 6/2/2023<br/>
Date Due: 10/2/2023

## :computer: [Click here](https://project-machi.surge.sh/) to see my live project!

## :page_facing_up: About
The below are the criteria set out by myself and the course that I will need to meet:

### Necessary Deliverables 
-   :white_check_mark: A link to your hosted working app in the URL section of your GitHub repo
-   :white_check_mark: A git repository hosted on GitHub, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
-   :white_check_mark: A readme.md file with:
    -   :white_check_mark: An embedded screenshot of the app
    -   :white_check_mark: Explanations of the technologies used
    -   :white_check_mark: A couple paragraphs about the general approach you took
    -   :white_check_mark: Installation instructions for any dependencies
    -   :white_check_mark: Link to your user stories – who are your users, what do they want, and why?
    -   :white_check_mark: Link to your wireframes – sketches of major views / interfaces in your application
    -   :white_check_mark: Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
    -   :white_check_mark: Descriptions of any unsolved problems or major hurdles you had to overcome

### Technical Requirements (Minimum Viable Product)
-   :white_check_mark: The Game will need to be able to finish with one winner being determined.
-   :white_check_mark: Game will be 2-4 players
-   :white_check_mark: Ability to input Player names at the start
-   :white_check_mark: Two of the original 4 landmarks cards to be created. 
-   :white_check_mark: Landmark cards will not have any abilities. Only first to purchase them all is enough to determine winner.
-   :white_check_mark: Only Blue Cards to be created and in play.
-   :white_check_mark: Game can be played locally on one computer.
-   :white_check_mark: Finishing the game will display the winner.
-   :white_check_mark: Only 1 dice to be in play.
-   :white_check_mark: Only cards up from 1-6 will be purchasable. Some modifications to cards may be required for MVP. 

### Post-MVP Extra Features
-   Implement 2 dice function.
-   Blue cards from 1-12
-   Create Red Cards
-   All 4 landmarks
-   Green and Purple cards to be created.
-   Game can be hosted and be played on multiple computers over the internet.

## :pencil2: Planning & Problem Solving
### General Plan
![Planning Photo 1](/README_images/Planning_01.jpg)
Some basic rules on how to play the game. More for me to process the mechanics and breaking the game down a bit for planning. 

Wireframing / Conceptual Design of website <br/> 
![Planning Photo 2](/README_images/Planning_02.jpg)

Using Whimsical to wireframe what is required in the project:
![Planning Photo 6](/README_images/Planning_06.png)
![Planning Photo 8](/README_images/Planning_08.png)
![Planning Photo 7](/README_images/Planning_07.png)

Using Trello to Plan out tasks:
![Planning Photo 9](/README_images/Planning_09.png)


### Win Conditions
The aim of the game is to be the first to construct all four landmarks. They can be constructed in any order.
    *Logic: Players will be objects and have landmark keys set to false. As they buy the landmarks, they will be switched to true. Once all landmark keys are true, then they will be the winner.*

### Players
The game is a 2-4 player game. Generally it is more enjoyable with more players. <br/> 
    *Logic: Players will be able to input their names in the welcome screen. Below is what I envision the player will look like.

```
let player1 = {
    name: "",
    coins: 3,
    establishments: ["1B", "2-3G"],
    lmTrainStation: false,
    lmShoppingMall: false,
    lmAmusementPark: false,
    lmRadioTower: false,
}
```

### Landmarks Cards
Breakdown of the Landmark Cards:<br/> 
![Planning Photo 3](/README_images/Planning_03.png)

Front of Landmark Card is shown when it is constructed, back when not constructed<br/> 
![Planning Photo 4](/README_images/Planning_04.png)

### Establishment Cards
![Planning Photo 5](/README_images/Planning_05.png)
![Planning Photo 10](/README_images/Planning_10.png)

### Game Flow
![Planning Photo 11](/README_images/Planning_11.png)


## Implementation - Coding Journey and debugging
Below are some "highlights" where problems arose and how I dealt with this problems. <br/> 

### Progress
Modifying background image found on internet. Background will need a larger sized image.
![Progress Photo 01](/README_images/Progress_01.png)
Checking image works well on phone:
![Progress Photo 02](/README_images/Progress_02.png)

Creating the Home page and Game page. Creating the Routes for both: 
![Progress Photo 03](/README_images/Progress_03.png)

Creating the Home Page buttons. These lead to different Modals:
![Progress Photo 04](/README_images/Progress_04.png)

How To Play Modal. Provided link at the bottom to link to the official rulebook
![Progress Photo 05](/README_images/Progress_05.png)

Start Modal. Users can select how many players will be playing.
![Progress Photo 06](/README_images/Progress_06.png)

I see some repetitiveness in this code. At this stage, I just want the code to work functionally first. I can refactor at a later stage. Ideally, I can place variables in the relevant modal sections:
![Progress Photo 07](/README_images/Progress_07.png)
Modal sections
![Progress Photo 08](/README_images/Progress_08.png)

Refactoring the code for displaying the player buttons. In order to control the images that goes into each one, I used the count from the numPlayers array, and assigned the class for each one. This way I can use it to change the CSS. 
![Progress Photo 10](/README_images/Progress_10.png)

Displaying the different players. (just background colours at this stage). 
![Progress Photo 09](/README_images/Progress_09.png)

Able to link another Modal after the user clicks one of the buttons. The number of inputs is hardcoded at this stage. Next step is to render the corresponding number of inputs depending on what the user clicked. 
![Progress Photo 11](/README_images/Progress_11.png)

Created an new array taking in the playerCount. Using map, I was able to create the corresponding number of inputs. Next step will be to taking the values of the inputs and assigning them to a playername variable.
![Progress Photo 12](/README_images/Progress_12.png)

Using the useNavigate function, I was able to use an onClick to go to the next page. This will be the page displaying the game board and where the action is!
![Progress Photo 13](/README_images/Progress_13.png)

Game board set up. Next steps will be how players are stored and what the establishment cards will be. I am thinking they will be hard coded objects. Unsure how to reference them at this stage.  
![Progress Photo 14](/README_images/Progress_14.png)

Pseudo coding the next steps:
![Progress Photo 15](/README_images/Progress_15.png)

The steps I took to get transfer the playerNames state over to the Game.js file:<br/> 
1.  Created a new useState for player
2.  Created an onChange event for the input. This takes 2 arguments(what is changed, and also the index of the specific input)
3.  The handlePlayerName function that first takes a copy of the current array using the spread operator (...) This is to ensure it does not reset the original array. Then assigns each index with the corresponding event(name change). Finally the playerNames state is updated.
4.  import useNavigate in order to navigate to the Game.js route. (this was already imported previously for the goToGame onClick event)
5.  goToGame function  now uses useNavigate to do two things. To go to the Game.js route, and also uses the state property of the navigate function. The state property can pass data to the component that is being navigated to. In our case, we want to pass the playerNames data to the Game.js file
6.  import useLocation in order to receive the data being passed from the PlayerCount.js file
7.  Declare playerNames in order to reference them in the Game.js file
8.  Testing to see if it will show on the gameboard
![Progress Photo 16](/README_images/Progress_16.png)
![Progress Photo 17](/README_images/Progress_17.png)

Wrote down the next steps and the game mechanics overall process. Detailed functions to come later.
![Progress Photo 18](/README_images/Progress_18.png)

Hard coded the establishment and landmark cards.
![Progress Photo 19](/README_images/Progress_19.png)

For some reason, after creating the gameplay function to start off the game, I was seeing a lot of console logs even wrapping it in the useEffect. However, I read online that this usually occurs in the dev environment. So I deployed again, and sure enough, the log only happened once! 
![Progress Photo 22](/README_images/Progress_22.png)<br/> 
![Progress Photo 21](/README_images/Progress_21.png)<br/> 
![Progress Photo 20](/README_images/Progress_20.png)<br/> 

Struggled a long time with this bug. Was not able to get the right output from mapping through the establishment key where the value is the array of cards that the player has. At the start of the game, they would have 3 cards. It was able to recognise that the array itself has 3 elements, but it was coming out as undefined, and therefore I was not able to get the card name. <br/> 
![Progress Photo 23](/README_images/Progress_23.png)<br/> 
![Progress Photo 24](/README_images/Progress_24.png)<br/> 
![Progress Photo 25](/README_images/Progress_25.png)<br/> 

The problem was it was not recognising the reference of the cards import. Once I was accessing each of the establishment cards correctly, it was able to give the correct output.
![Progress Photo 26](/README_images/Progress_26.png)<br/> 
![Progress Photo 27](/README_images/Progress_27.png)<br/> 
![Progress Photo 28](/README_images/Progress_28.png)<br/> 

Added logging for the welcome message(what each player starts with, and who the first player is). Also logged what the first player rolled (automatic for now), and which card gets activated. Whichever card is activated will increase the coin balance of each player. They will receive multiple coins for each card they own that was activated. 
![Progress Photo 29](/README_images/Progress_29.png)<br/> 

Able to log what the user has clicked on in the shop. 
![Progress Photo 30](/README_images/Progress_30.png)<br/> 

Win condition met! Game is able to recognise when the two landmarks have been purchased. Once it does, it logs the winner at the bottom. Many bugs still to fix but finally able to reach the end of the game!!
![Progress Photo 31](/README_images/Progress_31.png)<br/> 

Pass button integrated. Also displays who the next player is.<br/> 
![Progress Photo 32](/README_images/Progress_32.png)<br/> 

Images and styling for game board done. Fixed the game log where it extends down the page. 
![Progress Photo 33](/README_images/Progress_33.png)<br/> 

Added a line break so that users are able to see clearly when a new turn has started/ended. Use Google icons for added flair<br/> 
![Progress Photo 34](/README_images/Progress_34.png)<br/> 

Integrated a win modal to appear as soon as the player has built the required number of landmarks.
![Progress Photo 35](/README_images/Progress_35.png)<br/> 

Updated Trello list.
![Progress Photo 36](/README_images/Progress_36.png)<br/> 

I was getting a big problem where users who don't put in any names at the start will go to a completely white game page. In the console, the error was that it could not find the player.name. This is because I have set it up where once on the game page, it will welcome the players and state who the first player is. Since no name was input, it completely bugged out. 
I then worked on how to resolve this before the goToGame function takes the user to the game route. This alert is the result.<br/>  
![Progress Photo 37](/README_images/Progress_37.png)<br/> 

Found a way to make the dice line break to be centered. The problem I had was the battlog is the parent and if I had text aligned this, the p tags would also have aligned to center, which isn't what I wanted. Solution was to wrap the span tag with a new div and text-align that div. Now I have a very nice line break that separates each players turn
![Progress Photo 38](/README_images/Progress_38.png)<br/> 

I wanted to take a break from debugging so I played with animations! It was so much fun coming up with the idea of moving the helicopter across the page. Then the idea of incorporating that with an onClick just popped up and I thought how cool would it be if the HOW TO PLAY modal pops up from click on the helicopter! AND IT WORKED! I also decided to add another animation element (red car). In my mind, I'd like to make it an easter egg, where users who discover they can click on helicopter, might click on the car as well. Once they do, they'll find a modal displaying the creator (me) and my details like links to github and linkedin. That's the next step. Also I added a prompt so people will click on the helicopter.<br/> 
![Progress Photo 39](/README_images/Progress_39.png)<br/> 
![Progress Photo 40](/README_images/Progress_40.png)<br/> 
![Progress Photo 41](/README_images/Progress_41.png)<br/> 

Creating the shadow for the helicopter!
![Progress Photo 41](/README_images/Progress_41.png)<br/> 


## Post-Development 




## :rocket: Cool tech
-   Trello - For project management
-   Whimsical - Wireframing
-   Canva - For Conceptual Design and graphics
-   JavaScript - Language used
-   React - Front-End Framework
-   Surge - To deploy
-   Photoshop - Image editing
-   Sass (Syntactically Awesome Style Sheets) - Styling
-   Google Icons

## Dependencies
-   `npx create-react-app`
-   `npm i react-router-dom`
-   `npm i -g surge`
-   `npm i sass`


## References
-   Game Rules and images - https://www.fgbradleys.com/rules/rules2/MachiKoro-rules.pdf


## :scream: Bugs to fix :bug:
- 

## :sunglasses: Lessons learnt
1.  When trying to debug, copy code that is already working into the area where it does not work (if it's a similar task), then if the bug is still there, it means the issue is coming from somewhere else. This can narrow down the scope of the debugging task.
2.  console.log, console.log, console.log!
![Lessons Learnt 01](/README_images/Lessons_01.png)<br/> 
3.  Learnt 2 new functions - .every & .trim
    -   .every is a high order function and goes through the array. For each element in the array it checks a condition (in my case it was whether the name input had more than 0 characters), it then returns a boolean value.
    -   .trim was used in order to get rid of any spaces '_' that the user might have input. This way, they won't just hvae an empty space for a name. 


## Future features
-   Implement 2 dice function.
-   Blue cards from 1-12
-   Create Red Cards
-   All 4 landmarks
-   Green and Purple cards to be created.
-   Game can be hosted and be played on multiple computers over the internet.

## Conclusions

