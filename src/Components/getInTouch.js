import React,{useState , useEffect} from 'react';
import axios from 'axios';

const ContactForm =() => {
    const [name,setName]=useState('');
    const [email,setEmail] =useState('');
    const [phone,setPhone] = useState(0);
    const [mess,setMess] = useState('');
    // const[contact,setContact] = useState([]);
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/contact/").then((res)=>{
          
    //         setContact(res.data);
    //     },[]);
    // });
   
    const add = (e)=>{
            e.preventDefault();
                let cont = {name:name,email:email,phone:phone,mess:mess};
                fetch("http://localhost:5000/contacts",{
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(cont)
                })
                console.log(cont);
         
    }
    return (<>
    <form>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        <br/>
        <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input type="text" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        <br/>
        <input type="text" name="message" id="message" value={mess} onChange={e => setMess(e.target.value)}/>
        <br/>
        <input type="submit" value="Add Employee" onClick={add}/>
       
    </form>
    </>);
}

export default ContactForm;