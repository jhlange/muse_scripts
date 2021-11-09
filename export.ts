import MuseDatabase from './dbaccess/muse';
import fs from 'fs';
import path from 'path';
import process from 'process';
import chalk from 'chalk';

var dataDir = "data_detailed";
var noDataDir = "data_summary";

function main(database : MuseDatabase) {
    var i = 0;
    database.sleepSessions((value) => {
            var dir = noDataDir;
            let hasData = value.meSession.timeSeries != null
                && value.meSession.timeSeries != undefined;

            if (hasData) {
                dir = dataDir;
            }

            let startTime = new Date(value.meSession.startDatetimeLocalWithTimezone)
            //let intlDateObj = new Intl.DateTimeFormat('en-US', {
            //    timeZone: "America/New_York"
            //});
            //let nyTime = intlDateObj.format(startTime)
            //startTime = new Date(nyTime)

            // 2021_0805_101055
            let year = startTime.getFullYear()
            let month = '' + (startTime.getMonth() + 1);
            if (month.length < 2) month = '0' + month;
            let day = '' + (startTime.getDate());
            if (day.length < 2) day = '0' + day;
            let hour = '' + (startTime.getHours() + 1);
            if (hour.length < 2) hour = '0' + hour
            let minutes = '' + (startTime.getMinutes() + 1);
            if (minutes.length < 2) minutes = '0' + minutes;
            let seconds = '' + (startTime.getSeconds() + 1);
            if (seconds.length < 2) seconds = '0' + seconds;
            let formatted = `${year}_${month}${day}_${hour}${minutes}${seconds}`;
            let fileName = formatted + '_' + value.meSession.id + '.json';
            let filePath = path.join(dir, fileName)
            let data = JSON.stringify(value.session.toJSON(), null, '\t')
            fs.writeFileSync(filePath, data, {flag: "w"})
        })
}

function post_main() {
    fs.readdir(dataDir, null, (err, files) => {
        for (var i = 0; i < files.length; i++) {
            let base = path.basename(files[0]);
            let potential = path.join(noDataDir, base);
            //console.log(chalk.grey("checking for: " + potential))
            if (fs.existsSync(potential)) {
                console.log(chalk.grey("cleaning up: ") + chalk.bgYellow(potential));
                fs.rmSync(potential);
            }
        }
    })
}

//#region Init
var next_db = 0;
var dbs : string[];

function instance_main(database: MuseDatabase) {
    main(database);
    next_db++;
    instance_run();
}

function instance_run() {
    if (next_db < dbs.length) {
        console.log(chalk.bold('querying db ' + (next_db +1) + ' of ' + '' + dbs.length) + ': ' + chalk.cyan(dbs[next_db]) + '')
        MuseDatabase.init(dbs[next_db]).then(instance_main).catch(errExit);
    } else {
        post_main();
    }
}

async function errExit(reason) : Promise<void> {
       console.error('ERROR OPENING MUSE DB: ', reason);
       process.exit(1);
}
// #region find dbs
function find_dbs(fsPath : string) : string[] {
    var all_dbs : string[] = [];
    var files = fs.readdirSync(fsPath, null);
    for (var i = 0; i < files.length; i++) {
        let file = files[i];
        try {
            let child_path = path.join(fsPath, file);
            let stat = fs.statSync(child_path);
            if (stat.isDirectory()) {
                let more_dbs = find_dbs(child_path);
                all_dbs = all_dbs.concat(more_dbs);
            } else if (stat.isFile()) {
                if (file.endsWith('.realm') && !file.endsWith('.backup.realm')) {
                    console.log(chalk.gray("Found:     '" + chalk.green(child_path) + "'"))
                    all_dbs.push(child_path)
                }
            }
        } catch(err) {
            console.log(err)
        }
    }

    return all_dbs;
}

var dbPath = '.';
if (process.argv.length < 4) {
    console.log(chalk.red("Usage: node export.js <db_directory> <output_dir>"));
    process.exit(1)
}
dbPath = process.argv[2];

dataDir = path.join(process.argv[3], dataDir);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
noDataDir = path.join(process.argv[3], noDataDir);
if (!fs.existsSync(noDataDir)) fs.mkdirSync(noDataDir);


dbs = find_dbs(dbPath);

// #endregion find dbs
instance_run();
//#endregion Init
