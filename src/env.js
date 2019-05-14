import fs from 'fs'
import dotenvParseVariables from 'dotenv-parse-variables'

const NODE_ENV = process.env.NODE_ENV || 'developement'

const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  `.env.local`,
  '.env'
].filter(Boolean)

let env = {}

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
