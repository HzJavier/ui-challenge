var devFolder = 'public/';
var distFolder = 'dist/';

module.exports = {
  watch: {
    src: devFolder + '**/*.*'
  },
  build: {
    bower: {
      src: devFolder + 'bower_components/**/*.*',
      dest: distFolder + 'bower_components'
    },
    markup: {
      src: devFolder + '*.html',
      dest: distFolder
    }
  },
  react: {
    src: devFolder + 'components/*.js',
    dest: distFolder + 'components'
  },
  less: {
    src: devFolder + 'styles/**/*.less',
    dest: distFolder + 'styles' 
  }  
};
