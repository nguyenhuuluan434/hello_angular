One key capability is the ability to ensure that CSS styling for a component
doesn’t bleed over into the rest of the app, which is called styling encapsulation.

Shadow DOM , the official native browser standard for encapsulating styles.
Shadow DOM provides us with a good set of features to ensure that our styles don’t con-
flict and bleed in or out of a component, except that it might not be available on older
browsers.


Angular comes with three encapsulation modes:

    - None —No encapsulation is used during rendering of the view, and the compo-
      nent DOM is subject to the normal rules of CSS . Templates aren’t modified when
      injected into the app except for the removal of any CSS style elements from the
      template to the document head.
    - Emulated —Emulated encapsulation is used to simulate styling encapsulation by
      adding unique CSS selectors to your CSS rules at runtime. CSS can cascade into
      the component easily from the global CSS rules.
    - Native —Uses the native Shadow DOM for styling and markup encapsulation and
      provides the best encapsulation. All styles are injected inside the shadow root
      and are therefore localized to the component. None of the templates or styles
      declared for the component are visible outside the component.
    
