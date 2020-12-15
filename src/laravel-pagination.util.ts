import {LaravelPaginationMeta} from './models/laravel-pagination-meta';

export class LaravelPaginationUtil {

    /**
     * Get page number.
     * @param label - label or page number
     * @param paginationMeta - pagination meta of the response
     */
    public static getPage(label: string, paginationMeta: LaravelPaginationMeta): number {
        let page = paginationMeta.current_page;

        if (label === '&laquo; Previous' && page > 1) {
            page--;
        } else if (label === 'Next &raquo;' && page < paginationMeta.last_page) {
            page++;
        } else {
            page = +label;
        }

        return page;
    }
}
