export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true; // this line should not be ignored
      const task2 = false; // // this line should not be ignored
    }
  
    return [task, task2];
  }
  