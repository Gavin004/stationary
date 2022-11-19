import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import axios from "axios";

export  const ADD= ()=>
{

    const initialValues = 
    {
        productname:"", 
        category: "",
        quantity: "",
        price: "",
    };
     
    
    const [values, setValues] = useState(initialValues);
      
        const handleChange = (e) =>
        {
          const  value  = e.target.value;
          //console.log(values);
          setValues({ 
            ...values,
            [e.target.name]: value
          });
        };
      



    const handleSubmit=(event)=> {

        const formdata =
        {
           
            productname:values.productname,
            category: values.category,
            quality: values.quality,
            price: values.price,
        }
        axios.post("http://localhost:3001/add",formdata)
        .then(()=>{
            
            alert('Your details has been SEND successfully');
        })
       
        event.preventDefault();
    }

    return (
        <><br></br><br></br>
        <h5>
        <i>
        <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6" style={{backgroundColor:"rgb(174, 241, 240)",borderRadius:"20px"}}>
            
            <Form className="form-horizontal"  onSubmit={handleSubmit} style={{marginLeft:"60px"}}><br></br>

                
                <Form.Group >   <label><pre>ENTER PRODUCT NAME:<br></br><br></br>
                <Form.Control input type="text" name="productname" value={values.productname} onChange={handleChange} /></pre>
                </label></Form.Group><br></br><br></br>

                 

                <label><pre>SELECT CATEGORY:
                <select name="category" value={values.category} onChange={handleChange}>
                <option value="">**SELECT**</option>
                <option value="BOOKS">BOOKS</option>
                <option value="NOTES">NOTES</option>
                <option value="CALENDERS">CALENDERS</option>
                <option value="CALCULATOR">CALCULATOR</option>
                <option value="PEN">PEN</option>
                <option value="PENCIL">PENCIL</option>
                <option value="PAPER">PAPER</option>
                </select> </pre>
                </label><br></br><br></br>

                <Form.Group >   <label><pre>QUANTITY:<br></br><br></br>
                < Form.Control input name="quality" type="number" value={values.quality} onChange={handleChange} style={{width:"300px"}} placeholder="no.of items"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >    <label><pre>PRICE:<br></br><br></br>
                <Form.Control input name="price" type="text" value={values.price} onChange={handleChange}placeholder="enter amount"/></pre>
                </label></Form.Group><br></br>
                <center>
                <Button variant="danger" type="submit">
                    Submit
                </Button><br></br><br></br>
                </center>
               
            </Form>
            
        </div>   
        <div class="col-sm-3"></div> 
        </div>
        <br></br>
        </i></h5>
        </>
    )
    
}

export default ADD;