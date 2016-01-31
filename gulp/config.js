module.exports = {
  build: {
    bower: {
      src: 'public/bower_components/**/*.*',
      dest: 'dist/bower_components'
    },
    markup: {
      src: 'public/*.html',
      dest: 'dist'
    }
  },
  react: {
    src: 'public/components/*.js',
    dest: 'dist/components'
  }  
};
