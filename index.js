const jimp = require('jimp')
const glob = require('glob')

const files = glob.sync('./in/*.*')

files.forEach(file => {
  let filename = file.split('in/')[files.length - 1]
  filename = filename.split('.')[0]

  jimp.read(file, function (err, img) {
    if (err) throw err;
    img = img.exifRotate()
      .cover(720, 480)
      .greyscale()
      .contrast(0.5)

    cloned = img.clone().invert()

    img.mask(cloned, 0, 0)
      .color([
        { apply: 'mix', params: ['#231f20', 100] }
      ])
      .write('./out/' + filename + '_transparentized.png')
  })
})
