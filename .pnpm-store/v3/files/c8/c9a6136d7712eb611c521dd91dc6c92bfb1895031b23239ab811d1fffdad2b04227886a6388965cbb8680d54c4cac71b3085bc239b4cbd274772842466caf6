declare const prependFile: {
  /**
  Synchronously prepend data to a file, creating it if it doesn't exist.
  @param filename The file to prepend the `data` to.
  @param data The data to prepend.
  @example
  ```
  const prependFile = require('prepend-file');

  prependFile.sync('message.txt', 'some data');
  ```
  */
  sync: (filename: string, data: string | Buffer) => void;

  /**
  Prepend data to a file, creating it if it doesn't exist.
  @param filename The file to prepend the `data` to.
  @param data The data to prepend.
  @example
  ```
  const prependFile = require('prepend-file');

  (async () => {
    await prependFile('message.txt', 'some data');
  });
  ```
  */
  (filename: string, data: string | Buffer): Promise<void>;
};

export = prependFile;
