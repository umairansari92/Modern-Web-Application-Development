let participants = Array.from({ length: 40 }, (_, i) => `Bond ${i + 1}: ${Math.floor(Math.random() * 1000000)}`);
let winners = {
    firstPrize: participants.splice(Math.floor(Math.random() * participants.length), 1),
    secondPrizes: [
        participants.splice(Math.floor(Math.random() * participants.length), 1),
        participants.splice(Math.floor(Math.random() * participants.length), 1),
        participants.splice(Math.floor(Math.random() * participants.length), 1),
    ],
    thirdPrizes: participants
};

console.log('Winners:', winners);
