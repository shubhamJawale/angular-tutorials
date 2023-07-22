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
so to give the selector as class property we need to prefix the selector name with _._

```ts
selector: ".selector-name";
```

and to use it in html there is another syntax as follows

```html
<div class="selector-name"></div>
```
