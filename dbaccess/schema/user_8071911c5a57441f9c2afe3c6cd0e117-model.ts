import * as Realm from "realm";

export type BodyMeSummaryDay = {
  totalSeconds: number;
  relaxedSeconds: number;
};

export const BodyMeSummaryDaySchema = {
  name: 'BodyMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    relaxedSeconds: 'int'
  }
};

export type BodySessionReportData = {
  activeSeconds?: number;
  relaxedSeconds?: number;
  relaxedPercentage?: number;
};

export const BodySessionReportDataSchema = {
  name: 'BodySessionReportData',
  properties: {
    activeSeconds: 'int?',
    relaxedSeconds: 'int?',
    relaxedPercentage: 'int?'
  }
};

export type BreathMeSummaryDay = {
  totalSeconds: number;
  highHarmonySeconds: number;
};

export const BreathMeSummaryDaySchema = {
  name: 'BreathMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    highHarmonySeconds: 'int'
  }
};

export type BreathSessionReportData = {
  highHarmonySeconds?: number;
  mediumHarmonySeconds?: number;
  lowHarmonySeconds?: number;
  highSyncPercentage?: number;
};

export const BreathSessionReportDataSchema = {
  name: 'BreathSessionReportData',
  properties: {
    highHarmonySeconds: 'int?',
    mediumHarmonySeconds: 'int?',
    lowHarmonySeconds: 'int?',
    highSyncPercentage: 'int?'
  }
};

export type GuidedMeSummaryDay = {
  totalSeconds: number;
  calmSeconds: number;
};

export const GuidedMeSummaryDaySchema = {
  name: 'GuidedMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    calmSeconds: 'int'
  }
};

export type HeartMeSummaryDay = {
  totalSeconds: number;
  belowUsualHRSeconds: number;
};

export const HeartMeSummaryDaySchema = {
  name: 'HeartMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    belowUsualHRSeconds: 'int'
  }
};

export type HeartSessionReportData = {
  lowRatePercentage?: number;
  historicalAbsMinRate?: number;
  historicalAbsMaxRate?: number;
  historicalAvgMinRate?: number;
  historicalAvgMaxRate?: number;
};

export const HeartSessionReportDataSchema = {
  name: 'HeartSessionReportData',
  properties: {
    lowRatePercentage: 'int?',
    historicalAbsMinRate: 'int?',
    historicalAbsMaxRate: 'int?',
    historicalAvgMinRate: 'int?',
    historicalAvgMaxRate: 'int?'
  }
};

export type Journey = {
  id: string;
  name: string;
  descriptionText: string;
  duration: number;
  technique: string;
  teacher?: Teacher;
  assetFileID: string;
  assetFileURL: string;
  assetFileSizeBytes: number;
  bankFileName: string;
  stringsBankFileName: string;
  previewImageURL: string;
  thumbnailImageURL: string;
  bankFilePath: string;
  stringsBankFilePath: string;
  fmodJSON: string;
  isFeatured: boolean;
};

export const JourneySchema = {
  name: 'Journey',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    descriptionText: 'string',
    duration: 'int',
    technique: 'string',
    teacher: 'Teacher',
    assetFileID: 'string',
    assetFileURL: 'string',
    assetFileSizeBytes: 'int',
    bankFileName: 'string',
    stringsBankFileName: 'string',
    previewImageURL: 'string',
    thumbnailImageURL: 'string',
    bankFilePath: 'string',
    stringsBankFilePath: 'string',
    fmodJSON: 'string',
    isFeatured: 'bool'
  }
};

export type MeSession = {
  utcTimestamp: number;
  id?: string;
  startDatetimeLocalWithTimezone: string;
  endDatetimeLocalWithTimezone?: string;
  startDataTrackingDatetimeLocalWithTimezone?: string;
  endDataTrackingDatetimeLocalWithTimezone?: string;
  type: string;
  completedSeconds: number;
  mind?: MindSessionReportData;
  heart?: HeartSessionReportData;
  breath?: BreathSessionReportData;
  body?: BodySessionReportData;
  presleep?: PresleepSessionReportData;
  sleepStages?: SleepStageSessionReportData;
  sleepPositions?: SleepPositionSessionReportData;
  stats?: SessionStats;
  timeSeries?: SessionTimeSeries;
  journalEntries: Array<SessionJournalEntry>;
  journal?: SessionJournal;
  deleted: boolean;
  synchronizedRemotely: boolean;
  muse?: SessionMuse;
  content?: SessionContent;
  selectedSessionLengthSeconds?: number;
};

