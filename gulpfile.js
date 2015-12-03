var gulp = require('gulp');
var shell = require('gulp-shell');
var connect = require('gulp-connect');

gulp.task('serve', function() {
  connect.server({
    root: 'dist'
  });
});

gulp.task('deploy', function() {
  return gulp.src('', {read:false})
    .pipe(shell([
      'AWS_PROFILE=cutthroat terraform plan',
      'AWS_PROFILE=cutthroat terraform apply',
      'aws --profile cutthroat s3 sync dist/ s3://cutthroatbingo.com --include \'*\' --acl \'public-read\''
    ]));
});
