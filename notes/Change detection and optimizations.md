Changes are always triggered by some asynchronous activity, such as when a user interacts with the page

Here are some examples:

    - A user clicks a button to trigger a form submission (user activity).
    - An interval fires every x seconds to refresh data (intervals or timers).
    - Callbacks, observables, or promises are resolved ( XHR requests, event streams).

Those are events or asynchronous handlers, but they may come from different sources.

One the change detection mechanism is triggered, it will start from the top of
the component tree and check each node to see whether the component model has
changed and requires rendering 

Angular has two change detection modes: **Default** and **OnPush**.
