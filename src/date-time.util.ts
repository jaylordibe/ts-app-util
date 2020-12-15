import * as moment from 'moment';
import {Moment} from 'moment';
import * as momentTimezone from 'moment-timezone';

export class DateTimeUtil {

    public static FORMAT_TIMESTAMP = 'X';
    public static FORMAT_DATE = 'YYYY-MM-DD';
    public static FORMAT_DATETIME = 'YYYY-MM-DD hh:mm';
    public static FORMAT_DATE_READABLE = 'MMMM D, YYYY';
    public static FORMAT_DATETIME_READABLE = 'MMMM D, YYYY hh:mm';

    /**
     * Get current date string.
     * @param format - output format
     */
    public static getCurrentDateString(format = this.FORMAT_DATETIME): string {
        return moment().format(format);
    }

    /**
     * Convert date to the specified format.
     * @param date - input date to be converted
     * @param format - date format that will be used for conversion
     * If format is not specified, YYYY-MM-DD format will be used.
     */
    public static format(date: string | number | Date, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).format(format);
    }

    /**
     * Get current timestamp.
     */
    public static getCurrentTimestamp(): number {
        return Number(moment().format(this.FORMAT_TIMESTAMP));
    }

    /**
     * Convert date to timestamp.
     * @param date - date string or Date object to be converted to timestamp
     */
    public static toTimestamp(date: string | Date): number {
        return Number(this.format(date, this.FORMAT_TIMESTAMP));
    }

    /**
     * Convert date string to moment date.
     * @param date - input date to be converted
     */
    public static toMoment(date: string | number | Date | null): Moment {
        let momentDate: Moment;

        if (date === null) {
            momentDate = moment();
        } else if (typeof date === 'number') {
            momentDate = moment.unix(date);
        } else {
            momentDate = moment(date, this.FORMAT_DATE);
        }

        return momentDate;
    }

    /**
     * Check if the date is valid.
     * @param date - human readable date string to be converted to timestamp
     */
    public static isValid(date: string): boolean {
        return moment(date).isValid();
    }

    /**
     * Check if start date is before end date.
     * @param startDate - human readable start date string
     * @param endDate - human readable end date string
     */
    public static isValidDateRange(startDate: string, endDate: string): boolean {
        return moment(startDate).isBefore(moment(endDate));
    }

    /**
     * Calculate number of days in between start and end date.
     * @param startDate - human readable start date string
     * @param endDate - human readable end date string
     */
    public static calculateNumberOfDaysInRange(startDate: string, endDate: string): number {
        const momentStartDate = this.toMoment(startDate);
        const momentEndDate = this.toMoment(endDate);

        return Math.abs(momentStartDate.diff(momentEndDate, 'days')) + 1;
    }

    /**
     * Get start of day.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfDay(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).startOf('day').format(format);
    }

    /**
     * Get end of day.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfDay(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).endOf('day').format(format);
    }

    /**
     * Get start of month.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfMonth(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).startOf('month').format(format);
    }

    /**
     * Get end of month.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfMonth(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).endOf('month').format(format);
    }

    /**
     * Get start of year.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfYear(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).startOf('year').format(format);
    }

    /**
     * Get end of year.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfYear(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).endOf('year').format(format);
    }

    /**
     * Add days to the provided date.
     * @param date - moment date object
     * @param numberOfDays - number of days to be added
     * @param format - output format
     */
    public static addDays(date: string | number | Date | null, numberOfDays: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).add(numberOfDays, 'day').format(format);
    }

    /**
     * Add months to the provided date.
     * @param date - moment date object
     * @param numberOfMonths - number of months to be added
     * @param format - output format
     */
    public static addMonths(date: string | number | Date | null, numberOfMonths: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).add(numberOfMonths, 'month').format(format);
    }

    /**
     * Add years to the provided date.
     * @param date - moment date object
     * @param numberOfYears - number of years to be added
     * @param format - output format
     */
    public static addYears(date: string | number | Date | null, numberOfYears: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).add(numberOfYears, 'year').format(format);
    }

    /**
     * Subtract days to the provided date.
     * @param date - moment date object
     * @param numberOfDays - number of days to be subtracted
     * @param format - output format
     */
    public static subtractDays(date: string | number | Date | null, numberOfDays: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).subtract(numberOfDays, 'day').format(format);
    }

    /**
     * Subtract months to the provided date.
     * @param date - moment date object
     * @param numberOfMonths - number of months to be subtracted
     * @param format - output format
     */
    public static subtractMonths(date: string | number | Date | null, numberOfMonths: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).subtract(numberOfMonths, 'month').format(format);
    }

    /**
     * Subtract years to the provided date.
     * @param date - moment date object
     * @param numberOfYears - number of years to be subtracted
     * @param format - output format
     */
    public static subtractYears(date: string | number | Date | null, numberOfYears: number, format = this.FORMAT_DATETIME): string {
        return this.toMoment(date).subtract(numberOfYears, 'year').format(format);
    }

    /**
     * Find earliest date in list of dates.
     * @param dates - array of moment dates
     */
    public static findEarliestDate(dates: Moment[]): Moment {
        if (!dates || (dates && dates.constructor !== Array) || !dates.length) {
            dates[0] = moment();
        }

        let earliestDate = dates[0];
        dates.forEach(date => earliestDate = date.isValid() && date.isBefore(earliestDate) ? date : earliestDate);

        return earliestDate;
    }

    /**
     * Find latest date in list of dates.
     * @param dates - array of moment dates
     */
    public static findLatestDate(dates: Moment[]): Moment {
        if (!dates || (dates && dates.constructor !== Array) || !dates.length) {
            dates[0] = moment();
        }

        let latestDate = dates[0];
        dates.forEach(date => latestDate = date.isValid() && date.isAfter(latestDate) ? date : latestDate);

        return latestDate;
    }

    /**
     * Get current year.
     */
    public static getCurrentYear(): number {
        return moment().year();
    }

    /**
     * Get current month.
     */
    public static getCurrentMonth(): string {
        return moment().format('MMMM');
    }

    /**
     * Get timezone.
     */
    public static getTimezone(): string {
        return momentTimezone.tz.guess();
    }

    /**
     * Get list of years based on number of years from current year.
     * @param numberOfYearsFromCurrentYear - number of years to be added from the current year
     */
    public static getYears(numberOfYearsFromCurrentYear: number = 10): number[] {
        const years: number[] = [];
        const currentYear = this.getCurrentYear();

        for (let count = 0; count < numberOfYearsFromCurrentYear; count++) {
            years.push(currentYear + count);
        }

        return years;
    }

    /**
     * Get list of months.
     */
    public static getMonths(): string[] {
        return [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    }
}
