# Rejected async handlers

Contract: the synthetic upstream failure must produce a JSON 503 response.

The Express 4 example wraps its async handler and forwards rejected promises to
next(error). Express 5 forwards rejected async handlers automatically, so that
wrapper is removed. Error middleware still needs four parameters, even if some
are unused, and must be registered after the route.

Test the error response as well as successful routes. In a real application,
translate internal errors to public messages instead of returning arbitrary error
details. These examples return only a fixed synthetic message.
