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

    Why NodeJS?
    -------------------------------------------
        is a javascript runtime.

        while we develop an angular app:
            1. compose the code                     IDE         VSCode
            2. Manage dependencies                  build tool  npm
            3. compile the code .ts into .js        compiler    babel
            4. test the code                        test env    jasmine and karma
            5. bundle the code. (pack)              build tool  npm
            6. execute it on to verify              local dev server

            tools like npm,babel,jasmine, karma ..etc are javascript based programes
            that need to run on the developer machine. for this we need NodeJS.

    Angular CLI
    --------------------------------------------

        is a command line interface for creating, managing, building and other
        development activites on a angular project.

        this provides a bootstraped project strucutre with all needed
        basic configs., so that we can concentrate right away on the project.

        ng version
        ng new proj-name

        proj-name\> ng serve                build,bundle and host on a temporary developement server localhost:4000
        proj-name\> ng serve --port 8888 -o
        proj-name\> ng build                build,bundle and the output bundles are saved in /dist
        proj-name\> ng test                 build and executes the test cases in our project.

        proj-name\> ng g module ModuleName 
        proj-name\> ng g c ComponentName --skip-tests
        proj-name\> ng g directive DrirectiveName --skip-tests
        proj-name\> ng g service ServiceName --skip-tests
        proj-name\> ng g pipe PipeName --skip-tests
        proj-name\> ng g class ClassName --skip-tests
        proj-name\> ng g interface InterfaceName

    Angular Archetecture
    -----------------------------------------------------

        An angular application is made up of various resources like
            Modules
            Directives
            Components
            Pipes
            Services
            ...etc.,

        Each of these resources is a typescript class.        
        Each of those classes is marked with a decorator to indicate the purpose of the class.
        Each decorator is supplied with a json object called meta-data; that json object contains the config..

        Modules
                in an angular project we see two types of modules
                    javascript ES6 Modules
                        each .js or .ts file is a module
                        the classes or variables or cosntant or function in that file are exported and
                        are imported into another .ts or .js file.

                    angular modules
                        is a group of components, directives, pipes, services and other sub-modules.

                        each angualr project must be held inside a single top-level module
                        called the 'ROOT MODULE' and the sub-modules, if any, are called 'FEATURE MODULES'

                @NgModule({
                    declarations:[],
                    imports:[],
                    exports:[],
                    providers:[],
                    bootstrap:[]
                })
                class MyModule{}

                declarations            will hold the list of components,directives and pipes that
                                        belong to the current module
                imports                 will hold the list of feature modules to be imported into the
                                        the current module
                exports                 will hold the list of components,directives and pipes that
                                        belong to the current module and that are allowed to be accessed
                                        outside the current module
                                        'ROOT MODULE' will not have 'exports' property.
                providers               is a list of services tha belong to the current module
                bootstrap               is a proepty for 'ROOT MODULE' alone. This holds
                                        a list of top-level components that are instantiated immediately
                                        once the root-module loads.

                ng generate module module-name
                ng g module module-name

        Directives

                Angular allows us to create our own html eleemnts (tags) and attributes.

                That is possible witht he help of directives.

                Attribute Directives
                        are used to create our own html attributes.
                        angular already gave a long list of attributes.
                            ngModel, routerLinke, ...etc.,

                        and we can still create our own called custome attribute directives.
                            ng g directive DirectiveName --skip-tests
                            @Directive({
                                selector:'[highlight]'
                            })
                            class HighLightDirective{}

                Structural Directives
                        are special attribute directives that control the apperence of an element.
                        *ngIf
                        *ngFor
                        ngSwitch with *ngSwithcCase and *ngDefault

                Components
                        are used to create our own html tags / elements
                
        Components
                the selector will beome the tag name

                a compoent has two main parts
                    component class
                            has the fields needed by the component
                            has the method to handled events in the component
                    component template
                            provide the html markup to be rendered when this component is used.

                @Component({
                    selector:'app-welcome',
                    templateUrl:'./welcome.component.html',
                    styleUrls:[]
                })
                class WelcomeComponent{}

                ng g component ComponentName --skip-tests
                ng g c ComponentName --skip-tests

                Data Binding
                    Interpolation
                        {{angular-expression}}

                    Two-Way Data Binding
                        is designed to accept data from a form-control

                        'ngModel' is an attribute directive for all form-controls.

                        'ngModel' is from 'FormsModule' from '@angular/forms'.

                        <input type="text" [(ngModel)]="field" name="fc1" />

                    One-Way Data Binding

                        Attribute Binding
                            to assign the value of a field or angular-expression to
                            an attribute in a tag.

                            [attribute]="angular-expression"

                        Style Binding
                            to assign the value of a field or angular-expression to
                            a style property in a tag.

                            [style.property]="angular-expression"

                        CSS class Binding

                            to switch on or off a css-class

                            [class.cssClassName]="boolean-angular-expression"
                    
                    Event Binding

                        to invoke a method when an event occurs.

                        (eventDirective)="method()"

                        html event attributes                   eventDirective
                            onclick                                 click
                            onblur                                  blur
                            onmouseover                             mouseover
                            onchange                                change
                            onfocus                                 focus
                            onkeypress                              keypress
                            ...
                            onSubmit                                ngSubmit
                
        Services
                is a typescript class that provides bussiness logic like
                computations or calicualtions or restapi communication or
                state management across components ...etc.,

                Ans these services are injectable into components, directives and
                other services.

                @Injectable({
                    providedIn:'root'
                })
                class EmployeeService{}

        Pipes

            is used to tranform a value into another value
            just before it is rendered.

            inbuilt pipes
                lowercase
                uppercase
                titlecase
                number
                currency
                date

            Custome pipe
                @Pipe({
                    name:'intoWords'
                })
                class IntoWordsPipe{}

    Bootstrap 5 Integration
    ----------------------------------------------------

        npm install bootstrap --save

        node_modules/bootstrap/dist/css/bootstrap.css
        node_modules/bootstrap/dist/js/bootstrap.js

        angular.json
            styles:[]       include the css file
            scripts:[]      include the js file

    Angular Routing
    --------------------------------------------------

        allow you to render a component based on the url-path.

        RoutingModule       from '@angular/raouter'

            Route
                            {
                                path:'',
                                component:Component,
                                children:[],
                                pathMatch:'full|startsWith',
                                redirectTo:''
                            }
            
            Routes          Route[]

            Router          navigateByUrl('')

            router-outlet   is a built-in component that is replaced by the component 
                            whose path matches witht he url.

            routerLink      is an attribute directive for 'a' tag, used to hold the target path.

            forRoot         is a function used to load the paths into the RouterModule.

    Json Server
    ---------------------------------------------

        Json-server is a javascript tool or library that generates
        rest api based on a .json file.

        create any nodejs project
        npm install json-server --save
        json-server --watch data.json --port 9999

    HttpClient
    ----------------------------------------------

        is a rest client library coming from 
        HttpClientModule of '@angular/common/http'

        HttpClient
            get(url)    : Observble
            post(url,reqBody) : Observble
            put(url,reqBody) :Observable
            delete(url): Observble


        Observble is a class from 'rxjs' framewokr.

        it acts like a bridge of communcation between asycn job and a front-end

        each observable encapsulates an asynchronous job.

        let ob = httpClient.get("http://localhost:9999/emps");

        ob.subscribe({
            next:   data => {/*we shall do what ever we want to do witht he data*/ },
            error:  err => {/*error handling */ }
        });

Assignment - Invnetory Management System
-----------------------------------------------------------

SPA angular app: that enable CRUD on 'Product' entity.

    Product 
        {
            id:101,
            title:'A4 Sheets Bundle',
            unit:'bundle',
            rate:870.0,
            packageDate:'2022-01-01'
        }
