#Keepr

Both the Web app, the mobile app and the on-board code of the Keepr system

## Commit conventions

All the commits are in English, with the following format:
[type] message

type should be replaced by either:
* all if the commit concerns the whole project, or nothing in particular
* front if the commit concerns the front-end of the Web app
* back if the commit concerns the back-end
* mobile if the commit concerns the mobile app
* board if the commit concerns the on-board code

Examples:
* [all] Add README.md
* [front] Add BasicButton component

## Branching conventions

The master branch should only contain working and tested code.

Work-In-Progress code should be written on branches:
* all, the main branch for everything that is not included specificly in ont of the three project components
* front, the main branch for the front-end code of the Web application
* back, the main branch for the back-end code
* mobile, the main branch for mobile application code
* board, the main branch for on-board code
* Any other branch, coming from one of the previously stated branches
