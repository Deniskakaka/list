import React from 'react';
import { connect } from 'react-redux';
import { getListPeople, video } from '../redux/main.actions';
import { data, filterList, render } from '../functions';
let show = false
class Preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chooseFavourite: false,
        }
        this.choosFavorite = this.choosFavorite.bind(this);
        this.play = this.play.bind(this);
    }

    componentDidMount() {
        this.props.get(data)
    }

    choosFavorite = (list, element) => {
        list.map(i => {
            if (i === element) i.favourite = !element.favourite
        });
        this.props.get(list);
        this.setState({ chooseFavourite: !this.state.choose });
    }

    play(event) {

    }

    render() {
        return (
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
                            this.play,
                            this.props.show)
                    )}
            </ul>
        )
    }
};

const mapState = state => {
    return {
        list: state.main.listPeople,
        show: state.main.show
    }
}

const mapDispatch = {
    get: getListPeople,
    playVideo: video
}

export default connect(mapState, mapDispatch)(Preview);