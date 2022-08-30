import { AzureFunction, Context } from "@azure/functions";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const message = 'Service Bus queue message created at ' + Date.now();

    context.log(message);
    context.bindings.outputSbQueue = message;
};

export default timerTrigger;
