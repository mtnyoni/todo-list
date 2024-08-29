import { Button } from '@todo-list/shared-ui';
export function App() {
    return (
        <div>
            <div>what can I do</div>
            <Button onPress={() => alert('Clicked Me 😎')}>Click me</Button>
        </div>
    );
}

export default App;
