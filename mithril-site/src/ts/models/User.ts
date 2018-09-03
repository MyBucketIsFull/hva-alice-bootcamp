/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */

import m from 'mithril';

/**
 * @author H.J.M van der Heijden
 */
export class User {
    public list = [];
    constructor(){ 
        m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then((result : any) => {
            
           this.list = result.data
        })
    }
}
