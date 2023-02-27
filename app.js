import {Formula, RepCalculator} from 'repmax-calc'

function roundFloat(value, toNearest, fixed) {
    return (Math.ceil(value / toNearest) * toNearest).toFixed(fixed)
}

function gatherValues()
{
    const weightInput = document.querySelector('[data-input-weight]')
    const repsInput = document.querySelector('[data-input-reps]')
    // const rpeInput = document.querySelector('#rpe')
    const roundInput = document.querySelector('[data-input-round]')

    if (!weightInput || !repsInput || !roundInput) {
        throw new Error('Missing required input element');
    }

    const weight = parseFloat(weightInput.value.replace(',', '.'))
    const reps = parseFloat(repsInput.value.replace(',', '.'))
    const round = parseFloat(roundInput.value.replace(',', '.'))

    return {
        "weight": weight,
        "reps": reps,
        "round": round
    }
}

function doCalculations(weight, reps) {
    const calc = new RepCalculator()

    const result = {
        "average": calc.getOneRepMaxAverage(weight, reps),
        "min": calc.getOneRepMaxLow(weight, reps),
        "max": calc.getOneRepMaxHigh(weight, reps),
        "reps": []
    }

    const formula = calc.getFormula(Formula.Lombardi)
    for (const newReps of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        result.reps[newReps] = formula.calcReps(weight, reps, newReps)
    }

    return result
}

function calculateRepMax() {
    const values = gatherValues()

    const result = doCalculations(values.weight, values.reps)

    const resultEl = document.querySelector('#result')
    resultEl.innerHTML = ''

    const resultDetailsEl = document.querySelector('#resultDetails')
    resultDetailsEl.innerHTML = ''

    if (!result.average) {
        return
    }

    resultEl.innerHTML = roundFloat(result.average, values.round, 2)

    resultDetailsEl.innerHTML += 'Lowest estimate: ' + result.min.toFixed(2) + '<br>' +
        'Highest estimate: ' + result.max.toFixed(2) +
        '<br>'

    let table = '';

    table += '<div class="py-4"><table class="table">'

    table += '<tr>'
    table += '<th>Reps</th>'
    for (let rep = 1; rep < result.reps.length; rep++) {
        table += '<th>' + rep + '</th>'
    }
    table += '</tr>'

    table += '<tr>'
    table += '<th>Weight</th>'
    for (let rep = 1; rep < result.reps.length; rep++) {
        table += '<td>' + roundFloat(result.reps[rep], values.round, 1) + '</td>'
    }
    table += '</tr>'

    table += '</table></div>'

    resultDetailsEl.innerHTML += table
}

const weightInput = document.querySelector('[data-input-weight]')
const repsInput = document.querySelector('[data-input-reps]')
// const rpeInput = document.querySelector('#rpe')
const roundInput = document.querySelector('[data-input-round]')

if (!weightInput || !repsInput || !roundInput) {
    throw new Error('Missing required input element');
}

weightInput.addEventListener('keyup', calculateRepMax)
repsInput.addEventListener('keyup', calculateRepMax)
roundInput.addEventListener('change', calculateRepMax)
