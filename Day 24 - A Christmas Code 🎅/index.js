import { codedMessage } from './codedMessage.js'
const decodeMessage = (binaryArray) => {
  return binaryArray
    .map((binary) => String.fromCharCode(parseInt(binary, 2)))
    .join('');
};

const decodedMessage = decodeMessage(codedMessage);
console.log(decodedMessage);

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/ 