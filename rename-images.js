import fs from 'fs'
import path from 'path'

const folderPath = './public/images/legends/abilities' // ganti sesuai folder gambar

fs.readdirSync(folderPath).forEach((file) => {
  const oldPath = path.join(folderPath, file)
  const newFileName = file.toLowerCase()
  const newPath = path.join(folderPath, newFileName)

  if (file !== newFileName) {
    fs.renameSync(oldPath, newPath)
    console.log(`${file} -> ${newFileName}`)
  }
})