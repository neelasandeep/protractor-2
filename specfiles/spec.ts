import { browser, protractor, element,by } from 'protractor';
import {angularHomepage} from '../pages/angularhomepage'
import { Bank } from '../pages/banking';
describe('protractor start', () => {
    it('should behave...', async () => {
        
let ahp = new angularHomepage();
await browser.get('https://angularjs.org/');
await ahp.angularpage.click();
let Ec=protractor.ExpectedConditions;
browser.wait(Ec.visibilityOf(ahp.searchBox),8000)
await ahp.searchBox.sendKeys('sandeep');
    });

 
    it('banking application', async () => {
        let bank=new Bank();
  
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await bank.login.click();
        await bank.option.click();
        await bank.loginuser.click();
        await expect(bank.user.getText()).toEqual("Hermoine Granger");
     
            });
    fit('banking application', async () => {
     browser.ignoreSynchronization=true;
        await browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        for(let i=0;i<4;i++){
            element.all(by.css('div:nth-child(9) input')).get(i).click().then(()=>{console.log(i)})
        }
            
      

    });
           
});
