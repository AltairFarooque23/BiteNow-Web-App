
export function TokenAuthorizationMiddleware(req,res,next) {
        // get token from cookie header
        const token = req.cookie.authToken;
        if (!token) {
            // If no token, send 401 Unauthorized response
            return res.status(401).send('Access Denied');
        }
        try {
            // Verify token
            const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
            
            // If verified, save user ID to request and proceed to route handler
            req.user = verified;
            next();
          } catch (err) {
            // If verification fails, send 400 Bad Request response
            res.status(400).send('Invalid Token');
        }
}