Add styles that are specific to a single component:

    - Inline CSS —Component templates can have inline CSS or style attributes to set
       the styles of the elements. These are the default ways to add style rules to HTML
       elements regardless of whether you’re using Angular.
    - Component-linked CSS —Using the component’s styleUrls property with links to
      external CSS files. Angular will load the CSS file and inject the rules inside a style
      element for your app
    - Component inline CSS —Using the component’s styles property with an array of
      CSS rules, Angular will inject the rules inside a style element for your app.
   
Styling applied from five different approaches:

    - Global CSS rules
    - Inline CSS style element
    - Inline style declaration
    - Component styles property
    - Component styleUrls property linked to a CSS file
