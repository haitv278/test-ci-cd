const divTag = document.getElementById("react-id");

// ReactDOM.render(React.createElement(
//     'button',
//     null,
//     'click me by reactjs'
// ), divTag)
const buttonName = <span>button by span</span>;
const name="button 4"
class Component extends React.Component {
    constructor() {
        super();
        this.state= {age: 26, name: "button"};
    }

    componentDidMount() {
        console.log("log by componentDidMount")
    }
    componentDidUpdate() {
        console.log("updating....");
    }
    componentWillUnmount() {
        console.log("detroying....");
    }
    render() {
        return (
            <div>
            <button >{this.state.name}</button>
            {this.state.age}
            <button onClick={() => {
                this.setState({name: "button 2", age: 0})
            }}>change name button</button>
            <div> area Component</div>
            {this.state.name > 0 && <Component2 propName={this.state.name} />}
            </div>
        )
    }
}

const User = (props) => {
    const [age,setAge] = React.useState(props.age)
    return (
        <div key={props.name}>name: {props.name}, age: <input value={age}
        
        /> {props.age}<span></span></div>
    )
}
function Component2(props) {
    const [users, setUsers] = React.useState([
        {name: "user 1", age: 1},
        {name: "user 2", age: 2},
        {name: "user 3", age: 3}
    ]);

    React.useEffect(() => {
        console.log("log by useEffect")
        console.log(props.propsName);
        return () => {
            console.log("detroy in Component2")
        }
    })
    return (
        <div>
            here is component2
            <span>{users.map((user,index) => {
                return (
                    <User key={user.name} name={user.name} age={user.age} />
                )
            })}</span>
            <button
            onClick={() => {
                users.pop();
                users.push({name:"user 4", age:4})
                setUsers([...users])
            }}
            >add user</button>
        </div>
    )
}
// props: {name: "button 3"}
ReactDOM.render(<div>
    <Component />
    </div>, divTag);







