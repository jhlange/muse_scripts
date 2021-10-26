import Realm from 'realm';

export class Database {
    config : Realm.Configuration
    dbPath: string
    realm : Realm

    private constructor(path: string) {
        this.dbPath = path;
        this.config = {
            path: this.dbPath,
        }
    }

    public static async init(path: string) : Promise<Database> {
        let db = new Database(path)
        db.realm = await Realm.open(db.config)
        return db
    }

    public sleepSessions() {
        let sessions = this.realm.objects('MeSession')
            .filtered('type == "presleep"')
        return sessions
    }
}

export default Database