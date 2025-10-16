// utlity types

interface User{
    name: string;
    age: number;
    email: string;
}

//partial
const updateUser = (user: Partial<User>) => {
    console.log(user);
}

updateUser({ name: 'Diya' });
updateUser({ email: 'diya@gmial.com' });

type User12 = Partial<User>;

let user123: User12 = {
    name: 'Diya',
    email: 'diya122'
}

//Required
type User123 = Required<User>;

let user1234: User123 = {
    name: 'Diya',
    email: 'diya122',
    age: 13
}

user1234.age = 19

//Read Only
type UserRecord = Readonly<User>;

let usr: UserRecord = {
    name: 'Diya',
    email: 'diya122',
    age: 13
};

// usr.age = 19

//Pick
type UserInfo = Pick<User, 'name' | 'email'>;

const userInfo: UserInfo = {
    name: 'Diya',
    email: 'diya@gmail.com'
    // age: 10
}

//Omit
type UserWihtoutEmail = Omit<User, 'email'>;

const userOmitInfo: UserWihtoutEmail = {
    name: 'Diya',
    // email: 'diya@gmail.com',
    age: 10
}

//Record

type UserRecordInfo = Record<string, number>;

const userRecordInfo: UserRecordInfo = {
    name: 2,
    // emial: 233,
    // age: 334,
}

type Role = 'admin' | 'user' | 'guest';

const userRoles: Record<Role, string> = {
    admin: 'Diya',
    user: 'Prem',
    guest: 'Sujal'
}

console.log(userRoles.admin);
//------------------------

type Stat = 'succes' | 'error' | 'loading';

//Exclued 
type ExcludeError = Exclude<Stat, 'error'>;
const stat1: ExcludeError = 'succes';
const stat2: ExcludeError = 'loading';

//Extract
type ExtractError = Extract<Stat, 'error' | 'loading'>;

const statE: ExtractError = 'error';

//nonNullable
type MayBeUser = string | null | undefined;

type UserNull = NonNullable<MayBeUser>;

const userNull: UserNull = 'prakash';

// Return Type
function getType() {
    return { name: 'Diay', age: 19 };
}

type UserReturnType = ReturnType<typeof getType>;

const userType: UserReturnType = { name: 'Alice', age: 89 };

// Parameters
function updateUserData(name: string, age: number){// i can my its optional
    console.log(`${name} ${age}`);
}

type UserParamType = Parameters<typeof updateUserData>;

const userParama : UserParamType = [ 'hello',  89];

//ConstructorParameters
class UserCData {
    constructor(public name: string, public age: number){}
}

type UserContructParams = ConstructorParameters<typeof UserCData>;

const userCParam: UserContructParams = ['Diya', 28];