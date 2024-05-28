const fs = require("fs")

const operation = process.argv[2]
const filename = process.argv[3]
const content = process.argv[4]

console.log(operation, filename, content)



switch(operation){
    case "read" : {
        fs.readFile(filename, 'utf-8', (err, data) => {
            console.log(data)
        })
        break;
    }
    case "append" : {
        fs.appendFile(filename, content, (err, data) => {
            if (err) throw new Error(err)
            console.log(`${content} has been appended successfully to file ${filename}`)
        })
        break;
    }
    case "delete" : {
        fs.unlink(filename, (err) => {
            if(err) throw new Error(err)
            console.log(`File ${filename} deleted successfully`)
        })
        break;
    }
    case "create" : {
        fs.writeFile(filename, content, (err) => {
            if(err) throw new Error(err)
            console.log(`File ${filename} created successfully`)
        })
        break;
    }
    case "rename" : {
        fs.rename(filename, content, (err) => {
            if(err) throw new Error(err)
            console.log(`File ${filename} has been successfully renamed to ${content}`)
        })
        break;
    }
    case "list" : {
        fs.readdir('./', (err, files) => {
            if(err) throw new Error(err)
            console.log(files)
        })
        break;
    }
    default : console.log("Invalid operation")
}