   create a component as modal dialog
```shell script
ng g c node-detail
```

The component with a property input using value to render

@Input node: Node;

Constructor inject **NgbActiveModal** to action in template or controller 

In template , using the **@Input** and **ngbActiveModal** to render and dismiss modal

To render the modal in parent component add a function to call show this modal 

Inject **NgbModal** service to parent

Create new instance of modal  
```typescript
const modal = this.modalService.open(NodesDetailComponent);
```

Inject value to modal component
```typescript
modal.componentInstance.node = node;
```

Add **entryComponents: [NodesDetailComponent],** to component to modal can render
