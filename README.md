# Screeps

### The code above is for a game called Screeps. In this real time strategy game, you can essentially only use scripts to interact with the game itself, which the goal is to have the game run itself with fully autonomy. For a more indepth summary of the game structure visit Screeps.com, otherwise read below for a short summary.

#### Rough summary of the code:
<ul>
  <li> Each "tick" (unit of time, ~4 seconds) of the game runs the main function
  <li> There are a number of important functions in "role.auxilaryFunctions.js" that calculate realtime information to determine spawning new creeps
  <li> The majority of the code is in the module "role.spawnCreeps.js" which determines what steps can be taken given the current resources and existing creeps 
  <li> The rest of the modules are instructions that run each "tick" of the game for specific roles that each creep carries
</ul>
