import { useEffect, useState } from "react"
import Text from "./components/Text"
import axios from "axios"

function App() 
{
    const [allData, setAllData] = useState([]);

    function toRoman(num)
    {
        const romanMap = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];

        let result = '';

        for (let i = 0; i < romanMap.length; i++)
        {
            while (num >= romanMap[i].value)
            {
                result += romanMap[i].symbol;
                num -= romanMap[i].value;
            }
        }

        return result;
    }

    useEffect(() => {
        const getData = async() =>
        {
            const { data } = await axios.get('http://localhost:5229/products');
            setAllData(data);
        }
        getData();
    }, [])
        
    console.log(allData, "allData");

    return (
    <>
        <div>
            {
                allData?.map((data, i) => (
                    <div key={i}>
                        <div>{data?.name} - (Stok:{data?.initialStockCount} - {toRoman(data?.initialStockCount)})</div>
                    </div>
                ))
            }        
        </div>
    </>
    )
}
export default App
