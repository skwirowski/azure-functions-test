import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { StatusCodes } from "http-status-codes";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let name: string;

    if (req.method === 'GET') {
        name = req.query.name;
    } else if (req.method === "POST") {
        name = (req.body && req.body.name)
    }


    let responseStatus: number;
    let responseMessage: string;

    if (name) {
        responseStatus = StatusCodes.OK;
        responseMessage = `Hello ${name}. This HTTP triggered function executed successfully.`;
    } else {
        responseStatus = StatusCodes.BAD_REQUEST;
        responseMessage = "Pass a name in the query string (GET request) or JSON body with the attribute 'name' (POST request) for personalized response."
    }

    context.res = {
        status: responseStatus,
        body: responseMessage
    }
};

export default httpTrigger;