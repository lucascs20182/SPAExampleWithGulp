const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { dependenciesCSS, dependenciesFonts } = require('./gulpTasks/dependencies')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(dependenciesCSS, dependenciesFonts)
    ),
    servidor,
    monitorarArquivos
)
