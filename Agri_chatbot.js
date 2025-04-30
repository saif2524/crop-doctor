// Array of questions
const pre_sowing_questions = [
    "How many days have passed since sowing?",
    "What is your location?",
    "What type of soil do you have?",
    "Have you tested the soil pH? (yes/no)",
    "What is the water availability in your area? (poor/average/good)",
    "Do you have access to organic manure or chemical fertilizers? (yes/no)",
    "What is your preferred crop? (watermelon/muskmelon/pumpkin/cucumber)",
    "Have you tested the soil for nutrient levels? (Yes/No)",
    "Specify your crop for ideal NPK levels (Specify your crop name)"
];

const sowing_questions = [
    "What is the current temperature in your region?",
    "Are you using hybrid or local seeds? [hybrid/local]",
    "Have you treated the seeds with fungicide or biofertilizer? [yes/no]",
    "What is the spacing between your plants? [specify plant name : watermelon muskmelon cucumber pumpkin]",
    "Are you sowing seeds directly or using a nursery? [direct/nursery]",
    "Have you applied a basal dose of NPK before sowing? [yes/no]"
];

const germination_questions = [
    "Have the seeds germinated uniformly? [yes/no]",
    "Are there any signs of pest attacks or diseases? [yes/no]",
    "Are you following a regular irrigation schedule? [yes/no]",
    "Are you using mulch or plastic covers? [yes/no]"
];

const vegetative_questions = [
    "How tall are the plants currently? (in meters)",
    "Are you observing yellowing of leaves? (Yes/No)",
    "Have you applied fertilizers? (Yes/No)",
    "Are you using any weed control methods? (Yes/No)",
    "Is there any unusual wilting or stunted growth? (Yes/No)"
];

const flowering_questions = [
    "Have flowers started appearing? (Yes/No)",
    "Are there enough male and female flowers? (Yes/No)",
    "Are you observing pollination issues? (Yes/No)",
    "Have you noticed fruit drop at an early stage? (Yes/No)",
    "Have you applied any growth regulators? (Yes/No)"
];

const harvesting_questions = [
    "How many days since fruit formation?",
    "Are the fruits reaching expected size and color? (Yes/No)",
    "Have you observed any cracking or rotting of fruits? (Yes/No)",
    "Are you following proper irrigation schedules? (Yes/No)"
];

const post_harvest_questions = [
    "Are you using any storage techniques? (Yes/No)",
    "Do you need guidance on packaging and transportation? (Yes/No)",
    "Are you interested in connecting with local markets? (Yes/No)",
    "Do you want tips on increasing shelf life? (Yes/No)"
];


