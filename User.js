var User = {
    mane: null,
    sex: null,
    yearOfBirth: null,
    weight: null,
    measurements: null,

    cosntructor: function(name, sex, yearOfBirth, weight){
        this.name = name;
        this.sex = sex;
        this.yearOfBirth = yearOfBirth;
        this.weight = weight;
    },

    getAge: function(){
        return (this.yearOfBirth - Date.prototype.getFullYear);
    },

    setName: function(name){
        this.name = name;
    },

    setSex: function(sex){
        this.sex = sex;
    },

    setYearOfBith: function(yearOfBirth){
        this.yearOfBirth = yearOfBirth;
    },

    setWeight: function(weight){
        this.weight = weight;
    },

    setMeasurements: function(measurements){
+
        this.measurements = measurements;
    }
};
