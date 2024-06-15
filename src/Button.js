
function Button(props){
        console.log(props);
        return (<button type={props.type}>{props.children}</button>);
}

export {Button};