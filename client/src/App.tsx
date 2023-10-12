import { useEffect, useState } from 'react';

function App() {
    
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            console.log('fetching!');
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const msg = await (await fetch('http://localhost:3000/')).json();
            setMessage(msg);
        }
        
        void fetchData();
    }, [])
    
    
    return (
        <>
            <h1 className="font-semibold">{message}</h1>
        </>
    )
}

export default App
