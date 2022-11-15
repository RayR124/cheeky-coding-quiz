My Task:
I was challenged this week to creat a functional and timed quiz. This simple application would serve several functions, such as logging the initials of a user with the high score (the user with the most time left by the time the last question was answered) and sorting said score, a one-minute timer which would automatically end the test the moment it reached 0 if the last question had not yet been answered, and a dynamic page that would automatically load the next question as soon as the previous question was answered.

Below is the user story and acceptance criteria I was given.

User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers


Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score


Acceptance Criteria Simplified
This project is about creating a quiz game. You will need to do the following:

Have a list of questions for the player. Each question should have at least 4 answers with one being correct. Have at least 2 questions, though more is encouraged!
When the user clicks the start button, show them the first question.
As the user answers questions, move them to the next question until all questions are out.
When no more questions are left, Show the game over screen.
Add in a timer. The timer should start as soon as the start button is clicked, and tick down each second. It should show in the top right corner of the page.
When the user choses an incorrect answer, take some time off the timer. How much is up to you.
When the timer reaches 0, show the game over screen.
Show the last timer value as the player's score on the game over screen.
Give the player the ability to enter their initials, then save them to localstorage along with the score from the game over screen. You should save the data in a format that allows multiple high scores to be saved.
Once the player saves their highscore, show the highscores as a list on the page
Add a link to the top left corner. When clicked, go directly to the highscore list.

Here is a screenshot of the quiz home page: "https://github.com/RayR124/timed-quiz/blob/main/assets/Quiz-Screenshot.png?raw=true"

I faced several challenges in the devlopement of this application, such as:
-Discovering the complexity of using the hidden class
-creating a functional countdown timer
-logging the users high scores proved more challenging that initially expected
-creating a function that would close the quiz if the timer elapsed but the final question wasn't answered

Overall, I rather enjoyed creating this application. I found great satisfaction in my triumphs and was rather proud of myself once it all came together. I look forward to using the skills I learned in this project in many more!