export const MeSessionSchema = {
  name: 'MeSession',
  primaryKey: 'utcTimestamp',
  properties: {
    utcTimestamp: 'int',
    id: 'string?',
    startDatetimeLocalWithTimezone: 'string',
    endDatetimeLocalWithTimezone: 'string?',
    startDataTrackingDatetimeLocalWithTimezone: 'string?',
    endDataTrackingDatetimeLocalWithTimezone: 'string?',
    type: 'string',
    completedSeconds: 'int',
    mind: 'MindSessionReportData',
    heart: 'HeartSessionReportData',
    breath: 'BreathSessionReportData',
    body: 'BodySessionReportData',
    presleep: 'PresleepSessionReportData',
    sleepStages: 'SleepStageSessionReportData',
    sleepPositions: 'SleepPositionSessionReportData',
    stats: 'SessionStats',
    timeSeries: 'SessionTimeSeries',
    journalEntries: 'SessionJournalEntry[]',
    journal: 'SessionJournal',
    deleted: 'bool',
    synchronizedRemotely: 'bool',
    muse: 'SessionMuse',
    content: 'SessionContent',
    selectedSessionLengthSeconds: 'int?'
  }
};

export type MeSummaryDay = {
  date: string;
  mind?: MindMeSummaryDay;
  heart?: HeartMeSummaryDay;
  body?: BodyMeSummaryDay;
  breath?: BreathMeSummaryDay;
  timer?: TimerMeSummaryDay;
  guided?: GuidedMeSummaryDay;
  presleep?: PresleepMeSummaryDay;
};

export const MeSummaryDaySchema = {
  name: 'MeSummaryDay',
  primaryKey: 'date',
  properties: {
    date: 'string',
    mind: 'MindMeSummaryDay',
    heart: 'HeartMeSummaryDay',
    body: 'BodyMeSummaryDay',
    breath: 'BreathMeSummaryDay',
    timer: 'TimerMeSummaryDay',
    guided: 'GuidedMeSummaryDay',
    presleep: 'PresleepMeSummaryDay'
  }
};

export type Meditation = {
  id: string;
  title: string;
  duration: number;
  relativeFilePath: string;
  teacher?: Teacher;
  primaryTechnique: string;
  isNew: boolean;
  museContentAccessType: string;
  techniques: Array<string>;
};

export const MeditationSchema = {
  name: 'Meditation',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    duration: 'int',
    relativeFilePath: 'string',
    teacher: 'Teacher',
    primaryTechnique: 'string',
    isNew: 'bool',
    museContentAccessType: 'string',
    techniques: 'string[]'
  }
};

export type MeditationCollection = {
  id: string;
  title: string;
  downloadedMeditations: Array<Meditation>;
};

export const MeditationCollectionSchema = {
  name: 'MeditationCollection',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    downloadedMeditations: 'Meditation[]'
  }
};

export type MeditationCourse = {
  id: string;
  title: string;
  teacher?: Teacher;
  downloadedMeditations: Array<Meditation>;
};

export const MeditationCourseSchema = {
  name: 'MeditationCourse',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    teacher: 'Teacher',
    downloadedMeditations: 'Meditation[]'
  }
};

export type MindMeSummaryDay = {
  totalSeconds: number;
  calmSeconds: number;
};

export const MindMeSummaryDaySchema = {
  name: 'MindMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    calmSeconds: 'int'
  }
};

export type MindSessionReportData = {
  activeSeconds?: number;
  neutralSeconds?: number;
  calmSeconds?: number;
  calmPercentage?: number;
};

export const MindSessionReportDataSchema = {
  name: 'MindSessionReportData',
  properties: {
    activeSeconds: 'int?',
    neutralSeconds: 'int?',
    calmSeconds: 'int?',
    calmPercentage: 'int?'
  }
};

export type PresleepMeSummaryDay = {
  totalSeconds: number;
  calmSeconds: number;
  relaxedSeconds: number;
  belowUsualHRSeconds: number;
  deepSleepSeconds?: number;
  asleepSeconds?: number;
  longestSessionCompletedSeconds?: number;
  longestSessionSleepScore?: number;
  deepSleepIntensityPoints?: number;
};

export const PresleepMeSummaryDaySchema = {
  name: 'PresleepMeSummaryDay',
  properties: {
    totalSeconds: 'int',
    calmSeconds: 'int',
    relaxedSeconds: 'int',
    belowUsualHRSeconds: 'int',
    deepSleepSeconds: 'int?',
    asleepSeconds: 'int?',
    longestSessionCompletedSeconds: 'int?',
    longestSessionSleepScore: 'int?',
    deepSleepIntensityPoints: 'int?'
  }
};

export type PresleepSessionReportData = {
  mood?: string;
  sleepScore?: number;
  sleepSpindlesCount?: number;
  deepSleepIntensityPoints?: number;
};

