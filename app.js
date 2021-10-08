const chalk = require('chalk')
const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


// costimize yargs version
yargs.version('1.1.0')

//////////////////////////////////////////////////////////////////////////

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        tittle: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'

        }
    },
    body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'

    },
    handler(argv) {
        // console.log('Title: '+ argv.tittle)
        // console.log('Body: '+ argv.body)
        notes.addNote(argv.tittle, argv.body)

    }

})

//////////////////////////////////////////////////////////////////////////

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        tittle: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }

    },

    handler(argv) {
        //console.log('Removing the notes')
        notes.removeNote(argv.tittle)
    }
})

//////////////////////////////////////////////////////////////////////////

// Create a list
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

////////////////////////////////////////////////////////////////////////////

// Reading a note
yargs.command({
    command: 'read',
    describe: 'Reading a notes',
    builder: {
        tittle: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.tittle)
    }
})

// add, remove, read, list


yargs.parse()
// console.log(yargs.argv)