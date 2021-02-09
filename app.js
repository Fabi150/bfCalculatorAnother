
var densityToBf = function(density){
    return (((4.95/density) - 4.5) * 100)
}

var kgToLbs = function (kg){
    return kg * 2.20462
}

var yuhasz = function () {

    var skinfoldsum;

    if (this.sex === "male"){

        if (this.method === "student"){
            skinfoldsum = this.triceps + this.subscapular + 
                    this.supraspinale + this.abdominal + 
                    this.thigh;

            return (0.1051 * skinfoldsum) + 2.585
        }

        if (this.method === "nhl"){
            skinfoldum = this.chest + this.triceps + 
                        this.subscapular + this.suprailiac + 
                        this.abdominal + this.thigh;
            return (0.097 * skinfoldum) + 3.64
        }

    }

    if (this.sex === "female"){
        skinfoldsum = this.triceps + this.subscapular + 
                    this.supraspinale + this.abdominal + 
                    this.thigh;
        
        return (0.1548 * skinfoldsum) + 3.580


    }

}

var parillo = function (){
    var skinfoldsum = this.chest + this.abdominal + this.thigh + this. biceps +
                    this.triceps + this.subscapular + this.suprailiac + this.lowerBack +
                    this.calf;
    return skinfoldsum * 27 / kgToLbs(this.weight)
}

var slaughterLoman = function () {
    if (this.sex === "male") {
        return (0.735 * (this.triceps + this.calf) + 1)
    }

    if (this.sex === "female") {
        return (0.610 * (this.triceps + this.calf) + 5.1)
    }
}

var salon = function (){
    var density;

    if (this.sex === "male"){
        density = (1.1043 - (0.001327 * this.thigh) - 
        (0.00131 * this.subscapular));

        return densityToBf(density)
    }

    if (this.sex === "female"){
        density = (1.0743 - (0.0008 * this.iliac) - 
        (0.00131 * this.subscapular));

        return densityToBf(density)
    }


}

var durianWomersly = function (){

        var males = [1.1533, 1.1620, 1.1631, 1.1422, 1.1620, 1.1751];
        var females = [1.1369, 1.1549, 1.1599, 1.1423, 1.1333, 1.1339];
        var maleX = [0.0643, 0.0630, 0.0632, 0.0544, 0.0700, 0.0779];
        var femaleX = [0.0598, 0.0678, 0.0717, 0.0632, 0.0612, 0.0645];

        var skinfoldsum = Math.log(this.triceps + this.biceps + this.subscapular + this.suprailiac);

        getBF = function (sexArr, sexArrX, index){
            return densityToBf( sexArr[index] - (sexArrX[index] * Math.log(skinfoldsum)))
        }

        if (this.sex === "male"){
            return this.age < 17 ? getBF(males, maleX, 0)
                : (this.aage >= 17 && this.age <= 19) ? getBF(males, maleX, 1)
                : (this.aage >= 20 && this.age <= 29) ? getBF(males, maleX, 2)
                : (this.aage >= 30 && this.age <= 39) ? getBF(males, maleX, 3)
                : (this.aage >= 40 && this.age <= 49) ? getBF(males, maleX, 4)
                : (this.aage >= 50) ? getBF(males, maleX, 5)
                : getBF(males, maleX, 2)

        }

        if (this.sex === "female"){
            return this.age < 17 ? getBF(females, femaleX, 0)
                : (this.aage >= 17 && this.age <= 19) ? getBF(females, femaleX, 1)
                : (this.aage >= 20 && this.age <= 29) ? getBF(females, femaleX, 2)
                : (this.aage >= 30 && this.age <= 39) ? getBF(females, femaleX, 3)
                : (this.aage >= 40 && this.age <= 49) ? getBF(females, femaleX, 4)
                : (this.aage >= 50) ? getBF(females, femaleX, 5)
                : getBF(females, femaleX, 2)

        }
        

}


