import { ElementFinder ,element,by} from "protractor";

 
 export class angularHomepage{
    angularpage:ElementFinder;
    searchBox:ElementFinder;
    constructor(){
        this.angularpage=element(by.linkText('angular.io'));
        this.searchBox=element(by.css("input[type='search']"));
    }
 }