import { Account } from "./account";
test("can create an empty account", function () {
    var account = Account.create();
    expect(account.active).toBe(false);
    expect(account.address).toBe("");
    expect(account.balance).toBe("");
});
