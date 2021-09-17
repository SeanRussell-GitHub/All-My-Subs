const subs = [];
const getEl = (id) => document.getElementById(id)
const handleVal = (id) => {
    const val = getEl(id).value;
    getEl(id).value = '';
    return val;
}
const getResult = (subs) => subs.reduce((acc, sub) => acc + sub.value, 0);
const displayResult = (result) => getEl('subs-cost').textContent= result;
const addDeleteSpan = (liEl, subIndex) => {
    const deleteSpan = document.createElement('button');
    deleteSpan.textContent = '     delete';
    deleteSpan.addEventListener('click', (event) => {
        subs.splice(subIndex, 1);
        buildSubsList(subs);
        const result = getResult(subs);
        displayResult(result);
    })
    liEl.append(deleteSpan);
}

const buildSubsList = (subs) => {
    const subsUl = getEl('subs-list');
    subsUl.innerHTML = '';
    subs.forEach((sub, i) => {
        const liEl = document.createElement('li');
        liEl.textContent = `${sub.name} - $${sub.value}`;
        addDeleteSpan(liEl, i);
        subsUl.append(liEl);
    })
}
const addSub = (event) => {
    event.preventDefault();
    const name = handleVal('sub-name');
    const value = parseInt(handleVal('sub-val'));
    subs.push({name, value});
    buildSubsList(subs);
    const result = getResult(subs);
    displayResult(result);
}

const runApp = () => {
  getEl('sub-add').addEventListener('click', addSub);
}

runApp();