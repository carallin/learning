var gulp = require('gulp'),
    concat = require("gulp-concat"),
    minifyHtml = require("gulp-minify-html"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css");

gulp.task('css', function () {
    gulp.src('src/stylesheets/*.css')  //要合并的文件
    .pipe(concat('style.css'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/stylesheets'));
    gulp.src('src/icons/**')  //要合并的文件
    .pipe(gulp.dest('dist/icons'));
});


gulp.task('html', function () {
    gulp.src('src/html/*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dist/html'));
});


//[*.js,'!b*.js']
gulp.task('js', function () {
    gulp.src(['src/js/*.js', '!src/js/jquery*.js']) // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
    gulp.src('!src/js/jquery*.js') // 要压缩的js文件
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});
