import React from 'react';
import { Link } from 'react-router-dom';
import {
    replaceStringForId,
    replaceStringForAge,
    replaceStringForIncrease,
    replaceStringForDecrease,
    replaceStringForPreview,
    replaceStringForTable
} from '../functions';

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        this.onChange = this.onChange.bind(this)
    }


    switchId = () => {
        this.props.setId(true)
        this.props.setAge(false)
    }

    switchIncrease = () => {
        this.props.setIncrease(true)
        this.props.setDecrease(false)
    }

    switchDecrease = () => {
        this.props.setDecrease(true)
        this.props.setIncrease(false)
    }

    switchAge = () => {
        this.props.setAge(true)
        this.props.setId(false)
    }

    onChange(event) {
        this.setState({ text: event.target.value })
    }

    onChangeLanguages() {
        if (this.props.english) {
            this.props.switchEnglish(false)
            this.props.switchRussian(true)
        }
        if (!this.props.english) {
            this.props.switchEnglish(true)
            this.props.switchRussian(false)
        }
    }

    render() {
        return (
            <header className='header'>
                <div className='header-filter'>
                    <Link
                        className='header-filter__id'
                        to={{
                            pathname: `${replaceStringForId(location.pathname)}`,
                            search: this.state.text.split(' ').join(' ')
                        }}
                        onClick={() => this.switchId()}>ID</Link>
                    <Link
                        className='header-filter__age'
                        to={{
                            pathname: `${replaceStringForAge(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchAge()}>{this.props.english ? 'AGE' : 'ГОДА'}</Link>
                </div>
                <div className='header-filter'>
                    <Link
                        className='header-filter__increase'
                        to={{
                            pathname: `${replaceStringForIncrease(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchIncrease()}>{this.props.english ? 'Increase' : 'ПО ВОЗРОСТАНИЮ'}</Link>
                    <Link
                        className='header-filter__decrease'
                        to={{
                            pathname: `${replaceStringForDecrease(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchDecrease()}>{this.props.english ? 'Decrease' : 'ПО УМЕНШЕНИЮ'}</Link>
                </div>
                <div className='header-filter'>
                    <Link
                        className='header-filter__preview'
                        to={{
                            pathname: `${replaceStringForPreview(location.pathname)}`,
                            search: this.state.text
                        }}>{this.props.english ? 'preview' : 'ПРОСМОТР'}</Link>
                    <Link
                        className='header-filter__table'
                        to={{
                            pathname: `${replaceStringForTable(location.pathname)}`,
                            search: this.state.text
                        }}>{this.props.english ? 'table' : 'ТАБЛИЦА'}</Link>
                </div>
                <div className='header-filter name'>
                    <input
                        className='text'
                        type='text'
                        placeholder={this.props.english ? 'Name' : 'Имя'}
                        value={this.state.text} onChange={() => this.onChange(event)}></input>
                    <Link className='header-filter__name'
                        to={{
                            pathname: location.pathname,
                            search: this.state.text
                        }}>{this.props.english ? 'Search' : 'ПОИСК'}</Link>
                </div>
                <div className='switch-language'>
                    <input type='checkbox' className='russian' checked={this.props.russian} onChange={() => this.onChangeLanguages()} />
                    <label>{this.props.english ? 'Russian' : 'РУССКИЙ'}</label>
                    <input type='checkbox' className='english' checked={this.props.english} onChange={() => this.onChangeLanguages()} />
                    <label>{this.props.english ? 'English' : 'АНГЛИЙСКИЙ'}</label>
                </div>
            </header>
        )
    }
};

export default Head