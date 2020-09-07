Angular is a tree of components, a nesting components inside one another.

Components are nested by being declared in the template of another component.

Any component that's nested inside another template is called a **View Child** 

component accept content to be inserted into its template => **Content Child**, named because these component are 
inserted as content inside the component (not a template)

example:  

<user-avatar [avatar]="avatar"></user-avatar>  UserAvatar as a **View Child**

<user-profile [avatar]="user.avatar">
    <user-details [user]="user"></user-details>
</user-profile> UserDetails as a **Content Child**

Categories component:
    - App component —This is the root app component, and you only get one of these per application.
    Recommend:
        - Keep it simple: don't put any logic into it
        - Use for application layout, include only the template
        - Avoid loading data
    - Display component —This is a stateless component that reflects the values passed
     into it, making it highly reusable.
        - Decouple  
        - Make it only as flexible as necessary make it simple as possible
        - Don't load data accept data through data input binding
        - have clean api: accept input binding data to obtain data into component and emit events
        for any action
        - Use a service for configuration 
    - Data component —This is a component that helps get data into the application by
     loading it from external sources.
        - Use appropriate lifecycle hooks: to do the initial data loading, alway leverage the best lifecycle
        hook for trigger or persistence data
        - Don’t worry about reusability: 
        - Set up display components: Think about how this component can load data needed
                                     by other display components and handle any data from user interactions
        - Isolate business logic inside: This can be a great place to store your application
                                         business logic, because anytime you manage data, you’re likely dealing with a
                                         specialized implementation that works for a specific use case.
    - Route component —When using the router, each route will render a component,
      and this makes the component intrinsically linked to the route
        - Template scaffolding for the route —The route will render this component, so this is
          the most logical place to put the template that’s associated with the route
        - Load data or rely on data components- Depending on the complexity of your route,
                                                the route component may load data for the route or rely on one or more data
                                                components to do that for it. If you’re unsure, I’d suggest loading data initially in
                                                the Route component and decoupling as your view gets more complex.
        - Handles route parameters —As you navigate, there are likely to be router parameters
          (such as the ID of the content item being viewed), and this is the best place to handle
          those parameters, which often determine what content to load from the back end.
