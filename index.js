#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.underline.bold.blueBright.bgWhiteBright('\t\t********************WELCOME TO WARDAH CURRENCY EXCHANGE**********************************'));
let conversion = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "SR": 0.013,
    }, "USD": {
        "USD": 1,
        "PKR": 278.98,
        "SR": 3.75,
    }, "SR": {
        "USD": 0.27,
        "PKR": 74.39,
        "SR": 1,
    },
};
const answers = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: chalk.redBright.bold("Select your Currency"),
        choices: ["PKR", "USD", "SR"],
    }, {
        type: "list",
        name: "to",
        message: chalk.yellowBright.bold("Select Conversion Currency"),
        choices: ["PKR", "USD", "SR"],
    }, {
        type: "number",
        name: "amount",
        message: chalk.blueBright.bold("Enter amount you want to convert"),
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    const result = conversion[from][to] * amount;
    console.log(chalk.underline.overline.bold.greenBright(`\t\tYour Conversion Amount ${chalk.bgMagentaBright(from)} is converted in ${chalk.bgMagentaBright(to)} and Amount is: ${chalk.bgMagentaBright(result)} in ${chalk.bgMagentaBright(to)} `));
}
else {
    console.log(chalk.redBright.bold("\t\tPlease enter valid input"));
}
