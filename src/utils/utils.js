import Url from './../url';
import api from './../api/api';
import dispatcher from './../dispatcher'
// eslint-disable-next-line
export default {
    _getFoodData : function(){
        api._callAPI(Url.FETCH_FOOD_DATA, 'GET', (data) => {
            dispatcher.dispatch({
                type: 'FOOD_DATA',
                response: data
            })
        })
    }
}