function getSowingRecommendations(sowing) {
    let recommendations = [];

    let temp = parseInt(sowing[0]);
    if (temp >= 25 && temp <= 35) {
        recommendations.push("if 25<temp<35 then Ideal temperature for Watermelon & Muskmelon.");
    } else if (temp >= 20 && temp <= 30) {
        recommendations.push("If 20<temp<30 then Ideal temperature for Cucumber & Pumpkin.");
    } else {
        recommendations.push("if 25<temp<35 then Ideal temperature for Watermelon & Muskmelon.\n If 20<temp<30 then Ideal temperature for Cucumber & Pumpkin.\nElse Temperature may not be ideal; consider protective measures to maintain ideal temperatures: Watermelon & Muskmelon: 25-35°C. Cucumber & Pumpkin: 20-30°C.");
    }

    if (sowing[1].toLowerCase() == "hybrid") {
        recommendations.push("If using hybrid seeds, Good choice! Hybrid seeds offer better yield and disease resistance.");
    } else {
        recommendations.push("If using hybrid seeds, Good choice! Hybrid seeds offer better yield and disease resistance.\nIf using local seeds Consider using hybrid seeds for better yield and disease resistance.");
    }

    if (sowing[2].toLowerCase() == "yes") {
        recommendations.push("Good! Fungicide and biofertilizer help in healthy germination.");
    } else {
        recommendations.push("Fungicide and biofertilizer help in healthy germination\nIf no treatment with  fungicide or biofertilizers then Treat seeds with Carbendazim or Trichoderma viride for disease prevention. Use Azospirillum for nitrogen fixation.");
    }

    let spacing = sowing[3].toLowerCase();
    let spacingRecommendations = {
        "watermelon": "1.5m x 1m",
        "muskmelon": "1.5m x 1m",
        "cucumber": "60cm x 45cm",
        "pumpkin": "2m x 1m"
    };
    for (let crop in spacingRecommendations) {
        if (spacing.includes(crop)) {
            recommendations.push("Recommended spacing for " + crop.charAt(0).toUpperCase() + crop.slice(1) + ": " + spacingRecommendations[crop]);
        }
    }

    if (sowing[4].toLowerCase() == "direct") {
        recommendations.push("Suitable for Watermelon, Muskmelon, and Pumpkin.");
    } else if (sowing[4].toLowerCase() == "nursery") {
        recommendations.push("Best for Cucumber only (better for controlled growth).");
    } else {
        recommendations.push("Ensure correct method for each crop: Direct sowing (Watermelon, Muskmelon, Pumpkin), Nursery (Cucumber).");
    }

    if (sowing[5].toLowerCase() == "yes") {
        recommendations.push("Recommended 50% N, full P, and 50% K before sowing for strong root growth.");
    } else {
        recommendations.push("Recommended 50% N, full P, and 50% K before sowing for strong root growth.\nApply biofertilizers like Azospirillum to fix nitrogen and phosphate-solubilizing bacteria for phosphorus uptake.");
    }

    console.log("\nRecommendations for Sowing:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function getGerminationRecommendations(germination) {
    let recommendations = [];

    if (days <=10) {
        recommendations.push("It's too early for germination. Keep soil moist and wait.");
    } else if (days >= 11 && days <= 17) {
        recommendations.push("Germination should have started. Check for uniformity.");
    } else {
        recommendations.push(" If days<10 then it's too early for germination. Keep soil moist and wait.\n If days>10 then Germination should have started. Check for uniformity.\nIf no germination after 10th day, consider re-sowing.");
    }

    if (germination[0] == "no") {
        recommendations.push("Re-sow in gaps for uniform plant distribution.");
    } else {
        recommendations.push("If seeds have not germinated uniformly,Re-sow in gaps for uniform plant distribution.");
    }

    if (germination[1] == "yes") {
        recommendations.push("Common pests: Aphids, whiteflies, red beetles. Use neem oil or insecticides. For diseases like damping-off or downy mildew, apply Bordeaux mixture.");
    } else{
        recommendations.push("If there are signs of pest attack or diseases,\nCommon pests: Aphids, whiteflies, red beetles. Use neem oil or insecticides. For diseases like damping-off or downy mildew, apply Bordeaux mixture.");
    }

    if (germination[2] == "no") {
        recommendations.push("Keep soil moist but avoid waterlogging. Drip irrigation is best.");
    } else{
        recommendations.push("If not following a regular irrigation schedule,Keep soil moist but avoid waterlogging. Drip irrigation is best.");
    }

    if (germination[3] == "no") {
        recommendations.push("Mulching helps retain moisture and prevent weeds. Consider using it.");
    } else{
        recommendations.push("Mulching helps retain moisture and prevent weeds. Consider using it.");
    }

    recommendations.push("Apply biofertilizers like Azospirillum to fix nitrogen and phosphate-solubilizing bacteria for phosphorus uptake.");

    console.log("\nRecommendations for Germination:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function getVegetativeGrowthRecommendations() {
    let recommendations = [
        "Ideal plant height:\n- Watermelon & Muskmelon: 30-50 cm\n- Cucumber & Pumpkin: 40-70 cm.",
        "Yellowing leaves may indicate nitrogen deficiency or overwatering. Apply urea (1%) or compost.",
        "Apply balanced NPK fertilizers to support healthy growth.",
        "Use hand weeding or mulching for weed control. Avoid chemical herbicides.",
        "Wilting or stunted growth may be caused by root rot. Improve drainage and apply Trichoderma."
    ];
    recommendations.push("Side-dressing with urea and potassium after 25-30 days helps boost plant growth.");
    recommendations.push("Nitrogen Deficiency (N): Yellowing of older leaves, slow growth. Solution: Apply urea or compost tea.\nPhosphorus Deficiency (P): Dark green leaves, purple stems. Solution: Apply superphosphate.\nPotassium Deficiency (K): Yellow leaf edges, weak stems. Solution: Use potash-based fertilizers.\n");

    console.log("\nRecommendations for Vegetative Growth:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function getFloweringStageRecommendations() {
    let recommendations = [
        "Flowering time:\n- Watermelon & Muskmelon: 25-30 days.\n- Cucumber: 30-40 days.\n- Pumpkin: 35-45 days.",
        "If female flowers are low, apply Gibberellic Acid (GA3) 50 ppm to improve flowering balance.",
        "To improve pollination, introduce honeybees or use hand pollination methods.",
        "Early fruit drop could indicate calcium deficiency. Apply calcium nitrate to strengthen fruit development.",
        "For better fruit setting, use Naphthalene Acetic Acid (NAA) at 20 ppm."
    ];
    recommendations.push("Apply a high potassium (K) and phosphorus (P) fertilizer at the flowering stage.");
    recommendations.push("Reduce excess nitrogen (N), which promotes leaf growth over flowers. Increase phosphorus (P) and potassium (K) for better flowering and fruit set.");

    console.log("\nRecommendations for Flowering Stage:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function getHarvestingRecommendations() {
    let recommendations = [
        "Expected maturity time:\n- Watermelon: 80-100 days\n- Muskmelon: 75-90 days\n- Cucumber: 50-70 days\n- Pumpkin: 90-120 days.",
        "If fruits are small, increase potassium fertilizer application.",
        "To prevent cracking or rotting, reduce excess watering and avoid direct sun exposure.",
        "Reduce watering before harvest to improve shelf life."
    ];
    recommendations.push("Nitrogen (N): Too much can delay fruit ripening.\nPhosphorus (P) & Potassium (K): Improve fruit size, color, and sweetness.");
    recommendations.push("Reduce nitrogen before harvest to improve fruit shelf life and apply a final dose of potassium for sweetness.");

    console.log("\nRecommendations for Harvesting:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function getPostHarvestRecommendations() {
    let recommendations = [
        "Storage recommendations:\n- Cucumber & Muskmelon: Refrigeration at 10°C.\n- Watermelon & Pumpkin: Store in dry, cool places.",
        "Use ventilated crates during packaging and transportation to avoid damage.",
        "Consider selling through government portals or contract farming for better market access.",
        "Wax coating or cool storage can help increase shelf life and retain freshness."
    ];

    console.log("\nRecommendations for Post-Harvest:");
    //recommendations.forEach(rec => console.log(rec));

    return recommendations;
}

function displayQuestions() {
    let container = document.getElementById("questionContainer");

    // Add stage heading
    let stageHeading = document.createElement("h3");
    stageHeading.textContent = "Pre-Sowing Stage Questions";
    stageHeading.style.marginBottom = "20px";
    container.appendChild(stageHeading);

    pre_sowing_questions.forEach((question, index) => {
        let label = document.createElement("label");
        label.textContent = `Q${index + 1}: ${question}`;

        let input = document.createElement("input");
        input.type = "text";
        input.id = `answer${index}`;

        container.appendChild(label);
        container.appendChild(input);
    });
}

let final_recs = [];
let days = 0;

function submitAnswers() {
    document.getElementById("oneButton").onclick = final_display;
    let answers = [];
    let second_answers = [];
    let recommendations = [];

    pre_sowing_questions.forEach((_, ind) => {
        let answer = document.getElementById(`answer${ind}`).value;
        answers.push(answer);
    });

    console.log("User Answers:", answers);
    let initial_recommendations = [
        "Location suitability:\n- Watermelon & Muskmelon: Warm regions with dry, sunny weather (25-35°C).",
        "\n- Cucumber & Pumpkin: Moderate to warm climates (20-30°C), can tolerate some humidity.",
        "Soil recommendations:\n- Watermelon & Muskmelon: Sandy loam, well-drained, pH 6.0-7.5.\n- Cucumber & Pumpkin: Loamy or sandy loam, high in organic matter, pH 6.0-7.0.",
        "Ideal soil pH: 6.0-7.5 for all crops.\n- If acidic (low pH), apply lime.\n- If alkaline (high pH), apply gypsum or organic matter.",
        "Water requirements:\n- Watermelon & Muskmelon: Require less frequent but deep irrigation.\n- Cucumber & Pumpkin: Need frequent and moderate irrigation. Drip irrigation is best.",
        "Fertilizer recommendations:\n- Organic manure (compost, cow dung) is best for all crops.\n- Chemical fertilizers:\n  - Watermelon & Muskmelon: NPK (60:40:40 kg/ha).\n  - Cucumber & Pumpkin: NPK (80:50:50 kg/ha)."
    ];

    if (answers[7].toLowerCase() === "yes") {
        initial_recommendations.push("Soil testing helps determine the exact *NPK (Nitrogen, Phosphorus, Potassium)* levels needed.");
    }
    switch (answers[6].toLowerCase()) {
        case "watermelon":
            initial_recommendations.push("For Watermelon, N: 60-80 kg/ha, P: 40-50 kg/ha, K: 40-50 kg/ha");
            break;
        case "muskmelon":
            initial_recommendations.push("For Muskmelon, N: 50-70 kg/ha, P: 40-50 kg/ha, K: 50-60 kg/ha");
            break;
        case "cucumber":
            initial_recommendations.push("For Cucumber, N: 80-100 kg/ha, P: 50-60 kg/ha, K: 50-60 kg/ha");
            break;
        case "pumpkin":
            initial_recommendations.push("For Pumpkin, N: 80-100 kg/ha, P: 50-60 kg/ha, K: 60-80 kg/ha");
            break;
    }
    initial_recommendations.push("Increase Nitrogen (N) – Apply urea, ammonium sulfate, or compost. Increase Phosphorus (P) – Apply single superphosphate (SSP) or bone meal. Increase Potassium (K) – Use muriate of potash (MOP) or wood ash.");
    initial_recommendations.push("\n");
    console.log("\nRecommendations for Pre-Sowing:");
    initial_recommendations.forEach(rec => console.log(rec));
    let reco_contain = document.getElementById("recommendationContainer");
    reco_contain.innerHTML = "";

    initial_recommendations.forEach((recommendation, index) => {
        let reco_label = document.createElement("label");
        reco_label.textContent = `\n${recommendation}`;
        reco_contain.appendChild(reco_label);
        let sepp = document.createElement("br");
        reco_contain.appendChild(sepp);
    });

    days = parseInt(answers[0]);
    if (days >= 1 && days < 10) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Sowing Stage Questions</h3>";
        sowing_questions.forEach((question, index) => {
            let label2 = document.createElement("label");
            label2.textContent = `Q${index + 1}: ${question}`;

            let input2 = document.createElement("input");
            input2.type = "text";
            input2.id = `second_answer${index}`;

            container.appendChild(label2);
            container.appendChild(input2);

            let second_answer = document.getElementById(`second_answer${index}`).value;
            second_answers.push(String(second_answer));
        });


        console.log("User Answer:", second_answers);
        recommendations = getSowingRecommendations(second_answers);
    } else if (days >= 10 && days < 20) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Germination Stage Questions</h3>";
        germination_questions.forEach((question, index) => {
            let label = document.createElement("label");
            label.textContent = `Q${index + 1}: ${question}`;

            let input = document.createElement("input");
            input.type = "text";
            input.id = `answer${index}`;

            container.appendChild(label);
            container.appendChild(input);

            let second_answer = document.getElementById(`answer${index}`).value;
            second_answers.push(String(second_answer));
        });

        console.log("User Answers:", second_answers);

        recommendations = getGerminationRecommendations(second_answers);
    } else if (days >= 20 && days < 40) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Vegetative Stage Questions</h3>";
        vegetative_questions.forEach((question, index) => {
            let label = document.createElement("label");
            label.textContent = `Q${index + 1}: ${question}`;

            let input = document.createElement("input");
            input.type = "text";
            input.id = `answer${index}`;

            container.appendChild(label);
            container.appendChild(input);
        });
        recommendations = getVegetativeGrowthRecommendations();
    } else if (days >= 40 && days < 50) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Flowering Stage Questions</h3>";
        flowering_questions.forEach((question, index) => {
            let label = document.createElement("label");
            label.textContent = `Q${index + 1}: ${question}`;

            let input = document.createElement("input");
            input.type = "text";
            input.id = `answer${index}`;

            container.appendChild(label);
            container.appendChild(input);
        });
        recommendations = getFloweringStageRecommendations();
    } else if (days >= 50 && days < 120) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Harvesting Stage Questions</h3>";
        harvesting_questions.forEach((question, index) => {
            let label = document.createElement("label");
            label.textContent = `Q${index + 1}: ${question}`;

            let input = document.createElement("input");
            input.type = "text";
            input.id = `answer${index}`;

            container.appendChild(label);
            container.appendChild(input);
        });
        recommendations = getHarvestingRecommendations();
    } else if (days >= 120) {
        let container = document.getElementById("questionContainer");
        container.innerHTML = "<h3>Post-Harvest Stage Questions</h3>";
        post_harvest_questions.forEach((question, index) => {
            let label = document.createElement("label");
            label.textContent = `Q${index + 1}: ${question}`;

            let input = document.createElement("input");
            input.type = "text";
            input.id = `answer${index}`;

            container.appendChild(label);
            container.appendChild(input);
        });
        recommendations = getPostHarvestRecommendations();
    } else {
        container.innerHTML = "";
        answers[0] = "Check you input!!!";
    }

    //reco_contain.innerHTML = "";


    initial_recommendations = initial_recommendations.concat(recommendations);

    final_recs = initial_recommendations;
}

function final_display() {
    let reco_contain = document.getElementById("recommendationContainer");
    reco_contain.innerHTML = "";

    final_recs.forEach((recommendation, index) => {
        let reco_label = document.createElement("label");
        reco_label.textContent = `\n${recommendation}`;
        reco_contain.appendChild(reco_label);
        let sepp = document.createElement("br");
        reco_contain.appendChild(sepp);
    });
}
// Load questions when the page loads
window.onload = displayQuestions;
