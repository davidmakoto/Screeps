// TODO: make something that generates these numbers
var numBuilders = 1;
 var numUpgraders =12;
 var numHarvesters = 5;
 
 // notes for numof_eachscreep generator
 // level 4 only need like 4 harvesters


var roleSpawnCreeps = {
        run: function(rcl) {
            switch (rcl) {
                case 'UNDEFINED':
                    console.log('RCL was set to UNDEFINED')
                case 'ONE':
                    rclSpawnRoutineONE(rcl)
                    break
                case 'TWO':
                    rclSpawnRoutineTWO(rcl)
                    break
                case 'THREE':
                    rclSpawnRoutineTHREE(rcl)
                    break
                case 'FOUR':
                    rclSpawnRoutineFOUR(rcl)
                    break
                case 'FIVE':
                    rclSpawnRoutineFIVE(rcl)
                    break
                case 'SIX':
                    // TODO: rclSpawnRoutineSIX(rcl)
                    break
                default:
                // console.log('hey we\'re in the funshit function')

            }

            displayRoleBeingSpawned()
        }

};
module.exports = roleSpawnCreeps;

 function displayRoleBeingSpawned() {
     if(Game.spawns['Spawn1'].spawning) {
         var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
         Game.spawns['Spawn1'].room.visual.text(
             '🛠️' + spawningCreep.memory.role,
             Game.spawns['Spawn1'].pos.x + 1,
             Game.spawns['Spawn1'].pos.y,
             {align: 'left', opacity: 0.8});
     }
 }
 function rclSpawnRoutineONE(rcl) {
     checkIfEveryoneDied(rcl)
     // harvesters
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < numHarvesters)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});

     // upgraders
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     console.log('Upgraders: ' + upgraders.length);

     if(upgraders.length < numUpgraders)
     Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], 'Upgrader' + Game.time,
         {memory: {role: 'upgrader'}});

     // for autospawning builders
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);

     if(builders.length < numBuilders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], 'Builder' + Game.time,
             {memory: {role: 'builder'}});
 }
 function rclSpawnRoutineTWO(rcl) {
     checkIfEveryoneDied(rcl)
     // harvesters
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < numHarvesters)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});

     // upgraders
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     console.log('Upgraders: ' + upgraders.length);

     if(upgraders.length < numUpgraders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE], 'Upgrader' + Game.time,
             {memory: {role: 'upgrader'}});

     // for autospawning builders
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);

     if(builders.length < numBuilders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE], 'Builder' + Game.time,
             {memory: {role: 'builder'}});
 }
 function rclSpawnRoutineTHREE(rcl) {  // 750 & 800 once bug fixed
     checkIfEveryoneDied(rcl)



     // for autospawning builders
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);

     if(builders.length < numBuilders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], 'Builder' + Game.time,
             {memory: {role: 'builder'}});
             
       // upgraders
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     console.log('Upgraders: ' + upgraders.length);

     if(upgraders.length < numUpgraders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], 'Upgrader' + Game.time,
             {memory: {role: 'upgrader'}});

             
     // harvesters
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < numHarvesters)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});

 }
 function rclSpawnRoutineFOUR(rcl) {  // 1000
     checkIfEveryoneDied(rcl)

     // upgraders
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     console.log('Upgraders: ' + upgraders.length);

     if(upgraders.length < numUpgraders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,
                                                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                                 MOVE,MOVE,MOVE,MOVE], 'Upgrader' + Game.time,
             {memory: {role: 'upgrader'}});

     // for autospawning builders
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);

     if(builders.length < numBuilders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,
                                                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                                 MOVE,MOVE,MOVE,MOVE], 'Builder' + Game.time,
             {memory: {role: 'builder'}});
             
     // harvesters
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < numHarvesters)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,
                                                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                                 MOVE,MOVE,MOVE,MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});

 }
 function rclSpawnRoutineFIVE(rcl) {  // 1250
     checkIfEveryoneDied(rcl)
     // harvesters
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < numHarvesters)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,
                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                 MOVE,MOVE,MOVE,MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});

     // upgraders
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
     console.log('Upgraders: ' + upgraders.length);

     if(upgraders.length < numUpgraders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,
                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                 MOVE,MOVE,MOVE,MOVE], 'Upgrader' + Game.time,
             {memory: {role: 'upgrader'}});

     // for autospawning builders
     var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
     console.log('Builders: ' + builders.length);

     if(builders.length < numBuilders)
         Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,
                 CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                 MOVE,MOVE,MOVE,MOVE], 'Builder' + Game.time,
             {memory: {role: 'builder'}});

 }

 function checkIfEveryoneDied(rcl) {
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
     console.log('Harvesters: ' + harvesters.length);
     // auto spawns another harvester if less than x
     if(harvesters.length < 4 && harvesters.length > 0) {
         // TODO: check to make sure rcl is not null
         switch(rcl) {
             case 'ONE':
                 Game.spawns['Spawn1'].spawnCreep([WORK,
                         CARRY,CARRY,CARRY,
                         MOVE], 'Harvester' + Game.time,
                     {memory: {role: 'harvester', working: true}});
                 break
             case 'TWO':
                 Game.spawns['Spawn1'].spawnCreep([WORK,WORK,
                         CARRY,CARRY,CARRY,CARRY,
                         MOVE], 'Harvester' + Game.time,
                     {memory: {role: 'harvester', working: true}});
                 break
             case 'THREE':
                 Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,
                         CARRY,CARRY,CARRY,CARRY,
                         MOVE,MOVE], 'Harvester' + Game.time,
                     {memory: {role: 'harvester', working: true}});
                 break
             case 'FOUR':
                 Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,
                         CARRY,CARRY,CARRY,CARRY,CARRY,
                         MOVE,MOVE], 'Harvester' + Game.time,
                     {memory: {role: 'harvester', working: true}});
                 break
             case 'FIVE':
                 Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,
                         CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                         MOVE,MOVE,MOVE,MOVE], 'Harvester' + Game.time,
                     {memory: {role: 'harvester', working: true}});
                 break


         }
     }
     else if (harvesters.length < 1) {  // if 0 harvesters spawn a cheap one
         Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK,
                 CARRY, CARRY, CARRY,
                 MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});
         Game.spawns['Spawn1'].spawnCreep([WORK,
                 CARRY, CARRY, CARRY,
                 MOVE], 'Harvester' + Game.time,
             {memory: {role: 'harvester', working: true}});
     }
 }