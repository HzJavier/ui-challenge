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
    src: 'public/*.js',
    dest: 'dist'
  }  
};
