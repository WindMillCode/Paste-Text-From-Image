import * as vscode from 'vscode';
import { deepCopy,  updateNestedStructure } from './functions';
import path from 'path';


export interface WMLTaskDefinition extends vscode.TaskDefinition {

	task: string;
}
export enum OperatingSystem  {
  AIX = 'AIX',
  MACOS = 'darwin',
  FREEBSD = 'freebsd',
  LINUX = 'linux',
  OPENBSD = 'openbsd',
  SUNOS = 'sunos',
  WINDOWS = 'win32',
};


export type InfiniteStringArray = Array<string> | InfiniteStringArray[];
export class InfiniteGlobString {
  constructor(params: Partial<InfiniteGlobString> = {}) {

    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
    if(this.createFileIfNotFoundPath){
      this.createFileIfNotFoundPath = path.join(this.createFileIfNotFoundPath)
    }
  }
  _relativeFilePath:string =""
  filePath:string = ""
  section:[number,number,number,number] = [0,0,0,0]
  createFileRelativeToTrustedFilePath = false
  createFileIfNotFoundPath?:string
}
export type InfiniteGlobStringArray = Array<InfiniteGlobString> | InfiniteGlobStringArray[];



export class ChannelManager {

  channelName:string
  constructor(channelName:string = "Windmillcode"){
    this.channelName = channelName
  }
  get channel(){
    if(!this._channel){
      this._channel = vscode.window.createOutputChannel(this.channelName)
    }
    return this._channel
  }
  _channel:vscode.OutputChannel
  private notify =(message: any): void => {
    try {
      this.channel.appendLine(JSON.stringify(message,null,2));
    } catch (error) {

      this.channel.appendLine(message);
    }
  }
  notifyMsg = (message: any): void => {
    this.notify(message);
  }
  notifyError = (err?: any, msg?: any): void => {
    if (err?.stderr) {
        this.notify(err.stderr);
    }
    if (err?.stdout) {
        this.notify(err.stdout);
    }
    if (msg) {
        this.notify(msg);
    }
  };
}

export class WMLOpenRelatedFilesSettingsJSON {
  constructor(params: Partial<WMLOpenRelatedFilesSettingsJSON> = {}) {


    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    this.initOptions(origParams);
  }
  excludeGlobs:Array<string> = [
    "**/node_modules/**",
    "**/site-packages/**",
    "**/.git/**"
  ]

  chosenOption:Partial<{
    name:string,

    fileRegexPredicate:string,
    subStringRemovalArray:Array<string>
    setEditorLayout:{
      orientation:0|1,
      groups:Array<{
        groups:WMLOpenRelatedFilesSettingsJSON["chosenOption"]["setEditorLayout"]["groups"],
        size?:number
      }>
    }
    searchPaths:Array<string>
    includeGlobs:InfiniteGlobStringArray
    excludeGlobs:Array<string>
  }>
  options:Array<WMLOpenRelatedFilesSettingsJSON["chosenOption"]> = [
    {
      "name":"Disable"
    }
  ]

  private initOptions =(origParams)=> {

    let options = deepCopy(this.options);
    Object.assign(this, { ...Object.fromEntries(origParams) });
    this.options.push(...options);
    this.options = this.options.map((option) => {
      option.includeGlobs = updateNestedStructure(option.includeGlobs, (key: string, val) => {

        if (typeof (val) === "string" ) {
          return new InfiniteGlobString({
            filePath: val
          });
        }
        else{
          return new InfiniteGlobString(val);
        }


      });
      return option;
    });
  }
}
