"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularhomepage_1 = require("../pages/angularhomepage");
const banking_1 = require("../pages/banking");
describe('protractor start', () => {
    it('should behave...', () => __awaiter(void 0, void 0, void 0, function* () {
        let ahp = new angularhomepage_1.angularHomepage();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield ahp.angularpage.click();
        let Ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(Ec.visibilityOf(ahp.searchBox), 8000);
        yield ahp.searchBox.sendKeys('sandeep');
    }));
    it('banking application', () => __awaiter(void 0, void 0, void 0, function* () {
        let bank = new banking_1.Bank();
        yield protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        yield bank.login.click();
        yield bank.option.click();
        yield bank.loginuser.click();
        yield expect(bank.user.getText()).toEqual("Hermoine Granger");
    }));
    fit('banking application', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        for (let i = 0; i < 4; i++) {
            protractor_1.element.all(protractor_1.by.css('div:nth-child(9) input')).get(i).click().then(() => { console.log(i); });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNmaWxlcy9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZEO0FBQzdELDhEQUF3RDtBQUN4RCw4Q0FBd0M7QUFDeEMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUM5QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO1FBRXRDLElBQUksR0FBRyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxFQUFFLEdBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNqRCxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLElBQUksSUFBSSxHQUFDLElBQUksY0FBSSxFQUFFLENBQUM7UUFFcEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUUxRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ1gsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQVMsRUFBRTtRQUNyQyxvQkFBTyxDQUFDLHFCQUFxQixHQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDbkUsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNoQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtTQUMxRjtJQUlMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyJ9