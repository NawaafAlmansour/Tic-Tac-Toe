# Project #1: Tic Tac Toe

https://zenger7.github.io/Tic-Tac-Toe/

## Overview:
I will be showing you how to create a Tic Tac Toe game from A to Z. using JS HTML and CSS. I will also show to create the AI using the Minimax Algorithm. I use a div to create the 9 grid needed for the tic tac toe board. After we get this code in we'll add some CSS to make it look more like a traditional video games. I're also going to need to display who is the winner pf the fame so at the bottom. Also we'll add a button that will allow the player to reset the game .

**You will be working individually for this project**, but we are here to support you and you are here to support each other. Show us what you've got!

---
## Technologies/Frameworks used

- **HTML5**
- **CSS**
- **JavaScript**
- **jQuery**
- **Command Line**
- **design wireframe**

---

### User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

![Image ](https://i.imgur.com/C3TqZjg.jpg)

---

## What I Learned

- **Command Line**: Practice interacting with the computer and navigating the filesystem from the command line.

- **Source Control**: Manage and interact with a git repository to store changes to code.
Programming Fundamentals: Work with objects, arrays, events, while learning how to strategically solve problems and resolve errors.

- **Web Fundamentals**: Learn how to use HTML, CSS, and JS to build interactive web pages. Also learn how to respond to actions your users take and the data they input into the browser.

- **Browser Applications**: Dive into JavaScript, and figure out how to use libraries and frameworks to get lots of style and functionality for free.

- **Deployment**: Host a static web site in a managed hosting environment.
Products and Teams: Document your code and your code repository so others understand what you've built.



-----
# design


![Image ](https://i.imgur.com/eFKimW5.png)



![Image ](https://i.imgur.com/Mbk80ua.png)




![Image ](https://i.imgur.com/gUZk5kw.png)


---
## Technical Requirements

Your Tic Tac Toe app must:
- **Render a game board in the browser**
- **Switch turns** between X and O (or whichever markers you select)
- **Visually display which side won** if a player gets three in a row, or show a draw if neither player wins
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript and/or jQuery** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
  - We will be walking you through this process!
- Use **semantic markup** for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

---

#### Potential Extra Tic Tac Toe Features

- Keep track of multiple game rounds with a win, lose and tie counter
- Allow players to customize their tokens (X, O, name, picture, etc)
- Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Involve Audio in your game
- Create an AI opponent: teach JavaScript to play an unbeatable game against you
- Make your site fully responsive so that it is playable from a mobile phone
- Get inventive

---


#### Potential Extra Tic Tac Toe Features

- Keep track of multiple game rounds with a win, lose and tie counter
- Allow players to customize their tokens (X, O, name, picture, etc)
- Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Involve Audio in your game
- Create an AI opponent: teach JavaScript to play an unbeatable game against you
- Make your site fully responsive so that it is playable from a mobile phone
- Get inventive with your styling e.g. use hover effects or animations

## README Suggestions

- List technologies used
- Link to wireframes and user stories.
- Document your planning and tell a story about your development process and problem-solving strategy.
- List unsolved problems which would be fixed in future iterations.
- Describe how you solved for the winner
- Describe how some of your favorite functions work

## Necessary Deliverables
* Projects are due Thursday, 7/4 at 9am!

- A **working game, built by you**, hosted somewhere on the internet
- A **link to your hosted working game** in the URL section of your Github repository
- A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the _very beginning of the project_
- **A `README.md` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, any other useful information etc.
- A **5 minute presentation** in which you answer the following questions:
  - What is the game about?
  - Is there any information you think might help us understand what you built?
  - What features did you include?
    - Make sure to explain anything "new" (things that we didn't cover in class)
  - What was the most difficult part of the project?
  - What was your favourite part to work on?
  - What would you like to add next?
  - Demo of the game

---

## Useful Resources

- **[MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla JavaScript)_
- **[DevDocs](https://devdocs.io/)**
- **[jQuery Docs](http://api.jquery.com)**
- **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
- **[GitHub Markdown Tutorial](https://guides.github.com/features/mastering-markdown/)** _(for working with Markdown)_

#  the move with maximum score when it is the AI
How to make your Tic Tac Toe game unbeatable by using the minimax algorithm

## Algorithm Details
A minimax algorithm is a recursive algorithm for choosing the next move in an n-player game, usually a two-player, back and forth game. A value is associated with each position or state of the game. This value is computed by means of a position evaluation function and it indicates how good it would be for a player to reach that position. The player then makes the move that maximizes the minimum value of the position resulting from the opponent's possible following moves. If it is A's turn to move, A gives a value to each of his legal moves.


![Image ](https://cdn-media-1.freecodecamp.org/images/K1y8jFFT0JeL14tHaAum8lF2cs7WXsQOOp9j)



https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/



##  Resources

- **[MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla JavaScript)_
- **[DevDocs](https://devdocs.io/)**
- **[jQuery Docs](http://api.jquery.com)**
- **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
- **[GitHub Markdown Tutorial](https://guides.github.com/features/mastering-markdown/)** _(for working with Markdown)_


- **reduce()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- **entries()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- **every()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- **filter()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- **Game Score**
https://www.w3schools.com/graphics/game_score.asp
- **Sound effect**
http://soundbible.com/
- **Animate.css**
https://daneden.github.io/animate.css/

### Copyrights
