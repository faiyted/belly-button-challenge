# belly-button-challenge

### Background
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Instructions

- Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  -- Use sample_values as the values for the bar chart.

  -- Use otu_ids as the labels for the bar chart.

  -- Use otu_labels as the hovertext for the chart.

  ![image](https://github.com/user-attachments/assets/91132feb-0c0f-44e6-9e09-891fabd13923)

- Create a bubble chart that displays each sample.

  -- Use otu_ids for the x values.

  -- Use sample_values for the y values.

  -- Use sample_values for the marker size.
  
  -- Use otu_ids for the marker colors.

  -- Use otu_labels for the text values.

  ![image](https://github.com/user-attachments/assets/5b71d2d6-8028-411c-a8aa-403a97733065)

- Display the sample's metadata, i.e., an individual's demographic information.

  -- Loop through each key-value pair from the metadata JSON object and create a text string.

  -- Append an html tag with that text to the #sample-metadata panel.

  ![image](https://github.com/user-attachments/assets/eb93c1d2-79d9-4120-9dd5-090401fb096c)

- Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/user-attachments/assets/69a30804-7200-4b2e-8530-a37de5d7cbe6)

- Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file



  
