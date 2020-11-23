const findXAndReplace = (string) => `Tryber ${string} aqui!`;

const fiveSkills = ['GitHub', 'JS', 'CSS', 'jQuery', 'Bootstrap'];

const concatenate = (stringReturned) => `${stringReturned}
                                        Minhas 5 habilidades:
                                        ${fiveSkills[0]}
                                        ${fiveSkills[1]}
                                        ${fiveSkills[2]}
                                        ${fiveSkills[3]}
                                        ${fiveSkills[4]}`;
console.log(concatenate(findXAndReplace()));
