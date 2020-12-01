import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should generate setStartDate action object', () =>{
      const action = setStartDate(moment(0))
      expect(action).toEqual({
          type:'SET_START_DATE',
          startDate: moment(0)
      })
})

test('should generate setEndDate action object', () => {
      const action = setEndDate(moment(0))
      expect(action).toEqual({
          type: 'SET_END_DATE',
          endDate: moment(0)
      })
})

test('should generate sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should genetate setTextFilter action object with provided value', () => {
      const action = setTextFilter('rent')
      expect(action).toEqual({
          type: 'SET_FILTER',
          text: 'rent'
      })
})

test('should genetate setTextFilter action object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_FILTER',
        text: ''
    })
})
