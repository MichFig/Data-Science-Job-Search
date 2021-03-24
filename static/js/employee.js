
    d3.csv("static/js/DataScienceScores.csv").then((importedData) => {

        var scores = importedData.map(d => d.Relevant_Experience_Score);
        console.log(scores)


        var trace = {
            x: scores,
            type: 'histogram',
          };
        var layout = { 
            title: "Histogram of Employee Scores", 
            xaxis: {title: "Employee Scores"}, 
            yaxis: {title: "Count"}
          };
        
        var data = [trace];
        Plotly.newPlot('score-chart', data, layout);


    });

