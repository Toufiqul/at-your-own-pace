
# At Your Own PACE  
Your own interactive world of PACE for Understanding and Visualizing PACE Satellite Data

## About  
This project was created for NASA's Space Apps Challenge 2024 by **Team ORCA**.

For more information, please refer to our team site:  
[Team ORCA Space Apps 2024](#) (link to be updated)

Try out a demo of the portal:  
[PACE Explorer Demo](#) (link to be updated)

---

## Detailed Project Description

### PACE Explorer  
This project produces an interactive web portal that visualizes and educates users about data gathered by the **Plankton, Aerosol, Cloud, ocean Ecosystem (PACE)** satellite. The PACE Explorer portal aims to make NASA's PACE data more accessible to students and the general public by offering both a guided educational experience and a self-paced learning option.

The tool provides easy-to-use functions for exploring different types of data, including **Phytoplankton**, **Aerosols**, **Clouds**, and the broader **Ocean Ecosystem**. The project was built using a combination of **Globe.GL** for 3D data visualization and various back-end tools for data processing and rendering.

---

### Objectives
1. **User-Friendly Access**: Create a portal that allows users to easily access and understand PACE satellite data.
2. **Interactive Learning**: Provide a guided experience with the virtual assistant ORCA, which helps users understand and visualize PACE data products and their real-world applications.
3. **Value-Added Product Exploration**: Teach users how to visualize and interact with raw data and value-added products, such as harmful algal blooms and water quality insights.
4. **Enhance Ocean Literacy**: Develop an ocean literacy framework to help students worldwide better understand marine and atmospheric sciences using PACE data.

---

### Functionalities

#### Main Features
The PACE Explorer portal allows users to choose between two main learning paths:
- **Learn with ORCA**: A guided, interactive tour where the virtual assistant ORCA explains the types of data, how they are collected, and their relevance.
- **Learn at Your Own PACE**: A self-guided option that lets users explore data and visualizations at their own pace, selecting the topics that interest them most.

#### Data Types
Upon entering the portal, users can select from the following data types:
- **Phytoplankton**: Visualize harmful algal blooms, water quality, and temperature data.
- **Aerosols**: Understand the role aerosols play in atmospheric and oceanic processes.
- **Clouds**: Explore cloud cover patterns and their impact on the Earth's climate.
- **Ocean Ecosystem**: Dive into broader ecosystem data and how the ocean interacts with other environmental factors.

#### Visualization Tools
After selecting a data type, users are presented with an interactive map that allows them to:
- View **time-series data** (e.g., Chl-a levels, water temperature) in both still images and animated GIF formats.
- Select and explore specific **data parameters** such as **SST (Sea Surface Temperature)**, **SSS (Sea Surface Salinity)**, **PAR (Photosynthetically Active Radiation)**, and **Chl-a (Chlorophyll-a)**.

#### Additional Features
- **Interactive Data Exploration**: The map provides a dynamic visualization of data, allowing users to zoom, pan, and explore multiple datasets at once.
- **Potential Research Opportunities**: The portal includes references to research journals and studies that utilize PACE data, helping users understand how they can contribute to ongoing research.
- **Downloadable Data**: Users can download raw datasets for their own analysis and projects.

---

### Data and Sources
- **SST, SSS, PAR, Chl-a**: These core oceanographic parameters are presented through interactive visualizations, and users can access the raw data behind them.
- **Visualizations**: The data is rendered using **Globe.GL** with additional support for animated time-lapse maps to show monthly changes in selected datasets.
- **Educational Focus**: The data and visualizations are designed for both general public use and educational purposes, making them suitable for classroom teaching and research projects.

---

### Space Agency Data  
The PACE Explorer portal uses open data from the PACE satellite, processed and visualized for ease of understanding. The PACE data includes detailed observations of **phytoplankton**, **aerosols**, and **clouds** to help improve our understanding of how the ocean and atmosphere interact. All data is processed using Python-based tools and visualized in the web portal.

---

### UI Screenshots  
(Insert screenshots of key UI components here)

- **Homepage**:  
  ![Homepage](#) (Placeholder for image)

- **Data Type Selection**:  
  ![Data Selection](#) (Placeholder for image)

- **Visualization of Phytoplankton Data**:  
  ![Phytoplankton Data Visualization](#) (Placeholder for image)

---

### Future Work
1. **Expansion to Additional Data**: Integrating real-time data from other NASA Earth-observing missions to enrich the user experience.
2. **Localization**: Expanding the portal’s capabilities to support multiple languages, making it more accessible for classrooms globally.
3. **Advanced Research Features**: Adding functionality to enable researchers to create models and simulations using PACE data.

---

## How to Run  
To clone and run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Team-ORCA/pace-explorer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pace-explorer
   ```

3. Open `index.html` in your preferred web browser.

---

### Acknowledgments  
- **NASA** for providing open access to the PACE data.
- **Globe.GL** for their interactive 3D data visualization library.
- **Team ORCA** for their collaborative efforts in developing this project.
