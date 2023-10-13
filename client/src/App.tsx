import { edenTreaty } from '@elysiajs/eden';
import type { App } from '../../server/src/index';

function App() {
    
    const client = edenTreaty<App>('http://localhost:3000');
    
    async function fet() {
        
        const {data, error} = await client.test.get();
        console.log(data);
        if(error) console.error(error);
    }
    void fet();
    
    return (
        <>
            <h1 className="font-semibold">{}</h1>
        </>
    )
}

export default App

