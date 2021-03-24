//constructing HTML table by Employee ID
// alert("yay");
var dropDown = d3.select("#selDataset");

d3.csv("static/js/cleaned_data.csv").then((importedData) => {
    // console.log(importedData[0]);
    var emp_ids = importedData.map(subject => subject.enrollee_id);
    // console.log(emp_ids);

    emp_ids.forEach(function(subject) {
        // makes new row in table
        var dropDownlist = dropDown.append("option");

        dropDownlist.attr("value", subject)
        .text(subject)
      });
});

//Adding Dropdown Metadata Information
function optionChanged(id){
    
    d3.csv("static/js/cleaned_data.csv").then((importedData) => {

        var panel_body = d3.select(".panel-body");

        Object.entries(importedData).forEach(function([k, v]) {
            if (v.id == id){
                //console.log(v);
                panel_body.html("Employer ID: " + v.enrollee_id +
                "<br>City Development Index: " + v.city_development_index +
                "<br>Gender: " + v.gender +
                "<br>Experience Summary: " + v.relevent_experience +
                "<br>University Status: " + v.enrolled_university +
                "<br>Level of Education: " + v.education_level +
                "<br>Area of Study: " + v.major_discipline +
                "<br>Size of Current Company: " + v.company_size+
                "<br>Years Since Last Job Change: " + v.last_new_job+
                "<br>Training Hours: " + v.training_hours+
                "<br>Looking for Job? (1:Yes, 0:No): " + v.target);
            };
        });
        

//function that groups by columns_________________________________________________________________________
function groupBy( array , f )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );  
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group]; 
  })
}
//_____________________________________________________________________________________________________
//gender variable grouping
var gender_result = groupBy(importedData, function(item)
{
  return [item.target, item.gender];
});
// console.log(gender_result);

//assign variables for gender chart
var male_0_total = gender_result[0].length
var male_1_total = gender_result[1].length
var female_0_total = gender_result[2].length
var female_1_total = gender_result[3].length
var other_0_total = gender_result[4].length
var other_1_total = gender_result[5].length
var target_0 = [male_0_total, female_0_total, other_0_total];
var target_1 = [male_1_total, female_1_total, other_1_total];

//PHD Values
var phd_arts_0 = 0;
var phd_arts_1 = 1;
var phd_business_0 = 0;
var phd_business_1 = 0;
var phd_humanities_0 = 9;
var phd_humanities_1 = 1;
var phd_stem_0 = 207;
var phd_stem_1 = 32;

//Masters Values
var masters_arts_0 = 17;
var masters_arts_1 = 2;
var masters_business_0 = 39;
var masters_business_1 = 5;
var masters_humanities_0 = 120;
var masters_humanities_1 = 10;
var masters_stem_0 = 1858;
var masters_stem_1 = 335;

//Bachelors Values
var bach_arts_0 = 103;
var bach_arts_1 = 6;
var bach_business_0 = 110;
var bach_business_1 = 16;
var bach_humanities_0 = 209;
var bach_humanities_1 = 29;
var bach_stem_0 = 4545;
var bach_stem_1 = 1012;

var art_target_0 = masters_arts_0 + bach_arts_0 + phd_arts_0;
var art_target_1 = masters_arts_1 + bach_arts_1 + phd_arts_1;

var bus_target_0 = masters_business_0 + phd_business_0 + bach_business_0;
var bus_target_1 = masters_business_1 + bach_business_1 + phd_business_1;

var hum_target_0 = masters_humanities_0 +phd_humanities_0 + bach_humanities_0;
var hum_target_1 = masters_humanities_1 +phd_humanities_1 + bach_humanities_1;

var stem_target_0 = bach_stem_0 + phd_stem_0 + masters_stem_0;
var stem_target_1 = bach_stem_1 + phd_stem_1 + masters_stem_1;

var majors_target_0 = [art_target_0, bus_target_0, hum_target_0, stem_target_0];
var majors_target_1 = [art_target_1, bus_target_1, hum_target_1, stem_target_1];

//eduction_level variables
var bachelor_target_0 = bach_arts_0 + bach_business_0+ bach_humanities_0+ bach_stem_0;
var masters_target_0 = masters_arts_0 + masters_business_0+ masters_humanities_0+ masters_stem_0;
var phd_target_0 = phd_arts_0 + phd_business_0 + phd_humanities_0 + phd_stem_0 ;

var bachelor_target_1 = bach_arts_1 + bach_business_1 + bach_humanities_1+ bach_stem_1 ;
var masters_target_1 = masters_arts_1 + masters_business_1+ masters_humanities_1+ masters_stem_1;
var phd_target_1 = phd_arts_1 + phd_business_1 + phd_humanities_1 + phd_stem_1;

var education_target_0 = [bachelor_target_0, masters_target_0, phd_target_0];
var education_target_1 = [bachelor_target_1, masters_target_1, phd_target_1];

//Education Level Chart
var educationtrace1 = {
    x: ["Bachelors", "Masters", "PhD"],
    y: education_target_0,
    name: "Not Searching for Job",
    type: 'bar'
  };
  
  var educationtrace2 = {
    x: ["Bachelors", "Masters", "PhD"],
    y: education_target_1,
    name: 'Searching for Job',
    type: 'bar'
  };

var educationbar_data = [educationtrace1, educationtrace2];

var educationbar_layout = {
    title: `Breakdown of Employee Pool by Degree Level`,
    barmode: 'stack'
}
Plotly.newPlot('education_bar', educationbar_data, educationbar_layout);


//Major Chart
var majortrace1 = {
    x: ["Arts", "Business", "Humanities", "STEM"],
    y: majors_target_0,
    name: "Not Searching for Job",
    type: 'bar'
  };
  
  var majortrace2 = {
    x: ["Arts", "Business", "Humanities", "STEM"],
    y: majors_target_1,
    name: 'Searching for Job',
    type: 'bar'
  };

var majorbar_data = [majortrace1, majortrace2];

var majorbar_layout = {
    title: `Breakdown of Employee Pool by Major`,
    barmode: 'stack'
}
Plotly.newPlot('major_bar', majorbar_data, majorbar_layout);
   

//Gender Chart Construction
        var trace1 = {
            x: ["Male", "Female", "Other"],
            y: target_0,
            name: "Not Searching for Job",
            type: 'bar'
          };
          
          var trace2 = {
            x: ["Male", "Female", "Other"],
            y: target_1,
            name: 'Searching for Job',
            type: 'bar'
          };
        
        var bar_data = [trace1, trace2]
        
        var bar_layout = {
            title: `Gender Breakdown of Employee Pool`,
            barmode: 'stack'
        }
        Plotly.newPlot('gender_bar', bar_data, bar_layout);

});
};

optionChanged(400);