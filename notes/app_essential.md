Angular organize code in module

How app render

Types of entities in Angular

The template syntax

Change detection and dependency injection

Entities have specific roles and capabilities

1. Modules: grouping object into organize, modules are buckets for storing relative entities for easy reuse and distribution. 

2. Components: compose the majority to build application's structure and logic
    - Encapsulation — Keep component logic isolated
    - Isolation — Keep component internals hidden
    - Reusability — Allow component reuse with minimal effort
    - Event-based — Emit events during the lifecycle of the component
    - Customizable — Possible to style and extend the component
    - Declarative — Component used with simple declarative markup

3. Directives: Angular putting logic and capabilities straight in to HTML markup
    - attribute directives : where they modify the appearance or behavior of an element ex:NgClass, NgStyle
    - structural directives : modify the DOM tree based on some conditions ex:NgIf, NgFor,NgSwitch
    - components

4. Pipes: function that format data before rendering

5. Services: Reusable object that fill such as data access helper util

note attribute and property of HTML element when binding
+ interpolation 
```angular2html
<p>{{user.name}}</p>
{{10 + 20}}

```
+ property binding
```html
<img [src]="user.img" />
```
+ Special property bindings
```angular2html
[class]="getClass()"
```
```html
<!-- getColor() returns a valid color -->
<h1 [style.color]="getColor()">Title</h1>
<h1 [style.line-height.em]="'2'">Title</h1>
<!-- Renders to the following -->
<h1 style="color: blue;">Title</h1>
<h1 style="line-height: 2em;">Title</h1>
```
+ attribute binding
[attr.aria-required]="isRequired()"

+ event binding
```angular2html
<form (submit)="save()">
```

+ binding two way
```html
[(ngModel)]="stock"
```
