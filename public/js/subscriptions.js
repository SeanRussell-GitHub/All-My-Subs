const getBody = ({data}) =>data; 
const subscriptionsAPI = {
    post : (sub) => axios.post('.netlify/functions/subscriptions', sub).catch(console.error).then(getBody),
    get: () => axios.get('.netlify/functions/subscriptions').catch(console.error).then(getBody),
    delete: (id) => axios.delete('.netlify/functions/subscriptions', {data: {_id: id}}).catch(console.error)
}

const getEl = (id) => document.getElementById(id)
const handleVal = (id) => {
    const val = getEl(id).value;
    getEl(id).value = '';
    return val;
}
const getResult = (subs) => subs.reduce((acc, sub) => acc + sub.value, 0);
const displayResult = (result) => getEl('subs-cost').textContent= ` $ ${result}`;

const addDeleteSpan = (liEl, id) => {
    const deleteSpan = document.createElement('button');
    deleteSpan.textContent = ' delete ';
    deleteSpan.className = "btn waves-effect waves-light";
    deleteSpan.addEventListener('click', async (event) => {
        await subscriptionsAPI.delete(id);
        buildSubsList();
    })
    liEl.append(deleteSpan);
}

const buildSubsList = async () => {
    const subs = await subscriptionsAPI.get();
    const subsUl = getEl('subs-list');
    subsUl.innerHTML = '';
    subs.forEach(sub => {
        const liEl = document.createElement('li');
        liEl.textContent = ` ${sub.name} - $${sub.value} `;
        addDeleteSpan(liEl, sub._id);
        subsUl.append(liEl);
        document.getElementById("hidden-list").style.visibility = "visible";
    })
    const result = getResult(subs);
    displayResult(result);
}
const addSub = async (event) => {
    event.preventDefault();
    const name = handleVal('sub-name');
    const value = parseInt(handleVal('sub-val'));
    await subscriptionsAPI.post({name, value});
    buildSubsList();
}



const runApp = async () => {
  getEl('sub-add').addEventListener('click', addSub);
  buildSubsList();
}

runApp();