var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleTower = require('role.tower');

var roleAuxilaryFunctions = {
    determineEnergyLevel: function() {
        eCap = Game.spawns.Spawn1.room.energyCapacityAvailable  // ecap = energy capacity currently
        levelState =  (eCap <= 550)   ? 'ONE'   :   // large condensed if statement that determines max energy
        (eCap >= 550  && eCap < 800)  ? 'TWO'   :
        (eCap >= 800  && eCap < 1050) ? 'THREE' :
        (eCap >= 1050 && eCap < 1550) ? 'FOUR'  :
        (eCap >= 1550 && eCap < 2050) ? 'FIVE'  :
        (eCap >= 2050 && eCap < 2550) ? 'SIX'   :
                                        'UNDEFINED';
        if(!levelState){
            levelState = 'zero';
            throw new Error('levelState is not defined') // enough to catch errors?
        }
        return levelState
    },

    clearTheDead: function() {
        // clearing memory of dead creeps
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    },

    doYourChores: function() {  // directing each creeps duties to the respective modules
        // check if construction sites
        // check if upgraders?

        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == 'harvester') { roleHarvester.run(creep); }
            if(creep.memory.role == 'upgrader') { roleUpgrader.run(creep); }
            if(creep.memory.role == 'extensionFeeder') { roleextensionFeeder.run(creep); }
            if(creep.memory.role == 'repairer') { roleRepairer.run(creep); }
            if(creep.memory.role == 'tower') {roleTower.run();}
            
            if(creep.memory.role == 'builder') {
                if (creep.memory.building == 'pergatory') {
                    if (_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length < 3) {
                        delete creep.memory.building
                        creep.memory.role = 'harvester'
                        creep.memory.working = 'true'
                        roleHarvester.run(creep)

                    }
                        // creep.memory.building
                    // todo: make return case
                    else
                        roleUpgrader.run(creep)
                }
                roleBuilder.run(creep); }

        }

    }



};
module.exports = roleAuxilaryFunctions;