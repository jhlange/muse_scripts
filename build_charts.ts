import { MeSession } from './dbaccess/schema/user_8071911c5a57441f9c2afe3c6cd0e117-model';
import fs from 'fs';
import path from 'path';
import process from 'process';
import chalk from 'chalk';

var dataPath = "extracted/data_detailed";
var noDataPath = "extracted/data_summary";
var outputDir = "..";

class SessionIterator {
    dataFilePath: string
    noDataFilePath: string

    dataFiles: string[]
    noDataFiles: string[]
    dataFilesIndex: number
    noDataFilesIndex: number
    currentFile: string
    currentFilePath: string

    constructor(dataFilePath: string, noDataFilePath: string) {
        this.dataFilePath = dataFilePath;
        this.noDataFilePath = noDataFilePath;
        this.dataFiles = this.trimToJSONFileList(fs.readdirSync(dataFilePath));
        this.noDataFiles = this.trimToJSONFileList(fs.readdirSync(noDataFilePath));
        this.dataFilesIndex = 0;
        this.noDataFilesIndex = 0;
        this.currentFile = '';
        this.currentFilePath = '';
    }

    private trimToJSONFileList(l: string[]): string[] {
        var ret : string[] = [];
        for (var i = 0; i < l.length; i++) {
            let s = fs.statSync(l[i]);
            if (s.isFile() && l[i].endsWith('.json')) {
                ret.push(l[i])
            }
        }
        return ret;
    }

    public moveNext() : boolean {
        // First, fast forward the cursor
        while (this.dataFilesIndex < this.dataFiles.length && 
            this.dataFiles[this.dataFilesIndex] <= this.currentFile) {
                this.dataFilesIndex++;
        }

        while (this.noDataFilesIndex < this.noDataFiles.length && 
            this.noDataFiles[this.noDataFilesIndex] <= this.currentFile) {
                this.noDataFilesIndex++;
        }

        // Then, return the current file
        let nextNoDataFile = '';
        if (this.noDataFilesIndex < this.noDataFiles.length) {
            nextNoDataFile = this.noDataFiles[this.noDataFilesIndex]
        }

        if (this.dataFilesIndex < this.dataFiles.length &&
            this.dataFiles[this.dataFilesIndex] > this.currentFile &&
            this.dataFiles[this.dataFilesIndex] < nextNoDataFile) {
                this.currentFile = this.dataFiles[this.dataFilesIndex];
                this.currentFilePath = path.join(this.dataFilePath, this.currentFile);
                return true;
        }

        if (this.noDataFilesIndex < this.noDataFiles.length &&
            this.noDataFiles[this.noDataFilesIndex] > this.currentFile) {
                this.currentFile = this.noDataFiles[this.noDataFilesIndex];
                this.currentFilePath = path.join(this.noDataFilePath, this.currentFile);
                return true;
        }

        // No more files
        return false
    }

    public current() : MeSession {
        let data = fs.readFileSync(this.currentFilePath).toString()
        let obj = JSON.parse(data)
        return obj;
    }
}

class Day {
    
}

class DayIterator {
    sessions: SessionIterator
    constructor(dataFilePath: string, noDataFilePath: string) {
        this.sessions = new SessionIterator(dataFilePath, noDataFilePath);
    }

    public current() : Day {
        return null;
    }
}



function main() {
    let iter = new SessionIterator(dataPath, noDataPath);
    while (iter.moveNext()) {
        let cur = iter.current();
        
    }
}




if (process.argv.length < 4) {
    console.log(chalk.red("Usage: node build_charts.js <data_path> <output_dir>"));
    process.exit(1)
}

dataPath = path.join(process.argv[2], dataPath);
noDataPath = path.join(process.argv[2], noDataPath);
outputDir = process.argv[3]
fs.mkdirSync(outputDir);
