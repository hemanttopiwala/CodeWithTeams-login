import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    //text="new state";///wrong you cannot set it directly
    //setText("New text");correct way to change the state


    const handleupClick=()=>{
        //console.log("Textarea is clicked");

        let temp=text.toUpperCase();


        setText(temp);
    }

    const handleLoClick=()=>{
        //console.log("Textarea is clicked");

        let temp=text.toLowerCase();


        setText(temp);
    }


    const handleOnChange=(event)=>{
        //console.log("Textarea is clicked");
        setText(event.target.value);
    }

    
    return (

        <>

            <div className="container">

                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        
                        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    </div>


                    <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                
            </div>

            <div className="container my-3">
                    <h1>Paragraph Summary</h1>
                    <p >{text.split(" ").length} words , {text.length} characters</p>
                    <p>{0.008*(text.split(" ").length)} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>

            </div>
        </>
    )
}
