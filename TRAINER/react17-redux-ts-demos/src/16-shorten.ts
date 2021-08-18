function shorten(s: string, maxlength: number) {
    if (s.length > maxlength) {
      s = s.slice(0, maxlength - 3) + '...';
    }
    return s;
  }
  
export { shorten };