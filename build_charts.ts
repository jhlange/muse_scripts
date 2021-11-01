let dbPath = '../EEG and Heart Rate/iOS Muse App Data/AppDomain-com.interaxon/Documents/user_8071911c5a57441f9c2afe3c6cd0e117.realm';
import './dbaccess/schema/user_8071911c5a57441f9c2afe3c6cd0e117-model'
import MuseDatabase from './dbaccess/muse';
import os from 'os';
import process from 'process';
import { mapValues } from '../../../../../Library/Caches/typescript/4.4/node_modules/@types/async';
import { MeSession } from './dbaccess/schema/user_8071911c5a57441f9c2afe3c6cd0e117-model';

async function main(database : MuseDatabase) {
    var i = 0;
    database.sleepSessions((value) => {
            if (i++ != 2)
                return
            console.info(value.meSession)


            //console.info("--------")
            //console.info(results)
            process.exit(0)
        })
}





//#region Init
function main_sync(database : MuseDatabase) {
    main(database)
}
async function errExit(reason) : Promise<void> {
       console.error('ERROR OPENING MUSE DB: ', reason);
       process.exit(1);
}
MuseDatabase.init(dbPath).then(main_sync).catch(errExit);
//#endregion Init
