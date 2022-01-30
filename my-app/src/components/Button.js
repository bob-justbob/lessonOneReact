
export default function Button(props) {

    function btnClicked(){
  
        alert('form is submitt');
      }

    return (
        <button onClick={btnClicked} className="btn">{props.text}</button>
    )
}