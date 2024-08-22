# How to run
To use this component, you just need to link the component to your project.

- ```npm install``` (run inside component)
- ```npm run build``` (run inside component)
- ```npm link ../<patch-to-app>/node_modules/react ../<patch-to-app>/node_modules/react-dom``` (run inside component for avoid React instance duplicate)
- ```npm link``` (run inside deel-component component to creat link to the component)
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

