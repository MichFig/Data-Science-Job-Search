//reading in csv
d3.csv("tanners_data/cleaned_data.csv").then((importedData) => {
    Object.entries(importedData).forEach(function([k, v]) {
        var enrollee_ids = v.enrollee_id
        console.log(enrollee_ids);
    });
});