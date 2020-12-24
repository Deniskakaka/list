import React from 'react';
import { connect } from 'react-redux';
import { getListPeople } from '../redux/main.actions';
import { data, filterList, render } from '../functions';

class Preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chooseFavourite: false,
        }
        this.choosFavorite = this.choosFavorite.bind(this);
    }

    componentDidMount() {
        this.props.get(data)
    }

    componentDidUpdate() {
        document.addEventListener('scroll', () => {
            let array = document.querySelectorAll('.video');
            array.forEach(el => {
                let top = el.getBoundingClientRect().top
                if (Math.floor(top) <= 800 && Math.floor(top) > 0) el.play()
                else el.pause()
            })
        });
    }

    choosFavorite = (list, element) => {
        list.map(i => {
            if (i === element) i.favourite = !element.favourite
        });
        this.props.get(list);
        this.setState({ chooseFavourite: !this.state.choose });
    }

    render() {
        console.log(this.props.loader)
        return (
            <main className="main">
                {this.props.loader
                    ? <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> : ''}
                <ul className="list">
                    {filterList(
                        this.props.increase,
                        this.props.decrease,
                        this.props.id,
                        this.props.age,
                        this.props.list,
                        this.props.location).map((element, index) =>
                            render(
                                this.props.location.pathname,
                                element,
                                this.choosFavorite,
                                this.props.list,
                                this.props.show)
                        )}
                </ul>
            </main>
        )
    }
};

const mapState = state => {
    return {
        list: state.main.listPeople,
        loader: state.main.loader
    }
}

const mapDispatch = {
    get: getListPeople,
}

export default connect(mapState, mapDispatch)(Preview);