interface User {
	isActive: boolean;
	hasAccess: boolean;
}

function checkUser(user: User) {
	if (user.isActive) {
		if (user.hasAccess) {
			console.log("User has access");
		} else {
			console.log("User doesn't have access");
		}
	} else {
		console.log("User is not active");
	}
}

// function checkUser(user: User) {
// 	if (!user.isActive) {
// 		console.log("User is not active");
// 		return;
// 	}

// 	if (!user.hasAccess) {
// 		console.log("User doesn't have access");
// 		return;
// 	}

// 	console.log("User has access");
// }

// Example users
const alice: User = { isActive: true, hasAccess: true };
const bob: User = { isActive: true, hasAccess: false };
const charlie: User = { isActive: false, hasAccess: true };

// Usage
checkUser(alice);    // "User has access"
checkUser(bob);      // "User doesn't have access"
checkUser(charlie);  // "User is not active"





// backend example
/* import { Request, Response, NextFunction } from "express";

interface User {
	id: string;
	isActive: boolean;
	hasAccess: boolean;
}

interface AuthenticatedRequest extends Request {
	user: User;
}

// Middleware
function auth(req: Request, res: Response, next: NextFunction) {
	const token = req.headers.authorization;

	const user = verifyToken(token); 

	if (!user) {
		return res.status(401).json({ message: "Not authenticated" });
	}


	(req as AuthenticatedRequest).user = user;

	next();
}


function verifyToken(token?: string): User | null {
	return null; 
}
 */