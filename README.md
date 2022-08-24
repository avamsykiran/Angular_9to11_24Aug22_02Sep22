Angular
----------------------------------------------------------------------

    Pre-Requisite Skills
    ---------------------
    Html 5
    CSS 3
    Javascript (ES6)
        JS library - String,Math,Dte 
        JS DOM and BOM
        JS OOP  - Classes, Objects, Constructors, Fields, Prototypes
        JS Function - Closures, IIFE, Arrow Functions, call backs
        JS Array Prototype Functions
        Spreed and Rest Operators
        ES Modules - exports, imports 
    
    Lab Setup
    -------------------------------
        NodeJS > 14                     https://nodejs.org/en/download/
        Angular CLI > 13                npm install -g @angular/cli@13.3.3
        VSCode as an IDE                https://code.visualstudio.com/download

    Angular Intro
    -------------------------------

        is a typescript based SPA development framework.

        Dynamic Web Application
            WebServer                                       Browser
                Server Side
                running programs       <-------REQ------
                and a View Engine      generate some
                                    html content on the go 
                                    ---------RESP (html )---> unload the prev page and reload the new one

        Single Page Application
            WebServer                                       Browser
                spa-bundle          <----------REQ-----
            (index.html + js)       ---RESP(spa-bundle)--> load the index.html and
                                                            the js assosiated with it.

                                                            any operation from now on
                                                            will be handled by the javascript
                                                            on the client , no more contact
                                                            with the server for req processign is
                                                            needed.

            REST api        <-----------REQ-------------    javascirpt if needs any data
                            -----------data.json RESP---->  this data is received by the JS code
                                                            and a relevent html is generated
                                                            on the client machine and the html
                                                            content is replaced in index.html


        Typescript
            = Javascript + typeSafety

            typescirpt can not be executed on any browser.
            typescript must be compiled into javascript before hosting.

            javascript                          typescript

            function greet(userName){               function greet(userName:string) : string {
                return "Hello " + userName;             return "Hello " + userName;
            }                                       }

            function sum(a,b){                      function sum(a:number,b:number):number{
                return a+b;                             return a+b;
            }                                       }

            greet("Vamsy")
            greet(123435)
            sum(12,34)
            sum("Hello","world")


