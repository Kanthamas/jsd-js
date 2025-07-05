//External modules
const prompt = require("prompt-sync")({ sigint: true });
const clear = require("clear-screen");

const possibleMoves = ["u", "d", "l", "r"];

/**
 * Prompt the user for the next move.
 *
 * @param {object} game
 * @param {string} message
 * @returns {string}
 */
function getInput(game, message) {
	const input = prompt({
		ask: "What's your next move? [u]p/[d]own/[l]eft/[r]ight",
	});

	var move = transformInput(input.toLowerCase());

	if (!possibleMoves.includes(move)) {
		clear();
		game.print(message);
		console.error(
			"Incorrect move, please specify which direction you want to move!"
		);
		getInput();
	}

	return move;
}

/**
 * Convert input to match the `possibleMoves` letters if possible.
 *
 * @param {string} move
 * @returns {string}
 */
function transformInput(move) {
	switch (move) {
		case "up":
			return "u";
		case "down":
			return "d";
		case "left":
			return "l";
		case "right":
			return "r";
		default:
			return move;
	}
}

module.exports = {
	getInput,
};
