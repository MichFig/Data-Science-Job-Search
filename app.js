//constructing HTML table by Employee ID
var dropDown = d3.select("#selDataset");

d3.csv("tanners_data/cleaned_data.csv").then((importedData) => {
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
    
    d3.csv("tanners_data/cleaned_data.csv").then((importedData) => {

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
        
        
        //Mapping variables csv
        var subjectdata = Object.fromEntries(Object.entries(importedData).filter(([k,v]) => v.id==id));
        subjectdata = Object.values(subjectdata);
        // console.log(subjectdata);

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
var result = groupBy(importedData, function(item)
{
  return [item.target, item.gender];
});
console.log(result);

//assign variables for gender chart
var male_0_total = result[0].length
var male_1_total = result[1].length

var female_0_total = result[2].length
var female_1_total = result[3].length

var other_0_total = result[4].length
var other_1_total = result[5].length

var target_0 = [male_0_total, female_0_total, other_0_total];
var target_1 = [male_1_total, female_1_total, other_1_total];


        var education_levels = importedData.map(d => d.education_level);
        // education_levels = education_levels[0];
        // console.log(education_levels);

        var job_experience = importedData.map(d => d.experience);
        // job_experience = job_experience[0];
        // console.log(job_experience);

        var majors = importedData.map(d => d.major_discipline);
        // majors = majors[0];
        // console.log(majors);

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
        Plotly.newPlot('bar', bar_data, bar_layout);


        
// //Bubble Chart Code
//         var trace2 = {
//             x: otu_ids,
//             y: sample_values,
//             mode: 'markers',
//             text: otu_labels,
//             marker: {
//               size: sample_values,
//               color: otu_ids,
//             }
//           };

//         var bubblelayout = {
//             title: `Subject ${id} Bubble Chart`,
//             showlegend: false,
//             height: 600
//         }

//         var bubbledata = [trace2]
//         Plotly.newPlot('bubble', bubbledata, bubblelayout);


//     });
});
};

optionChanged(400)