type SimpleVueOptions<
    TData extends object,
    TComputed extends object,
    TMethods extends {
        [key in keyof TMethods]: (this: TData & TComputed & TMethods, ...args: any) => any
    }
> = {
        data(this: never): TData; 
        computed: { [key in keyof TComputed]: (this: TData, ...args: any) => TComputed[key] },
        methods: TMethods
    }


declare function SimpleVue<
    TData extends object,
    TComputed extends object,
    TMethods extends {
        [key in keyof TMethods]: (this: TData & TComputed & TMethods, ...args: any) => any
    }
>(options: SimpleVueOptions<TData, TComputed, TMethods>): any
