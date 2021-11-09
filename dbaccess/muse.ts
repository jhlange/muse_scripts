import Realm from 'realm';
import { MeSession } from './schema/user_8071911c5a57441f9c2afe3c6cd0e117-model';

export class Database {
    config : Realm.Configuration
    dbPath: string
    realm : Realm

    private constructor(path: string) {
        this.dbPath = path;
        this.config = {
            path: this.dbPath,
            readOnly: true,
        }
    }

    public static async init(path: string) : Promise<Database> {
        let db = new Database(path)
        db.realm = await Realm.open(db.config)
        return db
    }

    public sleepSessions(cb : (session : Session) => void) {
        let sessions = this.realm.objects('MeSession')
            .filtered('type == "presleep"')
        
        sessions.forEach((value, index, array) => {
            cb(new Session(this.realm,value))
        })
    }
}

export class Session {
    realm : Realm
    session : Realm.Object
    meSession : MeSession
    public constructor(r, s) {
        this.realm = r
        this.session = s
        this.meSession = s
    }

    public startTime() : number {
        return this.meSession.utcTimestamp
    }

    public durationSeconds() : number {
        return this.meSession.completedSeconds
    }


}

export default Database