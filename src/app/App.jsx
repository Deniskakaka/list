import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from "react-router";
import List from '../listPeople/List';
import Head from '../head/Head';
import store from '../store';

function App() {
    const [id, setId] = useState(useLocation().pathname.includes('id') ? true : false);
    const [age, setAge] = useState(useLocation().pathname.includes('age') ? true : false);
    const [increase, setIncrease] = useState(useLocation().pathname.includes('Increase') ? true : false);
    const [decrease, setDecrease] = useState(useLocation().pathname.includes('Decrease') ? true : false);
    const [russian, setRussian] = useState(false);
    const [english, setEnglish] = useState(true)
    let location = useLocation();

    return (
        <Provider store={store}>
            <Route exact render={() => <Head
                location={location}
                increase={increase}
                decrease={decrease}
                id={id}
                age={age}
                setId={setId}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
                setAge={setAge}
                english={english}
                russian={russian}
                switchRussian={setRussian}
                switchEnglish={setEnglish} />} />
            <Switch>
                <Route path={location.pathname}
                    render={() => <List id={id} age={age} increase={increase} decrease={decrease} location={location} />} />
            </Switch>
        </Provider>
    )
};

export default App;