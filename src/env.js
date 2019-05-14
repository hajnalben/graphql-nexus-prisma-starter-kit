import fs from 'fs'
import dotenvParseVariables from 'dotenv-parse-variables'

const NODE_ENV = process.env.NODE_ENV || 'development'

const dotenvFiles = [
  `.env.${NODE_ENV}`,
  '.env'
].filter(Boolean)

let env = {}

console.log(dotenvFiles)

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    const { parsed } = require('dotenv').config({
      path: dotenvFile
    })

    env = {
      ...env,
      ...dotenvParseVariables(parsed)
    }
  }
})

export default env
