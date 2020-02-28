import {Config} from 'protractor';
export let config:Config={
    directConnect:true,
   
    specs:['./specfiles/spec.js'],
    capabilitiies:{
        'browserName':'chrome'
    }

};