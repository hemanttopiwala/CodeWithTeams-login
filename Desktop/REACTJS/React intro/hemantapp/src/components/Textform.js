import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState("Enter your text here");
    //text="new state";///wrong you cannot set it directly
    //setText("New text");correct way to change the state


    const handleupClick=()=>{
        //console.log("Textarea is clicked");

        let temp=text.toUpperCase();


        setText(temp);
    }


    const handleOnChange=(event)=>{
        //console.log("Textarea is clicked");
        setText(event.target.value);
    }

    
    return (

        

        <div>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>


                <button className="btn btn-primary" onClick={handleupClick}>Convert to Uppercase</button>
            
        </div>
    )
}