export const PresleepSessionReportDataSchema = {
  name: 'PresleepSessionReportData',
  properties: {
    mood: 'string?',
    sleepScore: 'int?',
    sleepSpindlesCount: 'int?',
    deepSleepIntensityPoints: 'int?'
  }
};

export type Program = {
  id: string;
  name: string;
  desc: string;
  programModules: Array<ProgramModule>;
  communityLink: string;
  previewImageURL?: string;
  thumbnailImageURL?: string;
};

export const ProgramSchema = {
  name: 'Program',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    desc: 'string',
    programModules: 'ProgramModule[]',
    communityLink: 'string',
    previewImageURL: 'string?',
    thumbnailImageURL: 'string?'
  }
};

export type ProgramListing = {
  id: string;
  name: string;
  desc: string;
  moduleCount: number;
  previewImageURL?: string;
  thumbnailImageURL?: string;
  communityLink: string;
  sortOrder?: number;
};

export const ProgramListingSchema = {
  name: 'ProgramListing',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    desc: 'string',
    moduleCount: 'int',
    previewImageURL: 'string?',
    thumbnailImageURL: 'string?',
    communityLink: 'string',
    sortOrder: 'int?'
  }
};

export type ProgramModule = {
  id: string;
  name: string;
  desc: string;
  assetFileURL?: string;
  assetFileSizeBytes?: number;
  journeyId?: string;
};

export const ProgramModuleSchema = {
  name: 'ProgramModule',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    desc: 'string',
    assetFileURL: 'string?',
    assetFileSizeBytes: 'int?',
    journeyId: 'string?'
  }
};

export type SessionContent = {
  meditationUniqueID?: string;
  collectionUniqueID?: string;
  courseUniqueID?: string;
  journeyUniqueID?: string;
  soundscapeUniqueID?: string;
  legacySoundscapeContentID?: string;
  legacyExerciseContentID?: string;
  groupTitle?: string;
  title?: string;
  teacherImageURL?: string;
  techniques: Array<string>;
};

export const SessionContentSchema = {
  name: 'SessionContent',
  properties: {
    meditationUniqueID: 'string?',
    collectionUniqueID: 'string?',
    courseUniqueID: 'string?',
    journeyUniqueID: 'string?',
    soundscapeUniqueID: 'string?',
    legacySoundscapeContentID: 'string?',
    legacyExerciseContentID: 'string?',
    groupTitle: 'string?',
    title: 'string?',
    teacherImageURL: 'string?',
    techniques: 'string[]'
  }
};

export type SessionJournal = {
  emotion?: string;
  note?: string;
};

export const SessionJournalSchema = {
  name: 'SessionJournal',
  properties: {
    emotion: 'string?',
    note: 'string?'
  }
};

export type SessionJournalEntry = {
  time?: string;
  emotion?: string;
  note?: string;
};

export const SessionJournalEntrySchema = {
  name: 'SessionJournalEntry',
  properties: {
    time: 'string?',
    emotion: 'string?',
    note: 'string?'
  }
};

export type SessionMuse = {
  macAddress?: string;
  serialNumber?: string;
  firmwareVersion?: string;
  fabricBandSerialNumber?: string;
};

export const SessionMuseSchema = {
  name: 'SessionMuse',
  properties: {
    macAddress: 'string?',
    serialNumber: 'string?',
    firmwareVersion: 'string?',
    fabricBandSerialNumber: 'string?'
  }
};

export type SessionStats = {
  points: number;
  birdCount?: number;
  recoveryCount?: number;
  awards: Array<string>;
};

export const SessionStatsSchema = {
  name: 'SessionStats',
  properties: {
    points: 'int',
    birdCount: 'int?',
    recoveryCount: 'int?',
    awards: 'string[]'
  }
};

export type SessionTimeSeries = {
  mindCalmPerSecond: Array<number>;
  heartRatePerSecond: Array<number>;
  bodyMovementPerSecond: Array<number>;
  breathSyncPerSecond: Array<number>;
  birdTimestampsSecondsSinceStart: Array<number>;
  recoveryTimestampsSecondsSinceStart: Array<number>;
  sleepStages: Array<number>;
  sleepPositions: Array<number>;
  deepSleepIntensity: Array<number>;
  sleepSpindleTimestampsSecondsSinceStart: Array<number>;
  sleepDisturbanceTimestampsSecondsSinceStart: Array<number>;
  contentPlayedTimestampsSecondsSinceStart: Array<number>;
  mindCalmDownSampled: Array<number>;
  heartRateDownSampled: Array<number>;
  bodyMovementDownSampled: Array<number>;
  sleepStagesDownSampled: Array<number>;
  sleepPositionsDownSampled: Array<number>;
  deepSleepIntensityDownSampled: Array<number>;
};

