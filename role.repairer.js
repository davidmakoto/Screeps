var roleRepairer = {

    run: function(creep) {
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return (object.getActiveBodyparts(MOVE) == 0) && 
            object.memory.destinationId &&
            !object.pos.isNearTo(Game.getObjectById(object.memory.destinationId));
    }
});
if(target) {
    if(creep.pull(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    } else {
        target.move(creep);
        if(creep.pos.isNearTo(Game.getObjectById(target.memory.destinationId))) {
            creep.move(creep.pos.getDirectionTo(target));
        } else {
            creep.moveTo(Game.getObjectById(target.memory.destinationId));
        }
    }
}
}}

// var roleRepairer = {

//     run: function(creep) {
        
//          if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
//             creep.memory.repairing = false;
//             creep.say('🔄 aw shit i gotta harvest');
// 	    }
// 	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
// 	        creep.memory.repairing = true;
// 	        creep.say('⚡ repairing bitches');
// 	    }

//         // finding repairees        
//         const targets = creep.room.find(FIND_STRUCTURES, {
//             filter: object => object.hits < object.hitsMax
//         });
        
//         targets.sort((a,b) => a.hits - b.hits);
        
//         if(creep.memory.repairing) {

//             if(targets.length > 0) {
//                 if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
//                     creep.moveTo(targets[0]);
//                 }
//             }
//             else {
//                 var sources = creep.room.find(FIND_SOURCES);
//                 if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
//                 }
//             }
            
//         }
// 	}
// };

// /*
//  * Module code goes here. Use 'module.exports' to export things:
//  * module.exports.thing = 'a thing';
//  *
//  * You can import it from another modules like this:
//  * var mod = require('role.repairer');
//  * mod.thing == 'a thing'; // true
//  */

// module.exports = roleRepairer;
