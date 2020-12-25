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
                        className={this.props.id ? 'header-filter__id active' : 'header-filter__id'}
                        to={{
                            pathname: `${replaceStringForId(location.pathname)}`,
                            search: this.state.text.split(' ').join(' ')
                        }}
                        onClick={() => this.switchId()}>ID</Link>
                    <Link
                        className={this.props.age ? 'header-filter__age active' : 'header-filter__age'}
                        to={{
                            pathname: `${replaceStringForAge(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchAge()}>{this.props.english ? 'AGE' : 'года'}</Link>
                </div>
                <div className='header-filter'>
                    <Link
                        className={this.props.increase ? 'header-filter__increase active' : 'header-filter__increase'}
                        to={{
                            pathname: `${replaceStringForIncrease(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchIncrease()}>{this.props.english ? 'Increase' : 'По возрастанию'}</Link>
                    <Link
                        className={this.props.decrease ? 'header-filter__decrease active' : 'header-filter__decrease'}
                        to={{
                            pathname: `${replaceStringForDecrease(location.pathname)}`,
                            search: this.state.text
                        }}
                        onClick={() => this.switchDecrease()}>{this.props.english ? 'Decrease' : 'По убыванию'}</Link>
                </div>
                <div className='header-filter'>
                    <Link
                        className={this.props.location.pathname.includes('preview') ? 'header-filter__preview active' : 'header-filter__preview'}
                        to={{
                            pathname: `${replaceStringForPreview(location.pathname)}`,
                            search: this.state.text
                        }}>{this.props.english ? 'preview' : 'просмотр'}</Link>
                    <Link
                        className={this.props.location.pathname.includes('table')
                            || this.props.location.pathname === '/' ? 'header-filter__table active' : 'header-filter__table'}
                        to={{
                            pathname: `${replaceStringForTable(location.pathname)}`,
                            search: this.state.text
                        }}>{this.props.english ? 'table' : 'таблица'}</Link>
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
                        }}>{this.props.english ? 'Search' : 'поиск'}</Link>
                </div>
                <div className='switch-language'>
                    <input type='checkbox' className='russian' checked={this.props.russian} onChange={() => this.onChangeLanguages()} />
                    <label>{this.props.english ? 'Russian' : 'Русский'}</label>
                    <input type='checkbox' className='english' checked={this.props.english} onChange={() => this.onChangeLanguages()} />
                    <label>{this.props.english ? 'English' : 'Английский'}</label>
                </div>
            </header>
        )
    }
};

export default Head