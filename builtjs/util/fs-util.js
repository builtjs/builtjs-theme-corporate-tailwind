const fs = require('fs');
const path = require('path');

module.exports = {
    makeDir: function (path) {
        return new Promise(async function (resolve, reject) {
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }
            resolve();
        });
    },
    getDirectories: function (dir) {
        return new Promise((resolve) => {
            let directories = fs.readdirSync(dir).filter(function (file) {
                return fs.statSync(path.join(dir, file)).isDirectory()
            })
            resolve(directories);
        });

    },
    contains: function (path, pattern) {
        return new Promise(function (resolve, reject) {
            try {
                let files = fs.readdirSync(`${path}`).filter(function (file) {
                    return file.match(pattern);
                });
                resolve(files.length > 0);
            } catch (error) {
                resolve(false);
            }
        })
    }
};