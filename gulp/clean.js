const del = require('del')

function cleanBuild() {
    return del('build')
}

function cleanReport() {
    return del('report')
}

module.exports = {
    cleanBuild,
    cleanReport
}