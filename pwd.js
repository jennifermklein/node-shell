// console.log('pwd is required');

module.exports = {
   outputPWD(cmd) {
        if (cmd === 'pwd') {
            process.stdout.write(process.cwd());
        } 
        process.stdout.write('\nprompt > ');
    }

}

// module.exports.output = outputPWD;
