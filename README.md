# Memer-guru

Trying to Publish an NPM Package that will provide with random reddit memes link on each callback

The package uses asyncronous callbacks from rapidAPi meme apis

use it inside any image src to get the meme

# Usage
- Import the package using  ```npm install @yashmunjal/memer-guru```
The package returns a promise with an img tag which can be resolved as
        ```
        import meme from "../index.js";
            meme.then((e) => {
                //Your work
            });
         ```

 