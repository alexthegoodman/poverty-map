// *** Nutrition Requirements ***
// Ages 2 to 4: Daily guidelines for boys
// Calories 1,000-1,600, depending on growth and activity level
// Protein 2-5 ounces
// Grains 3-5 ounces
//  Total: 5 - 10 ounces
// Fruits 1-1.5 cups
// Vegetables 1-2 cups
// Dairy 2-2.5 cups
//  Total: 4 - 6 cups
export const NutritionRequirements = {
  info: {
    title: "Nutrition Requirements (Boys Ages 2-4)",
    source:
      "https://www.mayoclinic.org/healthy-lifestyle/childrens-health/in-depth/nutrition-for-kids/art-20049335",
  },
  data: [
    [
      {
        title: "Protein",
        measure: "oz",
        low: 2.0,
        high: 5,
      },
      {
        title: "Grains",
        measure: "oz",
        low: 3.0,
        high: 5,
      },
    ],
    [
      {
        title: "Fruits",
        measure: "cup",
        low: 1,
        high: 1.5,
      },
      {
        title: "Vegetables",
        measure: "cup",
        low: 1,
        high: 2,
      },
      {
        title: "Dairy",
        measure: "cup",
        low: 2,
        high: 2.5,
      },
    ],
  ],
};

// bar chart
export const malnutrition = [];

// bar chart (current state)
export const mortality = [];
