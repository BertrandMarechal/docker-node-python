import express from 'express';
import http from "http";
import * as fs from "fs";
import * as bodyParser from 'body-parser';
import fetch from 'node-fetch';


export class ImageServer {
    
    private app: any;
    private server: any;

    private listenHere(port: string, callback?: Function) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use((req: any, res: any, next: any) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use( bodyParser.json({limit: '50mb'}) );       // to support JSON-encoded bodies

        this.app.get('/', (req: any, res: any) => res.send('Hello World!'));
        this.app.get('/stop', (req: any, res: any) => {
            this.stop();
            res.send('Stopping');
        });
        this.app.get('/test', (req: any, res: any) => {
            res.send('test');
        });
        this.app.get('/test-image', (req: any, res: any) => {
            fetch(`http://python-deskew-mrz:8081/?image=bert.png`)
                .then(() => {
                    res.send('test OK');
                })
                .catch((body: any) => {
                    
                    res.send('test KO');
                });
        });

        this.server.listen(port, (error: any) => {
            console.log('listening');
            if (callback) {
                callback(error);
            }
        });
    }

    listen(port: string): Promise<any> {
        // return Promise.resolve();
        return new Promise((resolve, reject) => {
            this.listenHere(port, (error: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            })
        });
    }

    private stop() {
        this.server.close();
    }
}

new ImageServer().listen('8080');