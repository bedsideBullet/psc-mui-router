const fs = require('fs');
const path = require('path');

// Path to your db.json file
const dbFilePath = path.join(__dirname, 'db.json');

// Define your initial data
const initialData = {
    gears: [
        {
            id: 1,
            partNumber: 'InitialPart1',
            ratio: 'InitialRatio1',
            rotation: 'InitialRotation1',
            sectorSpline: 'InitialSectorSpline1',
            input: 'InitialInput1',
            turns: 'InitialTurns1',
            tbar: 'InitialTbar1',
            mountLocation: 'InitialMountLocation1',
            image: 'InitialImage1'
        },
        {
            id: 2,
            partNumber: 'InitialPart2',
            ratio: 'InitialRatio2',
            rotation: 'InitialRotation2',
            sectorSpline: 'InitialSectorSpline2',
            input: 'InitialInput2',
            turns: 'InitialTurns2',
            tbar: 'InitialTbar2',
            mountLocation: 'InitialMountLocation2',
            image: 'InitialImage2'
        },
        // Add more initial gears as needed
    ],
    notes: [], // Add initial notes if applicable
    users: []  // Add initial users if applicable
};

// Function to reset db.json with initial data
const resetDb = () => {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2));
        console.log('db.json reset successful!');
    } catch (error) {
        console.error('Failed to reset db.json:', error);
    }
};

// Run the reset function
resetDb();
