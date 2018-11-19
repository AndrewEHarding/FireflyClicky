# FireflyClicky
Welcome to the Firefly themed Clicky game, made with React.

The object of the game is to click the portrait of each character once. The trick is that every time you click a portrait, they’re all randomized. Memory is key if you want a high score.

The page is rendered by mapping over the `characters.json` object. Each character have a click event that sets it's clicked state to `true` and increments the current `score`. Every click even also checks if the character was already clicked. If the clicked state is `true`, the game ends and a new `topScore` is set based on the current `score`.