export const SessionTimeSeriesSchema = {
  name: 'SessionTimeSeries',
  properties: {
    mindCalmPerSecond: 'float[]',
    heartRatePerSecond: 'float[]',
    bodyMovementPerSecond: 'float[]',
    breathSyncPerSecond: 'float[]',
    birdTimestampsSecondsSinceStart: 'float[]',
    recoveryTimestampsSecondsSinceStart: 'float[]',
    sleepStages: 'float[]',
    sleepPositions: 'float[]',
    deepSleepIntensity: 'float[]',
    sleepSpindleTimestampsSecondsSinceStart: 'float[]',
    sleepDisturbanceTimestampsSecondsSinceStart: 'float[]',
    contentPlayedTimestampsSecondsSinceStart: 'float[]',
    mindCalmDownSampled: 'float[]',
    heartRateDownSampled: 'float[]',
    bodyMovementDownSampled: 'float[]',
    sleepStagesDownSampled: 'float[]',
    sleepPositionsDownSampled: 'float[]',
    deepSleepIntensityDownSampled: 'float[]'
  }
};

export type SleepPositionSessionReportData = {
  sittingPositionSeconds?: number;
  leftPositionSeconds?: number;
  backPositionSeconds?: number;
  rightPositionSeconds?: number;
  frontPositionSeconds?: number;
  longestPositionPercentage?: number;
};

export const SleepPositionSessionReportDataSchema = {
  name: 'SleepPositionSessionReportData',
  properties: {
    sittingPositionSeconds: 'int?',
    leftPositionSeconds: 'int?',
    backPositionSeconds: 'int?',
    rightPositionSeconds: 'int?',
    frontPositionSeconds: 'int?',
    longestPositionPercentage: 'int?'
  }
};

export type SleepStageSessionReportData = {
  awakeSeconds?: number;
  remSleepSeconds?: number;
  lightSleepSeconds?: number;
  deepSleepSeconds?: number;
  deepSleepPercentage?: number;
};

export const SleepStageSessionReportDataSchema = {
  name: 'SleepStageSessionReportData',
  properties: {
    awakeSeconds: 'int?',
    remSleepSeconds: 'int?',
    lightSleepSeconds: 'int?',
    deepSleepSeconds: 'int?',
    deepSleepPercentage: 'int?'
  }
};

export type Soundscape = {
  id: string;
  name: string;
  assetFileID: string;
  assetFileURL: string;
  assetFileSizeBytes: number;
  bankFileName: string;
  stringsBankFileName: string;
  previewImageURL: string;
  bankFilePath: string;
  stringsBankFilePath: string;
  fmodJSON: string;
};

export const SoundscapeSchema = {
  name: 'Soundscape',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    assetFileID: 'string',
    assetFileURL: 'string',
    assetFileSizeBytes: 'int',
    bankFileName: 'string',
    stringsBankFileName: 'string',
    previewImageURL: 'string',
    bankFilePath: 'string',
    stringsBankFilePath: 'string',
    fmodJSON: 'string'
  }
};

export type Teacher = {
  id: string;
  firstName: string;
  lastName: string;
  teacherImageURL: string;
};

export const TeacherSchema = {
  name: 'Teacher',
  primaryKey: 'id',
  properties: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    teacherImageURL: 'string'
  }
};

export type TimerMeSummaryDay = {
  totalSeconds: number;
};

export const TimerMeSummaryDaySchema = {
  name: 'TimerMeSummaryDay',
  properties: {
    totalSeconds: 'int'
  }
};

export type UserSessionId = {
  utcTimestamp: number;
  id?: string;
};

export const UserSessionIdSchema = {
  name: 'UserSessionId',
  primaryKey: 'utcTimestamp',
  properties: {
    utcTimestamp: 'int',
    id: 'string?'
  }
};

export const Schema = [BodyMeSummaryDaySchema, BodySessionReportDataSchema, BreathMeSummaryDaySchema, BreathSessionReportDataSchema, GuidedMeSummaryDaySchema, HeartMeSummaryDaySchema, HeartSessionReportDataSchema, JourneySchema, MeSessionSchema, MeSummaryDaySchema, MeditationSchema, MeditationCollectionSchema, MeditationCourseSchema, MindMeSummaryDaySchema, MindSessionReportDataSchema, PresleepMeSummaryDaySchema, PresleepSessionReportDataSchema, ProgramSchema, ProgramListingSchema, ProgramModuleSchema, SessionContentSchema, SessionJournalSchema, SessionJournalEntrySchema, SessionMuseSchema, SessionStatsSchema, SessionTimeSeriesSchema, SleepPositionSessionReportDataSchema, SleepStageSessionReportDataSchema, SoundscapeSchema, TeacherSchema, TimerMeSummaryDaySchema, UserSessionIdSchema];
