/*
Interview Question: Dream11 Team Validation System

You are asked to implement a validation system for a fantasy cricket team selection screen (like Dream11).

Requirements

A user has a fixed number of credits (budget) to spend.

    The team must have exactly X players in total.

    Each player belongs to a category (e.g., Wicketkeeper, Batsman, All-rounder, Bowler) and there are min/max constraints per category.

    Example: 1 ≤ Wicketkeepers ≤ 2, 3 ≤ Batsmen ≤ 5, etc.

    Each player belongs to a real squad/team, and the user can pick at most Y players from one squad.

    The validation system should return true/false along with a list of error messages if constraints are violated.

    Input Example
// Total credits available
const MAX_CREDITS = 100;
const MAX_PLAYERS = 11;
const MAX_PER_SQUAD = 7;

const categoryConstraints = {
    "WK": { min: 1, max: 2 },
    "BAT": { min: 3, max: 5 },
    "AR": { min: 1, max: 3 },
    "BOWL": { min: 3, max: 5 },
};

const players = [
    { id: 1, name: "Player A", category: "WK", credit: 9, squad: "IND" },
    { id: 2, name: "Player B", category: "BAT", credit: 10, squad: "IND" },
    { id: 3, name: "Player C", category: "BAT", credit: 8, squad: "AUS" },

];

Function Signature

function validateTeam(selectedPlayers, maxCredits, maxPlayers, maxPerSquad, categoryConstraints) {
}

Expected Output Example
const result = validateTeam(players, MAX_CREDITS, MAX_PLAYERS, MAX_PER_SQUAD, categoryConstraints);

console.log(result);

{
    isValid: false,
        errors: [
    "Total credits exceeded (105/100)",
    "Too many players from squad IND (8/7)",
    "Category BAT has too few players (2/3)"
]
}


👉 This lets the interviewer check:

    Data modeling (how players and rules are represented)

Implementation of multiple rules in a clean, extensible way

Returning actionable error messages

Thinking about edge cases
*/