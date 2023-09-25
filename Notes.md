# Episode - 1
createElement FUNCTION - gives JS object not html tag/html element. render() method converts it as html tag - REACT ELEMENT
createElement('tag name', attributes as JS object key value pair, children as array or simple innerHTML)
root.render() method replace any existing html element inside root element.



# Episode - 2
Dev dependencies - Required in the  development phase of application. During  building, testing, and linting the code. npm i -D package name
Normal DevDependencies - Required to run application properly. npm i will go here.
tilde ( ~ ) - Upgrade to the latest major version available.
caret ( ^ ) - Upgrade to the latest MINOR/PATCH version available.
"MAJOR.MINOR.PATCH" => 1.2.3
parcel - works as bundler(bundle the code)-  doing HMR(Hot Module replacement) - Minifying  the code - Optimizing the image - 
BrowserList - Makes app compatible for different browser.
npx - executing npx package with source file.


# Episode - 3
JSX - It is HTML or XML look like syntax but not HTML inside js. It is convention where we merge html AND js code together. JSX is not the part of React. 
Javascript can not understand the JSX as it is not Javascript syntax. So JSX code transpiled before it reaches to browser - (Babel is doing this conversion).
JSX code converted to  React.createElement(Babel is doing this conversion) then  React.createElement(a JS object === React element) converted to html element by render method. GT
FUNCTIONAL COMPONENT - Normal javascript function that return some JSX/ React element/React Component.
Component composition - Render one react component inside another component.



Props - passing props as passing argument to function.
Config driven UI - UI driven by configuration. 

In a single file only one default export should be there.

# React Hooks
Hooks - simple js utils function.
useState()
useEffect()
State variable updates => react re-render the component. 
React is fast because it's efficient dom operation/dom manipulation.
# Reconciliation algorithm/ React Fiber -  Comes in React 16.
Virtual dom - IT IS REPRESENTATION OF ACTUAL DOM but not the actual dom(actual dom have the tags like <div>). It is a kind of object representation of actual DOM.
Diff Algorithm - React calculates  Difference between the older virtual dom and updated virtual dom and than update the actual dom. If could not find the difference not updating the DOM.
https://github.com/acdlite/react-fiber-architecture


#useEffect

-> useEffect runs every time after component finises rendering.
useEffect(()=>{}, [dependency array]) => dependency array changes the behavior of useEffect. If no dependency array pass as argument, useEffect runs after every render. If dependency array pass as [], seEffect runs after only 1st initial  render. 


SPA - Only one html file and load different page/component by client side routing without loading complete application/page.

code splitting === lazy loading === dynamic loading => reduce bundle size.

Higher order component = normal javascript function takes a component as input and enhance that component and return a component.


Controlled Component - child component is controlled by parent component. It does not have its own state === Lifting the state 
UnControlled Component - When component have its own state.


React Context - Gives the access of a global object. To void props drilling.
createContext - to createContext 
useContext - to get the context
context.Provider - to update the context.



Redux - 
1. creating the store
2. providing this store to application
3. creating slice - slice consists => name of slice, initialState, reducers function.
4. added this slice to store.

#useMemo - cache the result of calculation between re-renders.

React.strict = ?

React.memo =  higher-order component (HOC), which is a fancy name for a component that takes a component as a prop and returns a component that prevents a component from re-rendering if the props (or values within it) have not changed.


# LRU => Least recent used cache

# Class based component=>

Loading the class based component on web page means creating new instance of this class. Constructor of class/component will be called with props and setting the state also there in constructor.

Render phase<>
1st constructor
2nd render
3rd componentDidMount

Update phase<>
1.render
2.componentDidUpdate


