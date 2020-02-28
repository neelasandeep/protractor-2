import { ElementFinder ,element,by} from "protractor";

export class Bank{
    login:ElementFinder;
    loginuser:ElementFinder;
    option:ElementFinder;
    user:ElementFinder;
    constructor(){
        this.login=element(by.buttonText('Customer Login'));
        this.option=element(by.model('custId')).all(by.tagName('option')).get(1)
        this.loginuser=element(by.buttonText('Login'));
        this.user=element(by.binding('user'));
    }
}