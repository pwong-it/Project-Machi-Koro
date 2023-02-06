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
    -   An embedded screenshot of the app
    -   :white_check_mark: Explanations of the technologies used
    -   :white_check_mark: A couple paragraphs about the general approach you took
    -   :white_check_mark: Installation instructions for any dependencies
    -   Link to your user stories – who are your users, what do they want, and why?
    -   :white_check_mark: Link to your wireframes – sketches of major views / interfaces in your application
    -   :white_check_mark: Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
    -   Descriptions of any unsolved problems or major hurdles you had to overcome

### Technical Requirements (Minimum Viable Product)
-   The Game will need to be able to finish with one winner being determined.
-   Game will be 2-4 players
-   Ability to input Player names at the start
-   Two of the original 4 landmarks cards to be created. 
-   Landmark cards will not have any abilities. Only first to purchase them all is enough to determine winner.
-   Only Blue Cards to be created and in play.
-   Game can be played locally on one computer.
-   Finishing the game will display the winner.
-   Only 1 dice to be in play.
-   Only cards up from 1-6 will be purchasable. Some modifications to cards may be required for MVP. 

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
1.  


## Future features
- 

## Conclusions

