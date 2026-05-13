const terser = require('terser');
const CleanCSS = require('clean-css');
const fs = require('fs');
const shell = require('shelljs');
const pc = require('picocolors');

const fileConf = require('./files.conf.js');
const CSSJSfiles = fileConf.CSSJSfiles;

const nowDate = new Date();
const nowDateStr = nowDate.toISOString().slice(0, 10).replace(/-/g, '');

// remove preceding compressed files
shell.rm('-rf', 'static/assets/*.min.js');
shell.rm('-rf', 'static/assets/*.min.css');

// copy font-mfizz webfonts
shell.cp('-f', 'node_modules/font-mfizz/dist/font-mfizz.eot', 'static/assets/');
shell.cp('-f', 'node_modules/font-mfizz/dist/font-mfizz.svg', 'static/assets/');
shell.cp('-f', 'node_modules/font-mfizz/dist/font-mfizz.ttf', 'static/assets/');
shell.cp('-f', 'node_modules/font-mfizz/dist/font-mfizz.woff', 'static/assets/');

// copy Font Awesome 6 webfonts. Bundled CSS lives at static/assets/app-*.min.css
// and references url(../webfonts/...), so fonts must sit at static/webfonts/.
shell.mkdir('-p', 'static/webfonts');
shell.cp('-f', 'node_modules/@fortawesome/fontawesome-free/webfonts/*', 'static/webfonts/');
shell.rm('-rf', 'static/assets/webfonts');

// rewrite asset date stamps in HTML files
shell.sed('-i', /(.*)[0-9]{8}(.*)/, '$1' + nowDateStr + '$2', '_includes/index_head.html');
shell.sed('-i', /(.*)[0-9]{8}(.*)/, '$1' + nowDateStr + '$2', '_includes/head.html');
shell.sed('-i', /(.*)[0-9]{8}(.*)/, '$1' + nowDateStr + '$2', '_includes/category.html');
shell.sed('-i', /(.*)[0-9]{8}(.*)/, '$1' + nowDateStr + '$2', '404.html');

async function compressjs(pagename, filename, filelist) {
    console.log('Now compress ' + pagename + ' js files to ' + filename + ' ...');
    const sources = {};
    for (const file of filelist) {
        sources[file] = fs.readFileSync(file, 'utf8');
    }
    const result = await terser.minify(sources, {
        mangle: true,
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
        },
    });
    if (result.error) throw result.error;
    fs.writeFileSync('static/assets/' + filename, result.code);
    console.log(pc.green(pagename + ' js files compress succeed. You can find it at "static/assets".\n'));
}

function compresscss(pagename, filename, filelist) {
    console.log('Now compress ' + pagename + ' css files to ' + filename + ' ...');
    const result = new CleanCSS().minify(filelist);
    const output = new CleanCSS({
        level: {
            1: {
                transform: function (propertyName, propertyValue) {
                    if (propertyName === 'src' && propertyValue.indexOf('node_modules/bootstrap/dist/') > -1) {
                        return propertyValue.replace('node_modules/bootstrap/dist/', '');
                    }
                    if (propertyName === 'src' && propertyValue.indexOf('node_modules/@fortawesome/fontawesome-free/') > -1) {
                        return propertyValue.replace('node_modules/@fortawesome/fontawesome-free/', '');
                    }
                    if (propertyName === 'src' && propertyValue.indexOf('node_modules/font-mfizz/dist/') > -1) {
                        return propertyValue.replace('node_modules/font-mfizz/dist/', '');
                    }
                    if (propertyName === 'background' && propertyValue.indexOf('static/img/') > -1) {
                        return propertyValue.replace('static/', '');
                    }
                    if (propertyName === 'background-image' && propertyValue.indexOf('static/img/') > -1) {
                        return propertyValue.replace('static/', '');
                    }
                },
            },
        },
    }).minify(result.styles);

    fs.writeFileSync('static/assets/' + filename, output.styles);
    console.log(pc.green(pagename + ' css files compress succeed. You can find it at "static/assets".\n'));
}

(async () => {
    for (const entry of CSSJSfiles) {
        if (entry.type === 'css') {
            const filename = entry.prefix + nowDateStr + '.min.css';
            compresscss(entry.name, filename, entry.list);
        }
        if (entry.type === 'js') {
            const filename = entry.prefix + nowDateStr + '.min.js';
            await compressjs(entry.name, filename, entry.list);
        }
    }
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
