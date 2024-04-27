# Guess the Number game.

## Start - selecting a number of rounds
On start the display shows a question mark ("?") and the player can select a number of rounds to play. The default is 3. Button A decreases and Button B increases number of rounds by 2 (to keep it odd). When decided, player touches the microbit logo.
If the number of rounds selected is negative, and error is shown and the selection of the number of rounds starts again.

## Gameplay - guessing the numbers
The display shows a digit between 1 and 9 and the player must guess if the next number to be displayed is lower - by pressing Button A, or higher - by pressing Button B. If player guesses correctly, a happy face is shown; if player guesses incorrectly, a sad face is shown. Correct guesses score one point, negative guesses do not change the score. Display shows the next number, and the game continues until the number of selected rounds is completed.

## Scoring and the End
When at least half of the guesses were correct, the player is a Winner, otherwise - a Loser, and the game restarts with the prompt for the number of rounds.

# Try it out in MakeCode.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste ```https://github.com/virtuallynowhere/guess_the_number``` and click "Go Ahead!"

#### Metadata (used for search, rendering)
* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
