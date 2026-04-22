const bankAccount = {
    ownerName: "Artem",
    accountNumber:"444-555-666-777",
    balance: 1000,
    deposit(newMany) {
        this.balance += newMany
        console.log(`Ваш рахунок поповнений на ${newMany},ваш баланс:${this.balance}`);
        
    },

    withdraw(minusMany) {
        if (minusMany <= this.balance) {
            this.balance += minusMany
            console.log(`З вашого рахунку знято ${minusMany},ваш балнс:${this.balance}`);
        } else {
            console.log("Не достатньо грошей на рахунку");
            
        }
    },
}

const result = confirm("Бажаете поповнети рахунок?")
if (result) {
    const emaunt = Number(prompt("Внесіть гроші"))
    bankAccount.deposit(emaunt)
} else {
    const emaunt = Number(prompt("Бажаете зняти гроші?"))
    bankAccount.withdraw(emaunt)
}
console.log(result);

const weather = {
  temperature: null,
  humidity: 60,
  windSpeed: 10,

  isFreezing: function () {
    return this.temperature < 0;
  }
};

weather.temperature = Number(prompt("Введіть температуру:"));

if (weather.isFreezing()) {
  console.log("Температура нижче 0 градусів");
} else {
  console.log("Температура 0 або вище");
}

const user = {
  name: "Ivan",
  email: "ivan@gmail.com",
  password: "12345",

  login: function (inputEmail, inputPassword) {
    return this.email === inputEmail && this.password === inputPassword;
  }
};


const emailInput = prompt("Введіть email:");
const passwordInput = prompt("Введіть пароль:");

if (user.login(emailInput, passwordInput)) {
  console.log("Успішний вхід");
} else {
  console.log("Неправильний email або пароль");
}

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isTop: function () {
    return this.rating > 8;
  }
};

console.log("Фільм:", movie.title);
console.log("Рейтинг:", movie.rating);
console.log("Високий рейтинг:", movie.isTop());
