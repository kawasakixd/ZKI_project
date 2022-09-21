import { Route } from 'react-router-dom';

function ButtonRoute(props) {
    return(
        <Route path={"/lb" + props.id} element={<div>{"lb" + props.id}</div>} />
    );
}

export default ButtonRoute;
