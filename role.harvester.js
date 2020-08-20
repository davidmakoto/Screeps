// console.log(Game.creeps.Harvester18397849.memory.working)
// console.log(Game.creeps.Harvester18397849.memory.working)
var roleHarvester = {
    run: function(creep) {
        // creep.memory.working = false;
        if(creep.carry.energy == 0)
            creep.memory.working = true; // start working state
        else if (creep.carry.energy == creep.carryCapacity)
            creep.memory.working = false; // start storing state

        // if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
        //     goHarvest(creep);
        // }

                // harvest
        if(creep.memory.working == true) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        // store energy state
        else {
            // set up some system that detects if the creep has already filled up and then make it so they continusely dump resources into extensions before heading back
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            var closestDumpPoint = creep.pos.findClosestByPath(targets);
            if(targets.length > 0) {
                if(creep.transfer(closestDumpPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestDumpPoint, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleHarvester;

//
// var roleHarvester = {
//     run: function(creep) {
// 	    if(creep.store.getFreeCapacity() > 0) {
//             var sources = creep.room.find(FIND_SOURCES);
//             if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
//             }
//             // maybe do something like (random num generator % (# of sources)) to distribute the workers between the sources
//             // or var x = ? (source[0] vs source[1])
//             // https://www.reddit.com/r/screeps/comments/52fguz/is_there_anyway_to_sort_a_find_by_the_closest/
//             // ? : syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//         }
//         else {
//             // set up some system that detects if the creep has already filled up and then make it so they continusely dumb resources into extensions before heading back
//             var targets = creep.room.find(FIND_STRUCTURES, {
//                     filter: (structure) => {
//                         return (structure.structureType == STRUCTURE_CONTAINER ||
//                                 structure.structureType == STRUCTURE_EXTENSION ||
//                                 structure.structureType == STRUCTURE_SPAWN ||
//                                 structure.structureType == STRUCTURE_TOWER) &&
//                                 structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
//                     }
//             });
//             if(targets.length > 0) {
//                 if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//                     creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
//                 }
//             }
//         }
// 	}
// };
//
// module.exports = roleHarvester;