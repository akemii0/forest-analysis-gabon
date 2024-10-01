# Forest Loss and Gain Analysis in Gabon Using Google Earth Engine

### Overview

This project focuses on analyzing forest cover loss and gain in Gabon using Google Earth Engine (GEE). The dataset used in this analysis is the Hansen Global Forest Change dataset, which provides information on forest cover loss and gain between the years 2000 and 2014. The analysis is restricted to the boundaries of Gabon to explore the country's forest dynamics over this period.

### Project Features

- **Forest Cover Loss**: Calculates the total area of forest cover lost in Gabon from 2000 to 2014.
- **Forest Cover Gain**: Computes the total area of forest cover gained in Gabon during the same period.
- **Clipping and Visualization**: The analysis is clipped to Gabon's boundary, allowing for more efficient data processing and focused visualization of changes.

### Key Technologies

- **Google Earth Engine (GEE)**: Used for large-scale geospatial data processing and analysis.
- **Hansen Global Forest Change dataset**: The dataset used for the analysis, which includes forest cover change data from 2000 to 2014.

### Data Sources

- **Hansen Global Forest Change**: 
  - Source: [Global Forest Change Dataset](https://earthenginepartners.appspot.com/science-2013-global-forest).
  - Description: This dataset tracks global tree cover loss and gain from 2000 through 2014. It is based on satellite data and processed to show forest dynamics.

### How to Use This Project

#### Requirements:
To use this project, you need a Google Earth Engine account. You can sign up for free at [Google Earth Engine](https://earthengine.google.com/signup/).

#### Steps:

1. **Open the Script**:
   You can either download the `analysis.js` file from this repository or directly open the script in Google Earth Engine:
   
   [Open in GEE](https://code.earthengine.google.com/?scriptPath=users%2Fdivechanrup%2FpracticeGIS%3AForestGainAndLoss).

3. **Running the Script**:
   - The script calculates the total area of forest cover loss and gain in Gabon by clipping the Hansen dataset to the country's boundary.
   - It then outputs the total area lost and gained in both square meters and hectares.
   - Finally, it visualizes Gabon’s boundary on the map along with forest loss (in red) and forest gain (in green).

4. **Customizing the Script**:
   - You can modify the script to focus on other regions by changing the `Gabon` filter to another country.
   - You can also adjust the time range by selecting a different dataset or updating the Hansen dataset to a more recent version.

### Script Breakdown

- **Boundary Definition**: 
  The script uses the `USDOS/LSIB_SIMPLE/2017` dataset to define Gabon's boundary.
  
- **Forest Cover Change**: 
  The `UMD/hansen/global_forest_change_2014` dataset is used to extract forest loss and gain data for the analysis.
  
- **Area Calculation**:
  The area of forest loss and gain is calculated by multiplying the binary forest loss/gain values by the pixel area (in square meters), and the result is then reduced to Gabon's boundary.
  
- **Visualization**:
  The map is centered on Gabon, with layers showing the forest loss in red and forest gain in green.

### Results

The script provides two key results:

1. **Total Forest Cover Lost**: Printed in both square meters and hectares.
2. **Total Forest Cover Gained**: Printed in both square meters and hectares.

The results can also be visualized on the map, with forest loss displayed in red and forest gain in green.

### Future Improvements

- **Update to a More Recent Dataset**: The project currently uses the 2014 version of the Hansen Global Forest Change dataset. Updating to a newer dataset (if available) would provide more up-to-date insights into forest cover dynamics.
- **Extended Analysis**: The code can be easily modified to explore other regions or time frames, making it a useful tool for global or localized forest cover analysis.
- **Annual Breakdown**: By adding an analysis for specific years, the script could provide yearly forest loss and gain trends.


### Contact

If you have any questions or suggestions for improving this project, feel free to reach out or submit a pull request.
