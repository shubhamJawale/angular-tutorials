# Angular tutorial

basically angular is used to create the single page application
so following will be the excution flow of the app
the flow off the app is as follows :-

## fundamentals

1. it will run main.ts
   in main.ts there is a single line

   ````ts
    platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.error(err)); ```
   ````

   so in above snippet there is AppModule which spacifies our app module which has all our app component registry which in built or user defined components we need are present in the app module file

2. from the main.ts file the app module is getting excuted
   the angular uses components to render but uses modules to bind components together

```ts
@NgModule({
  // declarations has the registry of components
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

the module is an ordinary typescript class which has **_@NgModule_** directives
this class has basic properties like declarations, imports, providers, bootstrap

    1. declaration : this property takes an array which uses the components of the app to register (for Components see point 3)
    2. imports : imports contains the inbuilt anguler modules which are used in app
    3. providers : this is used for dependancy injection
    4. bootstrap : this containts the only one component which has selector this one component selector is ingested in index.html
                    there is only one component which can be used in this array

3. Components
   components are basic building block of the app this components has basic syntax

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
```

component is also a basic class which has **_@Component_** directive
this class will provide the basic buisness logic and class structure to the component
[NOTE] while delaring the class name of component we should use the CamelCase for class name

the component should be have basic two methods to create
i. manually creating the files
ii. by using cli

i. manually creating files :-
we need to create the components file which will be class and component directive
so the file name should contain fileName.component.ts > ex. **_server.component.ts_**
[NOTE] for each component always create a seprate folder.

then in that file create the class with the camelcase in name.
now import the Component directive from @angular/core.
as shown in above snippet add the properties in component

so there will be main 3 properties in component

            1. selector : this is used as the name of the component which we can be used in the html file
            ex. <selctor-which-we-have-defined></selctor-which-we-have-defined>
            2. templateUrl : this will take the html template file path
            2.1 template : this will take the html template as whole we can give any html template to it as
            example. '<div>shubham</div>'
            3. styleUrls : this will take the style file path or any other url
            3.1  styles : this will take the styles css objects array which will be applied to the component [both should be array]

while using the template or styles property we can write the single line templates with _''_ and _""_
for multiple line template we can use _``_ as in javascript

the template property is used when there is small html code which we dont need to put in seprate template

note : the template url or template tag one of them is necessary for the component (one of them should be present in the component file)

so basically component class file contains the basic information about the component how data is processed logic and which html template we need to use and which style file we need to use

selector should be new and unique for each component so injection of any component into the perticular file is defined by that
ex. app-server
[IMP]
to configure our component we need make some changes in app.module.ts file (by defualt in angular created project)
so in declaration property of the app.module.ts file of @NgModule directive we need to add the class name of the component as it is in camel case else the angular will not know the which component on the selector

we can use selector tag to insert the component into the html file
ex. <app-server></app-server>

ii. creating with cli :-
use the following command which will automatically create the component

```shell

ng generate component ComponentName

```

shortcut of the command

```shell

ng g c nameOfComponent

```

generate : this key word in the command is used for generating many things
this command will genrate the component related all files and register the component in the module

in component there is one property as we discussed named as templateUrls
there is also the template property which is alternative for the templateUrl

so the basic file compilation will be as

main.ts --> app.Module.ts --> app.component.ts --> html template (app.component.html)

## selector property

the basic syntax we can use with selector in differnt templates in different ways
basically in component file we declare the selector as 'selector-name'
but according to the use of selector we can use it as class or attribute
only the syntax in component file will change and the syntax in template will also change
with the defualt syntax we can just have the selector as tab ex. <selector-name>

#### using selector as attribute

description : so basically the html tag has so many attributes few of them are style class etc.
ex. <div style={}></div> here style is used as attribute

so as above statements stats that as long as we declare selctor in string then we can use it as the

so use selector as attribute we have to use it in the syntax as

```ts
selector: "[selector-name]";
```

and in html template we can use it as

```html
<div selector-name></div>
```

so the selector name is used as the attribute in above html template
so in dev the template will get rendered

#### using selector as class

description : the html tags also has a class
so we can use our selector as class name also

so the syntax is as follows
so to give the selector as class property we need to prefix the selector name with " _._" (dot/fullstop)

```ts
selector: ".selector-name";
```

and to use it in html there is another syntax as follows

```html
<div class="selector-name"></div>
```

## Data Binding

data binding is communication between html template and buisness logic class

![Alt text](./src/assets/t1.png " data binding")

summary :-

1. one way binding

output from ts to html

- string interpolation
  ex. {{data}}

- property binding
  ex. [property] = "data"

input html to typescript

- event binding
  ex. (event) = "expression

2. two way binding
   (combination of output and input)
   [(ngModel)] = "data"

### 1. string interpolation

string interpolation is used to show dynamic strings on the html template
so there are few basic rules to follow

            **_rules_** : -
                  1. in string interpolation we can use anything which returns string or which converts end results into the string ( we can use functions as well which returns string)
                  2. we can not use multiline code, if-else and flow controllers like for loop, switch cases etc.
                  3. we cam use ternery expression though
                  4. for function in string interpolation use () as well ex. {{function_name()}}

- basic flow :-
  **_step 1_** :
  in component file we have to declare and assign to variable which will define the string
  ex.

  ```ts
  @Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
  })
  export class AppComponent {
    // declaring the string whose variable names will be used in string interpolation data binding
    varaibleName: "data";
    // declaring the function which will return the string
    functionWhichReturnString() {
      return "string";
    }
  }
  ```

  **_step 2_** :
  in template file we can have the syntax as follows
  in template file we have to use the variable and function name is string interpolation

  ```html
  <div>{{variableName}} {{functionWhichRetutnString()}}</div>
  ```

  there is also we can use one thing we can use string as well in string interpolation
  ex.

  ```html
  <div>{{'string which will render as it is due to quotes'}}</div>
  ```

  we can use both ' ' or " "

### 2. property binding

      basics : - when page gets loaded in the browser the respactive dom get loaded browser converts the dom into tree of elements(tags)
                each elements has several properties
                example.
                 <Button disabled></Button>
                 here disabled is property on button tag

so lets get to it so we can change the behaviour of dom with the help of the property binding
to bind any property with the dynamic data we use the property binding

so there are few steps we need to follow :-
**_step 1_** :
in component.ts file we need few things

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // so we need constructor for the class the constructor will get loaded once the component is rendered in the browser
  // in constructor will add timeout method which will change the varaible after some time

  // lets declare the varaible which defines as boolean which will be used to disable or enable the button
  buttonState = false;

  constructor() {
    setTimeOut(() => {
      this.buttonState = true;
    }, 2000);
    // this will change the variable to true after 2000 ms
  }
}
```

