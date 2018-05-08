let mix = require('laravel-mix');



mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .js('resources/assets/js/page/task/index.js', 'public/js/page/task')
   .js('resources/assets/js/page/user/index.js', 'public/js/page/user')
   .js('resources/assets/js/page/taskStatus/index.js', 'public/js/page/taskStatus')

   .version();
