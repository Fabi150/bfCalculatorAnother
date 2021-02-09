var Measurement = {
    method: null,
    date: null,
    user: null,
    weight: this,
    abdominal: null,
    triceps: null,
    thigh: null,
    suprailiac: null,
    chest: null,
    abdomen: null,
    subscapular: null,
    axilla: null,
    iliac: null,
    biceps: null,
    calf: null,
    lowerBack: null,
    supraspinale: null,
    waist: null,
    forearm: null,
    gluteal: null,
    bf: null,
    bmi: null,

    cosntructor: function (
        method, weight, abdominal, triceps, thigh,
        suprailiac, chest, abdomen, subscapular,
        axilla, iliac, biceps, calf, lowerBack,
        supraspinale, waist, forearm, gluteal) {
        this.method = method;
        this.weight = weight;
        this.abdominal = abdominal;
        this.triceps = triceps;
        this.thigh = thigh;
        this.suprailiac = suprailiac;
        this.chest = chest;
        this.abdomen = abdomen;
        this.subscapular = subscapular;
        this.axilla = axilla;
        this.iliac = iliac;
        this.biceps = biceps;
        this.calf = calf;
        this.lowerBack = lowerBack;
        this.supraspinale = supraspinale;
        this.waist = waist;
        this.forearm = forearm;
        this.gluteal = gluteal

        // this.user.setWeight(weight);
    },

    _densityToBf: function (density) {
        return (((4.95 / density) - 4.5) * 100)
    },

    _kgToLbs: function (kg) {
        return kg * 2.20462
    },

    yuhaszMaleStudent: function () {
        var skinfoldsum = this.triceps + this.subscapular +
            this.supraspinale + this.abdominal +
            this.thigh;
        return (0.1051 * skinfoldsum) + 2.585
    },

    yuhaszMaleNHL: function () {
        var skinfoldum = this.chest + this.triceps +
            this.subscapular + this.suprailiac +
            this.abdominal + this.thigh;
        return (0.097 * skinfoldum) + 3.64
    },

    yuhaszFemaleStudent: function () {
        skinfoldsum = this.triceps + this.subscapular +
            this.supraspinale + this.abdominal +
            this.thigh;
        return (0.1548 * skinfoldsum) + 3.580
    },

    parillo: function () {
        var skinfoldsum = this.chest + this.abdominal + this.thigh + this.biceps +
            this.triceps + this.subscapular + this.suprailiac + this.lowerBack +
            this.calf;
        return skinfoldsum * 27 / kgToLbs(this.weight)
    },

    slaughterLomanMale: function () {
        return (0.735 * (this.triceps + this.calf) + 1)
    },

    slaughterLomanFemale: function () {
        return (0.610 * (this.triceps + this.calf) + 5.1)
    },

    salonMale: function () {
        var density = (1.1043 - (0.001327 * this.thigh) -
            (0.00131 * this.subscapular));
        return this._densityToBf(density)
    },

    salonFemale: function () {
        var density = (1.0743 - (0.0008 * this.iliac) -
            (0.00131 * this.subscapular));
        return this._densityToBf(density)
    },

    durianWomersly: function (sex, age) {

        var males = [1.1533, 1.1620, 1.1631, 1.1422, 1.1620, 1.1751];
        var females = [1.1369, 1.1549, 1.1599, 1.1423, 1.1333, 1.1339];
        var maleX = [0.0643, 0.0630, 0.0632, 0.0544, 0.0700, 0.0779];
        var femaleX = [0.0598, 0.0678, 0.0717, 0.0632, 0.0612, 0.0645];

        var skinfoldsum = Math.log(this.triceps + this.biceps + this.subscapular + this.suprailiac);

        var getBF = function (sexArr, sexArrX, index) {
            return densityToBf(sexArr[index] - (sexArrX[index] * Math.log(skinfoldsum)))
        }

        if (sex === "male") {
            return age < 17 ? getBF(males, maleX, 0)
                : (age >= 17 && age <= 19) ? getBF(males, maleX, 1)
                    : (age >= 20 && age <= 29) ? getBF(males, maleX, 2)
                        : (age >= 30 && age <= 39) ? getBF(males, maleX, 3)
                            : (age >= 40 && age <= 49) ? getBF(males, maleX, 4)
                                : (age >= 50) ? getBF(males, maleX, 5)
                                    : getBF(males, maleX, 2)

        }

        if (sex === "female") {
            return age < 17 ? getBF(females, femaleX, 0)
                : (age >= 17 && age <= 19) ? getBF(females, femaleX, 1)
                    : (age >= 20 && age <= 29) ? getBF(females, femaleX, 2)
                        : (age >= 30 && age <= 39) ? getBF(females, femaleX, 3)
                            : (age >= 40 && age <= 49) ? getBF(females, femaleX, 4)
                                : (age >= 50) ? getBF(females, femaleX, 5)
                                    : getBF(females, femaleX, 2)
        }
    },

    jacksonPollockMale4: function () {
        var skinfoldsum = this.abdominal + this.triceps + this.thigh + this.suprailiac;
        return ((0.29288 * skinfoldsum) -
            (0.005 * (skinfoldsum * skinfoldsum)) +
            (0.15845 * this.age) - 5.76377);
    },

    jacksonPollockFemale4: function () {
        var skinfoldsum = this.abdominal + this.triceps + this.thigh + this.suprailiac;
        return ((0.29669 * skinfoldsum) -
            (0.00043 * skinfoldsum * skinfoldsum) +
            (0.02963 * this.age) + 1.4072);
    },

    jacksonPollockFemale3: function () {
        var skinfoldsum = this.abdominal + this.triceps + this.suprailiac;
        return ((0.41562 * skinfoldsum) - (0.00112 * skinfoldsum * skinfoldsum) +
            (0.03661 * this.age) + 4.03653);
    },

    jacksonPollockMale3Girth: function () {
        var skinfoldsum = this.chest + this.abdomen + this.thigh
        var density = 1.0990750 - (0.0008209 * skinfoldsum) +
            (0.0000026 * skinfoldsum * skinfoldsum) -
            (0.0002017 * this.age) - (0.005675 * this.waist / 100) +
            (0.018586 * this.forearm / 100)
        return this._densityToBf(density);
    },

    jacksonPollockFemale3Girth: function () {
        var skinfoldsum = this.triceps + this.thigh + this.suprailiac;
        var density = ((1.1470292 - 0.0009376 * skinfoldsum) +
            (0.0000030 * skinfoldsum * skinfoldsum) -
            (0.0001156 * this.age) - (0.0005839 * this.gluteal));
        return this._densityToBf(density);
    },

    jacksonPollockMale3: function () {
        var skinfoldsum = this.chest + this.abdomen + this.thigh;
        var density = (1.1125025 - (0.0013125 * skinfoldsum) +
            (0.0000016 * skinfoldsum * skinfoldsum) -
            (0.0002574 * this.age));
        return this._densityToBf(density);
    },

    jacksonPollockFemale3: function () {
        var skinfoldsum = this.triceps + this.thigh + this.suprailiac;
        var density = (1.0994921 - (0.0009929 * skinfoldsum) +
            (0.0000023 * skinfoldsum * skinfoldsum) -
            (0.0001392 * this.age));
        return this._densityToBf(density);
    },

    jacksonPollockFemale3Second: function () {
        var skinfoldsum = this.chest + this.abdomen + this.thigh;
        var density = (1.10938 - (0.0008267 * skinfoldsum) +
            (0.0000016 * skinfoldsum * skinfoldsum) -
            (0.0002574 * this.age));

        return this._densityToBf(density);
    },

    jacksonPollockMale7: function () {
        var skinfoldsum = this.chest + this.axilla + this.triceps +
            this.subscapular + this.abdominal +
            this.suprailiac + this.thigh;
        var density = (1.112 - (0.00043499 * skinfoldsum) +
            (0.00000055 * skinfoldsum * skinfoldsum) -
            (0.00028826 * this.age));
        return this._densityToBf(density);
    },

    jacksonPollockFemale7: function () {
        var skinfoldsum = this.chest + this.axilla + this.triceps + this.subscapular +
            this.abdominal + this.suprailiac + this.thigh;
        var density = (1.097 - (0.00046971 * skinfoldsum) +
            (0.00000056 * skinfoldsum * skinfoldsum) -
            (0.00012828 * this.age));
        return this._densityToBf(density);
    },

}
