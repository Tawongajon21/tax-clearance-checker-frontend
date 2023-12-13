
import moment from 'moment';

export const formatDate = (date) => {
    
    const newDate = moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss")
    return newDate;
}