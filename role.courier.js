var roleCourier = {
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
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
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
module.exports = roleCourier;
