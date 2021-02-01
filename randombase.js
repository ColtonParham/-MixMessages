//Start, with the object which holds three different methods/arrays with 4 elements each that are chosed at random from the random number generator. 
const messages = {
  messageBeg:[
    'Welcome Bud', 
    'How are you doing',
    'There is an imposter among us',
    'Death note is an amazing anime'
  ],
  messageMiddle:[
    'You are the moon', 
    'Riding in the ritz car', 
    'Get in the zone then.', 
    'Vibing in the ritz car?'
  ],
  messageEnding:[
    'This is the end of things',
    'It all keeps on tumbling down',
    'When will the pain end',
    'What does it all mean'
  ] 
}

//Assigning the random whole number to a function. 
function randomIndex (numbo){
  return Math.floor(Math.random()* numbo)
}

//getting the messages

const messageOne = `We have reasons to believe that: ${messages.messageBeg[randomIndex(messages.messageBeg.length)]}`
const messageTwo = `And our associate here says: ${messages.messageMiddle[randomIndex(messages.messageMiddle.length)]}`
const messageThree = `And has a very strong belief stating: ${messages.messageEnding[randomIndex(messages.messageEnding.length)]}`

//Loging to the console the results of the messages. 
console.log(messageOne, '\n', messageTwo, '\n', messageThree)