var jacksonPollock = function (){
        var skinfoldsum;
        var density;

        if (this.method === "4site" && this.sex === "male"){
            // runn Mmale 4-Site Skinfold Equation (for calculating % body fat)
            skinfoldsum = this.abdominal + this.triceps +this.thigh + this.suprailiac;
            return ((0.29288 * skinfoldsum) - 
                    (0.005 * (skinfoldsum * skinfoldsum)) +
                    (0.15845 * this.age) - 5.76377);
        }

        if (this.method === "4site" && this.sex === "female"){
            // runn Female 4-Site Skinfold Equation (for calculating % body fat)
            console.log("wywolana");
            skinfoldsum = this.abdominal + this.triceps + this.thigh + this.suprailiac;
            return ((0.29669 * skinfoldsum) - 
                    (0.00043 * skinfoldsum *skinfoldsum) +
                    (0.02963 * this.age) + 1.4072);
        }

        if (this.method === "3site" && this.sex === "female"){
            // runn Female 3-Site Skinfold Equation (for calculating % body fat)
            skinfoldsum = this.abdominal + this.triceps + this.suprailiac;
            return ((0.41562 * skinfoldsum) - (0.00112 * skinfoldsum * skinfoldsum) + 
            (0.03661 * this.age) + 4.03653);
        }

        if (this.method === "3siteGirthDensity" && this.sex === "male"){
            // runn Mmale 3-Site Girth/Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.chest + this.abdomen + this. thigh
            density = 1.0990750 - (0.0008209 * skinfoldsum) +
                        (0.0000026 * skinfoldsum * skinfoldsum) -
                        (0.0002017 * this.age) - (0.005675 * this.waist / 100) +
                        (0.018586 * this.forearm / 100)
            return densityToBf(density);
        }

        if (this.method === "3siteGirthDensity" && this.sex === "female"){
            // runn Female 3-Site Girth/Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.triceps + this.thigh + this.suprailiac;
            density = ((1.1470292 - 0.0009376*skinfoldsum) + 
                    (0.0000030 * skinfoldsum * skinfoldsum) - 
                    (0.0001156 * this.age) - (0.0005839 * this.gluteal));
            return densityToBf(density);
        }

        if (this.method === "3siteDensity" && this.sex === "male"){
            // runn Mmale 3-Site Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.chest + this.abdomen + this.thigh;
            density = (1.1125025 - (0.0013125 * skinfoldsum) + 
                    (0.0000016 * skinfoldsum * skinfoldsum) - 
                    (0.0002574 * this.age));        
            return densityToBf(density);
        }

        if (this.method === "3siteDensity" && this.sex === "female"){
            // runn Female 3-Site Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.triceps + this.thigh + this.suprailiac;
            density = (1.0994921 - (0.0009929 * skinfoldsum) +
                    (0.0000023 * skinfoldsum * skinfoldsum) - 
                    (0.0001392 * this.age));
            return densityToBf(density);
        }

        if (this.method === "3siteDensitySecond" && this.sex === "male"){
            // runn Mmale 3-Site second Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.chest + this.abdomen + this.thigh;
            density = (1.10938 - (0.0008267 * skinfoldsum) + 
                    (0.0000016 * skinfoldsum * skinfoldsum) - 
                    (0.0002574 * this.age));

            return densityToBf(density);
        }

        if (this.method === "7siteDensity" && this.sex === "male"){
            // runn Mmale 7-Site  Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.chest + this.axilla + this.triceps + 
                        this.subscapular + this.abdominal +
                        this.suprailiac + this.thigh;
            density = (1.112 - (0.00043499 * skinfoldsum) + 
                    (0.00000055 * skinfoldsum * skinfoldsum) -
                    (0.00028826 * this.age));
            return densityToBf(density);
        }

        if (this.method === "7siteDensity" && this.sex === "female"){
            // runn Fmale 7-Site  Skinfold Equation density (for calculating % body fat)
            skinfoldsum = this.chest + this. axilla + this.triceps + this. subscapular +
                        this. abdominal + this.suprailiac + this.thigh;
            density = (1.097 - (0.00046971 * skinfoldsum) +
                    (0.00000056 * skinfoldsum * skinfoldsum) -
                    (0.00012828 * this.age));
            return densityToBf(density);
        }

    }
    var mesurment = {

        method: 'nhl',
        sex: 'male', 
        age: 66,
        weight: 77,

        abdominal: 11, 
        triceps: 7, 
        thigh: 9, 
        suprailiac: 5,
        chest: 5, 
        abdomen: 11, 
        subscapular: 4, 
        axilla: 9,
        iliac: 9,
        biceps: 5,
        calf: 5,
        lowerBack: 18,
        supraspinale: 17,

        waist: 81, 
        forearm: 29, 
        gluteal: 77
    }
    var mesurment1 = {

        method: '3siteDensity',
        sex: 'female', 
        age: 22,
        weight: 77,

        abdominal: 12, 
        triceps: 6, 
        thigh: 9, 
        suprailiac: 7,
        chest: 9, 
        abdomen: 5, 
        subscapular: 14, 
        axilla: 8,
        iliac: 6,
        biceps: 4,
        calf: 6,
        lowerBack: 12,
        supraspinale: 11,

        waist: 55, 
        forearm: 22, 
        gluteal: 90
    }

    
    console.log(jacksonPollock.call(mesurment));
    console.log(jacksonPollock.call(mesurment1));
    console.log ("---------------------------------")
    console.log(salon.call(mesurment));
    console.log(salon.call(mesurment1));
    console.log ("---------------------------------")
    console.log(durianWomersly.call(mesurment));
    console.log(durianWomersly.call(mesurment1));
    console.log ("---------------------------------")
    console.log(slaughterLoman.call(mesurment));
    console.log(slaughterLoman.call(mesurment1));
    console.log ("---------------------------------")
    console.log(parillo.call(mesurment));
    console.log(parillo.call(mesurment1));
    console.log ("---------------------------------")
    console.log(yuhasz.call(mesurment));
    console.log(yuhasz.call(mesurment1));
  