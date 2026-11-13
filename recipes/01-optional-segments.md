# Optional route segments

Contract: /files/readme returns extension:null, while /files/readme.md returns
extension:"md". The URL and response must remain stable during the upgrade.

Express 4: /files/:name.:ext?

Express 5: /files/:name{.:ext}

The optional portion is expressed with braces. Change the route declaration,
then test both the present and absent extension. Do not test only the common path.
The before and after applications implement the same JSON response.
