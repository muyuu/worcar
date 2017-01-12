const fs = require('fs');
const sass = require('node-sass');
const c = require('./conf');

console.log('css building...');
sass.render({
    file: `${c.src.css}style.sass`,
    outputStyle: "expanded",
    sourceMap: true,
    outFile: `${d.dist.css}style.css`,
}, (err, result)=>{
    if(err){
        console.log(err);
    } else {
        fs.writeFile(`${d.dist.css}style.css`, result.css.toString(), (err, data)=>{
            if(err) console.log(err);
            console.log('css build complete');
        });
    }
});
