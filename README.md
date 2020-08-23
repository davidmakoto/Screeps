# Screeps

## The code above is for a game called Screeps. In this real time strategy game, you can essentially only use scripts to interact with the game itself, which the goal is to have it fully autonomous. 

### For more infor about the structure of the code visit Screeps.com 

### Rough summary of the code:
<ul>
  <li> Each "tick" of the game runs the main function
  <li> There are a number of important functions in "role.auxilaryFunctions.js" that calculate realtime information to determine spawning new creeps
  <li> The majority of the code is in the module "role.spawnCreeps.js" which determines what steps can be taken given the current resources and existing creeps 
  <li> The rest of the modules are instructions that run each "tick" of the game for specific roles that each creep carries
</ul>
