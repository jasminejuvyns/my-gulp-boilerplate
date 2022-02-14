const { src, series, parallel, dest, watch } = require("gulp");

const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function scssTask() {
    return src("src/scss/*.scss", { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest("dist", { sourcemaps: "." }))
}

function jsTask() {
    return src("src/js/*.js", { sourcemaps: true })
        .pipe(terser())
        .pipe(dest("dist", { sourcemaps: "." }))
}

function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: ".",
        },
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

function watchTask() {
    watch("*.html", browsersyncReload);
    watch(["src/images/*"], series(images, syncReload));
    watch(["src/scss/**/*.scss", "src/js/**/*.js"], series(scssTask, jsTask, browsersyncReload));
}

exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
