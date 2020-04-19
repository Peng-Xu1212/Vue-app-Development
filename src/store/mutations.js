export default {
    changedCity (state, city) {
        state.city = city
        localStorage.city = city
    },
    citycheckout (state, e) {
        state.location = e
        localStorage.location = e
    },
    latchange (state, lt) {
        state.lat = lt
    },
    lngchange (state, lg) {
        state.lng = lg
    },
    storeid (state, i) {
        state.id = i
    },
    addToCart (state, item) {
        let found = state.cartname.find(product => product.productId == item.productId);
        let date = state.cartname.find(product => product.productDate == item.productDate);
        if(found && date){
            found.productQuanlity++;
        }else{
            state.cartname.push(item)

        }
    },
    removeItem (state, item) {
        let index = state.cartname.indexOf(item)
        state.cartname.splice(index, 1)
    },
    totalAmount (state, amount) {
        state.totalAmount = state.totalAmount + amount
        localStorage.totalAmount = localStorage.totalAmount + amount
    },
    recountAccount (state, amount) {
        state.totalAmount = state.totalAmount - amount
        localStorage.totalAmount = localStorage.totalAmount - amount
    },
    itemplus (state, packdata) {
        let lookupid = state.cartname.find(product => product.productId == packdata.dataId && product.productDate == packdata.dataDate);
        let lookup = state.cartname.find(product => product.productId == packdata.dataId)
        if (lookupid) {
            lookupid.productQuanlity++
        }else {
            lookup.productQuanlity++
        }
    },
    itemminus (state, packdata) {
        let lookupid = state.cartname.find(product => product.productId == packdata.dataId && product.productDate == packdata.dataDate);
        let lookup = state.cartname.find(product => product.productId == packdata.dataId)
        if (lookupid) {
            lookupid.productQuanlity--
        }else {
            lookup.productQuanlity--
        }
    },
    storedate (state, d) {
        state.date = d
    },
    storecardname (state, n) {
        state.cardname = n
        localStorage.cardname = n
    },
    storeuser (state, u) {
        state.userstore = u
    }
}
