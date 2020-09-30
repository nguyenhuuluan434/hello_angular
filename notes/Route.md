A Router is responsible for coordinating the navigation options for a user as they click and interact.
The router handle rendering a component base on the current url, such as having a Home component render 


The Angular router is included as a separate package @angular/router
```shell script
npm install --save @angular/router
```

The all routes is defined with an object with props. path, component

```typescript
const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/forums', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent },
];
```

use route, add RouterModule.forRoot(appRoutes), to import of main module (in this case is AppModule)
```typescript
imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    /*define root of routes*/
    RouterModule.forRoot(appRoutes),
    ForumsModule,
    ClarityModule.forRoot()
  ],
```
Make sure **Router Outlet** in component,the router outlet is the location marker, where the content will render

in app.component.html
```angular2html
<div class="content-area">
      <router-outlet></router-outlet>
</div>
```

**Feature modules and routing**

The best practice is split application to module to isolate of code, So it can help create test, optimize build nad lazy loading

**Add route for child**

add route with prefix from parent 
```typescript
const forumsRoutes: Routes = [
                                { path: 'forums', component: ForumsComponent }
                            ];
```

add to to **imports**
```typescript
imports: [
        BrowserModule,
        FormsModule,
        ClarityModule.forChild(),
        RouterModule.forChild(forumsRoutes),
],
```
Here we use forChild() instead of forRoot() , because we’re declaring routes that
belong to an imported module instead of the main App module.

**URL parameter**
```typescript
{ path: 'forums/:forum_alias', component: ForumComponent }
```
_:forum_alias_ will be used as a key to get from param from Route

using **routerLink** to create link in template

```angular2html
<a class="nav-link" routerLink="/forums"><span class="nav-text">Forums</span></a>
```
If the path starts with a forward slash, it will treat the URL as an absolute path from the domain

**For dynamic link**
```angular2html
<tr *ngFor="let forum of forums" [routerLink]="[forum.alias]">
```
binding a value, it expects an array of path segments that it will use to construct the complete URL

**Accessing the route parameters in a component**

Secondary routes (auxiliary routes): where some part of the application appears but maintains
 a different state from the main application

A **guard** is like a lifecycle hook for route changes that allows an application to verify
certain conditions or load data before a change occurs

**Lazy loading module**
add a route with same config with **loadChildren** .
The loadChildren property takes a file path pointing tothe actual module file,
starting from the src directory and excluding the .ts extension. It then has 
a hash (#) symbol, followed by the module name. This special syntax lets Angular
know both the location of this module and the name so it can properly create it.

To create a router module to store configuration of route
```shell script
ng generate module blogs --routing
```
