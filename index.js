import _ from 'lodash';

let users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 34 }
];

let sortedUsers = _.sortBy(users, [function (o) { return o.age; }]);
console.log(sortedUsers);
