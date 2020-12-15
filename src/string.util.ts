export class StringUtil {

    public static FIRST_OCCURRENCE = '';
    public static LAST_OCCURRENCE = '';

    /**
     * Get text before separator.
     * @param text - string to search in
     * @param separator - text separator
     * @param occurrence - occurrence of the separator in the text (first or last)
     */
    public static getTextBeforeSeparator(text: string, separator: string, occurrence = this.FIRST_OCCURRENCE): string {
        let position = text.indexOf(separator);

        if (occurrence === this.LAST_OCCURRENCE) {
            position = text.lastIndexOf(separator);
        }

        if (!position) {
            return '';
        }

        const length = (text.length - this.getTextAfterSeparator(text, separator).length) - 1;
        return text.substr(position, length);
    }

    /**
     * Get text after separator.
     * @param text - string to search in
     * @param separator - text separator
     * @param occurrence - occurrence of the separator in the text (first or last)
     */
    public static getTextAfterSeparator(text: string, separator: string, occurrence = this.FIRST_OCCURRENCE): string {
        let position = text.indexOf(separator);

        if (occurrence === this.LAST_OCCURRENCE) {
            position = text.lastIndexOf(separator);
        }

        if (!position) {
            return '';
        }

        return text.substr(position + 1);
    }
}
