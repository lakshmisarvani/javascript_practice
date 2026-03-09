const user={
    sname :"sarvani",
    address:{
        city : "coimbatore"
    }

};

const c={... user};
c.address.city="hyderabad";
console.log(u.address.city);
