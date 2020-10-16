import React,{useState,useEffect} from 'react'
import Button from './Button'

const Table = () => {
 
    const selectedStyle={
        backgroundColor:'#357EC7',
        color:'white'
    }    
    const [searchText,setSearchText] = useState(''); 
    const [data,setData] =useState([
        {
            id: 1,
            uid:1,
            name:'Adidas Shoes',
            price:2100,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 2,
            uid:2,
            name:'Puma Bat',
            price:2101,
            coupon:'yes',
            instock:'yes',
            completed:false

    
        },
        {
            id: 3,
            uid:3,
            name:'Puma Shoes',
            price:2102,
            coupon:'no',
            instock:'no',
            completed:false

    
        },
        {
            id: 4,
            uid:4,
            name:'Reebok Shoes',
            price:2103,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 5,
            uid:5,
            name:'Asics Shoes',
            price:2105,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 6,
            uid:6,
            name:'OnePlus 5T',
            price:2100,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 7,
            uid:7,
            name:'MI A1',
            price:2100,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 8,
            uid:8,
            name:'MI T-Shirt',
            price:2200,
            coupon:'no',
            instock:'yes',
            completed:false

    
        }
       

    ])
    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    const [filteredData,setFilteredData] = useState([])
    
    useEffect(() => {
        setFilteredData(
            data.filter((item)=>{
                return item.name.toLowerCase().includes(searchText.toLowerCase())
            })
        )
    }, [searchText,data])


    const handleChange=(id)=>{
        const upDatedData = data.map(item=>{
            if(item.id===id){
                item.completed=!item.completed
            }
            return item
        })
        setData(upDatedData);
        

    }

     const deleteHandler=()=>{
        const filteredData = data.filter(item=>item.completed===false);
        setData(filteredData);
    }

    const resetHandler=()=>{
        
        const resetData = data.map(item=>{
            if(item.completed===true){
                console.log("resetting")
                item.completed=false
            }
            return item;
        });
        setData(resetData);
        
    }


    return (
        <div className="container mt-3">
            <table className="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">
          Name<br/>
          <input type="text" className="mt-2" placeholder="search" onChange={e=>setSearchText(e.target.value)} />
      
      </th>
      <th scope="col">Price</th>
      <th scope="col">Coupon</th>
      <th scope="col">In Stock</th>
      
    </tr>
  </thead>
  <tbody>
    {filteredData && filteredData.map(({ id,uid,name,price,coupon,instock,completed })=>( <tr style={completed?selectedStyle:null} key={id}>
      <th  scope="row">
      <div className="custom-control custom-checkbox">
  <input type="checkbox" checked={completed} onChange={()=>handleChange(id)} className="custom-control-input" id={id}/>
  <label  className="custom-control-label" htmlFor={id}></label>
</div>
      </th>
    <td>{uid}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>
        {coupon}
    </td>
    <td>{instock}</td>
      
    </tr>
    ))}
  </tbody>
</table>

        <div className="container mt-2">
        <Button handleClick={deleteHandler}>Delete</Button>            
        <Button reset handleClick={resetHandler}>Reset</Button>            
        
        </div>
        
        </div>
    )
}

export default Table;
