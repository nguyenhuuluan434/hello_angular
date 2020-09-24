
A Service could fix into more than one of those categories:

   - Injectable DI system to be injected into the Component
    
   - Non-injectable
   
   - Helper
   
   - Data service are sharing data across the application
   
Component are for displaying the UI, Services help manage data

Create service
```shell script
ng generate service account
```
         
@Injectable() is used to wire the class to work with Angular DI system, any class wanna regis with DI


**Dependency injection**

   -  injector: the entity that can inject a dependency when request
   
   - providers: the entity that know how to construct and instantiate objects

When component define it providers, this component will using it injector, if the component does not
have any providers declaration it will share injector with its parent.

Keep in mind when it comes to DI and services
   
   - Inject at the lowest level: try to add it to the lowest component providers array
   - Name your services wisely: Give your services semantic and meaningful names.
   - Keep services focused: make a sensible number of services that do specific tasks
   - Keep services meaningful: 
   - Use consistent patterns: 
   
   
**Service without DI:**

This approach is using JavaScript modules for exporting and importing values across
files


HttpClient in provider arrays to wire in DI system

HttpInterceptor intercept Http request or response. For example, you may want to add an authorization header
                                                    to all outgoing requests to a particular domain or you may want to capture any error
                                                    responses and log them.
                                                    
```shell script
ng generate service services/interceptor
```
