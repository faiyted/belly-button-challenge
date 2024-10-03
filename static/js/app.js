const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Build the metadata panel
function buildMetadata(sample) {
  d3.json(url).then((data) => {

    // get the metadata field
    console.log(data)
    
    // Filter the metadata for the object with the desired sample number
    let metaData = data.metadata;

    let filterData = metaData.filter((meta)=>meta.id == sample)

    let obj = filterData[0]

    // Use d3 to select the panel with id of `#sample-metadata`
    d3.select("#sample-metadata").html("");

    // Use `.html("") to clear any existing metadata
    let entries = Object.entries(obj);

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    entries.forEach(([key,value]) => {
      let custom={
        "id": "ID",
        "ethnicity": "ETHNICITY",
        "gender": "GENDER",
        "age": "AGE",
        "location": "LOCATION",
        "bbtype": "BBTYPE",
        "wfreq": "WFREQ"
      }
      let displayKey = custom[key] ? custom[key] : key;

      d3.select("#sample-metadata").append("h6").text(`${displayKey}: ${value}`);
  });

   console.log(entries)
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(url).then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filterSample = samples.filter((sam)=>sam.id == sample)

    // Get the otu_ids, otu_labels, and sample_values
    let obj = filterSample[0]
    console.log("obj" ,obj)
    // Build a Bubble Chart
    let trace = [{
      x: obj.otu_ids,
      y: obj.sample_values,
      text: obj.otu_labels,
      mode: "markers",
      marker: {
          size: obj.sample_values,
          color: obj.otu_ids,
          colorscale: "Earth"
      }
  }];
  let layout = {
    title: { 
        text: 'Bacteria Culture Per Sample',
    font: {size: 16, color: 'black'}
    },
    hovermode: 'closest',
    xaxis:{title: 'OTU ID'},
    yaxis:{title: 'Number of Bacteria'},
};

  Plotly.newPlot("bubble", trace, layout);

    
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    // Render the Bar Chart
    let trace1 = [{
      // Slice the top 10 otus
      x: obj.sample_values.slice(0,10).reverse(),
      y: obj.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
      text: obj.otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
  }];
  let layout1 = {
    title: { 
      text: 'Top 10 Bacteria Cultures Found',
      font: {size: 16, color: 'black'},
    },
    xaxis:{title: 'Number of Bacteria'}
};
    
  // Use Plotly to plot the data in a bar chart
  Plotly.newPlot("bar", trace1, layout1);


  });
}

// Function to run on page load
function init() {
  
  d3.json(url).then((data) => {

    // Get the names field
    let names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset")

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((name)=>{
      dropdown.append("option").text(name).property("value", name);
    })

    // Get the first sample from the list
    let name = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(name)
    buildCharts(name)
  });
}


// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
