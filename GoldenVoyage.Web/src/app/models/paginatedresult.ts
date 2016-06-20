export class PaginatedResult<T> {

    public data: Array<T>;

    public recordsTotal: number;

    public draw: number;

    public recordsFiltered: number;

}