//constructing HTML table by Employee ID
var dropDown = d3.select("#selDataset");

d3.csv("tanners_data/cleaned_data.csv").then((importedData) => {
    console.log(importedData[0]);
    var emp_ids = importedData.map(subject => subject.enrollee_id);
    console.log(emp_ids);

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

//         var subjectdata = Object.fromEntries(Object.entries(importedData.samples).filter(([k,v]) => v.id==id));
//         subjectdata = Object.values(subjectdata);
//         //console.log(subjectdata)

//         var otu_ids = subjectdata.map(d => d.otu_ids);
//         otu_ids = otu_ids[0];

//         var sample_values = subjectdata.map(d=> d.sample_values);
//         sample_values = sample_values[0];
//         // console.log(sample_values)

//         var otu_labels = subjectdata.map(d => d.otu_labels);
//         otu_labels = otu_labels[0];
// //Bar Graph Code
//        var bar_dict = {"Sample Values": sample_values, "OTU ID": otu_ids}

       
//         var sorted_sample_values = sample_values.sort((a, b) => b.sample_values - a.sample_values);
//         var sliced_sample_values = sorted_sample_values.slice(0, 10).reverse();

//         // console.log(sliced_sample_values)

//         var sorted_otu_ids = otu_ids.sort((a, b) => b.otu_ids - a.otu_ids);
//         var sliced_otu_ids = sorted_otu_ids.slice(0, 10).reverse();
        
//         //function for making OTU ids string labels and not integers
//         var otu_plot_values = []
//         function otulabeler(item) {
//             otu_plot_values.push("OTU " + item)
//             };

//         sliced_otu_ids.forEach(otulabeler);
//         // console.log(otu_plot_values);

//         var sorted_otu_labels = otu_labels.sort((a, b) => b.otu_labels - a.otu_labels);
//         var sliced_otu_labels = sorted_otu_labels.slice(0, 10).reverse();
        
//         // console.log(sliced_otu_labels)
        
//         var trace1 = {
//             type: 'bar',
//             x: sliced_sample_values,
//             y: otu_plot_values,
//             text: sliced_otu_labels,
//             orientation: 'h'
//         };
        
//         var bar_data = [trace1]
        
//         var bar_layout = {
//             title: `Top 10 OTU's for Subject: ${id}`
//         }
// //         Plotly.newPlot('bar', bar_data, bar_layout);


        
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

optionChanged(55)