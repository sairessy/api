import { open } from 'fs';

export const refreshNedb = (req, res, next) => {
    open('./util/restart_server.bat', (e) => {
        console.log(e);
        next();
    });
}