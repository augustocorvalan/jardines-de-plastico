const INTERVAL = 7500
let GENERATION = 0;

function start() {

	// if (GENERATION % 2 === 0) {
		replaceText("jardin", chooseText(JARDIN_PHRASES, GENERATION))

	//  } else if (GENERATION > 0) {
	// 	replaceText("laberinto", chooseText(LABERINTO_PHRASES, GENERATION-1))
	// }

	GENERATION++
}

function replaceText(key, newText) {
	const $text = document.getElementById(key)
	$text.innerHTML = newText;
}

function chooseText(texts, seed) {
	let chosen;

	chosen = texts[seed % texts.length]
	// if (seed % 2 === 0) {
	// 	chosen = JARDIN_PHRASES[seed % JARDIN_PHRASES.length]
	// } else {
	// 	chosen = LABERINTO_PHRASES[seed % LABERINTO_PHRASES.length]
	// }
	return chosen
}

const JARDIN_PHRASES = [
"Un jardín de Plástico para pensar",
"Un jardín de Plástico para pensar de la historia",

"Un jardín de Plástico para pensar de la historia",

"Un jardín de Plástico para olvidarse de la historia",

"Un jardín de Plástico para pensar de la historia y perderse",

"Un jardín de Plástico para pensar de las memorias",

"Un jardín de Plástico para pensar de las memorias y perderse",

"Un jardín de Plástico para perderse",

"Un jardín de Plástico para perderse y perderse",

"Un laberinto de Plástico para pensar de la posibilidad",

"Un laberinto de Plástico para pensar de la posibilidad y perderse",

"Un laberinto de Plástico para pensar de la repetición",

"Un laberinto de Plástico para pensar de la repetición y perderse",

"Un laberinto de Plástico para pensar de la imaginación",

"Un laberinto de Plástico para pensar de la paradoja",

"Un laberinto de Plástico para olvidarse de la casualidad",

"Un laberinto de Plástico para olvidarse de la contradicción",

"pero todo los laberintos tambien contienen jardines",


"Un jardín de Plástico",
"Un jardín de Plástico para soledad",

"Un jardín de Plástico para solitud",

"Un jardín de Plástico para solitud y amor",

"Un jardín de Plástico para solitud y conflicto",

"Un jardín de Plástico para solitud y esperanza",

"Un jardín de Plástico para solitud y nomadismo",

"Un jardín de Plástico para solitud y solitud",

"Un laberinto de Plástico para pensar de la absurdidad",

"Un laberinto de Plástico para pensar de la absurdidad",

"Un laberinto de Plástico para pensar de la absurdidad y perderse",

"Un laberinto de Plástico para pensar de la casualidad",

"Un laberinto de Plástico para pensar de la casualidad y perderse",

"Un laberinto de Plástico para pensar de la contradicción",

"Un laberinto de Plástico para pensar de la contradicción y perderse",

"Un laberinto de Plástico para pensar de la historia",

"Un laberinto de Plástico para pensar de la paradoja y perderse",
]

const LABERINTO_PHRASES = [
"y todos los jardines son, a su manera, laberintos tambien",
"Un Laberinto de Plástico",



"Un laberinto de Plástico para pensar de la suerte",

"Un laberinto de Plástico para pensar de la suerte y perderse",

"Un laberinto de Plástico para pensar de las memorias",

"Un laberinto de Plástico para pensar de las memorias y perderse",

"Un laberinto de Plástico para pensar de la imaginación y perderse",

"Un laberinto de Plástico para pensar de la inverosímilitud",

"Un laberinto de Plástico para pensar de la inverosímilitud y perderse",

"Un laberinto de Plástico para pensar de la oportunidad",

"Un laberinto de Plástico para pensar de la oportunidad y perderse",


"Un laberinto de Plástico para pensar del contrasentido",

"Un laberinto de Plástico para pensar del contrasentido y perderse",

"Un laberinto de Plástico para pensar del riesgo",

"Un laberinto de Plástico para pensar del riesgo y perderse",

"Un laberinto de Plástico para perderse",

"Un laberinto de Plástico para perderse y perderse",
"Un laberinto de Plástico para olvidarse de la absurdidad",

"Un laberinto de Plástico para olvidarse de la absurdidad y perderse",


"Un laberinto de Plástico para olvidarse de la casualidad y perderse",


"Un laberinto de Plástico para olvidarse de la contradicción y perderse",

"Un laberinto de Plástico para olvidarse de la historia",

"Un laberinto de Plástico para olvidarse de la historia y perderse",

"Un laberinto de Plástico para olvidarse de la imaginación",

"Un laberinto de Plástico para olvidarse de la imaginación y perderse",

"Un laberinto de Plástico para olvidarse de la inverosímilitud",

"Un laberinto de Plástico para olvidarse de la inverosímilitud y perderse",

"Un laberinto de Plástico para olvidarse de la oportunidad",

"Un laberinto de Plástico para olvidarse de la oportunidad y perderse",

"Un laberinto de Plástico para olvidarse de la paradoja",

"Un laberinto de Plástico para olvidarse de la paradoja y perderse",

"Un laberinto de Plástico para olvidarse de la posibilidad",

"Un laberinto de Plástico para olvidarse de la posibilidad y perderse",

"Un laberinto de Plástico para olvidarse de la repetición",

"Un laberinto de Plástico para olvidarse de la repetición y perderse",

"Un laberinto de Plástico para olvidarse de la suerte",

"Un laberinto de Plástico para olvidarse de la suerte y perderse",

"Un laberinto de Plástico para olvidarse de las memorias",

"Un laberinto de Plástico para olvidarse de las memorias y perderse",

"Un laberinto de Plástico para olvidarse del contrasentido",

"Un laberinto de Plástico para olvidarse del contrasentido y perderse",

"Un laberinto de Plástico para olvidarse del riesgo",

"Un laberinto de Plástico para olvidarse del riesgo y perderse",

]

// setInterval(start, INTERVAL)
window.addEventListener("click", function(event) {
	if (GENERATION === 0) {
		start()
		setInterval(start, INTERVAL)
	}
});
