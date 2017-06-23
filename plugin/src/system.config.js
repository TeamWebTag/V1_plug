System.config({
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('app/app.boot')
  .then(null, console.error.bind(console));
