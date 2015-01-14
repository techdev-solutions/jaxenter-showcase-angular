jaxenter techdev AngularJS showcase
===================================

This is a small, modular application built on RequireJS and AngularJS.

Using Grunt
------------
Install grunt globally

    npm install -g grunt

Install the dev packages in this directory

    npm install

Run grunt

    grunt

The prepared app will be in the directory out/.

Running
-------

Due to CORS requests it might be best to put the application folder in a HTTP server
like Apache or nginx.

Alternatively you can start a HTTP server with Ruby or python by executing

    ruby -run -e httpd . -p 8080

or

    python -m SimpleHTTPServer 8080

in the root directory of this project (where index.html is)!