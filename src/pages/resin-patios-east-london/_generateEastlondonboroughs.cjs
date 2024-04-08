const fs = require('fs');
const path = require('path');

const outputFolder = './';

const towns = [
  'Tower Hamlets',
  'Newham',
  'Barking and Dagenham',
  'Havering',
  'Redbridge',
  'Hackney',
  'Lewisham',
  'Greenwich',
  'Waltham Forest',
  'Bexley',
];
  
  // Template path
const templatePath = path.join(__dirname, '../landing-templates/ResinPatios.astro');

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
