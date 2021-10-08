const fs = require('fs')
//const { conflicts } = require('yargs')
const chalk = require('chalk')


// const getNotes = () => {
//     return 'I can do it. . . '
// }

debugger

///////////////////////////////////////////////////////////////////////////////

const addNote =  (tittle,body) => {
    const notes = loadNotes()
//  const duplicateNotes = notes.filter((note) => note.tittle === tittle )
    const duplicateNote = notes.find((note) => note.tittle === tittle)
        // const duplicateNotes = notes.filter(function (note) {
        //     return note.tittle === tittle

    if (!duplicateNote) {
        notes.push({
            tittle: tittle,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note Added!'))
    }else{
        console.log(chalk.red.inverse('Note tittle taken!'))
    }
}
 
///////////////////////////////////////////////////////////////////////////

const removeNote = (tittle) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.tittle !== tittle )
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}
///////////////////////////////////////////////////////////////////////////

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.tittle)
    })
}

///////////////////////////////////////////////////////////////////////////

const readNote = (tittle) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.tittle === tittle)

    if (note) {
        console.log(chalk.inverse(note.tittle))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not Found!'))
    }

}

//////////////////////////////////////////////////////////////////////////
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)


    } catch (e) {
        return[]
    }
}

module.exports = {
    //   getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}