TEST.js




//"Relevant Experience" formula calculation VARIABLES
var RE = true;
var major = ["STEM","Business","Other"];
var years_exp = ["<1","1-5","6-10","11-20",">20"];
var training_hours = ["<20","20-40","41-60","61-80",">80"];


//"Relevant Experience" formula calculation SCORE ELEMENTS
var major_multiplier = {
    "STEM":4,
    "Business":2,
    "Other":1,
}

var RE_Y_years_exp = {
    "<1":2,
    "1-5":4,
    "6-10":8,
    "11-20":16,
    ">20":20
};
var RE_N_years_exp = {
    "<1":0.5,
    "1-5":1,
    "6-10":2,
    "11-20":4,
    ">20":5
};

var RE_Y_training_hours = {
    "<20":0,
    "20-40":5,
    "41-60":10,
    "61-80":15,
    ">80":20
};
var RE_N_training_hours = {
    "<20":0,
    "20-40":20,
    "41-60":40,
    "61-80":60,
    ">80":80
};

//For every person in the dataset
if (RE = true) {
    (major_multiplier * RE_Y_years_exp) + (RE_Y_training_hours)
} else {
    (major_multiplier * RE_N_years_exp) + (RE_N_training_hours)
}

