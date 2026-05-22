import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret_key';

export function singToken(payload:object){
    return jwt.sign(payload, SECRET, {expiresIn:"7d"} );
}

export function verifyToken(token:string){
    try {
        return jwt.verify(token, SECRET) as {id:string, email:string};
    } catch (err) {
        console.error(err);
        return null;
    }
}