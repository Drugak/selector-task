# How to run
For using this component need just to link component to yours project.

- ```npm run build``` (run inside component)
- ```npm link ../<patch-to-app>/node_modules/react ../<patch-to-app>/node_modules/react-dom``` (run inside component for avoid React instance duplicate)
- ```npm link``` (run inside deel-component component for creat link to component)
- ```npm link deel-component``` (run in the React App)
- Update package.json in the React App
```
"deel-component": "1.0.0"
```

# Example using in the App
```
import DeelDropDown from 'deel-component';

function App() {
  return (
    <div className="App">
      <DeelDropDown />
    </div>
  );
}
```

