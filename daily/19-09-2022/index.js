const express = require("express");
const fs = require("fs")

const app = express();
const port = 3001


const createAndUpdate = () => {
    // lista de props da função
    // Nome do arquivo
    // Conteúdo do arquivo
    // Função para validação ou envio de resposta
    console.log("foi")
    fs.writeFile("post.js", "const name = 'Reijan Lopes'", (error) => {
        error ? console.log("there was a failure!") : console.log("created or updated file successfully!")
    }
    )
}
const renameFile = () => {
    // lista de props da fução
    // Nome do arquivo
    // Novo nome do arquivo
    // Função para validação ou envio de resposta
    fs.rename("blog", "post", (error) => {
        error ? console.log("renaming failed!") : console.log("successfully renamed!")
    })
}
const deleteFile = () => {
    // lista de props da fução
    // Nome do arquivo
    // Função para validação ou envio de resposta
    fs.unlink("info.js", (error) => {
        error ? console.log("failed to delete!") : console.log("successful deleting!")
    })
}

const createFolder = () => {
    fs.mkdir("blog", (error) => {
        error ? console.log("folder creation failed") : console.log("folder created successfully")
    })
}
renameFile()

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`)
})