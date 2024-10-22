function compress(chars: string[]): number {
    let read = 0;
    let write = 0;
  
    while (read < chars.length) { 
      let char = chars[read];
      let count = 0;
  
      while ( read < chars.length &&
              chars[read] === char) {
        read++;
        count++;
      }
  
      chars[write++] = char;
  
      if (count > 1) {
        const countStr = count.toString();
        for (let digit of countStr) {
          chars[write++] = digit;
        }
      }
    }
  
    chars.length = write;
  
    return write;
  }