let dbPath = '../EEG and Heart Rate/iOS Muse App Data/AppDomain-com.interaxon/Documents/user_8071911c5a57441f9c2afe3c6cd0e117.realm';

import MuseDatabase from './dbaccess/muse';
import os from 'os';
import process from 'process';

function main(database : MuseDatabase) {
    database.sleepSessions()
        .forEach((value, index, array) => {
            console.info(value)
            process.exit(0)
        })
}





//#region Init
async function errExit(reason) : Promise<void> {
       console.error('ERROR OPENING MUSE DB: ', reason);
       process.exit(1);
}
MuseDatabase.init(dbPath).then(main).catch(errExit);
//#endregion Init
