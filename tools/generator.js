const fs = require('fs-extra')
const path = require('path')
const log = require('pretty-log')
const replace = require('replace')
const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const templatePath = path.join(__dirname, './component/')
const destination = path.join(__dirname, '../src/components/')
const query = 'Enter a capitalized component name without spaces (like Footer or ChocolateBar): '

reader.question(query, name => {
  reader.close()
  let dir = path.join(destination, name, '/')
  if (directoryExists(dir)) {
    return log.error(`Component "${name}" already exists. Aborting..`)
  }
  return scaffoldComponent({ name, dir })
})

function scaffoldComponent({ name, dir }) {
  log.debug(`Scaffolding ${name} component..`)
  return Promise.resolve({ name, dir })
    .then(copyFiles)
    .then(renameFiles)
    .then(updateFiles)
    .then(success)
    .catch(fail)
}

function copyFiles({ name, dir }) {
  log.debug(`Copying ${name} files..`)
  return new Promise((resolve, reject) => {
    fs.copy(templatePath, dir, err => {
      err ? reject(err) : resolve({ name, dir })
    })
  })
}

function renameFiles({ name, dir }) {
  log.debug(`Renaming ${name} files..`)
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err)
      }
      files.forEach(f => {
        if (f === 'package.json') {
          return
        }
        let rest = f
          .split('.')
          .splice(1)
          .join('.')
        fs.rename(`${dir}${f}`, `${dir}${name}.${rest}`, err => {
          err ? reject(err) : resolve({ name, dir })
        })
      })
    })
  })
}

function updateFiles({ name, dir }) {
  log.debug(`Updating ${name} files..`)
  replace({
    regex: '__COMPONENT_NAME__',
    replacement: name,
    paths: [dir],
    recursive: true,
    silent: true,
  })
  return Promise.resolve({ name, dir })
}

function success({ name, dir }) {
  log.success(`Done..
    Name: ${name}
    Path: ${dir}
  `)
}

function fail(err) {
  log.error('Error while scaffolding component..', err)
}

function directoryExists(d) {
  try {
    fs.statSync(d)
    return true
  } catch (e) {
    return false
  }
}
