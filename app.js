import express from 'express';
import { join } from 'path';
import { json, urlencoded } from 'body-parser';
const app = express()

app.use(json());
app.use(urlencoded({ extended: false }));

app.use((join(__dirname, 'public')));

import multer, { memoryStorage } from 'multer';
const inMemoryStorage = memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');

import config from './config.js';

import { createBlobService } from 'azure-storage';
const blobService = createBlobService();
const containerName = 'storage-images';

import getStream from 'into-stream';

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
}

app.post('/upload', uploadStrategy, (req, res) => {
    const blobName = getBlobName(req.file.originalName);
    const stream = getStream(req.file.buffer);
    const streamLength = req.file.buffer.length;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).send('Success');
    });
});

app.get('/all', (req, res) => {

});

app.listen(4000, () => {
    console.log('server started');
})
module.export = app;