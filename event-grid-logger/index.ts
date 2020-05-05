import { AzureFunction, Context } from "@azure/functions"
import * as Util from "util";

const run: AzureFunction = async function (context: Context, event: Object): Promise<void> {
    context.log(`Event grid logger function processed an event: ${Util.inspect(event, {showHidden: false, depth: null})}`);
};

export = run;
