import React,{useState,useEffect} from 'react'
import Button from './Button'

const Table = () => {
    
    const [searchText,setSearchText] = useState(''); 
    const [data,setData] =useState([
        {
            id: 1,
            uid:1,
            name:'Item 1',
            price:2100,
            coupon:'no',
            instock:'yes',
            completed:false

    
        },
        {
            id: 2,
            uid:2,
            name:'Item 2',
            price:2101,
            coupon:'yes',
            instock:'yes',
            completed:false

    
        },
        {
            id: 3,
            uid:3,
            name:'Item 3',
            price:2102,
            coupon:'no',
            instock:'no',
            completed:false

    
        },
        {
            id: 4,
            uid:4,
            name:'Item 4',
            price:2100,
            coupon:'no',
            instock:'yes',
            completed:false

    
        }
    ])
    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    
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

    const changePrice=(e,id)=>{
        const newData = data.map(item=>{
            if(item.id===id){
                item.price=e.target.value
            }
            return item;
        })
        setData(newData)
    }


    return (
        <div className="container mt-3">
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">
          Name<br/>
          <input type="text" className="mt-2" placeholder="search" />
      
      </th>
      <th scope="col">Price</th>
      <th scope="col">Coupon</th>
      <th scope="col">In Stock</th>
      
    </tr>
  </thead>
  <tbody>
    {data && data.map(({ id,uid,name,price,coupon,instock,completed })=>( <tr key={id}>
      <th scope="row">
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

export default Table
