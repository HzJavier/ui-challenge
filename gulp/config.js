module.exports = {
  build: {
   components: {
      src: 'public/components/**/*.*',
      dest: 'dist/components'
    },
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
