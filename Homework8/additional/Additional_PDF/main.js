function userCard (number){
    let logging = function (operationType, credits){
        let obj = {
            operationType : operationType,
            credits : credits,
            operationTime : `${new Date().getDate()}/`
                +`${new Date().getMonth()+1}`
                +`/${new Date().getFullYear()}, `
                + `${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()} `
        }
        card.historyLogs.push(obj);
        return obj
    }
    let card = {
        balance : 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    return {
        getCardOptions: function (){
            return  {
                balance : card.balance,
                transactionLimit: card.transactionLimit,
                historyLogs: card.historyLogs,
                key: card.key
            }
        },
        putCredits: function (cash) {
            logging('putCredits',cash);
            return card.balance += cash;
        },
        takeCredits: function (cash) {
            if (card.balance < cash){
                console.error('недостатньо коштів')
            }else if (card.transactionLimit < cash){
                console.error('перевищує ліміт')
            }else {
                card.balance -= cash;
                logging('takeCredits',cash);
            }
        },
        setTransactionLimit: function (limit) {
            card.transactionLimit = limit;
            logging('setTransactionLimit',limit);
        },
        transferCredits: function (cash, cards) {
            if (card.balance < cash){
                console.error('замало грошей')
            }else if(card.transactionLimit < cash){
                console.error('перевищили ліміт')
            }else {
                card.balance -= cash + (cash * 0.005);
                cards.putCredits(cash);
                logging('transferCredits',cash);
            }
        }
    }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.addCard = function (n) {
            let newCard = userCard(n);
            this.cards.push(newCard);
            return newCard;
        }
        this.getCardByKey = function (number) {
            let element;
            let arr = this.cards
            for (let arrElement of arr) {
                if (arrElement.getCardOptions().key === number){
                    element = arrElement;
                }
            }return element;
        };
    }
}

let user = new UserAccount('Bob');
user.addCard(1);
user.addCard(2);
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500)
card1.setTransactionLimit(800);
card1.transferCredits(200, card2);

card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(user);