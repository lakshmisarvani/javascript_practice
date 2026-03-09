const user={
    sname: "sarvani",
    address:{
        city: "coimbatore"
    }
};
const c=structuredClone(user);
c.address.city="hyderabad";
console.log(c.address.city);
console.log(user.address.city);