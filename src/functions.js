import React from 'react';
import Fade from 'react-reveal/Fade';
export let data = require('./data.json');

export function filterList(increase, decrease, id, age, list, location) {
    if(location.search) {
        let filters = [
            el => el.name.toLowerCase() === location.search.slice(1).replace('%20', ' ').trim().toLowerCase(),
            el => el.name.split(' ').reverse().join(' ').toLowerCase() === location.search.slice(1).replace('%20', ' ').trim().toLowerCase()
        ]
        return list.filter(el => filters.some(fn => fn(el)))
    }
    if (id) {
        if (increase) return list.sort((b, a) => b.id - a.id);
        if (decrease) return list.sort((a, b) => b.id - a.id);
    }
    if (age) {
        if (increase) return list.sort((b, a) => b.age - a.age);
        if (decrease) return list.sort((a, b) => b.age - a.age);
    }
    return list
}

export function replaceStringForId(string) {
    if (string.includes('age')) return string.replace('age', 'id');
    if (string.includes('id')) return string;
    if (!string.includes('age')) return string + '/id';
}

export function replaceStringForAge(string) {
    if (string.includes('id')) return string.replace('id', 'age');
    if (string.includes('age')) return string;
    if (!string.includes('id')) return string + '/age';
}

export function replaceStringForIncrease(string) {
    if (string.includes('Decrease')) return string.replace('Decrease', 'Increase');
    if (string.includes('Increase')) return string;
    if (!string.includes('Decrease')) return string + '/Increase';
}

export function replaceStringForDecrease(string) {
    if (string.includes('Increase')) return string.replace('Increase', 'Decrease');
    if (string.includes('Decrease')) return string;
    if (!string.includes('Increase')) return string + '/Decrease';
}

export function replaceStringForPreview(string) {
    if (string.includes('table')) return string.replace('table', 'preview');
    if (string.includes('preview')) return string
    if (!string.includes('preview') && !string.includes('table')) return string + 'preview'
}

export function replaceStringForTable(string) {
    if (string.includes('preview')) return string.replace('preview', 'table');
    if (string.includes('table')) return string
    if (!string.includes('preview') && !string.includes('table')) return string + 'table'
}

export function render(string, element, func, list) {
    if (string.includes('preview')) {
        return  <Fade bottom key={Math.random()}>
                    <li className={element.video ? 'preview play' : 'preview'}>
                        <div className='preview-wrapper-content'>
                            <div className='preview-content'>
                                <div className='preview-content__avatar'
                                    style={{'backgroundImage': `url(/src/img/${element.image}.svg)`}}/>
                                <span>{element.name}</span>
                                <div onClick={() => func(list, element)}>{element.favourite 
                                    ? <img 
                                        className='preview-content__star' 
                                        src="https://img.icons8.com/office/40/000000/filled-star--v1.png"/> 
                                    : <img 
                                        className='preview-content__star' 
                                        src="https://img.icons8.com/ultraviolet/40/000000/filled-star--v1.png"/>}
                                </div>
                            </div>
                            <div className='preview-content bottom'>
                                <span>{element.age + ' age'}</span>
                                <span>{element.phone}</span>
                                <p>{element.phrase}</p>
                            </div>
                        </div>
                        {element.video ? <video 
                                            className='video' 
                                            src={`/src/video/${element.video}.mp4`} 
                                            controls
                                            loop muted='muted'>
                                        </video>
                        : ''}
                    </li>
                </Fade>
    }
    if(string.includes('table') || string === '/') {
        return  <Fade right key={Math.random()}>
                    <li className='table' key={Math.random()}>
                        <div 
                            className='table-content__avatar' 
                            style={{'backgroundImage': `url(/src/img/${element.image}.svg)`}}/>
                            <span className='table-content__name'>{element.name}</span>
                            <span>{element.age + ' age'}</span>
                            <span>{element.phone}</span>
                            <div onClick={() => func(list, element)}>{element.favourite 
                                ? <img 
                                    className='preview-content__star' 
                                    src="https://img.icons8.com/office/40/000000/filled-star--v1.png"/> 
                                : <img 
                                    className='preview-content__star' 
                                    src="https://img.icons8.com/ultraviolet/40/000000/filled-star--v1.png"/>}
                        </div>
                    </li>
                </Fade>
    }
}