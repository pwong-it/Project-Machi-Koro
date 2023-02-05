# Machi Koro
The final project of my Software Engineering Immersive Course at General Aseembly. As the final project, I would like to recreate a board game called Machi Koro that my board game crew loves to play. This is for education purposes only and because of my passion for spending great times with friends. Images of the cards have been taken online and modified to suit my version. <br/> 

How the game is set up and the game play may vary to the original game as I am designing this based on how I play the game. For example, not all cards available for purchase is shown face up. This way, there is a bit more luck involved. <br/> 

Date Received: 6/2/2023<br/>
Date Due: 10/2/2023

## :computer: [Click here](https://project-machi.surge.sh/) to see my live project!

## :page_facing_up: About
The below are the criteria set out by myself and the course that I will need to meet:

### Necessary Deliverables 
-   A link to your hosted working app in the URL section of your GitHub repo
-   A git repository hosted on GitHub, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
-   A readme.md file with:
    -   An embedded screenshot of the app
    -   Explanations of the technologies used
    -   A couple paragraphs about the general approach you took
    -   Installation instructions for any dependencies
    -   Link to your user stories – who are your users, what do they want, and why?
    -   Link to your wireframes – sketches of major views / interfaces in your application
    -   Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
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
Breakdown of the Landmark Cards:
![Planning Photo 3](/README_images/Planning_03.png)
Front of Landmark Card is shown when it is constructed, back when not constructed
![Planning Photo 4](/README_images/Planning_04.png)

Each Landmark and their effects when constructed:<br/> 
**Train Station**<br/> 
Players will be able to choose at the beginning of their turn to roll 1 or 2 dice. 


### Establishment Cards

### Dice & Activation



### Coins

### Starting Set-up


Use the Problem Solving Process framework to break down the project into manageable components. From Technical Requirements & Necessary Deliverables
1.  Keywords 
    -



2.  Tasks <br/>
    - :white_check_mark: Create homepage
    <br/>
    

3.  Implement - Coding Journey and debugging.<br/> 
    Below are some "highlights" where problems arose and how I dealt with this problems. <br/> 

    ### Progress
    ![Progress 1](./images/Progress_01.png)
    
### Post-Development




## :rocket: Cool tech



## :scream: Bugs to fix :bug:
- 

## :sunglasses: Lessons learnt
1.  


## Future features
- 

## Conclusions

