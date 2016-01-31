module.exports = {
  build: {
    bower: {
      src: 'public/components/**/*.*',
      dest: 'dist/components'
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
