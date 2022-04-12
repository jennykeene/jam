const jwt = require('jsonwebtoken');

const secret = 'trilogyisdated';
const expiration = '12h';

module.exports = {
    authMiddleware: function({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
            .split(' ').pop().trim();
        }

        // if no token, return request object as is
        if (!token) {
            return req;
        }
        // if the secret that was used with jwt.sign that was with jwt.sign(), the object won't be decoded 
        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return updated request object
        return req;
    },
    // this fx expects user obj & will add that user's name, email, & _id properties to token
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        // token given an expriration date & a secret to sign token with
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};