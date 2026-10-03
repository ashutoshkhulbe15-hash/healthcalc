<!-- last-updated: 2026-10-03 -->
# Macronutrient percentage allocator

This tool takes a calorie total and protein, carbohydrate, and fat percentages entered by the user. The percentages must total 100%. It converts each share to grams using the calorie-per-gram factors used in U.S. nutrition labeling: 4 kcal/g for protein, 4 kcal/g for carbohydrate, and 9 kcal/g for fat. [USDA Food and Nutrition Information Center](https://www.nal.usda.gov/programs/fnic) and [FDA Food Labeling Guide](https://www.fda.gov/media/81606/download?attachment=).

## Calculation

For each macronutrient:

`grams = entered calories × entered percentage ÷ 100 ÷ kcal per gram`

For example, allocating 2,000 kcal as 25% protein, 50% carbohydrate, and 25% fat gives 500, 1,000, and 500 kcal respectively. Dividing by 4, 4, and 9 kcal/g gives 125 g protein, 250 g carbohydrate, and about 55.6 g fat.

The percentages and calorie total are entirely user-selected. This page does not recommend a ratio or determine an individual's calorie or nutrient requirements. U.S. label conversion factors are used; values on actual foods can differ because foods contain mixtures of nutrients and labeling rules allow rounding. [FDA: How to Understand and Use the Nutrition Facts Label](https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label).

This tool does not provide a meal plan, treatment advice, sports nutrition guidance, or a personal dietary target.

---

*Educational arithmetic only. Select percentages and a calorie total using guidance appropriate to your circumstances.*