**_step 2_** :
we need to use the variable as property binding in our html template as follows

```html
// the disabled is already existing property on the button tag the format of the property binding is easy as property should be in square brackets '[ ]' the value we need to implement in the " " double qoutes

<button [disabled]="!buttonState"></button>

syntax : - [property] = value to the property
```

**_Note_** :-

1. we can bind many properties from html elements
2. also for directives and component we can bind the properties
3. we use the angular cause it changes template (dom/rendered component at runtime) very easily

**_when to use what?_**

- when you want to display a text or something use string interpolation
- when you want to change some property use property binding

### 3. Event Binding

we can bind any event occured in dom with event binding
following are the steps to follow for event binding :

**_step 1_** :
in component.ts
create function which will excute when the event occurs

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  stringToChange = "first String";

  constructor() {}
  // this function will be excuted on the button click
  functionWhichWillChangeTheStringOnClick() {
    this.stringToChange = "second String";
  }
}
```

**_step 2_** :
using the syntax of event binding we can bind any event in the template
Syntax => (event)= "expression or function call"

```html
// we are using the string interploation to show the string variable
<p>{{stringToChange}}</p>
// to event occure will add the button when it is clicked the click event is occured so will bind that event change the string
<button (click)="functionWhichWillChangeTheStringOnClick()">Click Me To Change The String</button>
```

so in above example when button gets clicked the string will be get changes from "first string" to "second string"

[NOTE] :

- we can bind each and every event
- we need to remove the prefix "on" from the event name
  ex. basically the event on button is "onClick" so while using in the event binding syntax we need to remove 'on' from the event
  (click)=> "function()"
- we can any expression or typescript code in " " (double qoutes)
  ex. (click)=> "Code in typeScript or expression in typescript"

### 4. two way binding

the two way binding uses the three types of data binding string interpolation, property binding, event binding.

we are taking the basic example which will show the draw back of the basic two way binding

steps :-
**_step 1_** :
in html template we can declare the the event binding and string interpolation
ex.

```html
<input type="text" (input)="onInputChangeFunction($event)" />
// this $event is the reserved keyword which will use to pass the event into the function and the input is the event that already exists in file
<p>{{inputText}}</p>
// input text variable is declared in component.ts file
```

**_step 2_** :
in component.ts file we need to handle the event occured on template and set value to variable inputText which will be shown under the box

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // this will be the input text
  inputText = "";

  constructor() {}
  // this function will excute on the input event is trigger
  // so for the event we need to spacify the type of event as HtmlInputElement else the typescript will throw the error
  // there is already present Event type for the typescript
  onInputChangeFunction(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
```

this will basically take the text as input and will print under placeholder

- **_DrawBack_** :-

- this above method has one draw back that it will change the variable when we change it from input placholder or we change variable internally but only the value under the placeholder that we represented in paragrap as string interpoletion will change but not in the place holder
- place holder will remain unchanged regarding the changes in variable
- this will act as the one side data binding

to overcome this drawback we need to go through the advanced method which uses the forms module of angular
**_step 1_** :
so first we need to import forms module in app.module
as we seen earlier in imports array of @ngModule will need to add the
example

```ts
  import { FormsModule } from @angular/forms // imported from the angular/forms module
@NgModule({
  // declarations has the registry of components
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // this module we added here so it can be easily use in app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**_step 2_** :
so for two way binding there is simple way
in html template we need to use ngModel directive which will give the two way binding

ex.

```html
<input type="input" [(ngModel)]="TextToChange" /> // text to change is the variable that is already have been declared in the component.ts file
```

and in component.ts file we just need to declare the string nothing more than that. no function to handel the event is required
ex.

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // this will be the text will change with ng-model directive of forms
  TextToChange = "";

  constructor() {}
}
```
