const express = require('express')
const jsonfile = require('jsonfile')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())

const bauFilePath = './JSON_Data/bau.json'
const salesFilePath = './JSON_Data/sales.json'
const activitiesFilePath = './JSON_Data/activities.json'

// generalized function for reading any json file
async function readFileFromJSON(file) {

    try {
        const fileObj = await jsonfile.readFile(file) // this returns a promise ( can use .then() or async/await )
        return fileObj
    }
    catch (error) {
        throw new Error(`Error reading JSON file: ${error.message}`);
    }

}

app.get('/getactivities', async (req, res) => {

    try {

        const result = await readFileFromJSON(activitiesFilePath)
        console.log('Result ', result) // haven't sent the file data to the user

        res.status(200).json({
            message: 'Read and Displayed Activites Successfully !'
        })

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
 

})

app.get('/getbaudata', async (req, res) => {

    try {

        const result = await readFileFromJSON(bauFilePath)
        console.log('Result ', result) // haven't sent the file data to the user

        res.status(200).json({
            message: 'Read and Displayed Activites Successfully !'
        })

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


})

app.get('/getsalesdata', async (req, res) => {

    try {

        const result = await readFileFromJSON(salesFilePath)
        console.log('Result ', result) // haven't sent the file data to the user

        res.status(200).json({
            message: 'Read and Displayed Activites Successfully !'
        })

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        })

    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})