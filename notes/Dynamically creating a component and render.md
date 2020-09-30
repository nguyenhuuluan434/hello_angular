Few thing need to render a component dynamically:
    
    - ViewContainerRef 
    
    - ViewChild
    
    - ComponentFactoryResolver

Create a component

```shell script
ng generate component alert
```

Add @Input property what using to render
```typescript
@Input() date: Date;
```

Edit template with data from @Input

Sử dụng  ng-template with template variable to create placeholder for modal
```typescript
<ng-template #alertBox></ng-template>
 ```

Inject **ComponentFactoryResolver** to get modal by Component
```typescript
constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
```

Using @ViewChild to map variable template to ViewContainerRef
```typescript
@ViewChild('alertBox', {read: ViewContainerRef}) alertBox:ViewContainerRef;
```

```typescript
Add **entryComponents: [AlertComponent],** to  @NgModule to modal can render
```



