import {Response, Request, NextFunction}from 'express'
import {createNewLog} from "../repositories/logRepository";
export const addLog = async (req: Request, response: Response, next: NextFunction) =>{
    if (req.url === '/logs'){
        // Persisting these requests are huge and the data would be ugly
        return next()
    }
    const log = await createNewLog({
        body: Object.assign(req.body, {}),
        //TODO Now ips are like ::ffff:185.165.241.171 but after nginx we can fill x-forwarded-for header with user's remote address
        // and the ip would get valid
        ip: req.ip,
        method: req.method,
        query:req.query,
        url: req.url
    })

    // Put logId in res.locals to can access to it in other middlewares
    response.locals.logId = log._id
    next()
}