function useLocalStorage(key,initialValue){
        const[data,setData] = useState(initialValue);

        useEffect(() =>{
            const savedData = localStorage.getItem(key);
            if(savedData) setData(JSON.parse(savedData));
        },[])

        useEffect(() => {
            localStorage.setItem(key,JSON.stringify(data));
        },[data,key]);

        return [data, setData];
    }

    export default useLocalStorage