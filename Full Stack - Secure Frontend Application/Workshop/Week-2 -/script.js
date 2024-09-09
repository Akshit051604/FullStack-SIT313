const { ChildProcess } = require('child_process')
const fs = require('fs')
fs.writeFileSync('note.txt','This is SIT313')
fs.appendFileSync('note.txt','\nFull Stack\n')
fs.appendFileSync('note.txt', process.argv[2])

fs.writeFile('note.txt','data!!')