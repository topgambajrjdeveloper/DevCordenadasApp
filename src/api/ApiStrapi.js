import React from 'react';
import { API_HOST, API_GITHUB } from '../constants/apiUrl'

export function getStrapiApiAbout() {
    const url = `${API_HOST}/about`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}


export function getStrapiApiJobs() {
    const url = `${API_HOST}/jobs?_sort=createdAt:DESC&_limit=100`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}

export function getStrapiApiProjects() {
    const url = `${API_HOST}/projects?_sort=createdAt:DESC&_limit=100`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}

export function getStrapiApiAdmin() {
    const url = `${API_HOST}/users`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}




export function getStrapiApiBlog() {
    const url = `${API_HOST}/blogs?_sort=createdAt:DESC&_limit=100`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}

export function getGithubRepoTopgambajrjdeveloper() {
    const url = `${API_GITHUB}/repos`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
}