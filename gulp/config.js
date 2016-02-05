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
    fonts: {
      src: devFolder + 'fonts/**/*.*',
      dest: distFolder + 'fonts'
    },
    assets: {
      src: devFolder + 'assets/**/*.*',
      dest: distFolder + 'assets'
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
