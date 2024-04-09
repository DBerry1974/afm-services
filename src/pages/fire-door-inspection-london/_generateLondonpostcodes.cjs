const fs = require('fs');
const path = require('path');

const outputFolder = './';

const towns = [
  'E14', // Canary Wharf
  'EC1', 'EC2', 'EC3', 'EC4', // The City
  'W1', 'WC1', 'WC2', // West End
  'W2', 'W8', 'W11', // West London
  'N1', 'N7', // North London
  'SE1', 'SE11', // South East London
  'SW1', 'SW3', 'SW7', // South West London 
  'E1', 'E2', 'E1W', // East London
  'NW1', 'NW3', // North West London
];
  
  // Template path
const templatePath = path.join(__dirname, '../landing-templates/FireDoorInspection.astro');

// Read the template content
let templateContent = fs.readFileSync(templatePath, 'utf8');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Generate pages for each town
towns.forEach((town) => {
  // Replace {town} in the template content with the actual town name
  const pageContent = templateContent.replace(/{town}/g, town);

  // Convert town for URL (lowercase with hyphen)
  const urlTown = town.toLowerCase().replace(/\s+/g, '-'); 

  // Define the output path
  const outputPath = path.join(outputFolder, `${urlTown}.astro`);

  // Write the modified content to the output file
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated page for ${town} at ${outputPath}`);
});

console.log('Pages generated successfully.'); 
