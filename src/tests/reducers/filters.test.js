import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default setup values', () => {
      const state = filtersReducer(undefined,{ type: '@@INIT'})
      expect(state).toEqual({
          text:'',
          sortBy:'date',
          startDate:moment().startOf('month'),
          endDate: moment().endOf('month')
      })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const filters = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState,filters)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const state = filtersReducer(undefined,{type:'SET_FILTER',text:'rent'})
    expect(state.text).toBe('rent')
})

test('should set start date', () => {
    const state = filtersReducer(undefined, {type:'SET_START_DATE',startDate:1000})
    expect(state.startDate).toBe(1000)
})

test('should set end date', () => {
    const state = filtersReducer(undefined, {type:'SET_END_DATE',endDate:-1000})
    expect(state.endDate).toBe(-1000)
})

