var roleSpawnCreeps = require('role.spawnCreeps');
var roleAuxilaryFunctions = require('role.auxilaryFunctions');


// TODO: Make the towers get fuel
// // TODO: Make links link
// // TODO: create routine that determines numbers of each creep: per harvesters and eCapacity and construction sites
// // TODO: add more levels of spawning script
// // TODO: function for suiciding creeps if resources allow and have low tier creeps
//
// // TODO:
// //      Create repairer module
// //      containers?
// //      tower module
// //      courier module
// //      stationary miner
// //      room expanding?
// //      link?
// //      if something is full then go to other mine? (a lot to take into acount)

module.exports.loop = function () { // start of game tick
    // my scripts
    roleSpawnCreeps.run(roleAuxilaryFunctions.determineEnergyLevel())
    roleAuxilaryFunctions.doYourChores()
    roleAuxilaryFunctions.clearTheDead()
} // end of game loop




function CheckRCL() {
    // could also use
    eCap = Game.spawns.Spawn1.room.energyCapacityAvailable  // ecap = energy capacity currently
    levelState =  (eCap <= 550) ?  'ONE' :  // these are all 50 off because of some bug (add 50 after)
                  (eCap >= 550  && eCap < 800) ?  'TWO'  :
                  (eCap >= 800  && eCap < 1050) ?  'THREE'  :
                  (eCap >= 1050 && eCap < 1550) ? 'FOUR':
                  (eCap >= 1550 && eCap < 2050) ? 'FIVE' :
                  (eCap >= 2050 && eCap < 2550) ? 'SIX' :
                                         'UNDEFINED';
    if(!levelState){
        levelState = 'zero';
    throw new Error('levelState is not defined') // enough to catch errors?
    }
    return levelState
}

