import { cloudName, presetName } from '../config/config';
import request from 'superagent';


const onPhotoSelected = (path) => {
    return new Promise((res, rej) => {
        const url = `https://api.cloudinary.com/v1_1/${
            cloudName
            }/upload`;
        const title = path.value;
        const files = path.files;

        for (let file of files) {
            request.post(url)
                .field('upload_preset', presetName)
                .field('file', file)
                .field('multiple', true)
                .field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                .field('context', title ? `photo=${title}` : '')
                .on('progress', (process) => { })
                .end((error, response) => {
                    if (error) rej(error);
                    res(response.body.secure_url)
                });
        }

    })
}

export default onPhotoSelected;