import "../App.css";

function Introduction(props) {
  return (
    <div>
      <h1>INTRODUCTION</h1>
      <p>halo nama saya adalah: {props.name}</p>
    </div>
  );
}

export default Introduction;
