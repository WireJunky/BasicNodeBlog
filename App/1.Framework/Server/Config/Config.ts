import { injectable} from "inversify";
import {IConfig} from "./IConfig"
import * as path from "path"

import * as fs from "fs"

@injectable()
export default class Config implements IConfig {
    contentLocalPath:string;

    constructor() {
         let configPath = path.resolve(__dirname, '../../../Server.Config.json')
         var config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
         this.contentLocalPath = this.get(["content", "localPath"], config) || "./Dist/Content";
    }

    get(p:string[], o:any):any{
        return p.reduce((xs, x) =>
                    (xs && xs[x]) ? xs[x] : null, o)
    }
} 