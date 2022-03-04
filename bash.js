process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
  const cmd = data.toString().trim();

  if (cmd === 'pwd') process.stdout.write(__dirname)
  // process.stdout.write('You typed:  ' + cmd);
  process.stdout.write('\nprompt > ');
});

// let dir = __dirname;

// console.log(dir)
console.log(process.cwd())