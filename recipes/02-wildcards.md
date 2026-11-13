# Named wildcards and parameter shape

Contract: /assets/css/main.css returns {"path":["css","main.css"]}.

Express 4 uses /assets/* and exposes the match as req.params[0], a string.
Express 5 uses /assets/*segments and exposes req.params.segments, an array.

Name the wildcard and normalize the downstream response. This recipe deliberately
requires at least one segment; matching the mount root as well requires a different
route contract and an additional test. Avoid blindly renaming the route without
checking consumers of the matched parameter.
